import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  synapseVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Veritas SynapseCore — AI Agent + Vector Vault",
  description:
    "Veritas SynapseCore is an AI agent with a vector vault: MCP servers become agent capabilities, documents are embedded on upload so retrieval stays local, and the model, prompt and theme are yours to tune — in one workspace you host.",
  path: "/synapsecore",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "Servers",
    body: "The agent's capabilities come from MCP servers — connect what you already run and each server shows the tools it exposes, ready to be refreshed or removed.",
  },
  {
    n: "02",
    title: "Vector Vault",
    body: "Knowledge bases for each body of work: documents are embedded on upload, so retrieval runs locally and the index never leaves the machine.",
  },
  {
    n: "03",
    title: "Dashboard",
    body: "Documents across every base, knowledge bases ready for queries, embeddings calculated, and AI queries tracked by the API.",
  },
  {
    n: "04",
    title: "Chat",
    body: "Pick a knowledge base and ask — the assistant answers from what you put in the vault, not from a general model's memory.",
  },
  {
    n: "05",
    title: "Settings",
    body: "Theme, model provider and configuration live in your workspace, so the agent is yours to tune rather than somebody else's default.",
  },
  {
    n: "06",
    title: "Self-hosted",
    body: "The vault, the servers and the model run where you put them — sovereign, hybrid or air-gapped.",
  },
];

const FACTS = [
  { value: "MCP", label: "any tool server you run becomes a capability" },
  { value: "local", label: "retrieval — the index stays on your machine" },
  { value: "yours", label: "to tune: model, prompt, theme" },
];

const FAQS = [
  {
    q: "What is Veritas SynapseCore?",
    a: "An AI agent with a vector vault: MCP tool servers for capabilities, knowledge bases for your documents, and a chat that answers from what you put in the vault. The whole workspace is self-hosted.",
  },
  {
    q: "How do the agent's tools work?",
    a: "Through MCP. Connect a tool server you already run, and SynapseCore shows the tools it exposes and makes them available to the agent. Any MCP server — search, parsing, integrations — becomes a capability.",
  },
  {
    q: "Where does my knowledge live?",
    a: "In your deployment. Documents are embedded on upload and the index stays on your machine, so retrieval is local. The film was recorded against a local demo workspace with fictional knowledge bases.",
  },
  {
    q: "Can I tune the model?",
    a: "Yes. The provider, the system prompt and the theme are workspace configuration, not licence terms — bring the model you want, local or hosted.",
  },
  {
    q: "Who builds it?",
    a: "Veritas SynapseCore is a Veritas Global AI product, alongside miniNotebook, Veritas OS, MindVault and AI Wise Health. We design sovereign, hybrid and air-gapped AI deployments for regulated industries.",
  },
];

/* --------------------------------------------------------------------- page */

export default function SynapseCorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(synapseVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Veritas SynapseCore", path: "/synapsecore" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/vvault-demo.mp4"
        poster="/vvault-demo-poster.jpg"
        ariaLabel="Veritas SynapseCore product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · AI agent + vector vault
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            SynapseCore: your agents, your knowledge, your hardware
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            An AI agent with a vector vault. Connect the tool servers you already
            run over MCP, index your documents locally on upload, and ask the
            assistant questions that are answered from the vault.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-2xl max-w-2xl">
            The film walks the workspace: servers, the vault, a knowledge base
            created live, and where the model and prompt are set.
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
            Six surfaces, two minutes, one workspace.
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
              Run the agent where the knowledge is
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy SynapseCore on your hardware, wire the MCP servers you
              already run, and set the vault up around your documents —
              sovereign, hybrid or air-gapped.
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
