import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Veritas — Veritas Global AI",
  description: "Veritas means truth. We deliver AI differently — transparent pricing, fixed timelines, vendor-neutral architecture, and measurable outcomes from day one.",
};

const pillars = [
  {
    number: "01",
    title: "Truth-First Methodology",
    description:
      "Every engagement begins with a data audit and feasibility assessment — never a sales pitch. If AI isn't the right answer, we'll tell you. If it is, we'll prove it with a working prototype before you commit to scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fixed-Price, Outcome-Based Engagements",
    description:
      "No blank checks. No runaway budgets. Every engagement is scoped with clear deliverables, a fixed price, and success KPIs defined upfront. We win when you win — that's why we tie our compensation to measurable outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Open Architecture, Anti-Lock-In",
    description:
      "Platform-agnostic. Model-agnostic. Cloud-agnostic. We architect solutions that run on your stack using the best tools for the job — not the tools we get the biggest kickback from. Your models, your data, your infrastructure, always portable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mid-Market Focus, Enterprise Rigor",
    description:
      "The $100M–$1B revenue companies are underserved by AI consultancies. They're too small for Palantir-scale deals, too complex for off-the-shelf SaaS. We bring enterprise-grade methodology with engagement sizes that make sense: $100K–$1M, 4–8 weeks to value.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Bundled Services + Software",
    description:
      "Most firms sell either strategy or implementation. We do both — and we build the software to make it stick. From AI roadmap to MLOps pipeline to custom applications, one partner, one accountability chain, one outcome.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const comparison = [
  { dimension: "Engagement model", veritas: "Fixed-price, outcome-based", palantir: "Multi-year, $10M+ minimums", c3ai: "Platform subscription + services", scaleai: "Per-task / per-data-unit" },
  { dimension: "Time to value", veritas: "4–8 weeks", palantir: "6–18 months", c3ai: "3–9 months", scaleai: "Depends on data volume" },
  { dimension: "Target market", veritas: "$100M–$1B mid-market + enterprise", palantir: "Fortune 500 & government", c3ai: "Fortune 500 energy & industrial", scaleai: "AI labs & defense" },
  { dimension: "Architecture", veritas: "Open, vendor-neutral, portable", palantir: "Proprietary platform (Foundry/Gotham)", c3ai: "Proprietary platform (C3 AI Suite)", scaleai: "Proprietary data platform" },
  { dimension: "Pricing transparency", veritas: "Published ranges, fixed quotes", palantir: "Opaque, negotiated", c3ai: "Opaque, subscription-based", scaleai: "Per-unit, variable" },
];

export default function WhyVeritasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Why Veritas</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            The AI consulting market is crowded with hype and lock-in. We built Veritas to be different —
            truth-first, transparent, and relentlessly focused on outcomes.
          </p>
        </div>
      </section>

      {/* The name */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8">
              V
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Veritas = Truth
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our name isn&apos;t decoration — it&apos;s our operating principle. In an industry where
              vendors overpromise and underdeliver, where &ldquo;AI washing&rdquo; is rampant and
              black-box models make decisions nobody can explain, Veritas stands for something
              different: AI that is auditable, explainable, and grounded in reality.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We believe enterprise AI must earn trust — through transparent methodology,
              measurable outcomes, and architectures you can inspect. Not through glossy
              decks and aspirational roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* 5 pillars */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Five Ways We&apos;re Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="text-sm font-bold text-indigo-400 mb-3">{pillar.number}</div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How We Compare
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Veritas fills a gap the big players left open.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-500">Dimension</th>
                  <th className="text-left py-4 px-4 font-semibold text-indigo-600 bg-indigo-50 rounded-t-lg">Veritas Global AI</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">Palantir</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">C3.ai</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">Scale AI</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.dimension} className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">{row.dimension}</td>
                    <td className="py-4 px-4 text-slate-900 bg-indigo-50/50 font-medium">{row.veritas}</td>
                    <td className="py-4 px-4 text-slate-600">{row.palantir}</td>
                    <td className="py-4 px-4 text-slate-600">{row.c3ai}</td>
                    <td className="py-4 px-4 text-slate-600">{row.scaleai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Experience the Veritas difference</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Schedule a 30-minute discovery call. We&apos;ll tell you honestly whether AI is the
            right move for your challenge — and if it is, what it should cost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}
