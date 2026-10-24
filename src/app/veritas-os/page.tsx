import type { Metadata } from "next";
import Link from "next/link";
import PromoFilm from "@/components/PromoFilm";
import SocialLinks from "@/components/SocialLinks";
import {
  pageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  veritasOsVideoJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Veritas OS — Agent-Native Desktop Shell (Full Demo)",
  description:
    "Veritas OS is an agent-native desktop shell: a dock, windows, spaces, files, canvas and a terminal, built around a control room for every AI agent you run — Hermes, OpenCode and any CLI you add.",
  path: "/veritas-os",
});

/* ------------------------------------------------------------------ content */

const SURFACES = [
  {
    n: "01",
    title: "Overview",
    body: "Your day, already in motion: what is running, what needs you, what you were working on — inside one of three spaces.",
  },
  {
    n: "02",
    title: "Hermes",
    body: "The native agent surface: streaming answers, a running thread, and a preview panel beside it for whatever it drafts.",
  },
  {
    n: "03",
    title: "Agent Hub",
    body: "Every agent as a live card — phase, port, start, stop, restart, log tail, pair, and a one-click jump into its own interface.",
  },
  {
    n: "04",
    title: "Missions",
    body: "A goal becomes a plan. Choose which agent runs it; Hermes works the steps and records every tool call as activity.",
  },
  {
    n: "05",
    title: "Files & Automations",
    body: "A real file manager over your home directory, and routines that run on a schedule or an event — handed to the agent you pick.",
  },
  {
    n: "06",
    title: "Canvas, Terminal, Browser",
    body: "A layered image editor with PSD support, a real PTY with tabs, and Chromium inside the shell — or hand the page to BrowserOS.",
  },
];

const FACTS = [
  { value: "JSON", label: "to add an agent: name, command, health URL" },
  { value: "12", label: "built-in themes — or one made from an image" },
  { value: "local", label: "processes, files and history on your machine" },
];

const FAQS = [
  {
    q: "What is an agent-native desktop shell?",
    a: "A desktop environment where agents are first-class residents rather than a sidebar bolted onto a chat app. Veritas OS gives you a dock, windows, spaces, files, canvas and terminal — and a control room that starts, stops, monitors and pairs every agent you run.",
  },
  {
    q: "Which agents can it run?",
    a: "Hermes is native, with JSON-RPC chat, sessions and approvals. OpenCode attaches to its own shared background service, so pairing links and sessions are the same world as your terminal. Any local process with an HTTP health endpoint can be registered from a small JSON spec in ~/.config/veritas-os/agents.json.",
  },
  {
    q: "Does it need a cloud account?",
    a: "No. Every capability shown in the film is a local process talking to local processes: files, history, memory and agent logs stay on the machine. The model is your choice — a local model, or a provider you configure.",
  },
  {
    q: "Can it run air-gapped?",
    a: "Yes. Veritas OS ships as a self-hosted deployment and is delivered inside the perimeter, including fully air-gapped configurations where nothing crosses the boundary, updates included.",
  },
  {
    q: "Is it open source?",
    a: "The shell is a fork of Herald OS (MIT) rebuilt around a multi-agent manager, and it is published on GitHub. You can fork it, extend it, and run it on your own hardware.",
  },
];

/* --------------------------------------------------------------------- page */

export default function VeritasOsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veritasOsVideoJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Veritas OS", path: "/veritas-os" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      <PromoFilm
        src="/veritas-os-demo.mp4"
        poster="/veritas-os-demo-poster.jpg"
        ariaLabel="Veritas OS product walkthrough film"
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="section-rule mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
            Product · Agent-native desktop
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7 max-w-4xl">
            Veritas OS: an agent-native shell you actually own
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-6 max-w-2xl">
            A dock, windows, spaces, files, canvas and a terminal — built around
            a control room for every agent you run. Hermes answers in your own
            words, OpenCode brings its own interface, and any local process with
            a health endpoint can join them from a small JSON file.
          </p>
          <p className="text-slate leading-relaxed mb-10 max-w-2xl">
            The film above is the real shell, recorded end to end: a prompt
            typed and answered, an agent added, a mission planned, themes
            switched live. No cloud account, no mockups.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Discuss a Veritas OS deployment
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="https://github.com/Aimotive-agent/veritas-os"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
            >
              View the source
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
            Nine surfaces, four and a half minutes, one machine.
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
            How it fits together
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-12 max-w-2xl">
            One shell, many agents, nothing hidden in someone else&apos;s cloud.
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
              Put your agents inside your perimeter
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We deploy Veritas OS on your hardware, connect the agents you
              already use, and hand over a shell your team owns. Sovereign,
              hybrid or air-gapped.
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
                <Link href="/private-ai-deployment" className="hover:underline">Deployment architecture</Link>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Four models, six controls, eight weeks to first production.
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
