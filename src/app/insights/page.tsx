import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Insights — Veritas Global AI",
  description: "Analysis on enterprise AI — strategy, governance, architecture, and industry transformation from the Veritas Global AI team.",
};

const articles = [
  {
    title: "The Mid-Market AI Gap: Why $100M–$1B Companies Are Underserved",
    summary: "Palantir targets the Fortune 100. SaaS AI tools target SMBs. The mid-market — where real AI ROI lives — is wide open. Here's how to seize it.",
    category: "Strategy",
    date: "August 2026",
    slug: "/insights/mid-market-ai-gap",
  },
  {
    title: "Fixed-Price AI: Why Outcome-Based Pricing Is the Future of Enterprise Consulting",
    summary: "Time-and-materials billing incentivizes the wrong behaviors. Fixed-price, outcome-based engagements align incentives and de-risk the buyer.",
    category: "Industry",
    date: "August 2026",
    slug: "/insights/fixed-price-ai",
  },
  {
    title: "Insurance AI in 2026: Claims, Underwriting, and the $7T Opportunity",
    summary: "The global insurance industry is ripe for AI transformation. From automated claims processing to AI-powered underwriting — where the biggest wins are hiding.",
    category: "Industry",
    date: "August 2026",
    slug: "/insights/insurance-ai-2026",
  },
  {
    title: "Why 'Truth-First' AI Matters: Governance, Explainability, and Enterprise Trust",
    summary: "As AI regulation tightens globally, enterprises need more than accurate models — they need auditable, explainable ones.",
    category: "Governance",
    date: "August 2026",
    slug: "/insights/truth-first-ai-governance",
  },
  {
    title: "Platform-Agnostic AI Architecture: Avoiding Vendor Lock-In in the LLM Era",
    summary: "The lesson of cloud computing applies to AI: don't bet on a single vendor. How to build multi-model, portable AI architectures that survive platform shifts.",
    category: "Technical",
    date: "August 2026",
    slug: "/insights/platform-agnostic-ai-architecture",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Insights</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Thought Leadership on Enterprise AI
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Analysis on enterprise AI — strategy, governance, architecture, and industry
              transformation from the Veritas Global AI team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.slug}
                className="group card p-7 border-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{article.category}</span>
                  <span className="text-xs text-muted">{article.date}</span>
                </div>
                <h2 className="font-serif font-semibold text-lg text-ink group-hover:text-navy transition-colors mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-slate leading-relaxed">{article.summary}</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-navy group-hover:underline">
                  Read more <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Want Veritas insights in your inbox?
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            We publish regular analysis on enterprise AI strategy, governance, and industry
            transformation. No spam, just signal.
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            Get in Touch
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
