import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Private AI Deployment Cost — What It Really Costs in 2026",
  description:
    "What private AI deployment really costs: the three commercial models and their price ranges, what moves the price, and the five costs nobody quotes.",
  path: "/private-ai-cost",
});

/* ------------------------------------------------------------------ models */

const MODELS = [
  {
    name: "Platform-based private AI",
    upfront: "$300K – $1M",
    running: "$50K – $250K / year",
    margin: "70–80% gross",
    body: "A vendor-supplied platform with their own orchestration, their own model routing and their own admin surface. Fastest to stand up, highest software contribution, and the strongest lock-in. The licence is the cost — and the dependency is the price you do not see on the quote.",
  },
  {
    name: "Appliance-based deployment",
    upfront: "$100K – $1M per system",
    running: "Support contract, typically 15–20% of hardware",
    margin: "40–50% gross",
    body: "Hardware plus AI software sold as a unit — an inference box that arrives pre-configured. Predictable, but you are buying a fixed shape. When your workload outgrows it, you buy another box.",
  },
  {
    name: "Project-based delivery",
    upfront: "$50K – $5M depending on scope",
    running: "Optional retainer",
    margin: "45–55% gross",
    body: "A specialist integrator designs and ships the stack on your infrastructure, then hands it over. This is the model we work in. It is the only one where the architecture is yours on day one and the vendor is optional on day two.",
  },
];

const VARIABLES = [
  {
    title: "How many regulatory regimes you answer to",
    body: "One regulator is a constraint. Three is a design problem. Financial services with a supervisory review process, plus healthcare privacy rules, plus a customer contract naming a jurisdiction, changes the audit trail, the retention policy, the access model and the evidence pack. Each additional regime is engineering, not paperwork.",
    weight: "High",
  },
  {
    title: "Deployment mode: on-premise, private cloud, sovereign cloud or hybrid",
    body: "On-premise is the most control and the most operational burden. Hybrid is the most engineering — every split between the sensitive and the non-sensitive is a decision that has to be designed, documented and enforced. If anyone quotes you a hybrid architecture without asking where the split sits, they have not understood the work.",
    weight: "High",
  },
  {
    title: "How many systems the AI has to touch",
    body: "A single corpus with a clean export is a retrieval project. An ERP, a CRM, a document vault, a ticketing system and a data warehouse, each with their own identity provider, is an integration project. Integration count is the single most reliable predictor of effort — far more than model choice.",
    weight: "High",
  },
  {
    title: "The state of your data",
    body: "Grounded, citation-first answers require a corpus that is actually structured: consistent metadata, real access control, known provenance. If the data estate is a shared drive of PDFs with no ownership model, a significant part of the work is making the data usable before a model ever sees it.",
    weight: "Medium–High",
  },
  {
    title: "How many workloads go to production",
    body: "The first workload carries the platform cost. Each additional one after that is incremental — the inference substrate, retrieval layer, identity integration and audit trail are already in place. This is why phased delivery is cheaper than buying eight use cases up front.",
    weight: "Medium",
  },
  {
    title: "What your evaluation suite has to prove",
    body: "A model change gate is only real if you have a suite of questions from your own corpus with answers you consider acceptable. Building that suite is genuine work — and it is the artefact your risk function will ask for. Skip it and you have a model, not a system you can defend.",
    weight: "Medium",
  },
];

const FORGOTTEN = [
  {
    title: "Inference capacity",
    body: "GPU capacity is a capital decision, not a subscription. For a workload with real volume, the break-even against a metered API often arrives inside the first year — but the bill lands up front, and someone has to size it correctly. Over-provisioning by one GPU class is a five-figure mistake that persists for the life of the hardware.",
  },
  {
    title: "The people who will run it",
    body: "A system your team cannot operate is a dependency, not a capability. Budget for the two or three engineers who will own model swaps, retrieval tuning, evaluation runs and log review. If nobody in the business can do that, you have bought a managed service with a sovereignty label on it.",
  },
  {
    title: "Evaluation and re-evaluation",
    body: "Every model update is a regression risk. The suite has to be run before a new version serves a single query, and someone has to own the gate. This is ongoing work, not a one-off deliverable.",
  },
  {
    title: "Security review and authorisation",
    body: "If you are in a regulated sector, the deployment has to survive a security review — penetration testing, control mapping, evidence packs. That review takes time from your security team as well as ours, and it is not a line item anyone puts on the first quote.",
  },
  {
    title: "The exit",
    body: "Ask what leaves if the engagement ends: which data, which weights, which prompts, which traces, in what format, over what period. A vendor who has not thought about the off-ramp has not thought about your position either.",
  },
];

