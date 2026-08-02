import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Veritas Global AI",
  description: "Terms of service for Veritas Global AI — governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 1, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing veritas-global-ai.com (the &ldquo;Site&rdquo;), you agree to these Terms of Service.
              If you do not agree, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. Services</h2>
            <p>
              Veritas Global AI provides enterprise AI infrastructure, platforms, and implementation
              services. All client engagements are governed by separate written agreements.
              Nothing on this Site constitutes a binding offer of services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, and designs — is the
              property of Veritas Global AI and protected by applicable intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Limitation of Liability</h2>
            <p>
              Veritas Global AI provides this Site on an &ldquo;as-is&rdquo; basis. We make no warranties
              regarding the accuracy or completeness of Site content. To the fullest extent
              permitted by law, Veritas Global AI shall not be liable for any damages arising from
              use of this Site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to
              conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Changes take effect upon posting.
              Continued use of the Site constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. Contact</h2>
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:legal@veritas-global-ai.com" className="text-navy hover:underline">
                legal@veritas-global-ai.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
