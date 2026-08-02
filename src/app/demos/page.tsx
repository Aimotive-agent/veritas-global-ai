import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Demos — Veritas Global AI",
  description:
    "Live demonstrations of Veritas Global AI products — including the AI Wise Health Companion, an AI-powered medical assistant. Explore the demos.",
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
    tag: "Live Demo",
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
                  </div>

                  <div className="shrink-0 lg:max-w-xs w-full">
                    <div className="bg-navy-deep rounded-sm p-6 text-paper">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">ai-wise-health</span>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-400">AI Doctor</div>
                        <div className="text-sm leading-relaxed text-gray-200">
                          &ldquo;What does my latest blood panel suggest?&rdquo;
                        </div>
                        <div className="text-sm leading-relaxed text-paper bg-white/5 border border-white/10 rounded-sm p-3">
                          Your panel is largely within normal ranges. I&apos;d note your LDL slightly above
                          target — worth a conversation with your provider.
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">24/7</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">Availability</div>
                        </div>
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">+12</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">Health Features</div>
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
