import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How to Choose a Private AI Consultancy — The Five Questions That Matter",
  description:
    "The five questions that separate serious private AI firms from the rest — the audit log, the eval suite, the off-ramp, and how a wrong answer gets caught.",
  path: "/choosing-an-ai-consultant",
});

/* ----------------------------------------------------------------- the five */

const QUESTIONS = [
  {
    n: "01",
    q: "Where does inference happen, in which jurisdiction, and on whose hardware?",
    why: "It is the first thing a regulated buyer asks, and the answer should fit in one sentence. If it takes a paragraph, the vendor is describing a boundary they negotiate rather than one they own.",
    serious:
      "A single sentence: the model serves from infrastructure you control or contract directly with a sovereign-cloud provider operating in your jurisdiction, and the serving layer has no public internet egress unless it has been explicitly enumerated and approved per integration.",
    weak: "Long descriptions of encryption, certifications and \"our security posture\" that never say where the compute actually is.",
  },
  {
    n: "02",
    q: "Show me a sample audit log entry for a single user query.",
    why: "This is the question that ends the meeting for the vendors who cannot answer it. An audit trail is not a policy — it is a record. If they cannot produce one entry, they do not have one.",
    serious:
      "One record connecting the user, the prompt, the model version, the retrieved sources, the output and the timestamp. Enough to reconstruct why the system said what it said, months later, for someone who did not build it.",
    weak: "A slide describing \"full traceability\" and a dashboard screenshot. An audit trail that lives in a vendor portal you cannot export is an integration failure wearing a compliance badge.",
  },
  {
    n: "03",
    q: "Run your evaluation suite live.",
    why: "A vendor with a real eval suite can re-run it on demand. A vendor without one will explain why that is not necessary. The suite is what turns \"is this model better\" from an argument into a result.",
    serious:
      "A set of real questions from your own corpus, with the answers you consider acceptable, runnable on demand against any candidate model — with the pass rate recorded.",
    weak: "Benchmark numbers from a model card, or an accuracy figure with no reference set. Benchmarks measure the model; your eval suite measures the system.",
  },
  {
    n: "04",
    q: "What is the off-ramp? What leaves if we terminate?",
    why: "You are about to put your most sensitive workflows on someone else's architecture. Knowing how you get out is part of knowing how you get in.",
    serious:
      "Data, weights, prompts and traces leave in a documented format, over a stated period. Better still: the system runs on your infrastructure, so there is nothing to migrate. That is the difference between a capability and a dependency.",
    weak: "\"We can export your data\" with no format, no timescale, and no mention of prompts, traces or fine-tuned weights.",
  },
  {
    n: "05",
    q: "What does a wrong answer look like, and how is it caught?",
    why: "Every model is wrong sometimes. The question is not whether it happens but whether anyone can see it. A serious vendor names failure modes and the guardrail that catches each one.",
    serious:
      "Concrete failure modes — an ungrounded answer, a retrieval that pulled the wrong document, a model version change that altered behaviour — each paired with the specific control that catches it: grounding checks with citations, per-role redaction, version pinning with an evaluation gate.",
    weak: "\"Hallucination is solved\" or \"we use the best model\". Anyone who tells you a language model is never wrong is either not testing or not paying attention.",
  },
];

const REDFLAGS = [
  {
    title: "A transformation deck with no kill criteria",
    body: "If the proposal never names a condition under which the work stops, it is not a plan — it is an appetite. Ask what would cause them to recommend you do not build this. A serious vendor has an answer ready.",
  },
  {
    title: "No data audit in phase one",
    body: "Data readiness is the number one root cause of failed AI programmes. If they are not auditing your data estate before quoting, they are guessing at the price and hoping.",
  },
  {
    title: "Pricing with no outcome accountability",
    body: "Hourly billing with no defined deliverable means the incentive is the duration. Fixed price with a written exit gate means the incentive is the result.",
  },
  {
    title: "Pressure to build when buying would do",
    body: "Custom is not automatically better. In most cases the right answer is a managed platform for the low-stakes surfaces and a custom build only where the risk justifies it. A vendor who recommends custom for everything is selling engineering hours.",
  },
  {
    title: "Partnership revenue from model providers",
    body: "If they take a rebate from the model vendor whose model they are recommending, the recommendation is not neutral. Ask directly: do you collect revenue from any model or cloud provider you might recommend?",
  },
  {
    title: "No answer to the off-ramp question",
    body: "If a vendor has not thought about how you leave, they have not thought about your position at all.",
  },
];

