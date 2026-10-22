import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sovereign AI — AI That Stays Inside Your Jurisdiction",
  description:
    "Jurisdiction, data residency and model control for regulated industries. Sovereign AI deployment with audit trails, explicit egress posture and per-role redaction.",
  path: "/sovereign-ai",
});

const LAYERS = [
  {
    title: "Jurisdiction",
    body: "Where the inference physically runs, and under whose law. A model served from a data centre in another jurisdiction is governed by that jurisdiction's disclosure and access rules, whatever your contract says about confidentiality. Contractual commitments are a layer on top of legal jurisdiction, not a substitute for it.",
  },
  {
    title: "Control",
    body: "Who can change the model, the prompts, the retrieval index and the configuration. Control that sits with a third party is a dependency; control that sits with you — even if you exercise it through a partner — is a capability you can take back.",
  },
  {
    title: "Operability",
    body: "Whether your own engineers can run the system, diagnose it, roll it back and take it with you if the relationship ends. A sovereign deployment that only its vendor can operate is a managed service with a sovereignty logo on it.",
  },
  {
    title: "Evidence",
    body: "Whether you can show an auditor exactly what happened: which model, which prompt, which retrieved sources, which output, which timestamp, and who asked. Sovereignty you cannot evidence is a claim, and claims do not survive a regulatory review.",
  },
];

const SECTORS = [
  {
    name: "Financial services",
    body: "Model risk management, record retention and supervisory review all require a defensible answer to who made a decision and on what information. Sovereign deployment puts the decision trail and the model under the same control as the portfolio it acts on.",
  },
  {
    name: "Healthcare and life sciences",
    body: "Patient data is the most sensitive data most organisations hold, and the regulator's question is not only about where it is stored but about who can instruct the model. Per-role redaction and an explicit egress posture answer both.",
  },
  {
    name: "Legal and compliance",
    body: "Privileged material, client data and regulatory filings each carry confidentiality obligations that outlive the contract with the AI vendor. Keeping inference inside the practice's own perimeter keeps that obligation where the capability is.",
  },
  {
    name: "Government and defence",
    body: "Sovereignty is the default expectation rather than a feature request. The requirement is usually a closed-box system on infrastructure the state controls, with no public internet egress unless it is explicitly enumerated and approved.",
  },
  {
    name: "Energy and critical infrastructure",
    body: "Operational technology and telemetry describe the physical world. Sovereign deployment is what lets an operator take an AI workload into that environment without an unbounded dependency on an external service.",
  },
  {
    name: "Telecommunications",
    body: "Network and subscriber data carry long-standing residency and lawful-intercept obligations. Sovereign inference keeps the data plane and the control plane inside the operator's own estate.",
  },
];

const NOT_SOVS = [
  "A data centre in another country with a confidentiality clause attached.",
  "A private endpoint in a major cloud region, where the operator still holds the keys and the logs.",
  "A tenant you control the encryption keys for but not the underlying hardware or the staff who can reach it.",
  "A self-hosted model behind an API gateway that forwards prompts to an external provider for enrichment.",
];

export default function SovereignAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Sovereign AI", path: "/sovereign-ai" },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
            Sovereignty
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-7 leading-[1.1] max-w-4xl">
            Sovereign AI: four layers, only one of them is geography
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl">
            Sovereign AI is routinely reduced to a postcode. It is not one
            thing. It is four independent properties — jurisdiction, control,
            operability and evidence — and an organisation that buys only the
            first one has bought the least interesting of them.
          </p>
          <p className="text-slate leading-relaxed max-w-3xl mt-5">
            Below is what each layer actually means, what is not sovereign even
            when it looks like it, and how the requirement lands differently
            across the regulated sectors that actually require it.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              href="/assessment"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Start with an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/private-ai-deployment"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              See the deployment architecture
            </Link>
          </div>
        </div>
      </section>

      {/* FOUR LAYERS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            The four layers of sovereignty
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Most procurement conversations cover the first layer and stop. The
            other three are the ones that determine whether a system is still
            sovereign in year three, after a reorganisation, a regulator
            enquiry and a change of supplier.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {LAYERS.map((l, i) => (
              <div key={l.title}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif text-3xl text-line-soft leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-ink">{l.title}</h3>
                </div>
                <p className="text-slate leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SOVEREIGN */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Four things that look sovereign and are not
            </h2>
            <p className="text-slate leading-relaxed">
              These come up in almost every assessment. They are worth naming
              explicitly, because each one is a defensible commercial decision
              — it just is not sovereignty, and it should not be bought under
              that name.
            </p>
            <Link
              href="/private-ai-deployment"
              className="inline-flex items-center text-navy font-semibold hover:underline mt-6"
            >
              <span className="mr-1">→</span> How the deployment models differ
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {NOT_SOVS.map((n) => (
                <li key={n} className="flex items-start gap-4 border-b border-line pb-5 last:border-b-0">
                  <span className="w-6 h-6 flex items-center justify-center border border-line text-muted text-xs flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="text-slate leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Where the requirement actually bites
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Sovereignty is not a uniform requirement. It is sharp in some
            sectors, mostly theoretical in others, and pretending otherwise
            wastes budget on controls nobody asked for while under-funding the
            ones they did.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {SECTORS.map((s) => (
              <div key={s.name}>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">{s.name}</h3>
                <p className="text-slate leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING + LINKS */}
      <section className="py-20 md:py-24 px-6 lg:px-10 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              The question worth asking first
            </h2>
            <p className="text-slate leading-relaxed">
              Not &ldquo;can we get sovereign AI?&rdquo; but &ldquo;which of the four layers is
              actually binding for this workload, and which are we paying for
              out of caution?&rdquo; That question is answered in the assessment, and
              it usually changes the shape of the engagement substantially.
            </p>
            <Link
              href="/assessment"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 mt-8"
            >
              Request an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-line pt-10">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/ai-governance" className="hover:underline">
                  AI governance &amp; compliance
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The evidence layer — audit trails, model change control and the
                packs your auditor asks for.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/industries" className="hover:underline">
                  Industries we serve
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                How the requirement lands in financial services, healthcare,
                legal, logistics, energy and telecoms.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/insights/platform-agnostic-ai-architecture" className="hover:underline">
                  Avoiding vendor lock-in
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Why sovereignty and platform-agnostic architecture are the same
                argument, made at different scales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
