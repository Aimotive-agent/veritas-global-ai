import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Veritas Global AI",
  description: "Veritas Global AI privacy policy — how we collect, use, store, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 5, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Introduction</h2>
            <p>
              Veritas Global AI (&ldquo;Veritas,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website veritasglobalai.tech (the &ldquo;Site&rdquo;) or engage with our services.
            </p>
            <p className="mt-4">
              By using the Site, you consent to the data practices described in this policy. If you do not agree, please discontinue use of the Site immediately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. Information We Collect</h2>
            <p className="font-semibold text-ink">Personal Information You Provide</p>
            <p className="mt-2">
              We collect information you voluntarily provide when you contact us through our website, including your name, work email address, company name, role, phone number, and any other details you include in consultation requests or contact forms.
            </p>
            <p className="font-semibold text-ink mt-4">Automatically Collected Information</p>
            <p className="mt-2">
              When you access the Site, we may automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, pages viewed, and time spent on pages. This data is collected through privacy-respecting analytics and server logs.
            </p>
            <p className="font-semibold text-ink mt-4">Cookies and Tracking Technologies</p>
            <p className="mt-2">
              We use minimal, functional cookies necessary for the operation of the Site. We do not use tracking cookies for advertising purposes. You can control cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Respond to your inquiries and provide information about our enterprise AI services</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Schedule and conduct private architecture consultations</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Improve our website, services, and user experience</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Send relevant communications about our services (with your consent)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Comply with legal obligations and enforce our agreements</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Detect and prevent fraudulent or unauthorized activity</li>
            </ul>
            <p className="mt-4 font-semibold">We do not sell your personal information to third parties. Period.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Data Sharing and Disclosure</h2>
            <p>
              We may share your information in the following limited circumstances:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and business, under strict confidentiality agreements.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>With Your Consent:</strong> In any other circumstance with your explicit permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security audits, and secure infrastructure. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. When your information is no longer needed, we securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that any such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">8. Your Data Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Correction:</strong> Request that we correct inaccurate or incomplete data.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Deletion:</strong> Request that we delete your personal data, subject to legal retention requirements.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Objection:</strong> Object to the processing of your personal data in certain circumstances.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">
                info@veritasglobalai.tech
              </a>. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">9. Children&apos;s Privacy</h2>
            <p>
              Our Site and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">10. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Material changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>Email:{" "}
                <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">
                  info@veritasglobalai.tech
                </a>
              </p>
              <p>Website: veritasglobalai.tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
