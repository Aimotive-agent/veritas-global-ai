import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Governance & Compliance — EU AI Act, ISO 27001, SOC 2",
  description:
    "AI governance for regulated enterprise: immutable audit trails, model change control, evaluation harnesses, per-role access and evidence packs for EU AI Act and ISO 42001.",
  path: "/ai-governance",
});

const CONTROLS = [
  {
    title: "Model change control",
    body: "A model update does not reach production because a vendor pushed it. Every candidate version is evaluated against your suite, on your corpus, against your acceptance criteria, and the result is recorded. When behaviour changes, you can trace exactly which decisions the change affected — because both versions were resident and both results were logged.",
  },
  {
    title: "Grounded, citation-first answers",
    body: "Every output links to the source passages it was grounded in. A model answer with no traceable source is not a production output, it is a rumour with a latency budget. A zero-hallucination contract is only meaningful if the citations are checkable by someone who did not build the system.",
  },
  {
    title: "Immutable audit trail",
    body: "Prompt, retrieval, output, tool call, model version, user and timestamp, written to a log you own and cannot quietly edit. The record has to answer 'show me the source' for a decision made eight months ago.",
  },
  {
    title: "Per-role access and redaction",
    body: "The model inherits the identity and group membership of the requester. Documents the user is not entitled to read are never presented to it, and outputs are filtered for anything classified above that user's clearance. This is access control, applied at the only place it can actually hold.",
  },
  {
    title: "Evaluation harnesses you can re-run",
    body: "A suite of real questions from your own corpus, with the answers you consider acceptable, runnable on demand against any candidate model. It turns 'is this model better' from an argument into a result, and it is the artefact your risk function will ask for.",
  },
  {
    title: "Disclosure and incident handling",
    body: "A documented process for the questions you will eventually be asked: what did the system decide, on what basis, who is accountable, and what happens next. The process is designed before it is needed, because nobody designs one in the middle of an incident.",
  },
];

const EVIDENCE = [
  {
    title: "SOC 2 Type II",
    body: "Control operation over the review period, covering the systems that host inference and the change management around models and configuration.",
  },
  {
    title: "ISO 27001",
    body: "An information security management system covering the perimeter, the data flows and the operational controls around the AI platform.",
  },
  {
    title: "ISO 42001",
    body: "An AI management system: the organisational side of governance — impact assessment, lifecycle controls, and documented responsibility for the system's behaviour.",
  },
  {
    title: "EU AI Act documentation",
    body: "The technical documentation, risk classification, data governance record and human-oversight design that a deployer of a high-risk system is expected to be able to produce. We produce the evidence; the legal judgement about your classification stays with you and your counsel.",
  },
  {
    title: "HIPAA and GDPR",
    body: "Processing records, data-flow documentation, retention and deletion behaviour, and a contractual chain that stops at your infrastructure rather than a sub-processor you did not choose.",
  },
  {
    title: "FedRAMP-ready posture",
    body: "Control mapping, documented authorisation boundaries and the evidence trail — the groundwork for authorisation, which is a government decision and not ours to make.",
  },
];

const LOG_ENTRY = [
  "the user and their role at the time of the request",
  "the full prompt, unmodified",
  "the model and version that served it",
  "every source passage retrieved, with identifiers",
  "the output, and whether it passed the grounding check",
  "any tool call made, with arguments and result",
  "a timestamp, and the deployment version in force",
];

export default function AIGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "AI Governance & Compliance", path: "/ai-governance" },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
            Governance
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-7 leading-[1.1] max-w-4xl">
            AI governance: controls you can hand to an auditor
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl">
            Governance usually arrives as a policy document. It becomes real
            when it is a set of controls that produce evidence — a change gate
            that can fail, an audit trail that cannot be edited, an evaluation
            suite that can be re-run. This is what that looks like in a
            deployment.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              href="/assessment"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Assess your governance posture
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/security"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Read our security &amp; disclosure position
            </Link>
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Six controls, each one verifiable
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            A control that cannot fail is a slogan. Each of these is engineered
            so that it can — and so that the evidence it produces survives
            contact with someone who did not design it.
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

      {/* AUDIT TRAIL */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              One log entry, reconstructed
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              The audit trail is only as good as the completeness of a single
              record. A decision is defensible if, from one entry, you can
              reconstruct who asked, what they asked, what the model saw, what
              it said and when.
            </p>
            <p className="text-slate leading-relaxed">
              So one entry contains:
            </p>
            <Link
              href="/private-ai-deployment"
              className="inline-flex items-center text-navy font-semibold hover:underline mt-6"
            >
              <span className="mr-1">→</span> See the deployment architecture
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="bg-white border border-line">
              {LOG_ENTRY.map((l, i) => (
                <li
                  key={l}
                  className="flex items-start gap-5 px-6 py-4 border-b border-line last:border-b-0"
                >
                  <span className="font-mono text-xs text-gold pt-0.5 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate text-[15px] leading-relaxed">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Evidence packs
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Governance becomes legible as paperwork. These are the packs we
            assemble as part of an engagement, and what each one is for.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {EVIDENCE.map((e) => (
              <div key={e.title}>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">{e.title}</h3>
                <p className="text-slate leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-3xl mt-12">
            Evidence packs support an audit or a regulatory review; they are not
            legal advice, and the classification and interpretation of any
            regulation in your sector remain decisions for you and your counsel.
          </p>
        </div>
      </section>

      {/* CLOSING + LINKS */}
      <section className="py-20 md:py-24 px-6 lg:px-10 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Start from the question you cannot answer yet
            </h2>
            <p className="text-slate leading-relaxed">
              Most engagements begin with a specific question the organisation
              cannot currently answer — usually &ldquo;show me why the model said
              that&rdquo; or &ldquo;prove the training data stayed where it was&rdquo;. The
              assessment tells you which of those you already have the
              controls for, and which need engineering.
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
                <Link href="/insights/truth-first-ai-governance" className="hover:underline">
                  Why truth-first AI matters
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Governance, explainability and the real cost of a wrong answer
                in a regulated business.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/data-policy" className="hover:underline">
                  Our data policy
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Never training on customer data, jurisdiction-pinned storage
                and documented retention.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/solutions" className="hover:underline">
                  The six AI pillars
                </Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The capabilities governance has to cover — agents, chatbots,
                websites, RAG and marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
