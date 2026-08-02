import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries — Veritas Global AI",
  description: "Deep AI expertise across financial services, healthcare, legal & compliance, logistics, energy, and telecommunications. Industry-specific solutions that deliver measurable outcomes.",
};

const industries: {
  name: string;
  description: string;
  useCases: string[];
  highlight: string;
}[] = [
  {
    name: "Financial Services",
    description:
      "Real-time market intelligence, compliance automation, and fraud detection with full audit traceability — built to satisfy both regulators and the bottom line.",
    useCases: [
      "Real-time fraud detection & AML compliance",
      "Credit risk modeling & underwriting automation",
      "Customer intelligence & next-best-action",
      "Document intelligence for KYC & onboarding",
      "Algorithmic trading signal generation",
    ],
    highlight: "12× faster compliance report generation and $340M in operational cost savings across fraud detection, risk modeling, and automated KYC workflows.",
  },
  {
    name: "Healthcare",
    description:
      "HIPAA-compliant clinical decision support, literature synthesis, and patient data de-identification at scale — within the most regulated environments on earth.",
    useCases: [
      "Clinical decision support at the point of care",
      "Literature synthesis & evidence retrieval",
      "Patient data de-identification at scale",
      "EHR-integrated context-aware chatbots",
      "Multi-hospital vector vaults with real-time updates",
    ],
    highlight: "72% reduction in clinical documentation time through context-aware chatbots, and 3.2M records indexed in a HIPAA-compliant vector vault.",
  },
  {
    name: "Legal & Compliance",
    description:
      "Contract intelligence, regulatory monitoring, and e-discovery with citation-verified outputs — every assertion traceable to source.",
    useCases: [
      "Contract intelligence & obligation extraction",
      "Regulatory monitoring across jurisdictions",
      "E-discovery with citation-verified outputs",
      "Autonomous clause and risk anomaly detection",
      "Cryptographic chain-of-custody audit records",
    ],
    highlight: "14× faster contract review cycles via autonomous agents, with 100% of generated clauses carrying verifiable source citations.",
  },
  {
    name: "Logistics",
    description:
      "Supply chain intelligence, real-time rerouting, and predictive asset management — sub-second anomaly detection across distributed networks.",
    useCases: [
      "Forecast-to-execution cycle automation",
      "Real-time supply-chain rerouting agents",
      "Predictive asset management",
      "IoT data fusion with sub-second anomaly detection",
      "Inventory optimization across nodes",
    ],
    highlight: "18-hour → 4-hour forecast-to-execution cycle times via autonomous supply-chain agents with real-time rerouting.",
  },
  {
    name: "Energy",
    description:
      "Smart grid optimization, predictive maintenance, and load balancing — AI that keeps the grid running with human-in-the-loop oversight.",
    useCases: [
      "Grid load forecasting & optimization",
      "Predictive maintenance across 50,000+ IoT endpoints",
      "Autonomous grid-balancing agents",
      "Renewable energy yield prediction",
      "Asset failure prediction",
    ],
    highlight: "23% uptime gain in grid asset availability and zero incidents across 24 months of autonomous grid-balancing agent deployment.",
  },
  {
    name: "Telecommunications",
    description:
      "Network intelligence, customer experience automation, and predictive infrastructure management for mission-critical carrier operations.",
    useCases: [
      "Network performance & anomaly intelligence",
      "Customer experience automation at scale",
      "Predictive infrastructure maintenance",
      "Churn prediction & retention modeling",
      "Jurisdiction-pinned data residency",
    ],
    highlight: "Deployment-flexible AI on carrier-grade infrastructure — sovereign, hybrid, or air-gapped, with cryptographic audit trails throughout.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Industry Impact</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Transforming the Regulated Enterprise
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              From global financial institutions to national healthcare systems — Veritas Global AI
              powers mission-critical intelligence where accuracy is non-negotiable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto space-y-16">
          {industries.map((ind, i) => (
            <Reveal key={ind.name}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-paper-2">
                      <span className="font-serif text-xl font-semibold text-navy">0{i + 1}</span>
                    </div>
                    <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink pt-2">{ind.name}</h2>
                  </div>
                  <p className="text-slate leading-relaxed mb-6 text-[15px]">{ind.description}</p>
                  <ul className="space-y-3">
                    {ind.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3 text-ink-2 text-sm">
                        <span className="text-gold mt-0.5">—</span> {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="border border-line bg-paper p-8 lg:p-10">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Client Impact</p>
                    <p className="text-lg text-ink font-medium leading-relaxed">
                      &ldquo;{ind.highlight}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Don&apos;t see your industry?
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            Our deployment-flexible architecture adapts to any regulated domain. Let&apos;s discuss how
            Veritas can transform your sector.
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            Request a Consultation
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
