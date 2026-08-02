import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Demos — Veritas Global AI",
  description:
    "Live demonstrations of Veritas Global AI products — including the AI Wise Health Companion, the AI Horizon Ecosystem, MindVault, and AI Vector Base. Explore the demos.",
};

const demos = [
  {
    title: "AI Wise Health Companion",
    category: "Neural Chatbot · AI Assistant",
    description:
      "A full AI-powered medical companion: personalized health management, medication tracking, case management, and document analysis — all through an intelligent neural chatbot grounded in medical knowledge.",
    features: [
      "Neural AI doctor for second opinions",
      "Health dashboard, tasks & medications",
      "Medical case management",
      "Document & image analysis",
    ],
    href: "https://ai-wise-health-companion.netlify.app",
    repo: "https://github.com/Aimotive-agent/ai-wise-health-companion",
    tag: "Live Demo",
    terminal: "ai-wise-health",
    q: "What does my latest blood panel suggest?",
    a: "Your panel is largely within normal ranges. I\u2019d note your LDL slightly above target \u2014 worth a conversation with your provider.",
    metric1: "24/7",
    metric1Label: "Availability",
    metric2: "+12",
    metric2Label: "Health Features",
  },
  {
    title: "AI Horizon Ecosystem",
    category: "AI Platform Ecosystem",
    description:
      "AI Production Pro's ecosystem of AI-powered second opinion platforms — spanning healthcare, veterinary care, legal, and financial expertise, with twelve more professional sectors in the pipeline.",
    features: [
      "Live AI consultation platforms",
      "Healthcare, legal & financial AI",
      "Veterinary & goal-coaching AI",
      "12+ coming-soon sectors",
    ],
    href: "https://ais2nd-opinion.netlify.app",
    repo: "https://github.com/Aimotive-agent/ais2nd-opinion-main",
    tag: "Live Demo",
    terminal: "ai-horizon",
    q: "Which second-opinion platforms are live?",
    a: "Four are live today \u2014 healthcare, veterinary, legal and financial \u2014 with 12+ more professional sectors coming.",
    metric1: "4",
    metric1Label: "Live Platforms",
    metric2: "12+",
    metric2Label: "Coming Soon",
  },
  {
    title: "MindVault",
    category: "Neural Knowledge Platform",
    description:
      "A personal digital brain that travels with you — AI-powered knowledge management with secure, encrypted storage for notes, research, and ideas, available anywhere.",
    features: [
      "AI-powered knowledge management",
      "Secure encrypted storage",
      "Biometric authentication",
      "Synced anywhere, on any device",
    ],
    href: "https://mindvault-digital-nexus.netlify.app",
    repo: "https://github.com/Aimotive-agent/mindvault-digital-nexus",
    tag: "Live Demo",
    terminal: "mindvault",
    q: "Never lose your knowledge again?",
    a: "Exactly. MindVault combines advanced AI with secure storage \u2014 your personal digital brain, available anywhere.",
    metric1: "AI",
    metric1Label: "Powered",
    metric2: "24/7",
    metric2Label: "Synced",
  },
  {
    title: "AI Vector Base",
    category: "AI Vector Database",
    description:
      "A real vector knowledge base — upload documents and ask questions through an AI assistant that searches and answers across your stored content. Built on React, Supabase, and DeepSeek.",
    features: [
      "Document upload & vectorization",
      "Semantic search across chunks",
      "DeepSeek-powered Q&A chat",
      "Vector base management",
    ],
    href: "https://ai-vector-base.netlify.app",
    repo: "https://github.com/Aimotive-agent/vector-garden-ai",
    tag: "Live Demo",
    terminal: "ai-vector-base",
    q: "What's in my knowledge base?",
    a: "Ask about any uploaded document — the assistant retrieves the most relevant chunks and answers from your stored content.",
    metric1: "100%",
    metric1Label: "DeepSeek AI",
    metric2: "24/7",
    metric2Label: "Vector Search",
  },
  {
    title: "AI Pawsitive Care",
    category: "Neural Chatbot · Veterinary AI",
    description:
      "An AI-powered veterinary assistant platform for pet health management — medication tracking, appointment scheduling, health records, and AI-driven veterinary chat. Built on React and DeepSeek.",
    features: [
      "AI veterinary chat assistant",
      "Pet health & medication tracking",
      "Photo library & document analysis",
      "Emergency vet finder",
    ],
    href: "https://ai-pawsitive-care.netlify.app",
    repo: "https://github.com/Aimotive-agent/ai-pawsitive-care",
    tag: "Live Demo",
    terminal: "ai-pawsitive-care",
    q: "Is my dog's lethargy something to worry about?",
    a: "Lethargy can range from mild to serious. I'll help assess urgency — but always consult your real veterinarian for medical decisions.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "24/7",
    metric2Label: "Pet Care",
  },
  {
    title: "Smart Case AI (AILA Lawyers)",
    category: "AI Legal Platform",
    description:
      "An AI-powered legal assistant platform — AILA Lawyers provides intelligent case management, legal research tools, and an AI assistant for legal professionals. Built on React.",
    features: [
      "AI legal case management",
      "Document & case tracking",
      "Legal professional dashboard",
      "Multi-platform support",
    ],
    href: "https://smart-case-ai.netlify.app",
    repo: "https://github.com/Aimotive-agent/smart-case-ai",
    tag: "Live Demo",
    terminal: "smart-case-ai",
    q: "How does AILA assist with legal work?",
    a: "AILA provides structured case management, legal research assistance, and document intelligence — built for the modern legal professional.",
    metric1: "24/7",
    metric1Label: "Availability",
    metric2: "AI",
    metric2Label: "Powered",
  },
];

