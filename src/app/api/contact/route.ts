import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.veritasglobalai.tech",
  port: 587,
  secure: false,
  requireTLS: true,
  tls: { rejectUnauthorized: false },
  connectionTimeout: 10000,
  auth: {
    user: "postmaster@veritasglobalai.tech",
    pass: "Tok7qlQoF74GfW7t3WexYTTO",
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const name = String(body.get("name") ?? "").trim();
    const company = String(body.get("company") ?? "").trim();
    const email = String(body.get("email") ?? "").trim();
    const role = String(body.get("role") ?? "");
    const interest = String(body.get("interest") ?? "");
    const message = String(body.get("message") ?? "").trim();

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "Name, company, email, and message are required." },
        { status: 400 }
      );
    }

    const roleLabel: Record<string, string> = {
      "c-level": "C-Level Executive",
      "vp": "VP / Director",
      "head-tech": "Head of Technology",
      "procurement": "Procurement Lead",
      "architect": "Enterprise Architect",
      "other": "Other",
    };

    const interestLabel: Record<string, string> = {
      "saas": "Enterprise SaaS",
      "agents": "AI Agents",
      "chatbots": "Neural Chatbots",
      "websites": "Intelligent Websites",
      "rag": "RAG Systems",
      "marketing": "AI Marketing",
      "full": "Full Platform Consultation",
    };

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #0f1a3a; border-bottom: 2px solid #c8a54a; padding-bottom: 12px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: 600; color: #555; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Company</td><td style="padding: 8px 0;">${company}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Role</td><td style="padding: 8px 0;">${(roleLabel[role] ?? role) || "—"}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Interest</td><td style="padding: 8px 0;">${(interestLabel[interest] ?? interest) || "—"}</td></tr>
        </table>
        <h3 style="color: #0f1a3a; margin-top: 24px;">Message</h3>
        <p style="background: #f8f9fa; padding: 16px; border-left: 3px solid #c8a54a; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Sent from Veritas Global AI contact form</p>
      </div>
    `;

    await transporter.sendMail({
      from: '"Veritas Global AI Website" <postmaster@veritasglobalai.tech>',
      to: "info@veritasglobal.tech",
      replyTo: email,
      subject: `New Contact: ${name} from ${company}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form email error:", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
