import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  mindvaultVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "MindVault — Your Digital Brain, Anywhere",
  description:
    "MindVault pairs advanced AI with secure, portable storage: a one-time investment instead of a monthly subscription, with your knowledge private, secure and readable offline. Full walkthrough of the product line and the technology.",
  path: "/mindvault",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "The line",
    body: "Portable drives for students through to desktop builds for teams — pick the capacity and the speed, keep the vault.",
  },
  {
    n: "02",
    title: "Software solutions",
    body: "Desktop software tiers from Basic to Enterprise, priced as a one-time purchase or an annual licence, with vector limits and model support that scale with the tier.",
  },
  {
    n: "03",
    title: "Security & privacy",
    body: "AES-256 encryption, biometric authentication, secure boot and local-only data residency — the vault works with the network switched off.",
  },
  {
    n: "04",
    title: "Knowledge graph",
    body: "Intelligent relationship mapping between concepts and documents, so retrieval is a question rather than a folder hunt.",
  },
  {
    n: "05",
    title: "Performance",
    body: "Engineered for speed: intelligent caching, multi-threaded processing and hardware acceleration, with query response in the sub-100 ms class.",
  },
  {
    n: "06",
    title: "Bundles",
    body: "Hardware and software bought together, at a discount — the complete knowledge-management stack in one purchase.",
  },
];

const FACTS = [
  { value: "one-time", label: "investment, not a monthly subscription" },
  { value: "offline", label: "first — the vault works with no network" },
  { value: "AES-256", label: "encryption, with biometric authentication" },
];

const FAQS = [
  {
    q: "What is MindVault?",
    a: "A personal knowledge vault: portable AI storage hardware plus desktop software that indexes what you put into it, so your documents, notes and research are organised by AI and readable offline. It is positioned as a one-time investment rather than a subscription to somebody else's server.",
  },
  {
    q: "Where does my data live?",
    a: "On the vault you own. Data residency is local-only, with AES-256 encryption and biometric authentication, and the AI indexing runs where the data is rather than in a cloud tenancy.",
  },
  {
    q: "Does it work offline?",
    a: "That is the design point. The vault is offline-first: retrieval, the knowledge graph and the AI features work with the network switched off.",
  },
  {
    q: "How is it sold?",
    a: "As hardware, as desktop software, or as a bundle. The software tiers scale on vector limits and model support, from a student's portable drive to an enterprise desktop build.",
  },
  {
    q: "Who builds it?",
    a: "MindVault is a Veritas Global AI product, alongside miniNotebook, DocuCon, Veritas OS and AI Wise Health. We design sovereign, hybrid and air-gapped AI deployments for regulated industries.",
  },
];

/* --------------------------------------------------------------------- page */

export default function MindVaultPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mindvaultVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "MindVault", path: "/mindvault" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/mindvault-demo.mp4"
        poster="/mindvault-demo-poster.jpg"
        ariaLabel="MindVault product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Portable AI knowledge
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            MindVault: your digital brain, anywhere
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            A personal knowledge vault that pairs advanced AI with secure,
            portable storage. A one-time investment instead of a monthly
            subscription — private, secure, and readable offline.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film above walks the product line, the software tiers, the
            security model and the technology behind the knowledge graph.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Discuss a MindVault deployment
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
            Six things, two minutes, one page.
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
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            Hardware you hold, software you own, and no cloud tenancy in the
            middle.
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
              Own the vault instead of renting the service
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy MindVault on your hardware and inside your perimeter —
              sovereign, hybrid or air-gapped — with the knowledge base running
              where the data is.
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
