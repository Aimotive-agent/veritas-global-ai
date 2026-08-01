import Link from "next/link";

const stats = [
  { value: "4–8 weeks", label: "Time to first production deployment" },
  { value: "Fixed-price", label: "Transparent, outcome-based engagements" },
  { value: "Platform-agnostic", label: "No vendor lock-in. Your stack, your choice." },
];

const offerings = [
  {
    title: "AI Strategy & Advisory",
    description:
      "Roadmap your AI transformation with confidence. We assess readiness, identify high-impact use cases, and build a phased execution plan aligned to business goals.",
    href: "/solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Custom ML models for fraud detection, predictive maintenance, demand forecasting, and more — deployed at scale with MLOps best practices.",
    href: "/solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Generative AI & LLMs",
    description:
      "Unlock productivity with secure, enterprise-grade GenAI. Custom RAG pipelines, fine-tuned models, AI agents, and intelligent document processing.",
    href: "/solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Data Engineering & Infrastructure",
    description:
      "Modern data platforms that make AI possible. Data lakes, real-time pipelines, governance frameworks, and cloud-native architectures.",
    href: "/solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
];

const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing & Industry 4.0",
  "Government & Public Sector",
  "Energy & Utilities",
  "Retail & E-Commerce",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Enterprise AI that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                delivers real outcomes
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Strategy to scale, built for your industry, on a fixed timeline.
              Veritas AI partners with mid-market and enterprise organizations to design,
              build, and scale AI solutions grounded in transparency, rigor, and measurable ROI.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
              >
                Get Your Free AI Readiness Assessment
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-600 text-slate-200 font-semibold text-base hover:border-slate-400 hover:text-white transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              End-to-end AI capabilities — from strategy to production.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Deep domain expertise across the sectors where AI matters most.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry}
                href="/industries"
                className="flex items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all text-center"
              >
                {industry}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Veritas */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Why Veritas?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                The AI consulting landscape is crowded with hype. Veritas stands apart through
                an unwavering commitment to rigor, transparency, and outcomes — not just
                proof-of-concepts that gather dust.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { title: "Truth-first methodology", desc: "Every engagement begins with data audit and feasibility — never a sales pitch." },
                  { title: "Enterprise operational experience", desc: "Our team has deployed AI inside Fortune 100 companies and government agencies." },
                  { title: "Vendor-neutral architecture", desc: "We recommend what works for your stack, not our partnerships." },
                  { title: "Measurable ROI from day one", desc: "Every project scoped with clear KPIs and a path to production." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-slate-900">{item.title}</span>
                      <span className="text-slate-500"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/why-veritas"
                className="inline-flex items-center mt-8 text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Learn more about our approach <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-2">V</div>
                  <div className="text-xl font-semibold">Veritas = Truth</div>
                  <p className="mt-2 text-indigo-200 text-sm max-w-xs mx-auto">
                    Our name reflects our core belief: AI decisions must be auditable,
                    explainable, and grounded in reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to build AI that matters?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Let&apos;s discuss your AI challenges and map a path to measurable impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
