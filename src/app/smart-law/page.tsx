import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import { pageMeta, breadcrumbJsonLd, faqJsonLd, smartLawVideoJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Smart Law Workbench — Private Legal Case Workspace",
  description:
    "Smart Law Workbench keeps the matter, the documents, the notes and the timeline in one workspace, with an AI legal assistant that answers from that file and names the clause and document it relied on.",
  path: "/smart-law",
});

const SURFACES = [
  { n: "01", title: "Cases", body: "Client, matter number, practice area, jurisdiction and the next action — the unit everything else hangs from." },
  { n: "02", title: "The file", body: "Documents, notes, links and a timeline sit together inside the matter, so the context is the file rather than a paste." },
  { n: "03", title: "Legal assistant", body: "Ask about the matter and the answer comes from those documents, naming the clause and the note it relied on." },
  { n: "04", title: "Legal research", body: "Research alongside the case, so checking a point does not mean leaving the workspace." },
  { n: "05", title: "Templates", body: "A template library for the documents that repeat: letters before action, particulars, notices." },
  { n: "06", title: "Self-hosted", body: "Matters stay on your infrastructure, in a workspace you host — sovereign, hybrid or air-gapped." },
];

const FACTS = [
  { value: "file-first", label: "the matter is the context, not a chat box" },
  { value: "cited", label: "answers name the clause and document" },
  { value: "local", label: "workspace — client data stays in your deployment" },
];

const FAQS = [
  { q: "What is Smart Law Workbench?", a: "A self-hosted legal case workspace: matters, documents, notes, links and a timeline, with a legal assistant that answers from the file and names the clause and document it used." },
  { q: "Where does client data live?", a: "In your deployment. Matters, documents and chat history stay on your infrastructure. The film was recorded against a local demo workspace with a fictional matter." },
  { q: "Does the assistant give legal advice?", a: "No. It is a research and drafting assistant: every screen carries a disclaimer that the output is informational, is not legal advice, and does not create an attorney-client relationship." },
  { q: "Can it draft documents?", a: "Yes — drafting, review and compilation sit alongside a template library, so the letter or the pleading is produced in the same place as the case file." },
  { q: "Who builds it?", a: "Smart Law Workbench is a Veritas Global AI product, alongside SynapseCore, Vector Garden, miniNotebook and Veritas OS. We design sovereign, hybrid and air-gapped AI deployments for regulated industries." },
];

export default function SmartLawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smartLawVideoJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Smart Law Workbench", path: "/smart-law" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <PromoFilm src="/smartlaw-demo.mp4" poster="/smartlaw-demo-poster.jpg" ariaLabel="Smart Law Workbench product walkthrough film" />

      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">Product · Legal case workspace</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            Smart Law Workbench: the file is the context
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            A legal workspace where the matter, the documents, the notes and the
            timeline live together — and the assistant answers from that file,
            naming the clause and document it relied on.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film walks a fictional matter end to end: the pitch, the sign-in,
            the case list, the file, and the assistant answering a set-off
            argument with the clause that answers it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Discuss a deployment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/private-ai-cost" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              What private AI deployment costs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">What the walkthrough shows</h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">Six surfaces, two and a half minutes, one matter.</p>
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

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">The shape of it</h2>
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

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-4xl mx-auto">
          <div className="section-rule mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10 leading-tight">Questions buyers ask first</h2>
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

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">Keep the matter inside the perimeter</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy Smart Law Workbench on your infrastructure, with the
              assistant on a model you choose — sovereign, hybrid or air-gapped.
            </p>
            <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              Request a deployment conversation
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <SocialLinks variant="dark" className="mt-10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-14">
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2"><Link href="/synapsecore" className="hover:underline">SynapseCore</Link></h3>
              <p className="text-gray-400 text-sm leading-relaxed">An AI agent with a vector vault, self-hosted.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2"><Link href="/vector-garden" className="hover:underline">Vector Garden</Link></h3>
              <p className="text-gray-400 text-sm leading-relaxed">A private vector knowledge base with an AI chat.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2"><Link href="/ai-governance" className="hover:underline">AI governance</Link></h3>
              <p className="text-gray-400 text-sm leading-relaxed">The evidence pack a regulator will actually ask for.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
