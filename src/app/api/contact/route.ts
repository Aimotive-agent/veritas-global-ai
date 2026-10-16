import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { setDefaultResultOrder } from "node:dns";

// Prefer IPv4: some hosts here resolve AAAA-only and have no global IPv6 route.
setDefaultResultOrder("ipv4first");

/*
 * Contact + "request a private briefing" submissions (one route serves every form on the site).
 *
 * Delivery is a chain, first configured transport wins:
 *   1. RESEND_API_KEY   -> Resend HTTPS API (works from any network)
 *   2. BREVO_API_KEY    -> Brevo HTTPS API
 *   3. SMTP_PASS        -> Google Workspace SMTP (smtp.gmail.com; needs an App Password)
 *   4. TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID -> the lead arrives in Telegram instantly
 *
 * The site runs behind a home connection where outbound SMTP is unreliable and the Workspace
 * account cannot create App Passwords, so HTTPS transports are first-class here.
 */

const TO = process.env.CONTACT_TO ?? "info@veritasglobalai.tech";
const FROM = process.env.CONTACT_FROM ?? process.env.SMTP_USER ?? "info@veritasglobalai.tech";

const LABELS: Record<string, Record<string, string>> = {
  role: {
    "c-level": "C-Level Executive",
    vp: "VP / Director",
    "head-tech": "Head of Technology",
    procurement: "Procurement Lead",
    architect: "Enterprise Architect",
    other: "Other",
  },
  interest: {
    saas: "Enterprise SaaS",
    agents: "AI Agents",
    chatbots: "Neural Chatbots",
    websites: "Intelligent Websites",
    rag: "RAG Systems",
    marketing: "AI Marketing",
    full: "Full Platform Consultation",
  },
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

interface Lead {
  name: string;
  company: string;
  email: string;
  role: string;
  interest: string;
  message: string;
}

const summary = (lead: Lead) =>
  [
    "New website enquiry",
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Email: ${lead.email}`,
    `Role: ${(LABELS.role[lead.role] ?? lead.role) || "—"}`,
    `Interest: ${(LABELS.interest[lead.interest] ?? lead.interest) || "—"}`,
    "",
    lead.message,
  ].join("\n");

const htmlBody = (lead: Lead) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
    <h2 style="color: #0f1a3a; border-bottom: 2px solid #c8a54a; padding-bottom: 12px;">New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555; width: 120px;">Name</td><td style="padding: 8px 0;">${escapeHtml(lead.name)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Company</td><td style="padding: 8px 0;">${escapeHtml(lead.company)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td><td style="padding: 8px 0;">${escapeHtml(lead.email)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Role</td><td style="padding: 8px 0;">${escapeHtml((LABELS.role[lead.role] ?? lead.role) || "—")}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Interest</td><td style="padding: 8px 0;">${escapeHtml((LABELS.interest[lead.interest] ?? lead.interest) || "—")}</td></tr>
    </table>
    <h3 style="color: #0f1a3a; margin-top: 24px;">Message</h3>
    <p style="background: #f8f9fa; padding: 16px; border-left: 3px solid #c8a54a; white-space: pre-wrap;">${escapeHtml(lead.message)}</p>
    <p style="color: #999; font-size: 12px; margin-top: 32px;">Sent from the Veritas Global AI website</p>
  </div>
`;

async function viaResend(lead: Lead): Promise<string> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Veritas Global AI Website <${FROM}>`,
      to: [TO],
      reply_to: lead.email,
      subject: `New Contact: ${lead.name} from ${lead.company}`,
      html: htmlBody(lead),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Resend ${response.status}: ${(await response.text()).slice(0, 200)}`);
  return "resend";
}

async function viaBrevo(lead: Lead): Promise<string> {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": process.env.BREVO_API_KEY ?? "", "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Veritas Global AI Website", email: FROM },
      to: [{ email: TO }],
      replyTo: { email: lead.email },
      subject: `New Contact: ${lead.name} from ${lead.company}`,
      htmlContent: htmlBody(lead),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Brevo ${response.status}: ${(await response.text()).slice(0, 200)}`);
  return "brevo";
}

async function viaSmtp(lead: Lead): Promise<string> {
  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.SMTP_USER ?? "", pass: process.env.SMTP_PASS ?? "" },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
  await transporter.sendMail({
    from: `"Veritas Global AI Website" <${FROM}>`,
    to: TO,
    replyTo: lead.email,
    subject: `New Contact: ${lead.name} from ${lead.company}`,
    html: htmlBody(lead),
  });
  return "smtp";
}

async function viaTelegram(lead: Lead): Promise<string> {
  const token = process.env.TELEGRAM_BOT_TOKEN ?? "";
  const chat = process.env.TELEGRAM_CHAT_ID ?? "";
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat, text: summary(lead), disable_web_page_preview: true }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Telegram ${response.status}: ${(await response.text()).slice(0, 200)}`);
  return "telegram";
}

async function deliver(lead: Lead): Promise<string> {
  const attempts: Array<[string, () => Promise<string>]> = [];
  if (process.env.RESEND_API_KEY) attempts.push(["resend", () => viaResend(lead)]);
  if (process.env.BREVO_API_KEY) attempts.push(["brevo", () => viaBrevo(lead)]);
  if (process.env.SMTP_PASS) attempts.push(["smtp", () => viaSmtp(lead)]);
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) attempts.push(["telegram", () => viaTelegram(lead)]);

  if (!attempts.length) {
    throw new Error("No delivery transport configured (RESEND_API_KEY, BREVO_API_KEY, SMTP_PASS or TELEGRAM_BOT_TOKEN)");
  }

  const errors: string[] = [];
  for (const [name, attempt] of attempts) {
    try {
      return await attempt();
    } catch (error) {
      errors.push(`${name}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  throw new Error(errors.join(" | "));
}

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const lead: Lead = {
      name: String(body.get("name") ?? "").trim(),
      company: String(body.get("company") ?? "").trim(),
      email: String(body.get("email") ?? "").trim(),
      role: String(body.get("role") ?? ""),
      interest: String(body.get("interest") ?? ""),
      message: String(body.get("message") ?? "").trim(),
    };

    if (!lead.name || !lead.company || !lead.email || !lead.message) {
      return NextResponse.json(
        { error: "Name, company, email, and message are required." },
        { status: 400 }
      );
    }

    const transport = await deliver(lead);
    console.log(`Contact form delivered via ${transport}`);

    return NextResponse.json({ success: true, transport });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("Contact form delivery error:", detail);

    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
