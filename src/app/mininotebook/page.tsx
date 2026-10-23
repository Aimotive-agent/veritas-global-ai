import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  mininotebookVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "miniNotebook — Self-Hosted Grounded AI Notebooks",
  description:
    "miniNotebook is a grounded AI notebook that runs entirely inside your perimeter: your documents, your model, your machine. Inline citations, a fact-check report on every answer, and a studio of generated artifacts — with zero outbound calls.",
  path: "/mininotebook",
});

/* ------------------------------------------------------------------- content */

const STEPS = [
  {
    n: "01",
    title: "Create a notebook",
    body: "One click and a title. No account, no cloud tenancy, no seat licence between you and your own knowledge.",
  },
  {
    n: "02",
    title: "Add sources",
    body: "Paste raw working notes or upload PDFs, DOCX, PPTX, EPUB and scanned archives. Parsing and indexing happen on the box — the corpus never routes outbound.",
  },
  {
    n: "03",
    title: "Ask grounded questions",
    body: "Answers are drafted only from the sources you supplied. Retrieval runs against your local embeddings, and the generation runs on your local model.",
  },
  {
    n: "04",
    title: "Verify every claim",
    body: "Each answer carries inline citations you can open in one click — straight to the line in your own document — plus a fact-check report on the whole response.",
  },
  {
    n: "05",
    title: "Generate the artifacts",
    body: "Mind maps, slide decks, study guides, reports, flashcards, quizzes and data tables — generated where the documents already live.",
  },
];

const PILOT = [
  { value: "4,120", label: "questions answered in week two" },
  { value: "98.2%", label: "of answers carried an inline citation" },
  { value: "0.4%", label: "unsupported-answer rate" },
  { value: "2.4s / 6.1s", label: "p50 / p95 latency, fully local" },
  { value: "$0.0021", label: "power cost per query" },
  { value: "0", label: "outbound telemetry events, 14 days" },
];

const RUNS_ON = [
  "A single 6 GB VRAM workstation (this demo ran on an RTX 3060 laptop GPU)",
  "Local model inference via Ollama — no external API calls",
  "Local embeddings, full corpus indexed in ~14 minutes",
  "No cloud account, no external services, no telemetry endpoints",
  "Nvidia, AMD or Apple Silicon",
];

const FAQS = [
  {
    q: "Does miniNotebook send my documents anywhere?",
    a: "No. Parsing, embedding, retrieval and generation all run on the machine you install it on. During a two-week field pilot, monitoring recorded zero outbound endpoints contacted and zero telemetry events.",
  },
  {
    q: "How do I know the answers are right?",
    a: "Every answer is grounded in the sources you uploaded and carries inline citations back to the exact passage, plus a fact-check report across the whole response. In the pilot week, 98.2% of answers carried at least one inline citation and 0.4% were flagged as unsupported.",
  },
  {
    q: "What hardware does it need?",
    a: "A single workstation with a 6 GB GPU was enough for the pilot — 61 documents, 4,120 questions in a week at 2.4s median latency. Larger corpora and larger models run on the same architecture with more VRAM.",
  },
  {
    q: "Can we run it air-gapped?",
    a: "Yes. miniNotebook is deployed in sovereign, hybrid and air-gapped configurations. In the air-gapped mode nothing at all crosses the boundary — including updates, which are staged inside the perimeter.",
  },
  {
    q: "What does it cost to run?",
    a: "Power, essentially. The pilot's measured power cost was $0.0021 per query at 41 kWh for the week, against a hosted estimate of roughly $640 per month for the same volume.",
  },
];

/* -------------------------------------------------------------------- page */

export default function MiniNotebookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mininotebookVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "miniNotebook", path: "/mininotebook" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      {/* THE FILM */}
      <PromoFilm
        src="/mininotebook-demo.mp4"
        poster="/mininotebook-demo-poster.jpg"
        ariaLabel="miniNotebook product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Grounded AI notebooks
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            miniNotebook: a grounded AI notebook that never leaves your machine
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-2xl">
            Your documents, your model, your machine. miniNotebook answers only
            from the sources you give it, cites every claim to the exact
            passage, and runs the entire pipeline — retrieval, generation and
            studio artifacts — on hardware you control. The film above is the
            real application, recorded end to end on a single laptop GPU.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Discuss a pilot on your hardware
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/private-ai-cost"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              What private AI deployment costs
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
            What the walkthrough shows
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            Five steps, about two minutes, and nothing outside the perimeter.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="card p-8">
                <div className="metric-num text-gold text-2xl mb-3">{s.n}</div>
                <h3 className="font-serif text-xl text-ink mb-3">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
            <div className="card p-8 bg-navy-deep">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Runs on
              </div>
              <ul className="space-y-2.5">
                {RUNS_ON.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-200 leading-relaxed">
                    <svg width="14" height="14" fill="none" stroke="#B08D57" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT NUMBERS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
            Measured in a real two-week pilot
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            Sixty-one documents, four team members, one workstation inside the
            client perimeter. These are the numbers the pilot reported — not
            benchmarks from a vendor deck.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {PILOT.map((m) => (
              <div key={m.label} className="bg-white p-8">
                <div className="metric-num text-3xl text-ink mb-2">{m.value}</div>
                <div className="text-sm text-muted leading-relaxed">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-4xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10 leading-tight">
            Questions buyers ask first
          </h2>
          <div className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-line pb-8">
                <h3 className="font-serif text-xl text-ink mb-3">{f.q}</h3>
                <p className="text-slate leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + LINKS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
              See it run on your own documents
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We run a two-week pilot on your hardware with your corpus, and
              hand over numbers you can audit. No cloud account required at any
              point.
            </p>
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Request a miniNotebook pilot
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-14">
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                <Link href="/sovereign-ai" className="hover:underline">Sovereign AI</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                What sovereignty means once it has to survive an audit.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                <Link href="/private-ai-deployment" className="hover:underline">The deployment architecture</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Four deployment models and the controls that make the boundary real.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                <Link href="/ai-governance" className="hover:underline">AI governance</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The evidence pack a regulator will actually ask for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
