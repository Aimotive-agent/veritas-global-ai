import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Veritas AI",
  description: "Deep AI expertise across financial services, healthcare, manufacturing, government, energy, and retail. Industry-specific solutions that deliver measurable outcomes.",
};

const industries = [
  {
    name: "Financial Services",
    description:
      "From fraud detection to algorithmic trading, we help banks, insurers, and fintechs deploy AI that satisfies both regulators and the bottom line.",
    useCases: [
      "Real-time fraud detection & AML compliance",
      "Credit risk modeling & underwriting automation",
      "Customer intelligence & next-best-action",
      "Document intelligence for KYC & onboarding",
      "Algorithmic trading signal generation",
    ],
    highlight: "40% reduction in false positives for fraud detection at a top-10 US bank.",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "AI that accelerates drug discovery, optimizes clinical operations, and improves patient outcomes — within HIPAA-compliant architectures.",
    useCases: [
      "Clinical trial patient matching",
      "Medical imaging & diagnostics AI",
      "Revenue cycle management optimization",
      "Drug discovery & molecular modeling",
      "Provider network analytics",
    ],
    highlight: "30% faster clinical trial recruitment through AI-powered eligibility screening.",
  },
  {
    name: "Manufacturing & Industry 4.0",
    description:
      "Predictive maintenance, quality control, and supply chain optimization — AI that keeps the factory floor running.",
    useCases: [
      "Predictive maintenance & equipment health",
      "Computer vision for quality inspection",
      "Supply chain disruption prediction",
      "Digital twin simulation & optimization",
      "Energy consumption optimization",
    ],
    highlight: "$12M annual savings from predictive maintenance at a Fortune 500 manufacturer.",
  },
  {
    name: "Government & Public Sector",
    description:
      "Mission-critical AI for defense, intelligence, and civilian agencies — built for security, compliance, and auditability.",
    useCases: [
      "Intelligence analysis & threat detection",
      "Citizen service automation",
      "Regulatory compliance monitoring",
      "Infrastructure & asset management",
      "Fraud, waste & abuse detection",
    ],
    highlight: "FedRAMP-ready architectures. Veritas = truth. That matters in government.",
  },
  {
    name: "Energy & Utilities",
    description:
      "Smart grid optimization, predictive asset management, and sustainability analytics for the energy transition.",
    useCases: [
      "Grid load forecasting & optimization",
      "Renewable energy yield prediction",
      "Asset failure prediction",
      "Carbon footprint analytics",
      "Energy trading & price optimization",
    ],
    highlight: "15% improvement in renewable yield forecasting accuracy for a European utility.",
  },
  {
    name: "Retail & E-Commerce",
    description:
      "Personalization, demand forecasting, and supply chain AI that drives revenue and margin.",
    useCases: [
      "Hyper-personalization & recommendation engines",
      "Demand forecasting & inventory optimization",
      "Dynamic pricing optimization",
      "Customer lifetime value modeling",
      "Visual search & product discovery",
    ],
    highlight: "22% revenue uplift from AI-powered personalization at a major retailer.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Industries We Serve</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Deep domain expertise across the sectors where AI matters most.
            We don&apos;t just understand AI — we understand your business.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, i) => (
            <div key={ind.name} className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  0{i + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{ind.name}</h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{ind.description}</p>

                <ul className="mt-6 space-y-2">
                  {ind.useCases.map((uc) => (
                    <li key={uc} className="flex gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-8 lg:p-10">
                <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
                  Client Impact
                </div>
                <p className="text-lg text-slate-800 font-medium leading-relaxed">
                  &ldquo;{ind.highlight}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Don&apos;t see your industry?</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Our methodology adapts to any domain. Let&apos;s discuss how AI can transform your specific sector.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
