import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Veritas AI",
  description: "Start a conversation with Veritas AI. Schedule a discovery call, request an AI readiness assessment, or discuss your AI challenges with our team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Let&apos;s Talk</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Every great AI project starts with an honest conversation. Tell us about your
            challenge and we&apos;ll tell you whether — and how — AI can help.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Work email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">
                    I&apos;m interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="strategy">AI Strategy & Advisory</option>
                    <option value="ml">Machine Learning Solutions</option>
                    <option value="genai">Generative AI & LLMs</option>
                    <option value="data">Data Engineering & Infrastructure</option>
                    <option value="assessment">AI Readiness Assessment</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Tell us about your challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
                    placeholder="What business problem are you trying to solve? What have you tried so far?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What to expect</h3>
                <ul className="space-y-4">
                  {[
                    { step: "1", text: "We'll respond within 1 business day." },
                    { step: "2", text: "A 30-minute discovery call to understand your challenge — no pitch, no deck." },
                    { step: "3", text: "If there's a fit, we'll propose a fixed-price feasibility assessment or pilot." },
                    { step: "4", text: "If AI isn't the right move, we'll tell you — and suggest alternatives." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </span>
                      <span className="text-sm text-slate-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Prefer email?</h3>
                <p className="text-sm text-slate-600">
                  Reach us directly at{" "}
                  <a href="mailto:hello@veritas-ai.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    hello@veritas-ai.com
                  </a>
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  For press inquiries:{" "}
                  <a href="mailto:press@veritas-ai.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    press@veritas-ai.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Location</h3>
                <p className="text-sm text-slate-600">
                  Remote-first team with presence in<br />
                  San Francisco, New York, and London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
