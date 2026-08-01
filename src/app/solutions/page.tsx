import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Veritas AI",
  description: "End-to-end enterprise AI solutions: strategy, ML, generative AI, and data engineering — delivered on a fixed timeline with measurable outcomes.",
};

const solutions = [
  {
    title: "AI Strategy & Advisory",
    tagline: "Roadmap before roadmap. We find the value before we write a line of code.",
    details: [
      "AI readiness assessment & maturity benchmarking",
      "High-impact use case identification & prioritization",
      "Business case development with ROI modeling",
      "Phased execution roadmap with clear milestones",
      "AI governance framework & responsible AI policies",
      "Vendor & tool selection — platform-agnostic recommendations",
    ],
    timeframe: "2–4 weeks",
    engagement: "Fixed-price assessment starting at $50K",
  },
  {
    title: "Machine Learning Solutions",
    tagline: "Custom models that solve real business problems — built for production, not PowerPoint.",
    details: [
      "Predictive analytics: demand forecasting, churn prediction, risk scoring",
      "Fraud detection & anomaly detection systems",
      "Predictive maintenance for industrial & manufacturing",
      "Customer segmentation & personalization engines",
      "MLOps pipeline: training, deployment, monitoring, retraining",
      "Model explainability & bias auditing",
    ],
    timeframe: "6–12 weeks to production",
    engagement: "Fixed-price starting at $150K",
  },
  {
    title: "Generative AI & LLMs",
    tagline: "Secure, enterprise-grade GenAI that works with your data, your rules, your infrastructure.",
    details: [
      "Custom RAG (Retrieval-Augmented Generation) pipelines",
      "Enterprise chatbots & knowledge assistants",
      "Document intelligence: extraction, summarization, classification",
      "Fine-tuned models on proprietary data",
      "AI agent workflows for business process automation",
      "Content generation systems with brand guardrails",
    ],
    timeframe: "4–8 weeks to pilot",
    engagement: "Fixed-price starting at $100K",
  },
  {
    title: "Data Engineering & Infrastructure",
    tagline: "The foundation that makes AI possible. Clean data, modern pipelines, scalable architecture.",
    details: [
      "Data lake & warehouse architecture (cloud-native)",
      "Real-time & batch data pipelines",
      "Data quality frameworks & governance",
      "Feature stores for ML serving",
      "Data migration & modernization",
      "Compliance-ready architectures (SOC 2, HIPAA, FedRAMP)",
    ],
    timeframe: "8–16 weeks",
    engagement: "Fixed-price starting at $200K",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Solutions</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            End-to-end AI capabilities — from strategy to production. Every engagement is
            scoped with clear KPIs and a path to measurable outcomes.
          </p>
        </div>
      </section>

      {/* Solution cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{sol.title}</h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{sol.tagline}</p>

                <ul className="mt-8 space-y-3">
                  {sol.details.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-slate-400">Timeline:</span>{" "}
                    <span className="font-semibold text-slate-900">{sol.timeframe}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Investment:</span>{" "}
                    <span className="font-semibold text-slate-900">{sol.engagement}</span>
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br flex items-center justify-center ${
                  i === 0
                    ? "from-indigo-500 to-blue-600"
                    : i === 1
                    ? "from-purple-500 to-indigo-600"
                    : i === 2
                    ? "from-emerald-500 to-teal-600"
                    : "from-amber-500 to-orange-600"
                }`}>
                  <div className="text-center text-white p-8">
                    <div className="text-5xl font-bold mb-1">0{i + 1}</div>
                    <div className="text-lg font-semibold opacity-90">{sol.title.split("&")[0].trim()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Not sure where to start?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Most clients begin with a 2-week AI readiness assessment. We&apos;ll identify your
            highest-impact opportunity and scope a fixed-price pilot.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Start with an Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
