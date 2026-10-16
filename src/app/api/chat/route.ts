import { NextResponse } from "next/server";

/*
 * Website chat widget backend.
 *
 * ChatWidget.tsx was written for Netlify and posted to /.netlify/functions/veritas-chat, a path
 * that only exists on Netlify's runtime. The site now runs as a self-hosted `next start` behind
 * Cloudflare, so that URL returned the Next.js HTML 404 page, `response.json()` threw, and every
 * message came back as "chat.technicalError" ("I'm experiencing technical difficulties...").
 *
 * This is the same handler served from the Next.js app instead.
 * netlify/functions/veritas-chat.js is left untouched in case the site ever returns to Netlify.
 */

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are Veritas AI — the conversational assistant for Veritas Global AI, an enterprise AI infrastructure company. 

Veritas Global AI provides:
- Enterprise SaaS: Multi-tenant AI infrastructure deployed inside client VPCs
- AI Agents: Autonomous agent swarms with deterministic guardrails
- Neural Chatbots: Context-aware chatbots integrated with legacy systems
- Intelligent Websites: AI-powered web platforms with personalization
- RAG Systems: Zero-hallucination retrieval grounded in proprietary data
- AI Marketing: Autonomous campaign intelligence with brand safety guardrails

Key facts:
- Sovereign deployment model (VPC, on-premises, air-gapped)
- 99.997% uptime SLA
- SOC 2 Type II, ISO 27001, HIPAA, GDPR, FedRAMP-ready
- Cryptographic audit trail on every inference
- Never trains on client data
- Per-tenant model isolation
- Deployment: discovery (~2 weeks), pilot (4-8 weeks), production (8-16 weeks)

Be professional, concise, and helpful. When asked about pricing, say Veritas provides custom quotes based on deployment scale. Direct enterprise inquiries to the /contact page for a private consultation.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { messages } = (body ?? {}) as { messages?: ChatMessage[] };

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "DeepSeek API key not configured" },
        { status: 500, headers: corsHeaders },
      );
    }

    const apiMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) && messages.length > 0
        ? messages.slice(-10)
        : [{ role: "user" as const, content: "Hello" }]),
    ];

    const upstream = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
      signal: AbortSignal.timeout(60_000),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text().catch(() => "");
      console.error("veritas chat: upstream error", upstream.status, errorText.slice(0, 500));
      return NextResponse.json(
        { error: `AI service error: ${upstream.status}` },
        { status: 502, headers: corsHeaders },
      );
    }

    const data = (await upstream.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content =
      data.choices?.[0]?.message?.content ||
      "I'm sorry, I couldn't process your request. Please try again or contact us directly.";

    return NextResponse.json({ response: content }, { headers: corsHeaders });
  } catch (error) {
    console.error("Error in veritas chat route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500, headers: corsHeaders },
    );
  }
}