const CHECKLIST = [
  "Where does inference run, in which jurisdiction, and on whose hardware — in one sentence?",
  "Show me a sample audit log entry for a single user query.",
  "Run your evaluation suite live, on my data, and show me the pass rate.",
  "What leaves if we terminate, in what format, and over what period?",
  "What does a wrong answer look like, and which control catches each failure mode?",
  "What is the exit gate for each phase, and what happens if a gate is not met?",
  "Do you collect revenue from any model or cloud provider you might recommend?",
  "Who operates this after handover, and what does that team need to know?",
  "What is the fixed price for the first phase, and what is explicitly out of scope?",
  "Give me one engagement where you recommended NOT building something.",
];

const COMPARE = [
  { dim: "Where inference runs", serious: "One sentence, specific jurisdiction, explicit egress posture", weak: "Talks about encryption and certifications" },
  { dim: "Audit trail", serious: "Shows a real log entry you can read", weak: "Describes \"full traceability\"" },
  { dim: "Evaluation", serious: "Runs a suite live on your corpus", weak: "Cites model benchmarks" },
  { dim: "Off-ramp", serious: "Documented export, or runs on your own hardware", weak: "\"We can export your data\"" },
  { dim: "Wrong answers", serious: "Names failure modes and the control for each", weak: "\"Hallucination is solved\"" },
  { dim: "Pricing", serious: "Fixed price per phase with a written exit gate", weak: "Hourly, or \"contact us for pricing\"" },
  { dim: "Model choice", serious: "Driven by your evaluation suite", weak: "Driven by their preferred vendor" },
  { dim: "What they say no to", serious: "Names a case where they recommended not building", weak: "Every project is a good project" },
];

const FAQS = [
  {
    q: "How do I know if I even need a private AI deployment?",
    a: "Two tests. Does the workload touch data a regulator would recognise as sensitive — patient records, financial records, privileged material, classified material, customer PII? And is the volume high enough that per-token pricing becomes unpredictable? If both are no, a hosted API is the right answer and any vendor telling you otherwise is selling you something. If either is yes, private deployment is worth scoping properly.",
  },
  {
    q: "What is the difference between private AI and sovereign AI?",
    a: "Private AI is about the data boundary — your prompts, documents and outputs stay inside your perimeter. Sovereign AI is broader: jurisdiction, control, operability and evidence. A system can be private and not sovereign if it runs in another country under another country's access laws, or if only the vendor can operate it. Sovereignty is four independent properties; most buyers are sold only the first one.",
  },
  {
    q: "Should I choose a big firm or a specialist?",
    a: "It depends on what you are buying. Big firms are strong at change management, procurement process and board-level assurance, and they price accordingly. Specialists are strong at the engineering and are usually the ones who have actually shipped a private deployment rather than advised on one. The question to ask either of them is the same: show me a production system you built, and let me talk to the team that runs it now.",
  },
  {
    q: "How long should a first engagement take?",
    a: "An assessment is two weeks. A first production workload is four to eight. If someone tells you it needs twelve to eighteen months before anything is in production, ask what is happening in month four. Long programmes with no intermediate deliverable are how budgets disappear.",
  },
  {
    q: "What should I expect to pay for an assessment?",
    a: "Ours is a fixed price in the $15K–$45K range depending on the size of the data estate and the number of regulatory regimes involved. Others price it lower as a loss leader and recover it on the build. What matters is that the number is fixed and the deliverable is written down before you start: a readiness scorecard, a target architecture, a phased roadmap and a compliance posture review.",
  },
  {
    q: "What if my data is not ready?",
    a: "Then you should know that before anyone commits to infrastructure, and it is the most valuable finding the assessment produces. Making a corpus usable — ownership, metadata, access control, provenance — is genuine work and it is the part most often skipped because it is less exciting than a model. It is also the number one root cause of failed AI programmes.",
  },
];