export default function DemosPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Live Demonstrations</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              See the Intelligence, Working.
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Working products, deployed and running. Explore live demonstrations of the platforms
              Veritas Global AI builds — from neural chatbots to autonomous agent systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="grid md:grid-cols-1 gap-6">
            {demos.map((demo) => (
              <article key={demo.title} className="card p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] bg-navy text-paper">
                        {demo.tag}
                      </span>
                      <span className="text-xs text-muted">{demo.category}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
                      {demo.title}
                    </h2>
                    <p className="text-slate text-lg leading-relaxed mb-6">{demo.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {demo.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate">
                          <svg width="16" height="16" fill="none" stroke="#B08D57" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={demo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                      >
                        Launch the Demo
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                      {demo.repo && (
                        <Link
                          href={demo.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                        >
                          View Source
                          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.44v-1.72c-2.52.55-3.05-1.09-3.05-1.09-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.38 2.12.98 2.64.75.08-.59.32-.98.57-1.21-1.99-.23-4.09-1-4.09-4.42 0-.98.35-1.78.92-2.4-.09-.23-.4-1.15.09-2.39 0 0 .75-.24 2.45.92a8.53 8.53 0 014.46 0c1.7-1.16 2.45-.92 2.45-.92.49 1.24.18 2.16.09 2.39.57.62.92 1.42.92 2.4 0 3.43-2.1 4.18-4.1 4.4.32.28.61.83.61 1.67v2.48c0 .24.17.52.62.44A9 9 0 0012 3z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 lg:max-w-xs w-full">
                    <div className="bg-navy-deep rounded-sm p-6 text-paper">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">{demo.terminal}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-400">AI Assistant</div>
                        <div className="text-sm leading-relaxed text-gray-200">
                          &ldquo;{demo.q}&rdquo;
                        </div>
                        <div className="text-sm leading-relaxed text-paper bg-white/5 border border-white/10 rounded-sm p-3">
                          {demo.a}
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">{demo.metric1}</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{demo.metric1Label}</div>
                        </div>
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">{demo.metric2}</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{demo.metric2Label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <div className="section-rule mx-auto mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">More to come</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              A growing portfolio of working products
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              New demonstrations are deployed continuously. Each one is a real, running product — not
              a mockup.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Want a product like this for your organization?
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            Every Veritas engagement begins with a confidential architecture consultation.
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            Request Private Consultation
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
