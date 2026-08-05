"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";

const engagementSteps = [
  { step: "1", text: "We'll respond within one business day to schedule your confidential consultation." },
  { step: "2", text: "A direct conversation with our solutions engineering team — no sales gatekeepers." },
  { step: "3", text: "We map your data estates, regulatory constraints, and latency requirements." },
  { step: "4", text: "You receive a target architecture and a scoped engagement plan." },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Private Consultation</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Begin Your Enterprise AI Journey
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Every engagement begins with a confidential architecture consultation. No pricing pages.
              No self-service tiers. A direct conversation with our solutions engineering team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-8">Request Private Briefing</h2>

                {formState === "success" ? (
                  <div className="border border-green-300 bg-green-50 p-8 lg:p-10">
                    <h3 className="font-serif font-semibold text-xl text-green-800 mb-3">Message Sent</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Thank you for reaching out. Our solutions engineering team will respond within one business day to schedule your confidential consultation.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-6 btn-primary font-medium px-6 py-2.5 text-sm tracking-wide inline-flex items-center gap-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="border border-line bg-paper p-8 lg:p-10">
                    {formState === "error" && (
                      <div className="mb-6 p-4 border border-red-300 bg-red-50 text-sm text-red-700">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name <span className="text-red-700">*</span></label>
                        <input type="text" id="name" name="name" required placeholder="Jane Thornton" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">Company <span className="text-red-700">*</span></label>
                        <input type="text" id="company" name="company" required placeholder="Enterprise Corp" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Work Email <span className="text-red-700">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="jane@enterprise.com" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">Role</label>
                        <select id="role" name="role" className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                          <option value="">Select your role…</option>
                          <option value="c-level">C-Level Executive</option>
                          <option value="vp">VP / Director</option>
                          <option value="head-tech">Head of Technology</option>
                          <option value="procurement">Procurement Lead</option>
                          <option value="architect">Enterprise Architect</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="interest" className="block text-sm font-medium text-ink mb-2">Primary Area of Interest</label>
                      <select id="interest" name="interest" required className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                        <option value="">Select a solution…</option>
                        <option value="saas">Enterprise SaaS</option>
                        <option value="agents">AI Agents</option>
                        <option value="chatbots">Neural Chatbots</option>
                        <option value="websites">Intelligent Websites</option>
                        <option value="rag">RAG Systems</option>
                        <option value="marketing">AI Marketing</option>
                        <option value="full">Full Platform Consultation</option>
                      </select>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Brief Description of Requirements <span className="text-red-700">*</span></label>
                      <textarea id="message" name="message" rows={5} required placeholder="Tell us about your use case or current infrastructure challenges…" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none"></textarea>
                    </div>
                    <div className="mt-6 flex items-start gap-3">
                      <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 border-line text-navy focus:ring-navy flex-shrink-0" />
                      <label htmlFor="consent" className="text-xs text-muted leading-relaxed">I agree to Veritas Global AI&apos;s <a href="/privacy" className="text-navy hover:underline">Privacy Policy</a> and consent to being contacted regarding enterprise AI solutions. All information is handled under strict confidentiality.</label>
                    </div>
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-primary font-medium px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" ? (
                          <>
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Request Private Consultation
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

            <div className="space-y-10">
              <Reveal>
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">What to expect</h3>
                <ul className="space-y-4">
                  {engagementSteps.map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <span className="font-serif text-lg font-semibold text-gold flex-shrink-0">{item.step}</span>
                      <span className="text-sm text-slate">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="border border-line bg-paper p-6">
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">Prefer email?</h3>
                <p className="text-sm text-slate">
                  Reach us directly at{" "}
                  <a href="mailto:info@veritas-global-ai.com" className="text-navy hover:underline font-medium">
                    info@veritas-global-ai.com
                  </a>
                </p>
                <p className="text-sm text-slate mt-2">
                  For support:{" "}
                  <a href="mailto:support@veritas-global-ai.com" className="text-navy hover:underline font-medium">
                    support@veritas-global-ai.com
                  </a>
                </p>
              </Reveal>

              <Reveal>
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">Compliance</h3>
                <div className="flex flex-wrap gap-2">
                  {["SOC 2", "ISO 27001", "HIPAA", "GDPR", "FedRAMP"].map((c) => (
                    <span key={c} className="px-2.5 py-1 border border-line text-xs text-ink font-medium">{c}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
