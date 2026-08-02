import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Veritas Global AI",
  description: "Veritas Global AI — full-spectrum enterprise AI, deployed on your infrastructure and secured to the standards of global institutions.",
};

const values = [
  {
    title: "Sovereign by Default",
    desc: "Your models, your data, and your inference logs live entirely inside your perimeter. We deploy to you, not the other way around.",
  },
  {
    title: "Zero-Hallucination Contract",
    desc: "Every output is grounded exclusively in your proprietary corpus and carries a verifiable citation. No ungrounded claims reach your users.",
  },
  {
    title: "Never Trains on Your Data",
    desc: "Your proprietary information is never used to train, fine-tune, or improve any shared or foundation model — contractually and architecturally.",
  },
  {
    title: "Cryptographic Audit Trail",
    desc: "Every inference, agent action, and data access is cryptographically logged in an immutable chain-of-custody.",
  },
  {
    title: "Client Enablement, Not Dependency",
    desc: "We build your team's capability as we build your platform. You should be stronger after we leave, not weaker.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">About Veritas Global AI</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Intelligence, Engineered for the Enterprise.
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Full-spectrum enterprise AI — deployed on your infrastructure, secured to institutional
              standards. From sovereign SaaS platforms to autonomous agent swarms, neural chatbots,
              intelligent websites, RAG pipelines, and AI-driven marketing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <div className="section-rule mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">Sovereign AI for the Regulated Enterprise</h2>
            </Reveal>
            <div className="space-y-6 text-lg text-slate leading-relaxed">
              <p>
                Veritas Global AI was founded on a simple observation: most enterprise AI vendors host
                your data on shared infrastructure and call it secure. That wasn&apos;t good enough for the
                institutions we&apos;d worked with — global financial firms, national healthcare systems,
                and sovereign governments where accuracy is non-negotiable.
              </p>
              <p>
                Our team has deployed mission-critical AI inside the most regulated environments on
                earth. We&apos;ve seen what works, what doesn&apos;t, and where the waste happens. We built
                Veritas to do it differently: deploy to the client, never the other way around.
              </p>
              <p>
                The name — Veritas, Latin for truth — reflects our founding belief. Every model we
                deploy is grounded exclusively in your data. Every output carries a verifiable
                citation. Every inference is cryptographically logged. Trustworthy AI starts with
                trustworthy infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Our Commitments</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">What We Stand For</h2>
            <p className="text-slate text-lg leading-relaxed">
              These aren&apos;t posters on a wall. They&apos;re architectural — enforced at the infrastructure
              layer, not buried in a privacy policy.
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Compliance</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Secured to the Standards of Global Institutions
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              SOC 2 Type II, ISO 27001, HIPAA, GDPR, and FedRAMP-ready — with cryptographic
              chain-of-custody on every inference.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR", "FedRAMP-Ready"].map((c) => (
              <span key={c} className="px-4 py-2 border border-line text-ink text-sm font-medium">{c}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Begin your enterprise AI journey
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            Every engagement begins with a confidential architecture consultation.
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
