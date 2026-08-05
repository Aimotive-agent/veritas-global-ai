import Link from "next/link";
import Reveal from "@/components/Reveal";
import IndustryTabs from "@/components/IndustryTabs";

const trustMark = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const industries = ["Financial Services", "Healthcare", "Legal & Compliance", "Logistics", "Energy", "Telecommunications"];

const pillars = [
  {
    title: "Enterprise SaaS",
    subtitle: "Platform Architecture",
    description:
      "Multi-tenant AI infrastructure deployed inside your VPC. Elastic auto-scaling, role-based access control, and 99.997% uptime SLA — without touching a public cloud you haven't authorized.",
    features: ["VPC-native deployment", "Elastic tenant isolation", "SLA-backed availability"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 21V9h6v12" /></svg>,
  },
  {
    title: "AI Agents",
    subtitle: "Autonomous Orchestration",
    description:
      "Deploy autonomous agent swarms that decompose complex workflows into parallel, auditable task graphs. Deterministic guardrails enforce governance policies on every action.",
    features: ["Dynamic swarm topology", "Policy enforcement layer", "Immutable audit logs"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-8 0 4 4 0 008 0zm6 0a3 3 0 10-6 0 3 3 0 006 0z" /></svg>,
  },
  {
    title: "Neural Chatbots",
    subtitle: "Conversational Intelligence",
    description:
      "Context-aware neural chatbots integrated with legacy ERP, CRM, and ITSM systems. Role-based knowledge segmentation with automatic PII/PHI redaction at the inference edge.",
    features: ["Omnichannel (Slack, Teams, API)", "Role-based access control", "PII redaction engine"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
  {
    title: "Intelligent Websites",
    subtitle: "AI-Powered Web Platforms",
    description:
      "High-performance web platforms with embedded AI personalization, dynamic content optimization, and real-time visitor intelligence — delivered on the same hardened infrastructure as our enterprise stack.",
    features: ["AI-driven personalization", "Dynamic content optimization", "Real-time analytics edge"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 0a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2m6-9V7a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2" /></svg>,
  },
  {
    title: "RAG Systems",
    subtitle: "Zero-Hallucination Retrieval",
    description:
      "Domain-locked retrieval pipelines grounded exclusively in your proprietary data. Citation-verified outputs with full cryptographic audit trails — built for legal, financial, and healthcare precision.",
    features: ["Proprietary data grounding", "Citation-verified outputs", "Sub-50ms retrieval latency"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  {
    title: "AI Marketing",
    subtitle: "Autonomous Campaign Intelligence",
    description:
      "Predictive audience modeling, generative content workflows, and autonomous campaign optimization — all governed by enterprise compliance and brand safety guardrails at every output.",
    features: ["Predictive audience modeling", "Generative content workflows", "Brand safety guardrails"],
    icon: <svg width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
];

const differences = [
  {
    number: "01",
    title: "Sovereign by Default",
    description:
      "Your models, your data, and your inference logs live entirely inside your perimeter — VPC, on-premises, or air-gapped. No data transits a vendor cloud you haven't authorized. We deploy to you, not the other way around.",
    footnote: "No shared tenancy. No multi-tenant inference path. No vendor-side model access.",
  },
  {
    number: "02",
    title: "Zero-Hallucination Contract",
    description:
      "Every output is grounded exclusively in your proprietary corpus and carries a verifiable citation. Ungrounded claims are rejected at the guardrail layer before they reach a user — not flagged after the fact.",
    footnote: "Defensible in court, admissible to regulators, traceable to source.",
  },
  {
    number: "03",
    title: "Never Trains on Your Data",
    description:
      "Your proprietary information is never used to train, fine-tune, or improve any shared or foundation model — contractually and architecturally. Per-tenant model isolation means zero cross-contamination, ever.",
    footnote: "Enforced at the infrastructure layer, not the privacy policy.",
  },
  {
    number: "04",
    title: "Cryptographic Audit Trail",
    description:
      "Every inference, agent action, and data access is cryptographically logged in an immutable chain-of-custody. Produce a defensible audit record for any query, any user, any moment — on demand.",
    footnote: "Tamper-evident by design. Exportable to your SIEM in real time.",
  },
];

const securityFeatures = [
  {
    title: "Data Sovereignty & Residency",
    description: "Deploy within your VPC, on-premises, or air-gapped. Configurable data residency per namespace with cryptographic enforcement.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm4 0v-4" /></svg>,
  },
  {
    title: "Zero-Trust Architecture",
    description: "Every API call, agent action, and data access is authenticated, authorized, and logged. mTLS everywhere with no implicit trust.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  },
  {
    title: "Compliance-First Design",
    description: "SOC 2 Type II, ISO 27001, HIPAA, GDPR, FedRAMP-ready. Full audit trail immutability with cryptographic chain-of-custody for every inference.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.94.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.94 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.94-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.94 3.42 3.42 0 013.138-3.138z" /></svg>,
  },
  {
    title: "Low-Latency Execution",
    description: "Sub-100ms inference via edge-deployed models. Local or hybrid execution eliminates WAN dependency for sensitive workloads.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Model Isolation",
    description: "Per-tenant model instances with no cross-contamination. Your data never trains shared or foundation models.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2m-2 4l3 3m-3-3l-3 3M9 7v2a4 4 0 004 4h2" /></svg>,
  },
  {
    title: "Granular Access Control",
    description: "RBAC, ABAC, and SSO/SAML integration with fine-grained API-level permissions and full session audit trails.",
    icon: <svg width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  },
];

const impactMetrics = [
  { value: "99.997%", label: "Uptime SLA" },
  { value: "1.8ms", label: "Inference Latency (p50)" },
  { value: "2.4B+", label: "Documents Indexed" },
  { value: "340+", label: "Enterprise Deployments" },
];

const impactTabs = [
  {
    id: "finance",
    label: "Financial Services",
    intro: "Real-time market intelligence, compliance automation, fraud detection with full audit traceability.",
    stats: [
      { value: "12× Faster", text: "Compliance report generation through autonomous agent orchestration, reducing quarterly audit cycles from weeks to days." },
      { value: "99.7% Accuracy", text: "In document retrieval for regulatory research with zero-hallucination guardrails — eliminating costly misquoting." },
      { value: "$340M", text: "In operational cost savings across fraud detection, risk modeling, and automated KYC workflows." },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    intro: "HIPAA-compliant clinical decision support, literature synthesis, patient data de-identification at scale.",
    stats: [
      { value: "72% Reduction", text: "In clinical documentation time through context-aware chatbots integrated with EHR systems." },
      { value: "3.2M Records", text: "Indexed in a HIPAA-compliant vector vault with real-time updates across multi-hospital networks." },
      { value: "Sub-50ms", text: "Clinical decision support inference delivered at the point of care, fully air-gapped." },
    ],
  },
  {
    id: "legal",
    label: "Legal & Compliance",
    intro: "Contract intelligence, regulatory monitoring, e-discovery with citation-verified outputs.",
    stats: [
      { value: "100% Citations", text: "Every generated clause and assertion carries a verifiable source citation — no ungrounded claims survive validation." },
      { value: "14× Faster", text: "Contract review cycles via autonomous agents that extract obligations, risks, and anomalies across million-document corpora." },
      { value: "Cryptographic Chain", text: "Of-custody on every inference — defensible audit trail for regulators, courts, and internal counsel." },
    ],
  },
  {
    id: "industry4",
    label: "Industry 4.0",
    intro: "Predictive maintenance, supply chain intelligence, IoT data fusion with sub-second anomaly detection.",
    stats: [
      { value: "23% Uptime Gain", text: "In grid asset availability through predictive maintenance agents monitoring 50,000+ IoT endpoints." },
      { value: "18-hour → 4-hour", text: "Forecast-to-execution cycle time via autonomous supply-chain agents with real-time rerouting." },
      { value: "Zero Incidents", text: "In 24 months of autonomous grid-balancing agent deployment with human-in-the-loop oversight." },
    ],
  },
];

const pipelineSteps = [
  { step: "1", title: "Ingest Query", subtitle: "Parse & classify intent" },
  { step: "2", title: "Retrieve Context", subtitle: "Vector vault semantic search" },
  { step: "3", title: "Generate Response", subtitle: "RAG-backed synthesis" },
  { step: "4", title: "Validate & Audit", subtitle: "Hallucination check + log" },
  { step: "5", title: "Deliver Result", subtitle: "Stream to client interface" },
];

const specRows = [
  { key: "Orchestration runtime", value: "6 agents online" },
  { key: "Vector store", value: "3.2M docs · us-east-pinned" },
  { key: "Retrieval confidence", value: "0.94 avg" },
  { key: "Hallucination guardrail", value: "0 ungrounded claims" },
  { key: "Delivery latency", value: "38ms · session encrypted" },
  { key: "Audit trail", value: "Cryptographically logged" },
];

const engagementSteps = [
  { number: "01", title: "Discovery & Architecture Review", description: "Confidential consultation with our solutions engineering team. We map your data estates, regulatory constraints, and latency requirements — then specify the target architecture.", meta: "~2 weeks · Under NDA" },
  { number: "02", title: "Pilot & Validation", description: "Scoped deployment on your infrastructure against a representative workload. Measure accuracy, latency, and compliance posture against your acceptance criteria — not our benchmarks.", meta: "4–8 weeks · Fixed scope" },
  { number: "03", title: "Production Rollout", description: "Full sovereign deployment with dedicated engineering support. Phased tenant onboarding, SIEM integration, and operator training — your team runs the platform, we back it.", meta: "8–16 weeks · SLA-backed" },
  { number: "04", title: "Ongoing Operations", description: "Continuous model governance, quarterly security reviews, and priority engineering. Your dedicated account team holds a recurring architecture review — not a ticket queue.", meta: "Continuous · Named contacts" },
];

const faqs = [
  {
    q: "Where does our data actually live?",
    a: "Wherever you put it. Veritas deploys into your VPC, on-premises datacenter, or air-gapped environment. Data residency is jurisdiction-pinned per namespace and enforced at the infrastructure layer. Your data never transits a Veritas-controlled cloud unless you explicitly choose a private-cloud deployment — and even then, it is isolated to a single-tenant instance under your control.",
  },
  {
    q: "Can you guarantee zero hallucination?",
    a: "Every generated output is grounded exclusively in your proprietary corpus and carries a verifiable source citation. Ungrounded claims are rejected at the guardrail layer before delivery — not flagged after the fact. We do not claim zero error across all possible queries; we claim that no output reaches your users without a traceable, defensible source. That is the standard legal, financial, and healthcare teams require — and it is what we contract to.",
  },
  {
    q: "Do you train your models on our data?",
    a: "No — contractually and architecturally. Your proprietary data is never used to train, fine-tune, or improve any shared or foundation model. Per-tenant model isolation means your workloads never share inference paths or weight state with another customer. This is enforced at the infrastructure layer, not buried in a privacy policy clause.",
  },
  {
    q: "How long does a full deployment take?",
    a: "A typical production rollout runs 12–24 weeks end-to-end: ~2 weeks for discovery and architecture review, 4–8 weeks for a scoped pilot against a representative workload, then 8–16 weeks for full production rollout with phased tenant onboarding. Air-gapped and highly regulated environments trend toward the upper end. We do not rush compliance.",
  },
  {
    q: "What does the audit trail actually prove?",
    a: "Every inference, agent action, and data access is written to a tamper-evident, cryptographically chained log. For any query we can reconstruct: who asked it, what context was retrieved, what was generated, what guardrail validated it, and when each step occurred. The trail is exportable to your SIEM in real time and admissible as evidence to regulators and courts.",
  },
  {
    q: "What happens if your company disappears?",
    a: "Because Veritas runs inside your perimeter on your infrastructure, a vendor outage does not take your platform down. Source-availability and operational runbook escrow are standard contract terms — your team can operate the platform independently. Sovereign deployment means the platform's survival is not coupled to the vendor's.",
  },
];

const sectionHeader = (eyebrow: string, title: string, description: string) => (
  <Reveal className="max-w-3xl mb-16">
    <div className="section-rule mb-6" />
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{eyebrow}</p>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">{title}</h2>
    <p className="text-slate text-lg leading-relaxed">{description}</p>
  </Reveal>
);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">Enterprise AI Infrastructure</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7">
              Intelligence, Engineered<br />for the Enterprise.
            </h1>
            <p className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-xl">
              Full-spectrum enterprise AI — deployed on your infrastructure, secured to institutional standards.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
                Request Private Briefing
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a href="#architecture" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
                View Architecture
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">{trustMark} SOC 2 Type II</span>
              <span className="flex items-center gap-2">{trustMark} ISO 27001</span>
              <span className="flex items-center gap-2">{trustMark} GDPR &amp; HIPAA</span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-4">
            <div className="border border-line bg-paper p-7 lg:p-8">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                <div>
                  <p className="font-serif font-semibold text-ink text-base">Platform at a Glance</p>
                  <p className="text-xs text-muted mt-0.5">veritas-core v4.3.0</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span className="text-emerald-700">All systems operational</span>
                </div>
              </div>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Deployment model</dt>
                  <dd className="font-semibold text-ink text-right">Sovereign · Hybrid · Air-gapped</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Inference latency</dt>
                  <dd className="font-semibold text-ink">1.8ms p50</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Uptime SLA</dt>
                  <dd className="font-semibold text-ink">99.997%</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Data residency</dt>
                  <dd className="font-semibold text-ink text-right">Jurisdiction-pinned</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Model training</dt>
                  <dd className="font-semibold text-ink">Never on your data</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">Audit trail</dt>
                  <dd className="font-semibold text-ink">Cryptographic</dd>
                </div>
              </dl>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Certifications</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">SOC 2</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">ISO 27001</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">HIPAA</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">GDPR</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">FedRAMP</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 px-6 lg:px-10 border-b border-line bg-paper">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">Operating across regulated industries</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {industries.map((ind) => (
              <span key={ind} className="font-serif font-semibold text-lg text-slate">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS / SIX PILLARS */}
      <section id="solutions" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            "Enterprise Capabilities",
            "Six Integrated AI Pillars",
            "Each pillar is a fully sovereign, deployment-flexible capability. Deploy independently or as a unified intelligence fabric across your organization."
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {pillars.map((p) => (
              <Reveal key={p.title} className="card p-8 lg:p-10 border-0">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-paper-2">{p.icon}</div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-ink mb-1">{p.title}</h3>
                    <p className="text-sm text-muted font-medium">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate leading-relaxed mb-6 text-[15px]">{p.description}</p>
                <ul className="space-y-2.5 text-sm text-ink-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE VERITAS DIFFERENCE */}
      <section id="difference" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            "Why Veritas",
            "The Veritas Difference",
            "Most enterprise AI vendors host your data on shared infrastructure and call it secure. We don't. Four commitments set the Veritas platform apart — and they are architectural, not promotional."
          )}
          <Reveal className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {differences.map((d) => (
              <div key={d.number} className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-2xl font-semibold text-gold">{d.number}</span>
                  <h3 className="font-serif font-semibold text-xl text-ink">{d.title}</h3>
                </div>
                <p className="text-slate leading-relaxed text-[15px] mb-4">{d.description}</p>
                <p className="text-sm text-muted leading-relaxed">{d.footnote}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div className="section-rule mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Enterprise Advantage</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-6 leading-tight">
                Security Is Not a Feature.<br />It&apos;s the Foundation.
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Every layer of the Veritas stack is architected for the most regulated environments on earth. Your data never leaves your jurisdiction, your models never train on your proprietary information, and every inference is cryptographically verifiable.
              </p>
              <div className="border border-line bg-white p-6">
                <h4 className="font-serif font-semibold text-ink mb-4 flex items-center gap-2 text-base">
                  <svg width="18" height="18" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  Deployment Flexibility
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["On-Premise", "Hybrid", "Private Cloud", "Air-Gapped"].map((mode) => (
                    <span key={mode} className="px-4 py-2 border border-line text-ink text-sm font-medium">{mode}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              {securityFeatures.map((f) => (
                <div key={f.title} className="bg-white p-7">
                  <div className="w-10 h-10 flex items-center justify-center mb-4 bg-paper-2">{f.icon}</div>
                  <h3 className="font-serif font-semibold text-base text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY IMPACT */}
      <section id="impact" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            "Industry Impact",
            "Transforming the Regulated Enterprise",
            "From global financial institutions to national healthcare systems — Veritas Global AI powers mission-critical intelligence where accuracy is non-negotiable."
          )}
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line mb-20">
            {impactMetrics.map((m) => (
              <div key={m.label} className="bg-white p-8 text-center">
                <div className="metric-num text-4xl md:text-5xl mb-2">{m.value}</div>
                <p className="text-sm text-slate leading-snug">{m.label}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <IndustryTabs tabs={impactTabs} />
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            "Platform Architecture",
            "The Intelligence Layer in Motion",
            "A static topology of the Veritas runtime — the agent workflow pipeline and data flow that governs every inference, from query intake to validated delivery."
          )}
          <Reveal className="grid lg:grid-cols-5 gap-px bg-line border border-line">
            <div className="lg:col-span-3 bg-white p-8 lg:p-10">
              <h3 className="font-serif font-semibold text-lg text-ink mb-2">Runtime Stack</h3>
              <p className="text-sm text-muted mb-8">veritas-core — enterprise-shell — v4.3.0</p>
              <div className="space-y-3">
                {pipelineSteps.map((s) => (
                  <div key={s.step} className="flex items-center gap-4 p-4 border border-line bg-paper-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy text-white text-xs font-semibold flex-shrink-0">{s.step}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-ink">{s.title}</div>
                      <div className="text-xs text-muted">{s.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 bg-white p-8 lg:p-10">
              <h3 className="font-serif font-semibold text-lg text-ink mb-2">Pipeline Specification</h3>
              <p className="text-sm text-muted mb-8">Multi-agent task decomposition with deterministic guardrails.</p>
              <dl className="space-y-5">
                {specRows.map((row) => (
                  <div key={row.key} className="flex justify-between items-baseline pb-4 border-b border-line">
                    <dt className="text-sm text-slate">{row.key}</dt>
                    <dd className="text-sm font-semibold text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 pt-6 border-t border-line flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="text-ink font-medium">Operational</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section id="engage" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            "Engagement Model",
            "How We Engage",
            "No self-service sign-up. No pricing page. Every engagement is a structured partnership — from confidential consultation to sovereign deployment, with white-glove engineering at every stage."
          )}
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {engagementSteps.map((s) => (
              <div key={s.number} className="bg-white p-8 lg:p-9">
                <div className="font-serif text-3xl font-semibold text-navy mb-5">{s.number}</div>
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-slate leading-relaxed mb-4">{s.description}</p>
                <p className="text-xs text-muted leading-relaxed">{s.meta}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-14">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Frequently Asked</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">
              Questions Enterprise Buyers Ask
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              The questions your security, legal, and infrastructure teams will ask in the first meeting — answered here so you arrive prepared.
            </p>
          </Reveal>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-line py-6" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif font-semibold text-lg text-ink pr-4">{f.q}</span>
                  <svg className="flex-shrink-0 text-muted group-open:rotate-45 transition-transform" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </summary>
                <p className="text-slate leading-relaxed pt-4 text-[15px]">{f.a}</p>
              </details>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="text-slate text-[15px] mb-5">Have a question that isn&apos;t here? Our solutions engineering team answers directly — no sales gatekeepers.</p>
            <Link href="/contact" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Ask a Question
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MASTER MILD WIZARD */}
      <section className="py-20 md:py-28 px-6 lg:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #4a0e4e 60%, #1a0533 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(180,130,255,0.15) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 mb-4">Featured Game</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Master Mild Wizard
              </h2>
              <p className="text-lg text-purple-100/80 leading-relaxed mb-6">
                Embark on an epic fantasy Idle-RPG adventure. Battle real-time monsters, collect legendary equipment, evolve through 14 unique character classes, and forge your destiny as the ultimate wizard.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Real-time Combat
                </div>
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  14 Classes
                </div>
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  Epic Bosses
                </div>
              </div>
              <Link
                href="https://www.mastermildwizard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                style={{ background: '#B08D57', color: '#fff' }}
              >
                Play Now — mastermildwizard.com
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://drive.google.com/thumbnail?id=1t0g7HcI_2bgf3eVOlEJgHxCXCNEkSZHy&sz=w800"
                  alt="Master Mild Wizard gameplay"
                  className="relative w-full h-auto rounded-xl border-2 border-purple-400/30 shadow-2xl"
                  loading="lazy"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a href="https://youtube.com/@mastermildwizard" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">YouTube</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.tiktok.com/@master.mind_wizard" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">TikTok</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.facebook.com/share/1asTkDrEEA/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Facebook</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://discord.gg/j7Hb3FhnM" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Discord</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.instagram.com/mastermildwizard.pbm" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOCUCON PROMO */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white border-b border-indigo-500/20">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              New Product Launch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
              DocuCon — Your AI Document Conversation Agent
            </h2>
            <p className="text-lg md:text-xl text-indigo-100/80 max-w-3xl mx-auto leading-relaxed">
              Upload any document and have a natural, spoken conversation with an AI that reads, understands, and researches your files. Voice input, voice output, live web search, and cross-session memory — all in a stunning space-age interface.
            </p>
          </Reveal>

          <Reveal className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📄", title: "Document Upload", desc: "PDF, DOCX, TXT, CSV — drag and drop any file. Instant parsing and analysis." },
              { icon: "🗣️", title: "Voice Conversation", desc: "Talk naturally. The AI speaks back. Full TTS and STT with multi-language support." },
              { icon: "🌐", title: "Live Web Research", desc: "Built-in DuckDuckGo search. The AI researches the internet in real-time for every query." },
              { icon: "🧠", title: "Cross-Session Memory", desc: "Conversations persist. Ask about something from last week and DocuCon remembers." },
              { icon: "🎨", title: "Space-Age Interface", desc: "Dark/light themes, glassmorphism, collapsible panels. Feels like a sci-fi command center." },
              { icon: "🔒", title: "Local-First & Private", desc: "Your documents and data stay on-device. No third-party data sharing." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-indigo-200/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://docucon.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              >
                Try the Live Demo
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <span className="text-sm text-indigo-300/60">
                Free demo · Full subscription platform coming soon
              </span>
            </div>
            <p className="mt-6 text-xs text-indigo-300/40 max-w-md mx-auto">
              This is a public demo. A full-featured paid subscription version with advanced analytics, team workspaces, and enterprise document processing is launching soon. Contact us for early access.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Private Consultation</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">
              Begin Your Enterprise AI Journey
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Every engagement begins with a confidential architecture consultation. No pricing pages. No self-service tiers. A direct conversation with our solutions engineering team.
            </p>
          </Reveal>
          <Reveal className="border border-line bg-paper p-8 lg:p-10">
            <form method="POST" action="/contact" className="block">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name <span className="text-red-700">*</span></label>
                  <input type="text" id="name" name="name" required placeholder="Jane Thornton" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">Company <span className="text-red-700">*</span></label>
                  <input type="text" id="company" name="company" required placeholder="Enterprise Corp" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Work Email <span className="text-red-700">*</span></label>
                  <input type="email" id="email" name="email" required placeholder="jane@enterprise.com" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">Role</label>
                  <select id="role" name="role" className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                    <option value="">Select your role…</option>
                    <option value="c-level">C-Level Executive</option>
                    <option value="vp">VP / Director</option>
                    <option value="head-tech">Head of Technology</option>
                    <option value="procurement">Procurement Lead</option>
                    <option value="architect">Enterprise Architect</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="interest" className="block text-sm font-medium text-ink mb-2">Primary Area of Interest</label>
                <select id="interest" name="interest" required className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                  <option value="">Select a solution…</option>
                  <option value="saas">Enterprise SaaS</option>
                  <option value="agents">AI Agents</option>
                  <option value="chatbots">Neural Chatbots</option>
                  <option value="websites">Intelligent Websites</option>
                  <option value="rag">RAG Systems</option>
                  <option value="marketing">AI Marketing</option>
                  <option value="full">Full Platform Consultation</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Brief Description of Requirements <span className="text-red-700">*</span></label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us about your use case or current infrastructure challenges…" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none"></textarea>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 border-line text-navy focus:ring-navy flex-shrink-0" />
                <label htmlFor="consent" className="text-xs text-muted leading-relaxed">I agree to Veritas Global AI&apos;s <a href="/privacy" className="text-navy hover:underline">Privacy Policy</a> and consent to being contacted regarding enterprise AI solutions. All information is handled under strict confidentiality.</label>
              </div>
              <div className="mt-8">
                <button type="submit" className="btn-primary font-medium px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                  Request Private Consultation
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
