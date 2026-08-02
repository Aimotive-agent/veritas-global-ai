import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solutions — Veritas Global AI",
  description: "Six fully sovereign, deployment-flexible AI pillars: Enterprise SaaS, AI Agents, Neural Chatbots, Intelligent Websites, RAG Systems, and AI Marketing.",
};

const pillars = [
  {
    number: "01",
    title: "Enterprise SaaS",
    subtitle: "Platform Architecture",
    description:
      "Multi-tenant AI infrastructure deployed inside your VPC. Elastic auto-scaling, role-based access control, and 99.997% uptime SLA — without touching a public cloud you haven't authorized.",
    details: [
      "VPC-native deployment inside your perimeter",
      "Elastic tenant isolation with role-based access control",
      "SLA-backed availability — 99.997% uptime",
      "Sovereign, hybrid, or air-gapped deployment models",
      "Single-tenant instances on private-cloud option",
      "Cryptographic audit trail on every tenant action",
    ],
    deployment: "Sovereign · Hybrid · Air-Gapped",
    latency: "1.8ms p50",
  },
  {
    number: "02",
    title: "AI Agents",
    subtitle: "Autonomous Orchestration",
    description:
      "Deploy autonomous agent swarms that decompose complex workflows into parallel, auditable task graphs. Deterministic guardrails enforce governance policies on every action.",
    details: [
      "Dynamic swarm topology for parallel task decomposition",
      "Deterministic policy enforcement layer on every action",
      "Immutable audit logs with cryptographic chain-of-custody",
      "Human-in-the-loop oversight on consequential decisions",
      "Sub-second anomaly detection across IoT endpoints",
      "Multi-agent orchestration with 6 agents online",
    ],
    deployment: "In-perimeter runtime",
    latency: "Sub-100ms edge",
  },
  {
    number: "03",
    title: "Neural Chatbots",
    subtitle: "Conversational Intelligence",
    description:
      "Context-aware neural chatbots integrated with legacy ERP, CRM, and ITSM systems. Role-based knowledge segmentation with automatic PII/PHI redaction at the inference edge.",
    details: [
      "Omnichannel deployment — Slack, Teams, API",
      "Role-based access control on all knowledge segments",
      "Automatic PII/PHI redaction at the inference edge",
      "Legacy ERP, CRM, and ITSM integration",
      "72% reduction in clinical documentation time (healthcare)",
      "Context-aware responses grounded in your corpus",
    ],
    deployment: "On-premise · Hybrid",
    latency: "Sub-50ms response",
  },
  {
    number: "04",
    title: "Intelligent Websites",
    subtitle: "AI-Powered Web Platforms",
    description:
      "High-performance web platforms with embedded AI personalization, dynamic content optimization, and real-time visitor intelligence — delivered on the same hardened infrastructure as our enterprise stack.",
    details: [
      "AI-driven personalization on every visit",
      "Dynamic content optimization with real-time visitor intelligence",
      "Real-time analytics at the edge",
      "Delivered on hardened enterprise infrastructure",
      "High-performance rendering with zero shared tenancy",
      "Full audit trail on all data access",
    ],
    deployment: "Managed · Sovereign",
    latency: "Edge-deployed",
  },
  {
    number: "05",
    title: "RAG Systems",
    subtitle: "Zero-Hallucination Retrieval",
    description:
      "Domain-locked retrieval pipelines grounded exclusively in your proprietary data. Citation-verified outputs with full cryptographic audit trails — built for legal, financial, and healthcare precision.",
    details: [
      "Proprietary data grounding — domain-locked retrieval",
      "Citation-verified outputs with verifiable source",
      "Sub-50ms retrieval latency",
      "Ungrounded claims rejected at the guardrail layer",
      "Built for legal, financial, and healthcare precision",
      "3.2M-document vector vault, jurisdiction-pinned",
    ],
    deployment: "In-VPC · Air-Gapped",
    latency: "Sub-50ms retrieval",
  },
  {
    number: "06",
    title: "AI Marketing",
    subtitle: "Autonomous Campaign Intelligence",
    description:
      "Predictive audience modeling, generative content workflows, and autonomous campaign optimization — all governed by enterprise compliance and brand safety guardrails at every output.",
    details: [
      "Predictive audience modeling across segments",
      "Generative content workflows with brand guardrails",
      "Autonomous campaign optimization",
      "Enterprise compliance guardrails on every output",
      "12× faster compliance report generation",
      "Full traceability for regulatory review",
    ],
    deployment: "Managed · Sovereign",
    latency: "Real-time",
  },
];

const engagementModel = [
  { number: "01", title: "Discovery & Architecture Review", meta: "~2 weeks · Under NDA" },
  { number: "02", title: "Pilot & Validation", meta: "4–8 weeks · Fixed scope" },
  { number: "03", title: "Production Rollout", meta: "8–16 weeks · SLA-backed" },
  { number: "04", title: "Ongoing Operations", meta: "Continuous · Named contacts" },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Enterprise Capabilities</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Six Integrated AI Pillars
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Each pillar is a fully sovereign, deployment-flexible capability. Deploy independently
              or as a unified intelligence fabric across your organization — on your infrastructure,
              secured to institutional standards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto space-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.number}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-paper-2">
                      <span className="font-serif text-xl font-semibold text-navy">{p.number}</span>
                    </div>
                    <div>
                      <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-1">{p.title}</h2>
                      <p className="text-sm text-muted font-medium">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate leading-relaxed mb-6 text-[15px]">{p.description}</p>
                  <ul className="space-y-3">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-ink-2 text-sm">
                        <span className="text-gold mt-0.5">—</span> {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-6 text-sm border-t border-line pt-6">
                    <div>
                      <span className="text-muted">Deployment:</span>{" "}
                      <span className="font-semibold text-ink">{p.deployment}</span>
                    </div>
                    <div>
                      <span className="text-muted">Latency:</span>{" "}
                      <span className="font-semibold text-ink">{p.latency}</span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="border border-line bg-paper p-8 lg:p-10">
                    <div className="metric-num text-4xl mb-2">{p.number}</div>
                    <h3 className="font-serif font-semibold text-xl text-ink mb-4">{p.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">{p.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs font-medium mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span className="text-emerald-700">Deployment-ready</span>
                    </div>
                    <Link href="/contact" className="btn-secondary font-medium px-6 py-3 text-sm tracking-wide inline-flex items-center gap-2">
                      Discuss This Pillar
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Engagement Model</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">How We Engage</h2>
            <p className="text-slate text-lg leading-relaxed">
              No self-service sign-up. Every engagement is a structured partnership — from confidential
              consultation to sovereign deployment.
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {engagementModel.map((s) => (
              <div key={s.number} className="bg-white p-8 lg:p-9">
                <div className="font-serif text-3xl font-semibold text-navy mb-5">{s.number}</div>
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{s.meta}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
