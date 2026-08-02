import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Veritas — Veritas Global AI",
  description: "Four commitments set the Veritas platform apart — and they are architectural, not promotional. Sovereign by default, zero-hallucination, never trains on your data, cryptographic audit trail.",
};

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

const specs = [
  { key: "Deployment model", value: "Sovereign · Hybrid · Air-gapped" },
  { key: "Inference latency", value: "1.8ms p50" },
  { key: "Uptime SLA", value: "99.997%" },
  { key: "Data residency", value: "Jurisdiction-pinned" },
  { key: "Model training", value: "Never on your data" },
  { key: "Audit trail", value: "Cryptographic" },
];

const certifications = ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "FedRAMP"];

export default function WhyVeritasPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">Why Veritas</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] mb-7">
              The Veritas Difference
            </h1>
            <p className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-xl">
              Most enterprise AI vendors host your data on shared infrastructure and call it secure.
              We don&apos;t. Four commitments set the Veritas platform apart — and they are
              architectural, not promotional.
            </p>
            <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Request Private Briefing
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="lg:col-span-5 reveal lg:pt-4">
            <div className="border border-line bg-white p-7 lg:p-8">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                <p className="font-serif font-semibold text-ink text-base">veritas-core v4.3.0</p>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span className="text-emerald-700">All systems operational</span>
                </div>
              </div>
              <dl className="space-y-4 text-sm">
                {specs.map((row) => (
                  <div key={row.key} className="flex justify-between items-baseline">
                    <dt className="text-slate">{row.key}</dt>
                    <dd className="font-semibold text-ink text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <span key={c} className="px-2.5 py-1 border border-line text-xs text-ink font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {differences.map((d) => (
              <div key={d.number} className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-2xl font-semibold text-gold">{d.number}</span>
                  <h2 className="font-serif font-semibold text-xl text-ink">{d.title}</h2>
                </div>
                <p className="text-slate leading-relaxed text-[15px] mb-4">{d.description}</p>
                <p className="text-sm text-muted leading-relaxed">{d.footnote}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Architectural Guarantees</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Security Is Not a Feature. It&apos;s the Foundation.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Every layer of the Veritas stack is architected for the most regulated environments on
              earth. Your data never leaves your jurisdiction, your models never train on your
              proprietary information, and every inference is cryptographically verifiable.
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {[
              { title: "Data Sovereignty & Residency", desc: "Deploy within your VPC, on-premises, or air-gapped. Configurable data residency per namespace with cryptographic enforcement." },
              { title: "Zero-Trust Architecture", desc: "Every API call, agent action, and data access is authenticated, authorized, and logged. mTLS everywhere with no implicit trust." },
              { title: "Compliance-First Design", desc: "SOC 2 Type II, ISO 27001, HIPAA, GDPR, FedRAMP-ready. Full audit trail immutability for every inference." },
              { title: "Low-Latency Execution", desc: "Sub-100ms inference via edge-deployed models. Local or hybrid execution eliminates WAN dependency." },
              { title: "Model Isolation", desc: "Per-tenant model instances with no cross-contamination. Your data never trains shared or foundation models." },
              { title: "Granular Access Control", desc: "RBAC, ABAC, and SSO/SAML integration with fine-grained API-level permissions and full session audit trails." },
            ].map((f) => (
              <div key={f.title} className="bg-white p-7">
                <h3 className="font-serif font-semibold text-base text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Enterprise Advantage</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Built for the Most Regulated Environments
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Global financial institutions, national healthcare systems, and sovereign governments
              rely on Veritas for mission-critical intelligence where accuracy is non-negotiable.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {[
              { value: "99.997%", label: "Uptime SLA" },
              { value: "1.8ms", label: "Inference Latency (p50)" },
              { value: "2.4B+", label: "Documents Indexed" },
              { value: "340+", label: "Enterprise Deployments" },
            ].map((m) => (
              <div key={m.label} className="bg-white p-8 text-center">
                <div className="metric-num text-4xl md:text-5xl mb-2">{m.value}</div>
                <p className="text-sm text-slate leading-snug">{m.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Ready to experience the difference?
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            Every engagement begins with a confidential architecture consultation — no pricing pages,
            no self-service tiers.
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            Request Private Consultation
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
