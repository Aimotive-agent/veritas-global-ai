import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  aiWiseVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Wise Health Companion — Private Health Assistant",
  description:
    "A private health assistant that keeps your records inside your perimeter: AI chat with a medical disclaimer, document analysis, calendar, tasks, medications, cases, dashboard and reports — self-hosted and local by default.",
  path: "/ai-wise-health",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "AI Medical Assistant",
    body: "Ask about your own metrics and medications and get a plain-language answer — with a medical disclaimer travelling with every response.",
  },
  {
    n: "02",
    title: "Files & analysis",
    body: "Upload a lab report or an imaging summary; it is parsed on the box, indexed, and its analysis stays attached to the record.",
  },
  {
    n: "03",
    title: "Calendar & tasks",
    body: "Appointments and reminders on a calendar, and the small follow-ups — refills, fasting logs, confirmations — as tasks.",
  },
  {
    n: "04",
    title: "Medications",
    body: "Active and past prescriptions with dosage and schedule; adding one is a single form.",
  },
  {
    n: "05",
    title: "Cases",
    body: "Group an episode of care — the documents, the questions and the follow-ups — in one place you can review.",
  },
  {
    n: "06",
    title: "Dashboard & reports",
    body: "Blood pressure, sleep, steps and weight plotted over time, and reports you can hand to a clinician.",
  },
];

const FACTS = [
  { value: "14", label: "languages, with the interface translated" },
  { value: "local", label: "by default — the record never leaves your machine" },
  { value: "your model", label: "local, or a provider you configure" },
];

const FAQS = [
  {
    q: "Where does my health data live?",
    a: "In the self-hosted deployment the whole application runs on your own hardware: the record, the documents and the analysis stay in your own database. In the film the app runs against a local stand-in database with fictional data, and no document is uploaded anywhere.",
  },
  {
    q: "Is it a medical device?",
    a: "No. It is a companion, not a clinician. Every answer carries a medical disclaimer, the app tells the user to consult a healthcare professional, and the product is positioned as informational support rather than diagnosis or treatment.",
  },
  {
    q: "What can it analyse?",
    a: "PDFs and common document formats — lab reports, imaging summaries, discharge notes. The file is parsed where it is stored, the text is indexed, and the analysis is attached to the record you can read.",
  },
  {
    q: "Can it run air-gapped?",
    a: "Yes. It is delivered inside the perimeter, including air-gapped configurations, with the assistant running against a local model.",
  },
  {
    q: "Who is it for?",
    a: "People and organisations that want the convenience of an AI health assistant without uploading a lifetime of medical records to somebody else's cloud — including privacy-sensitive deployments in clinics and corporate health programmes.",
  },
];

/* --------------------------------------------------------------------- page */

export default function AiWiseHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiWiseVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "AI Wise Health Companion", path: "/ai-wise-health" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/ai-wise-health-demo.mp4"
        poster="/ai-wise-health-demo-poster.jpg"
        ariaLabel="AI Wise Health Companion product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Private health assistant
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            AI Wise Health Companion: the help, without the upload
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            A health assistant that answers from your own record, reads your
            documents where they are stored, and keeps every metric, file and
            conversation inside your own perimeter. Self-hosted, and local by
            default.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film above is the real application, recorded end to end — and it
            is informational support, not a clinician: a medical disclaimer
            travels with every answer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Discuss a private deployment
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

      {/* WHAT THE WALKTHROUGH SHOWS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
            What the walkthrough shows
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            Nine surfaces, three and a half minutes, one machine.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SURFACES.map((s) => (
              <div key={s.n} className="card p-8">
                <div className="metric-num text-gold text-2xl mb-3">{s.n}</div>
                <h3 className="font-serif text-xl text-ink mb-3">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
            How it is put together
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            The whole application is a self-hosted deployment: the interface, the
            store, the analysis and the assistant.
          </p>
          <div className="grid sm:grid-cols-3 gap-px bg-line">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-white p-8">
                <div className="metric-num text-3xl text-ink mb-2">{f.value}</div>
                <div className="text-sm text-muted leading-relaxed">{f.label}</div>
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

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
              Keep the record where the patient is
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy AI Wise Health Companion on your hardware, with the
              assistant on a model you choose — sovereign, hybrid or air-gapped,
              and with the disclaimer built in.
            </p>
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Request a deployment conversation
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <SocialLinks variant="dark" className="mt-10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-14">
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                <Link href="/mininotebook" className="hover:underline">miniNotebook</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The grounded AI notebook that runs entirely inside your perimeter.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                <Link href="/veritas-os" className="hover:underline">Veritas OS</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                An agent-native desktop shell with a control room for every agent.
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
