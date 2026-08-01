import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment — Veritas AI",
  description: "Get a free AI readiness assessment. We'll evaluate your data, infrastructure, and use cases, then deliver a prioritized roadmap with clear ROI estimates.",
};

const deliverables = [
  "AI opportunity map — prioritized by ROI and feasibility",
  "Data readiness scorecard with gap analysis",
  "Build-vs-buy recommendations for your top 3 use cases",
  "12-month AI roadmap with milestones and investment estimates",
  "Executive summary suitable for board and investor presentation",
];

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Free Engagement
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              AI Readiness Assessment
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              A 2-week structured evaluation of your organization&apos;s AI potential.
              We assess your data, infrastructure, team readiness, and use cases —
              then deliver a prioritized roadmap with clear ROI estimates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What You Get</h2>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 pt-1">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-indigo-50 rounded-2xl">
                <h3 className="font-semibold text-slate-900 mb-2">How It Works</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">1.</span>
                    <span><strong>Discovery call</strong> — 30 minutes to understand your goals and current AI maturity.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">2.</span>
                    <span><strong>Data & infrastructure review</strong> — we&apos;ll need read-access to your data catalog and architecture docs (NDA-protected).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">3.</span>
                    <span><strong>Stakeholder interviews</strong> — 3–5 conversations with business and technical leaders.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">4.</span>
                    <span><strong>Assessment delivery</strong> — a 90-minute readout with your leadership team. You get the slide deck and all underlying analysis.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 sticky top-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Your Assessment</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">First name *</label>
                      <input type="text" id="first-name" required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Jane" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">Last name *</label>
                      <input type="text" id="last-name" required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work email *</label>
                    <input type="email" id="email" required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                    <input type="text" id="company" required className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="context" className="block text-sm font-medium text-slate-700 mb-1">What AI challenges are you facing?</label>
                    <textarea id="context" rows={3} className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y" placeholder="Brief description of your goals or challenges" />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25">
                    Request Assessment
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Free for qualified organizations. We&apos;ll respond within 1 business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
