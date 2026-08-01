import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Veritas AI",
  description: "Veritas AI is an enterprise AI consultancy built on truth, transparency, and measurable outcomes. We help mid-market and enterprise organizations deploy AI that works.",
};

const values = [
  {
    title: "Truth Over Hype",
    desc: "We say no when AI isn't the answer. We celebrate honest feasibility assessments as much as successful deployments.",
  },
  {
    title: "Outcomes Over Outputs",
    desc: "A model that scores well in a notebook but never reaches production is a failure. We measure success by business impact — revenue, savings, speed.",
  },
  {
    title: "Transparency as a Feature",
    desc: "Open architecture, fixed pricing, clear timelines. No black boxes in our models or our contracts.",
  },
  {
    title: "Client Enablement, Not Dependency",
    desc: "We build your team's capability as we build your AI. You should be stronger after we leave, not weaker.",
  },
  {
    title: "Rigor in Everything",
    desc: "From data engineering to model evaluation to deployment — we apply the same standards we'd want if the model were making decisions about us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Veritas AI</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;re building the AI consultancy we wish existed — one that puts truth,
            transparency, and measurable impact at the center of every engagement.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Veritas AI was founded on a simple observation: the enterprise AI market is
                broken. Large consultancies sell multi-year, multi-million-dollar
                transformations that never reach production. SaaS vendors lock you into
                proprietary platforms. And the mid-market — companies with real AI potential
                and real budgets — gets ignored by everyone.
              </p>
              <p>
                Our team came from the organizations we&apos;re now competing with. We&apos;ve
                deployed AI inside Fortune 100 companies, government agencies, and
                high-growth startups. We&apos;ve seen what works, what doesn&apos;t, and where the
                waste happens. We built Veritas to do it better.
              </p>
              <p>
                The name — Veritas, Latin for truth — reflects our founding belief:
                trustworthy AI starts with trustworthy people and transparent processes.
                Every model we build is auditable. Every engagement has clear success
                criteria. Every recommendation is platform-agnostic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Values</h2>
            <p className="mt-4 text-lg text-slate-600">
              These aren&apos;t posters on a wall. They&apos;re how we make every decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Leadership</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Our team brings deep experience from top AI labs, enterprise software companies,
            and management consultancies. Full leadership profiles coming soon.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["CEO & Co-Founder", "CTO & Co-Founder", "Head of AI Delivery", "Head of Strategy"].map((role) => (
              <div key={role} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  {role[0]}
                </div>
                <div className="mt-4 font-semibold text-slate-900">{role}</div>
                <div className="text-sm text-slate-500">Bio coming soon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Join us</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            We&apos;re always looking for people who care about doing AI right.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
