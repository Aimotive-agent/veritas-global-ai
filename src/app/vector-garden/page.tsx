import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import { pageMeta, breadcrumbJsonLd, faqJsonLd, vectorGardenVideoJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Vector Garden — Private Vector Knowledge Base + AI Chat",
  description:
    "Vector Garden is a private vector knowledge base: upload documents, search them semantically, and chat over them with retrieval-augmented AI — on infrastructure you control, with the source document named in every answer.",
  path: "/vector-garden",
});

const SURFACES = [
  { n: "01", title: "Vector bases", body: "One collection per body of work, each with its own documents and its own index." },
  { n: "02", title: "Documents", body: "Upload a file and it is chunked and embedded on the box; the row shows size, chunk count and processing status." },
  { n: "03", title: "Semantic search", body: "Find the passage with a natural-language query instead of hunting filenames." },
  { n: "04", title: "AI chat", body: "Ask a question and the assistant answers from those documents, naming the source it used." },
  { n: "05", title: "Webhooks & REST API", body: "Bring your own automation in: a documented API and webhooks to feed the base from other systems." },
  { n: "06", title: "Self-hosted", body: "The base, the embeddings and the chat run where you put them — sovereign, hybrid or air-gapped." },
];

const FACTS = [
  { value: "pgvector", label: "vector storage on Postgres you own" },
  { value: "local", label: "embeddings — the index never leaves the machine" },
  { value: "cited", label: "answers name the document they came from" },
];

const FAQS = [
  { q: "What is Vector Garden?", a: "A private vector knowledge base with an AI chat on top: upload documents, chunk and embed them locally, search semantically, and ask questions answered from that collection with the source named." },
  { q: "Where does the data live?", a: "In your deployment. The vector base runs on Postgres with pgvector inside your own infrastructure, and embeddings are calculated where the documents are stored. The film was recorded against a local demo workspace with fictional documents." },
  { q: "How does retrieval work?", a: "Documents are chunked and embedded on upload. A question is answered by retrieving the most relevant chunks and generating from them — not from a general model's memory — and the chat names the document it used." },
  { q: "Can I feed it from other systems?", a: "Yes. There is a REST API and webhooks, so documents and events can be pushed in from the systems that already hold them." },
  { q: "Who builds it?", a: "Vector Garden is a Veritas Global AI product, alongside miniNotebook, Veritas OS, SynapseCore and MindVault. We design sovereign, hybrid and air-gapped AI deployments for regulated industries." },
];

export default function VectorGardenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vectorGardenVideoJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Vector Garden", path: "/vector-garden" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <PromoFilm src="/vectorgarden-demo.mp4" poster="/vectorgarden-demo-poster.jpg" ariaLabel="Vector Garden product walkthrough film" />

      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">Product · Private vector knowledge base</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            Vector Garden: store it, search it, ask it
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            Your documents, chunked and embedded locally, searchable in natural
            language, and answerable through a chat that names the document each
            answer came from — on infrastructure you control.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film walks the whole application: the pitch, the workspace sign-in,
            a vector base, its documents and the AI chat.
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
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">Six surfaces, two minutes, one workspace.</p>
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
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">Keep the knowledge where it is</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy Vector Garden on your hardware, connect it to the systems
              that already hold your documents, and hand over a base your team
              owns — sovereign, hybrid or air-gapped.
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
              <h3 className="font-serif text-lg font-semibold text-white mb-2"><Link href="/mininotebook" className="hover:underline">miniNotebook</Link></h3>
              <p className="text-gray-400 text-sm leading-relaxed">The grounded AI notebook that runs inside your perimeter.</p>
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
