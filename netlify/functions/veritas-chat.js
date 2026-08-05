const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json().catch(() => ({}));
    const { messages } = body;

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'DeepSeek API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) ? messages.slice(-10) : [{ role: 'user', content: 'Hello' }]),
    ];

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: `AI service error: ${response.status}` }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again or contact us directly.";

    return new Response(JSON.stringify({ response: content }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in veritas-chat function:', error);
    return new Response(JSON.stringify({
      error: error.message || 'An unexpected error occurred',
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
