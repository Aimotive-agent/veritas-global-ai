import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Veritas AI",
  description:
    "Contact Veritas AI to discuss your enterprise AI transformation. Schedule a consultation with our team of AI strategy, engineering, and MLOps experts.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s start the conversation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Tell us about your AI goals, challenges, or questions. Our team
            will respond within one business day to schedule an initial
            consultation.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-primary"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-primary"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="john.smith@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-primary"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Acme Corporation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-primary"
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    required
                    defaultValue=""
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option>AI Strategy & Advisory</option>
                    <option>Custom AI Model Development</option>
                    <option>MLOps & AI Infrastructure</option>
                    <option>Enterprise Automation</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-primary"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Describe your AI goals, challenges, timeline, and any other relevant details..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-base font-semibold text-primary shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
                >
                  Send Message <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="text-base font-bold text-primary">
                  What happens next?
                </h3>
                <ol className="mt-4 space-y-3">
                  {[
                    "Submit the form with your project details.",
                    "Our team reviews and matches you with the right experts.",
                    "We schedule a 45-minute discovery call within 1 business day.",
                    "You receive a tailored proposal with scope, timeline, and pricing.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-muted">
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="text-base font-bold text-primary">
                  Direct Contact
                </h3>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a
                      href="mailto:contact@veritas-ai.com"
                      className="text-primary underline decoration-accent/40 hover:text-accent"
                    >
                      contact@veritas-ai.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Response time:</strong>{" "}
                    Within 1 business day
                  </p>
                  <p>
                    <strong className="text-foreground">Office:</strong>{" "}
                    Available for on-site meetings at client locations globally.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="text-base font-bold text-primary">
                  For Urgent Inquiries
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  If your organization has an urgent AI deployment need or
                  critical infrastructure requirement, please indicate this in
                  your message and we will prioritize your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
