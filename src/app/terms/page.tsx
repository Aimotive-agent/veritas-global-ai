import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Veritas Global AI",
  description: "Terms of service for Veritas Global AI — governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="text-sm text-slate-500">Last updated: August 1, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing veritas-ai.com (the &ldquo;Site&rdquo;), you agree to these Terms of Service.
          If you do not agree, please do not use the Site.
        </p>

        <h2>2. Services</h2>
        <p>
          Veritas Global AI provides enterprise AI consulting, implementation, and managed
          services. All client engagements are governed by separate written agreements.
          Nothing on this Site constitutes a binding offer of services.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos, and designs — is the
          property of Veritas Global AI and protected by applicable intellectual property laws.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          Veritas Global AI provides this Site on an &ldquo;as-is&rdquo; basis. We make no warranties
          regarding the accuracy or completeness of Site content. To the fullest extent
          permitted by law, Veritas Global AI shall not be liable for any damages arising from
          use of this Site.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, without regard to
          conflict of law principles.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Changes take effect upon posting.
          Continued use of the Site constitutes acceptance.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions? Contact us at{" "}
          <a href="mailto:legal@veritas-ai.com" className="text-indigo-600">
            legal@veritas-ai.com
          </a>.
        </p>
      </div>
    </section>
  );
}
