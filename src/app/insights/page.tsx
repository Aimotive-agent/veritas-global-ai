"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { useLocale } from "@/context/LocaleContext";

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
  const { t } = useLocale();

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("insights.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("insights.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("insights.subtitle")}
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
                  {t("insights.readMore")} <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            {t("insights.cta.title")}
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            {t("insights.cta.subtitle")}
          </p>
          <LeadForm
            className="max-w-md mx-auto"
            submitLabel={t("insights.cta.button")}
            sendingLabel={t("insights.cta.button")}
            source="newsletter"
            interest="newsletter"
            successTitle={t("insights.cta.successTitle")}
            successBody={t("insights.cta.successBody")}
          >
            <div className="flex flex-col sm:flex-row gap-3 text-left">
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                aria-label={t("insights.cta.emailLabel")}
                className="flex-1 px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors"
              />
              <input type="text" name="name" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="text" name="company" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="text" name="message" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" value="Insights newsletter subscription" readOnly />
            </div>
          </LeadForm>
        </div>
      </section>
    </>
  );
}
