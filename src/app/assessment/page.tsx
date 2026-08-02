import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Veritas Global AI",
  description: "A confidential assessment of your enterprise AI readiness — data estates, regulatory constraints, and latency requirements, delivered as a target architecture and scoped engagement plan.",
};

const deliverables = [
  "Data estate and regulatory constraint mapping",
  "AI readiness scorecard with gap analysis",
  "Target architecture specification",
  "Phased deployment roadmap with milestones",
  "Compliance posture assessment — SOC 2, ISO 27001, HIPAA, GDPR",
];

const processSteps = [
  { step: "1", title: "Discovery Call", text: "Confidential consultation to understand your goals, data estates, and regulatory constraints." },
  { step: "2", title: "Architecture Review", text: "We map your infrastructure, data residency requirements, and latency needs (NDA-protected)." },
  { step: "3", title: "Feasibility Analysis", text: "Technical assessment of each proposed pillar against your acceptance criteria — not our benchmarks." },
  { step: "4", title: "Readout & Roadmap", text: "A target architecture and scoped engagement plan with your leadership team." },
];

export default function AssessmentPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Enterprise Readiness</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              AI Readiness Assessment
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              A confidential structured evaluation of your enterprise&apos;s AI potential — your data
              estates, regulatory constraints, and latency requirements. Delivered as a target
              architecture, not a sales pitch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-6">What You Get</h2>
                <ul className="space-y-4">
                  {deliverables.map((item, i) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-8 h-8 flex items-center justify-center bg-navy text-white text-sm font-semibold flex-shrink-0">{i + 1}</span>
                      <span className="text-slate pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-10 border border-line bg-paper p-6">
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">How It Works</h3>
                <ol className="space-y-4 text-sm text-slate">
                  {processSteps.map((s) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="font-serif font-semibold text-gold flex-shrink-0">{s.step}.</span>
                      <span><strong className="text-ink">{s.title}</strong> — {s.text}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <div>
              <Reveal className="border border-line bg-paper p-8 lg:p-10 lg:sticky lg:top-28">
                <h2 className="font-serif font-semibold text-2xl text-ink mb-6">Request Your Assessment</h2>
                <form method="POST" action="/contact" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-ink mb-2">Full Name <span className="text-red-700">*</span></label>
                      <input type="text" id="first-name" name="name" required placeholder="Jane Thornton" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">Company <span className="text-red-700">*</span></label>
                      <input type="text" id="company" name="company" required placeholder="Enterprise Corp" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Work Email <span className="text-red-700">*</span></label>
                    <input type="email" id="email" name="email" required placeholder="jane@enterprise.com" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="context" className="block text-sm font-medium text-ink mb-2">Brief Description of Your Infrastructure & Challenges</label>
                    <textarea id="context" name="message" rows={4} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none" placeholder="Tell us about your use case or current infrastructure challenges…"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary font-medium px-8 py-3.5 text-sm tracking-wide">
                    Request Assessment
                  </button>
                  <p className="text-xs text-muted text-center">
                    Confidential. Handled under strict NDA. We&apos;ll respond within one business day.
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
