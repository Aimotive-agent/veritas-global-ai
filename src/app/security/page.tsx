import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Disclosure — Veritas Global AI",
  description: "Veritas Global AI security disclosure — how to report security vulnerabilities and our commitment to protecting your data.",
};

export default function SecurityPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Security Disclosure</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 5, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Our Commitment to Security</h2>
            <p>
              At Veritas Global AI, security is foundational to everything we build. As a provider of enterprise AI infrastructure deployed inside our clients&apos; perimeters, we understand that trust is earned through rigorous security practices, transparent disclosure, and continuous improvement.
            </p>
            <p className="mt-4">
              This Security Disclosure outlines our security posture, the measures we take to protect data, and how security researchers and the public can responsibly report vulnerabilities.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. Security Architecture</h2>
            <p>Our enterprise platform is built on the following security principles:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Sovereign Deployment:</strong> All client AI workloads run inside the client&apos;s own VPC, on-premises infrastructure, or air-gapped environment. No data transits a vendor cloud the client has not authorized.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Zero Shared Tenancy:</strong> Each client deployment operates in complete isolation. There is no shared tenancy, no shared inference path, and no vendor-side model access to client data.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Data-at-Rest Encryption:</strong> All stored data is encrypted using AES-256 encryption.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Data-in-Transit Encryption:</strong> All network communications use TLS 1.3 with strong cipher suites.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Role-Based Access Control:</strong> Granular, auditable access controls at every layer of the stack.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Immutable Audit Logs:</strong> All actions are logged to tamper-evident audit trails with cryptographic verification.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Never Trains on Client Data:</strong> Client data is never used to train, fine-tune, or improve our models.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. Compliance Framework</h2>
            <p>Our platform is designed to meet or exceed the following standards:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> SOC 2 Type II</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> ISO 27001</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> GDPR</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> HIPAA (where applicable)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> FedRAMP-Ready architecture</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Responsible Disclosure Policy</h2>
            <p>
              We believe that working with skilled security researchers helps us identify and address vulnerabilities before they can be exploited. If you discover a security vulnerability in our systems, websites, or products, we encourage you to report it to us responsibly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Guidelines for Researchers</h2>
            <p>When conducting security research, we ask that you:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Do not access, modify, or delete data that does not belong to you.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Give us a reasonable amount of time to address the issue before public disclosure.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Do not exploit a vulnerability beyond what is necessary to demonstrate its existence.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Do not engage in social engineering, phishing, or physical security testing of our offices or data centers.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Scope</h2>
            <p>This disclosure policy applies to:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> veritasglobalai.tech and all associated subdomains</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Veritas Global AI web applications and APIs</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Veritas Global AI enterprise platform software</li>
            </ul>
            <p className="mt-4">
              The following are <strong>out of scope:</strong>
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Third-party services and applications not operated by Veritas Global AI</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Vulnerabilities in client-managed infrastructure or configurations</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Social engineering attacks targeting our employees or contractors</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Denial of service (DoS) attacks</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. How to Report a Vulnerability</h2>
            <p>
              Please send vulnerability reports to:
            </p>
            <div className="mt-3 space-y-2">
              <p>
                Email:{" "}
                <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline font-medium">
                  info@veritasglobalai.tech
                </a>
                {" "}(please use subject line: &ldquo;SECURITY DISCLOSURE&rdquo;)
              </p>
            </div>
            <p className="mt-4">
              Your report should include:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> A detailed description of the vulnerability</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Steps to reproduce the issue</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Affected systems, URLs, or software versions</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Any proof-of-concept code or screenshots</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Your contact information for follow-up</li>
            </ul>
            <p className="mt-4">
              We aim to acknowledge receipt within 48 hours and provide an initial assessment within 5 business days. We will keep you informed of our progress and coordinate public disclosure timing if desired.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">8. Recognition</h2>
            <p>
              We appreciate the contributions of the security research community. At our discretion, we may publicly acknowledge researchers who have responsibly disclosed valid vulnerabilities, with their consent. We do not currently offer a monetary bug bounty program, but we are grateful for every responsible disclosure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">9. Safe Harbor</h2>
            <p>
              When conducting vulnerability research in accordance with this policy, we consider such research to be:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Authorized under applicable anti-hacking laws, and we will not initiate legal action against researchers who comply with this policy.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Exempt from restrictions in our Terms of Service that would otherwise prohibit such activity, solely for the purpose of security research under this policy.</li>
            </ul>
            <p className="mt-4">
              If a third party initiates legal action against you for activities conducted in compliance with this policy, we will make it known that your actions were authorized.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">10. Contact</h2>
            <p>
              For all security-related inquiries:
            </p>
            <div className="mt-3 space-y-1">
              <p>Email:{" "}
                <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">
                  info@veritasglobalai.tech
                </a>
              </p>
              <p>Website: veritasglobalai.tech</p>
              <p className="mt-2 text-sm text-muted">PGP key available upon request for encrypted communications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
