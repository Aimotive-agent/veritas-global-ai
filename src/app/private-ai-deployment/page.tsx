import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Private AI Deployment — Self-Hosted AI On Your Infrastructure",
  description:
    "Deploy LLMs, retrieval and agents inside your own perimeter. No data leaves your building, no vendor logs your prompts. On-premise, private cloud or hybrid, with explicit egress posture.",
  path: "/private-ai-deployment",
});

const DEPLOYMENT_MODELS = [
  {
    name: "On-premise",
    body: "Models, retrieval indexes, agent runtime and audit logs run on hardware you own, in a room you control. The strongest data boundary and the highest operational burden — you own patching, capacity and uptime.",
    fits: "Regulated enterprises and government workloads where the data cannot leave the building under any circumstances.",
  },
  {
    name: "Private cloud",
    body: "The same architecture in a single-tenant environment you contract for directly. The data boundary is enforced by the contract and the tenancy, and the infrastructure team is one you can hold accountable.",
    fits: "Organisations that need isolation and elasticity without owning hardware.",
  },
  {
    name: "Sovereign cloud",
    body: "Infrastructure operated inside your jurisdiction, under a control model you have contractual rights over. Sovereignty here is a legal and operational fact, not a marketing label.",
    fits: "Workloads bound by data-residency law or by customer contracts that name a jurisdiction.",
  },
  {
    name: "Hybrid",
    body: "Sensitive inference and retrieval stay inside the perimeter; lower-sensitivity work can run on managed infrastructure. Every split has to be an explicit decision with a documented rule, not a default that happened.",
    fits: "Organisations that have already proven one workload and want to expand without re-litigating the boundary every time.",
  },
];

const CONTROLS = [
  {
    title: "Explicit egress posture",
    body: "Every outbound request from your perimeter is enumerated and approved. If the inference server reaches a third-party API, that call is a decision someone signed off, with a reason and a review date. The default posture is deny.",
  },
  {
    title: "Per-role access and redaction",
    body: "The AI inherits the identity and group membership of the person asking the question. Documents the user is not entitled to read are not presented to the model, and outputs are filtered for anything classified above that user's clearance.",
  },
  {
    title: "Immutable audit trail",
    body: "Every prompt, every retrieval, every output, every tool call and every model version is written to a log you own. The record connects the user, the prompt, the model, the sources consulted, the answer and the timestamp — so an auditor can reconstruct a decision instead of taking it on trust.",
  },
  {
    title: "Version pinning",
    body: "Model updates do not land silently. A new version goes through your evaluation gate before it serves a single query, and you can roll back to the previous version in minutes because both are resident.",
  },
  {
    title: "Evaluation harness you can re-run",
    body: "A suite of real questions from your own corpus, with the answers you consider acceptable. You can re-run it on demand against any candidate model, which turns 'is this model better' from an argument into a result.",
  },
  {
    title: "No training on your data",
    body: "Your prompts, documents, embeddings and outputs are never used to train, fine-tune or improve any model. Your corpus is not a data source for anyone else, including us.",
  },
];

const TIMELINE = [
  {
    phase: "Phase 1 — Assessment",
    weeks: "Weeks 1–2",
    body: "A confidential AI readiness assessment under NDA. We map your data estates, regulatory constraints and latency requirements, and score the readiness of each proposed pillar against your acceptance criteria rather than our benchmarks.",
    gate: "Exit: a signed target architecture and a scoped engagement plan.",
  },
  {
    phase: "Phase 2 — Foundation",
    weeks: "Weeks 3–5",
    body: "The inference substrate, retrieval layer, identity integration and audit trail are stood up in your environment. Model selection is driven by your evaluation suite, not by a vendor default.",
    gate: "Exit: your own team can query the system and every request is in the log.",
  },
  {
    phase: "Phase 3 — Production",
    weeks: "Weeks 6–8",
    body: "The first production workload goes live with citation-first answers, per-role access and the retrieval layer grounded in your corpus. The evaluation harness runs on every candidate change.",
    gate: "Exit: a workload in production that passes your own acceptance criteria.",
  },
  {
    phase: "Phase 4 — Expansion",
    weeks: "Ongoing",
    body: "Additional pillars are added on the same footing, each one gated by the same evaluation suite and added to the same audit trail. Fixed-price per phase.",
    gate: "Exit: each new pillar passes the same acceptance gate as the first.",
  },
];

