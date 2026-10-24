import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  taxAiVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Veritas Tax AI — Cross-Border Tax Compliance in One Workspace",
  description:
    "Veritas Tax AI keeps companies, documents, jurisdictions and an AI tax assistant in one self-hosted workspace: invoices and receipts per entity, country-specific tax forms, and plain-language answers grounded in the jurisdiction you select.",
  path: "/taxai",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "Companies first",
    body: "Every document, receipt and filing belongs to a named entity. Adding one takes a name — that is the whole setup.",
  },
  {
    n: "02",
    title: "Jurisdiction aware",
    body: "The country drives the form, the thresholds and the guidance. Switch it and the assistant follows.",
  },
  {
    n: "03",
    title: "Tax AI assistant",
    body: "Ask a tax question in plain language and get an answer grounded in the jurisdiction you selected — with the standing reminder to confirm with a local adviser.",
  },
  {
    n: "04",
    title: "Invoices & receipts",
    body: "Evidence sits next to the claim it supports, captured per company rather than buried in an inbox.",
  },
  {
    n: "05",
    title: "Tax forms",
    body: "Country-specific forms — US 1120, UK CT600, Australian company return, German and French equivalents — generated from what you uploaded.",
  },
  {
    n: "06",
    title: "Self-hosted",
    body: "The workspace runs on your infrastructure, in the language you work in, not in somebody else's tenancy.",
  },
];

const FACTS = [
  { value: "6+", label: "jurisdictions wired for forms and guidance" },
  { value: "local", label: "workspace — your documents stay in your deployment" },
  { value: "adviser", label: "first: every answer says confirm before filing" },
];

const FAQS = [
  {
    q: "What is Veritas Tax AI?",
    a: "A self-hosted workspace for cross-border tax compliance: companies, invoices and receipts, country-specific tax forms, and an AI assistant that answers tax questions grounded in the jurisdiction you selected.",
  },
  {
    q: "Which countries are supported?",
    a: "The workspace ships with forms and guidance for the United States, United Kingdom, Australia, Canada, Germany, France, India and Thailand, and the assistant follows whichever jurisdiction is active.",
  },
  {
    q: "Where do my documents live?",
    a: "In your own deployment. The workspace is self-hosted, so invoices, receipts and company records stay on your infrastructure rather than in a vendor tenancy. The film was recorded locally against a demo company with fictional documents.",
  },
  {
    q: "Is the AI giving tax advice?",
    a: "No. It gives general guidance grounded in the selected jurisdiction and the app states, on every answer, that filing decisions should be confirmed with a qualified tax professional.",
  },
  {
    q: "Does it replace an accountant?",
    a: "No — it replaces the spreadsheet archaeology. It organises the evidence per company, points at the right form, and answers the recurring questions, so the conversation with your accountant starts from a complete file.",
  },
];

/* --------------------------------------------------------------------- page */

export default function TaxAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxAiVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Veritas Tax AI", path: "/taxai" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/taxai-demo.mp4"
        poster="/taxai-demo-poster.jpg"
        ariaLabel="Veritas Tax AI product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Cross-border tax compliance
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            Veritas Tax AI: one workspace, every jurisdiction
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            Companies, invoices and receipts, country-specific tax forms, and an
            AI assistant that answers grounded in the jurisdiction you selected —
            in a workspace you host.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film walks the whole thing: creating a company, uploading the
            evidence, asking the assistant, and generating the form for the
            country you are filing in.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Discuss a deployment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="https://taxai.veritasglobalai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Open the live demo
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
            Six surfaces, under three minutes, one workspace.
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
            The shape of it
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-line mt-10">
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
              Keep the filing inside the perimeter
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy Veritas Tax AI on your infrastructure, with the assistant
              on a model you choose — sovereign, hybrid or air-gapped.
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
                <Link href="/ai-wise-health" className="hover:underline">AI Wise Health</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The private health assistant that keeps your records inside your perimeter.
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