const TCO = [
  {
    item: "Cost shape",
    hosted: "Per token. Scales linearly and unpredictably with usage.",
    priv: "Fixed capacity you plan around. One capital decision, then a known running cost.",
  },
  {
    item: "Where your data goes",
    hosted: "Outside your perimeter, under someone else's terms.",
    priv: "Nowhere. That is the whole point of the architecture.",
  },
  {
    item: "Auditability",
    hosted: "The vendor's log, on the vendor's schedule.",
    priv: "Your log. Prompt, retrieval, model version, output, timestamp — reconstructable per query.",
  },
  {
    item: "Model change control",
    hosted: "The vendor upgrades. Your behaviour changes on their timeline.",
    priv: "You pin the version and pass it through your own evaluation gate.",
  },
  {
    item: "Cost at low volume",
    hosted: "Cheaper. If you are not using it much, a metered API is the right answer.",
    priv: "Worse. You pay for capacity whether or not it is busy.",
  },
  {
    item: "Cost at high volume",
    hosted: "Grows without a ceiling.",
    priv: "Marginal cost approaches zero. Break-even is typically inside year one at real volume.",
  },
  {
    item: "Off-ramp",
    hosted: "Export what the vendor lets you export, on their terms.",
    priv: "It is on your hardware. There is nothing to leave.",
  },
];

const FAQS = [
  {
    q: "How much does a private AI deployment cost?",
    a: "Our engagements are fixed-price and outcome-based, from $50K to $1M, with four to eight weeks to the first production workload. Market-wide, project-based private AI deployments run from roughly $50K for a single governed workload to $5M for a multi-regime, multi-system programme; platform licences are quoted at $300K–$1M up front plus $50K–$250K a year. What moves the price is not the model — it is how many regulators you answer to, how many systems the AI has to touch, and how ready your data is.",
  },
  {
    q: "Is private AI cheaper than a hosted API?",
    a: "At low volume, no — a metered API is the right answer and we will tell you so. At real volume, usually yes: a metered API scales linearly with usage while private deployment converts that variable spend into fixed capacity you can plan around. For most of the workloads we see, the break-even against a metered API arrives inside the first year. But the comparison is not only about money. A hosted API gives you a model you do not control behind a data boundary you negotiate rather than own.",
  },
  {
    q: "What is the cheapest way to start?",
    a: "An assessment. It is a bounded, fixed-price piece of work that tells you which workloads are worth building, which are not, and what the real constraints are — before anyone commits to infrastructure. Most organisations discover that one or two of their proposed use cases carry most of the value, and that the rest can wait. That finding alone usually pays for the assessment several times over.",
  },
  {
    q: "Why do quotes for the same thing vary by 10x?",
    a: "Because they are not quoting the same thing. One quote is a model endpoint. Another includes retrieval, identity integration, an evaluation suite and an audit trail that survives a supervisory review. A third assumes your data is already clean. Ask every bidder to state, in one line, where inference runs, what happens to your prompts, and who operates the system after handover. The spread in those three answers explains most of the spread in price.",
  },
  {
    q: "Do you charge by the hour?",
    a: "No. Fixed price, per phase, agreed before the phase starts. If we scope it wrong, that is our problem to absorb — which is also why we insist on the assessment first. We do not have a preferred model vendor and we do not collect partnership revenue from model providers, so our recommendation is not shaped by a rebate.",
  },
  {
    q: "What happens if we need to stop?",
    a: "The system runs on your infrastructure, so there is nothing to migrate off. We hand over the architecture, the runbooks, the evaluation suite and the audit trail, and your team can operate it without us. That is the difference between a capability and a dependency, and it is the reason the off-ramp question is one of the five we think every buyer should ask before signing anything.",
  },
];

