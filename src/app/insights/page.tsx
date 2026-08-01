import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Veritas AI",
  description: "Thought leadership on enterprise AI — strategy, implementation, governance, and industry analysis from the Veritas AI team.",
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
    summary: "Time-and-materials billing incentivizes the wrong behaviors. Fixed-price, outcome-based engagements align incentives and de-risk the buyer. Here's our model.",
    category: "Industry",
    date: "August 2026",
    slug: "/insights/fixed-price-ai",
  },
  {
    title: "Insurance AI in 2026: Claims, Underwriting, and the $7T Opportunity",
    summary: "The global insurance industry is ripe for AI transformation. From automated claims processing to AI-powered underwriting — where the biggest wins are hiding.",
    category: "Industry",
    date: "August 2026",
    slug: "#",
  },
  {
    title: "Why 'Truth-First' AI Matters: Governance, Explainability, and Enterprise Trust",
    summary: "As AI regulation tightens globally, enterprises need more than accurate models — they need auditable, explainable ones. How Veritas builds trust into every engagement.",
    category: "Governance",
    date: "August 2026",
    slug: "/insights/truth-first-ai-governance",
  },
  {
    title: "Platform-Agnostic AI Architecture: Avoiding Vendor Lock-In in the LLM Era",
    summary: "The lesson of cloud computing applies to AI: don't bet on a single vendor. How to build multi-model, portable AI architectures that survive platform shifts.",
    category: "Technical",
    date: "August 2026",
    slug: "#",
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "bg-blue-100 text-blue-700",
  Industry: "bg-emerald-100 text-emerald-700",
  Governance: "bg-purple-100 text-purple-700",
  Technical: "bg-amber-100 text-amber-700",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Insights</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Thought leadership on enterprise AI — strategy, implementation, governance,
            and industry analysis from the Veritas AI team.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.slug}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || "bg-slate-100 text-slate-600"}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">{article.summary}</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  Read more <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500">
              More articles coming soon. Subscribe to stay updated.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Want Veritas AI insights in your inbox?</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            We publish regular analysis on enterprise AI strategy, governance, and
            industry transformation. No spam, just signal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Subscribe for Updates
          </Link>
        </div>
      </section>
    </>
  );
}
