import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Veritas Global AI",
  description: "Veritas Global AI privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: August 1, 2026</p>

        <h2>1. Information We Collect</h2>
        <p>
          Veritas Global AI (&ldquo;Veritas,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you voluntarily
          provide when you contact us through our website, including your name, email address,
          company name, and any other details you include in your message.
        </p>
        <p>
          We also collect standard web analytics data — pages visited, time on site,
          referral sources — through privacy-respecting analytics that do not use
          personally identifiable cookies.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide information about our services</li>
          <li>Schedule consultations and follow up on your interest</li>
          <li>Improve our website and service offerings</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>

        <h2>3. Data Storage & Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your
          personal information. Your data is stored securely and access is limited to
          authorized personnel.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          Our website may use third-party services (such as hosting providers and
          analytics). These providers are contractually bound to handle your data in
          compliance with applicable data protection laws.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, delete,
          or port your personal data. To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@veritas-ai.com" className="text-indigo-600">
            privacy@veritas-ai.com
          </a>.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be posted on
          this page. Continued use of our website constitutes acceptance of the updated policy.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about this policy? Contact us at{" "}
          <a href="mailto:privacy@veritas-ai.com" className="text-indigo-600">
            privacy@veritas-ai.com
          </a>.
        </p>
      </div>
    </section>
  );
}