export default function ChoosingConsultantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "How to Choose a Private AI Consultancy", path: "/choosing-an-ai-consultant" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
            Selection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-7 leading-[1.1] max-w-4xl">
            How to choose a private AI consultancy
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl">
            By the time a prospect contacts a consultancy in 2026, they have
            already asked an AI engine what the service should cost and what to
            look for. The first sales conversation happens without you in the
            room. So here is the page we would want to read if we were the buyer
            — the five questions that separate firms who have actually shipped a
            private deployment from firms who have advised on one.
          </p>
          <p className="text-slate leading-relaxed max-w-3xl mt-5">
            We answer all five ourselves, further down. Including the ones where
            the honest answer is not flattering.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link href="/assessment" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Request an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/private-ai-cost" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              What it actually costs
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Why this is hard right now
            </h2>
            <p className="text-slate leading-relaxed">
              The market moved. Two years ago the question was whether AI could
              help. Now the questions are who to hire and what it costs — and the
              buyers asking them are a committee with a security officer in it.
            </p>
            <Link href="/private-ai-deployment" className="inline-flex items-center text-navy font-semibold hover:underline mt-6">
              <span className="mr-1">→</span> The deployment architecture
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <p className="font-serif text-4xl text-navy leading-none mb-2">95%</p>
                <p className="text-slate leading-relaxed">
                  of organisations consider private or sovereign AI important to
                  their strategy — and 98% of C-suite executives say establishing
                  a private domain that keeps proprietary IP out of publicly
                  trained models is imperative.
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-navy leading-none mb-2">13%</p>
                <p className="text-slate leading-relaxed">
                  are actually ready to do it. That gap between intent and
                  readiness is the whole market for private AI consulting — and
                  it is why the selection decision matters more than the
                  technology decision.
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-navy leading-none mb-2">51%</p>
                <p className="text-slate leading-relaxed">
                  cite integration complexity in hybrid environments as their
                  number one challenge running AI privately. Almost 60% of AI
                  leaders cite cross-border data restrictions.
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-navy leading-none mb-2">$110B</p>
                <p className="text-slate leading-relaxed">
                  projected for on-premises AI deployment services in 2026, up
                  from $82.5B in 2025. Demand is not the constraint. Getting it
                  built properly is.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mt-8">
              Figures from published 2026 industry research on private and
              sovereign AI adoption and the on-premises AI deployment services
              market.
            </p>
          </div>
        </div>
      </section>

      {/* THE FIVE QUESTIONS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Five questions that sort the field
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            These come from how regulated enterprises actually evaluate private
            AI proposals — the questions procurement asks once the demo is over.
            Ask all five of every bidder. The answers tell you more than any
            capability deck.
          </p>

          {QUESTIONS.map((q) => (
            <div key={q.n} className="border-t border-line py-10">
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-serif text-3xl text-line-soft leading-none">{q.n}</span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink leading-snug">{q.q}</h3>
              </div>
              <p className="text-slate leading-relaxed max-w-3xl mb-7">{q.why}</p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                <div className="border-l-2 border-emerald-600 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 mb-2">
                    A serious answer
                  </p>
                  <p className="text-slate leading-relaxed">{q.serious}</p>
                </div>
                <div className="border-l-2 border-red-400 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-700 mb-2">
                    What a weak one sounds like
                  </p>
                  <p className="text-slate leading-relaxed">{q.weak}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Six red flags
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            None of these are illegal and some are ordinary practice. Together
            they describe a firm that will bill you for a long time.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {REDFLAGS.map((r, i) => (
              <div key={r.title} className="flex items-start gap-5">
                <span className="w-8 h-8 flex items-center justify-center border border-line text-red-600 text-sm font-semibold flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">{r.title}</h3>
                  <p className="text-slate leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIDE BY SIDE */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Serious firm, weak firm
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-12">
            The same eight questions, answered two ways. If the answers you are
            hearing are all in the right-hand column, you are talking to the
            wrong kind of firm — and no amount of brand recognition will change
            what you get at the end.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-line">
              <thead>
                <tr className="bg-white">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted w-44">Question</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">A serious firm says</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-red-700">A weak firm says</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((c) => (
                  <tr key={c.dim} className="border-t border-line">
                    <td className="px-5 py-5 font-semibold text-ink align-top">{c.dim}</td>
                    <td className="px-5 py-5 text-slate align-top">{c.serious}</td>
                    <td className="px-5 py-5 text-slate align-top">{c.weak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Take this into the meeting
            </h2>
            <p className="text-slate leading-relaxed">
              Ten questions. Ask them in order and write down the answers. You do
              not need to be technical to hear the difference between someone who
              has built one of these and someone who has read about one.
            </p>
            <p className="text-slate leading-relaxed mt-5">
              The last one is the one that separates the two fastest.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-0">
              {CHECKLIST.map((c, i) => (
                <li key={c} className="flex items-start gap-5 py-5 border-t border-line">
                  <span className="font-mono text-xs text-gold pt-1 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate text-[15px] leading-relaxed">{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OUR ANSWERS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            How we answer the five
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-12">
            Same standard we would hold anyone else to. Where our answer is not
            the strongest one available, we say so.
          </p>

          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                01 — Where does inference run?
              </h3>
              <p className="text-slate leading-relaxed">
                On your infrastructure, in your jurisdiction. Sovereign, hybrid
                or air-gapped. The serving layer has no public internet egress
                unless it is enumerated and approved per integration, and the
                default posture is deny. One sentence, as it should be.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                02 — The audit log entry
              </h3>
              <p className="text-slate leading-relaxed">
                Every prompt, every retrieval, every output, every tool call,
                every model version, the user and the timestamp — written to a log
                you own and cannot quietly edit. Enough to reconstruct a decision
                made eight months ago for someone who did not build the system.
                We can show you one.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                03 — Running the eval suite live
              </h3>
              <p className="text-slate leading-relaxed">
                We build the suite from your own corpus — real questions with the
                answers you consider acceptable — and it is runnable on demand
                against any candidate model. It is also what gates every model
                change before it serves a single query. On a first engagement we
                run it in front of you.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                04 — The off-ramp
              </h3>
              <p className="text-slate leading-relaxed">
                The system runs on your hardware, so there is nothing to migrate
                off. We hand over the architecture, the runbooks, the evaluation
                suite and the audit trail. Your team can operate it without us.
                That is the difference between a capability and a dependency —
                and it is the reason we work project-based rather than
                subscription-based.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                05 — What a wrong answer looks like
              </h3>
              <p className="text-slate leading-relaxed">
                Three concrete failure modes: an answer with no source passage
                behind it, a retrieval that pulled the wrong document, and a
                model version change that altered behaviour. Each has a specific
                control — grounding checks with checkable citations, per-role
                redaction so unauthorised documents never reach the model, and
                version pinning behind an evaluation gate. We do not claim
                hallucination is solved. We claim every answer is checkable and
                every change is gated.
              </p>
            </div>
            <div className="border-l-4 border-gold bg-white p-7">
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                And where we are not the strongest choice
              </h3>
              <p className="text-slate leading-relaxed">
                If you need a global systems integrator to run a multi-year
                change programme across forty countries, we are not it — the big
                firms are genuinely better at that. If your workload is
                low-volume and non-sensitive, a hosted API is the right answer
                and we will say so rather than sell you a platform. And if your
                data is not ready, the most useful thing we can do is tell you
                that before you spend on infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Questions buyers ask before the first call
          </h2>
          {FAQS.map((f) => (
            <div key={f.q} className="border-t border-line py-7">
              <h3 className="font-serif text-lg font-semibold text-ink mb-3">{f.q}</h3>
              <p className="text-slate leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + RELATED */}
      <section className="py-20 md:py-24 px-6 lg:px-10 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Start with the assessment
            </h2>
            <p className="text-slate leading-relaxed">
              It is the same advice we give about every vendor on this page: begin
              with a bounded, fixed-price piece of work that tells you what is
              worth building and what is not. If the honest answer turns out to be
              &ldquo;do not build this yet&rdquo;, you will get that answer too — and it is
              the finding that saves you the most money.
            </p>
            <Link href="/assessment" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 mt-8">
              Request an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-line pt-10">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/private-ai-cost" className="hover:underline">What it actually costs</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The three commercial models, their real price ranges, and the
                five costs nobody puts on the first quote.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/ai-governance" className="hover:underline">AI governance &amp; compliance</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The controls that produce evidence — and the audit trail question
                answered in full.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/sovereign-ai" className="hover:underline">Sovereign AI</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Jurisdiction, control, operability, evidence — and four things
                that look sovereign but are not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
