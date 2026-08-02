import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Veritas Global AI",
  description: "Veritas Global AI privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 1, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Information We Collect</h2>
            <p>
              Veritas Global AI (&ldquo;Veritas,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you voluntarily
              provide when you contact us through our website, including your name, email address,
              company name, and any other details you include in your message.
            </p>
            <p className="mt-4">
              We also collect standard web analytics data — pages visited, time on site,
              referral sources — through privacy-respecting analytics that do not use
              personally identifiable cookies.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Respond to your inquiries and provide information about our services</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Schedule consultations and follow up on your interest</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Improve our website and service offerings</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Comply with legal obligations</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. Data Storage & Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information. Your data is stored securely and access is limited to
              authorized personnel.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Third-Party Services</h2>
            <p>
              Our website may use third-party services (such as hosting providers and
              analytics). These providers are contractually bound to handle your data in
              compliance with applicable data protection laws.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete,
              or port your personal data. To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@veritas-global-ai.com" className="text-navy hover:underline">
                privacy@veritas-global-ai.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be posted on
              this page. Continued use of our website constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. Contact</h2>
            <p>
              Questions about this policy? Contact us at{" "}
              <a href="mailto:privacy@veritas-global-ai.com" className="text-navy hover:underline">
                privacy@veritas-global-ai.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
