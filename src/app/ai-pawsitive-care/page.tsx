import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  pawsitiveVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Pawsitive Care — Private Pet Health Companion",
  description:
    "A pet health companion that keeps every record, photo and question inside your own perimeter: AI veterinary guidance, pets, health records, medications, appointments, photo library and emergency triage — self-hosted and local by default.",
  path: "/ai-pawsitive-care",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "AI veterinary assistant",
    body: "Ask about a symptom in plain language and get an answer drawn from that pet's own record — with the standing reminder to confirm with your veterinarian.",
  },
  {
    n: "02",
    title: "Pets",
    body: "Each animal with breed, age, weight and microchip, and a healthy / check-up-due status at a glance.",
  },
  {
    n: "03",
    title: "Health records",
    body: "Vaccinations, checkups, lab results and weight checks, each with a date and the vet who saw them.",
  },
  {
    n: "04",
    title: "Medications & appointments",
    body: "Active and finished prescriptions with dosage and refill dates, plus the visit calendar and the clinic for each.",
  },
  {
    n: "05",
    title: "Photo library",
    body: "A visual history of each pet, stored with the record instead of scattered across a camera roll.",
  },
  {
    n: "06",
    title: "Emergency",
    body: "The emergency checker, poison control and first aid guides — the things you want at 2 a.m., one click away.",
  },
];

const FACTS = [
  { value: "local", label: "by default — records and photos never leave your machine" },
  { value: "your model", label: "local, or a provider you configure" },
  { value: "vet first", label: "every answer points back to your veterinarian" },
];

const FAQS = [
  {
    q: "Where does my pet's data live?",
    a: "In the self-hosted deployment the whole application runs on your own hardware: the pets, the records, the photos and the chat history stay in your own database. The film was recorded against a local stand-in database with fictional data, and nothing was uploaded anywhere.",
  },
  {
    q: "Is it a substitute for a vet?",
    a: "No, and the product says so on every answer. It is a companion that organises the record and answers from it, and every response carries the reminder to consult a veterinarian for medical decisions.",
  },
  {
    q: "What can the assistant answer?",
    a: "Questions about the pets on the account — symptoms to watch, what a record says, when the next visit is. It answers from that pet's own record in plain language, and stops there.",
  },
  {
    q: "Can it run air-gapped?",
    a: "Yes. It is delivered inside the perimeter, including air-gapped configurations, with the assistant running against a local model.",
  },
  {
    q: "Who is it for?",
    a: "Owners who want the convenience of an AI pet-health assistant without uploading a lifetime of records and photos to somebody else's cloud — and clinics or corporate programmes that need the data to stay where they are.",
  },
];

/* --------------------------------------------------------------------- page */

export default function PawsitiveCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pawsitiveVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "AI Pawsitive Care", path: "/ai-pawsitive-care" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/ai-pawsitive-demo.mp4"
        poster="/ai-pawsitive-demo-poster.jpg"
        ariaLabel="AI Pawsitive Care product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Private pet health companion
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            AI Pawsitive Care: the help, without the upload
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            A pet health companion that answers from your own animals&apos;
            records, keeps every photo and visit where you put it, and runs the
            whole application on hardware you control. Self-hosted, and local by
            default.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film above is the real application, recorded end to end — and it
            is a companion, not a vet: every answer carries the standing reminder
            to consult a veterinarian for medical decisions.
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
            Eight surfaces, three and a half minutes, one machine.
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
            store, the photo library and the assistant.
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
              Keep the record where the pet is
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy AI Pawsitive Care on your hardware, with the assistant on
              a model you choose — sovereign, hybrid or air-gapped, and with the
              vet-first reminder built in.
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
                <Link href="/ai-wise-health" className="hover:underline">AI Wise Health</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The private health assistant that keeps your records inside your perimeter.
              </p>
            </div>
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