const FAQS = [
  {
    q: "Is private AI deployment more expensive than using a hosted API?",
    a: "On total cost, usually not — but the comparison is not like for like. A hosted API charges per token and gives you a model you do not control, with a data boundary you negotiate rather than own. A private deployment carries a one-time infrastructure and integration cost and a materially lower marginal cost, and it changes what your auditors can ask about. For a workload that is not sensitive and not volume-critical, a hosted API is often the right answer, and we will tell you that.",
  },
  {
    q: "Which models can we run?",
    a: "Whatever passes your evaluation suite, which is the only honest answer. Open-weight models, commercial models you have a licence to self-host, and fine-tunes of both. We do not have a preferred model, because a model preference that is not driven by your own acceptance criteria is a vendor preference wearing a technical costume.",
  },
  {
    q: "Can our own engineers run it?",
    a: "That is the point of the engagement. We hand over a system your team can operate — model swaps, retrieval tuning, evaluation runs and log review. If your team cannot run it without us, you have bought a dependency rather than a capability, and we will have sold you the wrong thing.",
  },
  {
    q: "What about data we already have in the cloud?",
    a: "It can be moved, replicated or federated into the private perimeter. Which one is right depends on how live the data needs to be and how much of it actually needs to stay private. That question is answered in the assessment, not after the contract.",
  },
  {
    q: "How do you handle the retrieval layer?",
    a: "Retrieval runs inside your perimeter against your own corpus, and answers are citation-first: every output links to the source passages it was grounded in. A model answer with no traceable source is not an answer we ship to production — a zero-hallucination contract is only meaningful if the citations are checkable.",
  },
];

export default function PrivateAIDeploymentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Private AI Deployment", path: "/private-ai-deployment" },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
            Deployment
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-7 leading-[1.1] max-w-4xl">
            Private AI deployment: run the model inside your own perimeter
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl">
            Most enterprise AI is a managed service with a contractual data
            boundary. Private deployment is a different architectural commitment:
            the inference, the retrieval, the agent runtime and the audit trail
            all run on infrastructure you control, and nothing leaves it without
            an explicit, enumerated and approved outbound call.
          </p>
          <p className="text-slate leading-relaxed max-w-3xl mt-5">
            This page is what that actually means in practice — the four
            deployment models and what changes between them, the controls that
            make the boundary real rather than aspirational, and how a private
            deployment lands in eight weeks rather than eight quarters.
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
              href="/contact"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Request a private consultation
            </Link>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODELS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Four deployment models, one architecture
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Sovereignty is not a single decision. It is a set of independent
            choices about where the hardware lives, who contracts for it, which
            jurisdiction it sits in and who operates it. The architecture
            underneath is the same in all four cases — which is why the choice
            can be revisited later without a rewrite.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {DEPLOYMENT_MODELS.map((m) => (
              <div key={m.name}>
                <h3 className="font-serif text-xl font-semibold text-ink mb-3">{m.name}</h3>
                <p className="text-slate leading-relaxed mb-3">{m.body}</p>
                <p className="text-sm text-muted leading-relaxed">
                  <span className="font-semibold text-ink">Fits: </span>
                  {m.fits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            What makes the boundary real
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            A data boundary that lives in a slide deck is not a data boundary.
            These are the six controls that make it enforceable, and each one is
            verifiable by someone who did not build the system.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {CONTROLS.map((c) => (
              <div key={c.title}>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-slate leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Eight weeks to first production workload
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Every phase has an exit gate written before the phase starts. If a
            gate is not met, the next phase does not begin — which is how
            eight weeks stays an estimate rather than a hope.
          </p>
          <div className="max-w-3xl">
            {TIMELINE.map((t, i) => (
              <div key={t.phase} className="border-t border-line py-8 first:border-t-0">
                <div className="flex flex-wrap items-baseline gap-x-4 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    {t.weeks}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-ink">{t.phase}</h3>
                </div>
                <p className="text-slate leading-relaxed mb-3">{t.body}</p>
                <p className="text-sm text-muted leading-relaxed">{t.gate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Questions we get before the first call
          </h2>
          <p className="text-slate leading-relaxed mb-12">
            If yours is not here, ask it directly — a confidential consultation
            exists for exactly that.
          </p>
          {FAQS.map((f) => (
            <div key={f.q} className="border-t border-line py-7">
              <h3 className="font-serif text-lg font-semibold text-ink mb-3">{f.q}</h3>
              <p className="text-slate leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 md:py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">Where to go next</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/sovereign-ai" className="hover:underline">
                  Sovereign AI
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Jurisdiction, model control and operability — the layers above
                deployment mode.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/ai-governance" className="hover:underline">
                  AI governance &amp; compliance
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The controls, evidence packs and audit trail that make a private
                deployment defensible to an auditor.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/insights/truth-first-ai-governance" className="hover:underline">
                  Why truth-first AI matters
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Governance, explainability and the cost of a wrong answer in a
                regulated business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