/* ------------------------------------------------------------------- page */

export default function PrivateAICostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Private AI Deployment Cost", path: "/private-ai-cost" },
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
            Pricing
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-7 leading-[1.1] max-w-4xl">
            Private AI deployment cost: the numbers nobody publishes
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl">
            Almost every firm in this market hides behind &ldquo;contact us for
            pricing&rdquo;. That is not caution, it is a lack of answer. So here is
            ours — the commercial models and their real ranges, what actually
            moves the price, the five costs that never make it onto the first
            quote, and an honest comparison against simply paying a hosted API
            per token.
          </p>
          <p className="text-slate leading-relaxed max-w-3xl mt-5">
            If you want the short version before the detail: our engagements are
            fixed-price and outcome-based, from <strong>$50K to $1M</strong>,
            with <strong>four to eight weeks</strong> to the first production
            workload. Below is what sits behind those two numbers.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link href="/assessment" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Start with an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/choosing-an-ai-consultant" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              How to choose a consultancy
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            The market, in three commercial models
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-6">
            Private AI deployment services reached{" "}
            <strong>$82.5B in 2025</strong> and are projected at{" "}
            <strong>$110.3B in 2026</strong>, a 33.7% growth rate. The
            enterprise segment alone goes from $65.3B to $93.1B. Demand is not
            the question — the shape of what you are buying is.
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-3xl mb-12">
            Market figures below are from published industry analysis of
            on-premises AI deployment services, 2025–2026. They describe what
            the market charges, not what we charge — our own numbers are in the
            next section.
          </p>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
            {MODELS.map((m) => (
              <div key={m.name} className="border-t border-line pt-6">
                <h3 className="font-serif text-xl font-semibold text-ink mb-3">{m.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-muted">Up front</p>
                  <p className="font-serif text-2xl text-ink leading-tight">{m.upfront}</p>
                  <p className="text-sm text-muted mt-3">Running</p>
                  <p className="text-slate">{m.running}</p>
                  <p className="text-xs text-gold uppercase tracking-[0.12em] mt-3">{m.margin}</p>
                </div>
                <p className="text-slate leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
          <div className="border border-line bg-paper p-7 lg:p-8 mt-14 max-w-3xl">
            <h3 className="font-serif text-lg font-semibold text-ink mb-3">
              Why we work in the third model
            </h3>
            <p className="text-slate leading-relaxed">
              Because the first two are sold as products and behave as
              dependencies. A platform licence and an appliance both leave you
              with an architecture you cannot operate without the vendor. In a
              regulated business that is the risk you were trying to remove. We
              design the stack, ship it on your infrastructure, and hand it over
              — which is also why our price is a project price, not a
              subscription.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MOVES THE PRICE */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            What actually moves the price
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            Two organisations asking for &ldquo;the same thing&rdquo; can differ by an order
            of magnitude, because they are not asking for the same thing. These
            are the six variables that decide it — and the honest weight of each.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {VARIABLES.map((v, i) => (
              <div key={v.title}>
                <div className="flex items-start justify-between gap-6 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")} — {v.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold flex-shrink-0 pt-1">
                    {v.weight}
                  </span>
                </div>
                <p className="text-slate leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE CHARGE */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            What we charge, and what that buys
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-12">
            Fixed price per phase, agreed before the phase starts. If we scope it
            wrong, that is ours to absorb — which is also why we insist on an
            assessment before anyone commits to infrastructure.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-line">
              <thead>
                <tr className="bg-paper">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Phase</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Typical scope</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Indicative range</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Exit gate</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-t border-line">
                  <td className="px-5 py-5 font-semibold text-ink align-top">Assessment</td>
                  <td className="px-5 py-5 align-top">Data estate and regulatory mapping, readiness scorecard with gap analysis, target architecture, phased roadmap, compliance posture review.</td>
                  <td className="px-5 py-5 align-top font-serif text-xl text-ink">$15K – $45K</td>
                  <td className="px-5 py-5 align-top">A signed target architecture and a scoped engagement plan.</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-5 font-semibold text-ink align-top">Foundation</td>
                  <td className="px-5 py-5 align-top">Inference substrate, retrieval layer, identity integration, audit trail. Model selection driven by your evaluation suite, not a vendor default.</td>
                  <td className="px-5 py-5 align-top font-serif text-xl text-ink">$60K – $250K</td>
                  <td className="px-5 py-5 align-top">Your team can query the system and every request is in the log.</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-5 font-semibold text-ink align-top">First production workload</td>
                  <td className="px-5 py-5 align-top">Citation-first answers, per-role access, retrieval grounded in your corpus, evaluation gate on every candidate change.</td>
                  <td className="px-5 py-5 align-top font-serif text-xl text-ink">$80K – $350K</td>
                  <td className="px-5 py-5 align-top">A workload in production that passes your own acceptance criteria.</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-5 font-semibold text-ink align-top">Expansion</td>
                  <td className="px-5 py-5 align-top">Additional pillars and workloads on the same footing, each gated by the same evaluation suite and added to the same audit trail.</td>
                  <td className="px-5 py-5 align-top font-serif text-xl text-ink">$40K – $150K each</td>
                  <td className="px-5 py-5 align-top">Each new workload passes the same gate as the first.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted leading-relaxed max-w-3xl mt-8">
            These are indicative bands for a single-regime, mid-complexity
            engagement. They are not a quote. The assessment produces the number
            for your situation, and it is fixed before any further work begins.
          </p>
        </div>
      </section>

      {/* FORGOTTEN COSTS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Five costs that never make it onto the first quote
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-14">
            These are not hidden in the sense of being secret. They are hidden in
            the sense that the person writing the proposal is not the person who
            will pay for them.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {FORGOTTEN.map((f, i) => (
              <div key={f.title}>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                  {String(i + 1).padStart(2, "0")} — {f.title}
                </h3>
                <p className="text-slate leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TCO */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Hosted API versus private deployment
          </h2>
          <p className="text-slate leading-relaxed max-w-3xl mb-12">
            We build private systems and we will still tell you when a hosted API
            is the right answer. Here is the honest comparison, line by line.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-line">
              <thead>
                <tr className="bg-paper">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted w-48">Dimension</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Hosted API</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Private deployment</th>
                </tr>
              </thead>
              <tbody>
                {TCO.map((r) => (
                  <tr key={r.item} className="border-t border-line">
                    <td className="px-5 py-5 font-semibold text-ink align-top">{r.item}</td>
                    <td className="px-5 py-5 text-slate align-top">{r.hosted}</td>
                    <td className="px-5 py-5 text-slate align-top">{r.priv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-gold bg-paper p-7 mt-12 max-w-3xl">
            <p className="text-slate leading-relaxed">
              <strong className="text-ink">The honest rule:</strong> if the
              workload is low-volume and not sensitive, use a hosted API. If it
              is high-volume, or it touches anything a regulator would recognise
              as sensitive, private deployment wins on cost and wins outright on
              everything else. Most organisations have one or two workloads in
              the first category and the rest in the second — which is exactly
              why the assessment comes first.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Pricing questions, answered straight
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
      <section className="py-20 md:py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Get the number for your situation
            </h2>
            <p className="text-slate leading-relaxed">
              Everything above is indicative. The assessment produces a fixed
              price and a phased roadmap for your specific data estate,
              regulatory constraints and infrastructure — and if the honest
              answer is &ldquo;do not build this yet&rdquo;, you will get that answer too.
            </p>
            <Link href="/assessment" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 mt-8">
              Request an AI readiness assessment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-line pt-10">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/choosing-an-ai-consultant" className="hover:underline">How to choose a consultancy</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The five questions that separate serious firms from the rest —
                and what a weak answer sounds like.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/private-ai-deployment" className="hover:underline">The deployment architecture</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Four deployment models, six controls that make the boundary real,
                and eight weeks to first production.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                <Link href="/insights/mid-market-ai-gap" className="hover:underline">The mid-market AI gap</Link>
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                Why $100M–$1B companies are underserved — and what a workable
                engagement looks like for them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
