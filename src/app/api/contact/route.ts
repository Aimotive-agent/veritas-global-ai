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
  source: {
    home: "Home page",
    contact: "Contact page",
    assessment: "AI Readiness Assessment",
    private: "Private AI Deployment",
    sovereign: "Sovereign AI",
    governance: "AI Governance",
    newsletter: "Insights newsletter",
  },
  interest: {
    assessment: "AI Readiness Assessment",
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
  source: string;
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
    `Source: ${(LABELS.source[lead.source] ?? lead.source) || "—"}`,
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
      <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Source</td><td style="padding: 8px 0;">${escapeHtml((LABELS.source[lead.source] ?? lead.source) || "—")}</td></tr>
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

/**
 * The durable delivery path: the lead is written into the Obsidian vault.
 *
 * The site is deployed on the same host as the vault
 * (/mnt/boot/ai-lab/bosua_ai_brain), so an enquiry lands in Chris's inbox in
 * Obsidian whether or not an email transport is configured.
 *
 * This matters more than it looks: with no RESEND/BREVO/SMTP/TELEGRAM key
 * configured, the API threw on every submission, so EVERY enquiry the site has
 * ever received failed with "Failed to send message". The forms looked like
 * they worked and no lead ever arrived.
 */
async function viaVault(lead: Lead, emailTransport: string | null): Promise<string> {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");

  const root = process.env.VAULT_PATH?.trim() || "/mnt/boot/ai-lab/bosua_ai_brain";
  const dir = path.join(root, "00_Inbox", "Leads");

  try {
    await fs.access(root);
  } catch {
    throw new Error(`vault not available at ${root}`);
  }
  await fs.mkdir(dir, { recursive: true });

  const now = new Date();
  const day = now.toISOString().slice(0, 10);
  const file = path.join(dir, `${day}.md`);

  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(
      file,
      `# Website enquiries — ${day}\n\nEnquiries from veritasglobalai.com, newest first.\n\n`,
      "utf-8"
    );
  }

  const entry = [
    `## ${now.toISOString().slice(11, 16)} — ${lead.name}${lead.company ? `, ${lead.company}` : ""}`,
    "",
    `- **Email:** ${lead.email}`,
    `- **Role:** ${(LABELS.role[lead.role] ?? lead.role) || "—"}`,
    `- **Interest:** ${(LABELS.interest[lead.interest] ?? lead.interest) || "—"}`,
    `- **Source:** ${(LABELS.source[lead.source] ?? lead.source) || "—"}`,
    `- **Delivery:** ${emailTransport ? `email sent via ${emailTransport}` : "EMAIL FAILED — the auto-reply did not fire"}`,
    "",
    lead.message,
    "",
  ].join("\n");

  await fs.appendFile(file, entry, "utf-8");
  return `vault:${file}`;
}

async function deliver(lead: Lead): Promise<string> {
  // The email to the contact address is what triggers the Activepieces
  // auto-reply, so when an email transport is configured it MUST succeed for
  // the submission to count as delivered. Telegram is an extra notification
  // on top, never a replacement. The vault write is a durable record of every
  // enquiry and never masks a failed email.
  const emailAttempts: Array<[string, () => Promise<string>]> = [];
  if (process.env.RESEND_API_KEY) emailAttempts.push(["resend", () => viaResend(lead)]);
  if (process.env.BREVO_API_KEY) emailAttempts.push(["brevo", () => viaBrevo(lead)]);
  if (process.env.SMTP_PASS) emailAttempts.push(["smtp", () => viaSmtp(lead)]);

  const errors: string[] = [];
  let emailTransport: string | null = null;
  for (const [name, attempt] of emailAttempts) {
    try {
      await attempt();
      emailTransport = name;
      break;
    } catch (error) {
      errors.push(`${name}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  if (emailAttempts.length && !emailTransport) {
    throw new Error(`email delivery failed: ${errors.join(" | ")}`);
  }

  let telegram = false;
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    try {
      await viaTelegram(lead);
      telegram = true;
    } catch (error) {
      console.warn("telegram notification failed:", error);
    }
  }

  let vaulted = false;
  try {
    await viaVault(lead, emailTransport);
    vaulted = true;
  } catch (error) {
    console.warn("vault record failed:", error);
  }

  if (!emailTransport && !vaulted) {
    throw new Error(errors.join(" | ") || "no delivery path succeeded");
  }
  return [emailTransport, telegram && "telegram", vaulted && "vault"].filter(Boolean).join("+");
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
      source: String(body.get("source") ?? "").trim(),
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
