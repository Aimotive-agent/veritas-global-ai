import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement — Veritas Global AI",
  description: "Veritas Global AI Data Processing Agreement (DPA) — GDPR-compliant data processing terms, sub-processors, international transfers, and data subject rights.",
};

export default function DataPolicyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Data Processing Agreement</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 5, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Scope and Definitions</h2>
            <p>
              This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the agreement between Veritas Global AI (&ldquo;Processor,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) and our clients (&ldquo;Controller,&rdquo; &ldquo;you&rdquo;) for the provision of enterprise AI services. This DPA applies where we process personal data on your behalf as part of delivering our enterprise AI infrastructure and platform services.
            </p>
            <p className="mt-4">Capitalized terms used but not defined in this DPA have the meanings given in:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> The EU General Data Protection Regulation (GDPR) — Regulation (EU) 2016/679</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> The UK GDPR (as retained in UK law)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> The California Consumer Privacy Act (CCPA/CPRA)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Other applicable data protection legislation as relevant to your jurisdiction</li>
            </ul>
            <p className="mt-4">
              <strong>&ldquo;Personal Data,&rdquo;</strong> <strong>&ldquo;Processing,&rdquo;</strong> <strong>&ldquo;Data Subject,&rdquo;</strong> <strong>&ldquo;Controller,&rdquo;</strong> <strong>&ldquo;Processor,&rdquo;</strong> and <strong>&ldquo;Supervisory Authority&rdquo;</strong> shall have the meanings set out in the GDPR.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. Roles and Responsibilities</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line mt-3">
                <thead>
                  <tr className="bg-paper">
                    <th className="text-left p-3 border border-line font-serif text-ink">Controller (You / Client)</th>
                    <th className="text-left p-3 border border-line font-serif text-ink">Processor (Veritas Global AI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-line align-top">Determines the purposes and means of processing personal data</td>
                    <td className="p-3 border border-line align-top">Processes personal data solely on documented instructions from the Controller</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-line align-top">Ensures a lawful basis exists for all processing activities</td>
                    <td className="p-3 border border-line align-top">Implements appropriate technical and organizational security measures</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-line align-top">Responds to data subject requests and provides required notices</td>
                    <td className="p-3 border border-line align-top">Assists Controller in fulfilling data subject rights requests</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-line align-top">Maintains responsibility for data accuracy and minimization</td>
                    <td className="p-3 border border-line align-top">Notifies Controller of data breaches without undue delay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. Nature and Purpose of Processing</h2>
            <p>
              As Processor, we process personal data solely for the purpose of providing the enterprise AI services specified in our client agreements. These services may include:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Enterprise SaaS platform deployment and operation</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> AI model inference and retrieval-augmented generation (RAG)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Neural chatbot and conversational AI services</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Data storage, backup, and disaster recovery</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> System monitoring, security incident detection, and technical support</li>
            </ul>
            <p className="mt-4">
              The specific categories of personal data, data subjects, and processing operations are defined in each client&apos;s master services agreement or statement of work.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Duration of Processing</h2>
            <p>
              We process personal data for the duration of the client agreement. Upon termination, we will, at the Controller&apos;s election:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Return all personal data to the Controller in a structured, commonly used, machine-readable format within 30 calendar days; or</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Securely delete or irreversibly anonymize all personal data, and certify such deletion in writing.</li>
            </ul>
            <p className="mt-4">
              We may retain personal data beyond termination only to the extent required by applicable law, provided that such data remains subject to the confidentiality and security obligations of this DPA.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Security Measures</h2>
            <p>
              We implement and maintain appropriate technical and organizational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include, but are not limited to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="border border-line rounded-sm p-4">
                <h3 className="font-serif text-ink font-semibold mb-2 text-sm">Access Controls</h3>
                <ul className="text-xs space-y-1 text-muted">
                  <li>— Role-based access control (RBAC)</li>
                  <li>— Multi-factor authentication (MFA)</li>
                  <li>— Principle of least privilege</li>
                  <li>— Regular access reviews</li>
                  <li>— Unique user IDs and strong password policies</li>
                </ul>
              </div>
              <div className="border border-line rounded-sm p-4">
                <h3 className="font-serif text-ink font-semibold mb-2 text-sm">Encryption</h3>
                <ul className="text-xs space-y-1 text-muted">
                  <li>— AES-256 encryption at rest</li>
                  <li>— TLS 1.3 encryption in transit</li>
                  <li>— Encrypted backup storage</li>
                  <li>— Key management and rotation policies</li>
                  <li>— Secure key storage (HSM where applicable)</li>
                </ul>
              </div>
              <div className="border border-line rounded-sm p-4">
                <h3 className="font-serif text-ink font-semibold mb-2 text-sm">Network Security</h3>
                <ul className="text-xs space-y-1 text-muted">
                  <li>— VPC isolation and network segmentation</li>
                  <li>— Firewall rules and intrusion detection</li>
                  <li>— DDoS protection</li>
                  <li>— Regular penetration testing</li>
                  <li>— Vulnerability scanning and patch management</li>
                </ul>
              </div>
              <div className="border border-line rounded-sm p-4">
                <h3 className="font-serif text-ink font-semibold mb-2 text-sm">Organizational Measures</h3>
                <ul className="text-xs space-y-1 text-muted">
                  <li>— Security awareness training</li>
                  <li>— Confidentiality agreements for all personnel</li>
                  <li>— Background checks on key personnel</li>
                  <li>— Incident response plan and team</li>
                  <li>— Business continuity and disaster recovery plans</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Sub-Processors</h2>
            <p>
              The Controller authorizes the Processor to engage sub-processors for specific processing activities. We maintain an up-to-date list of sub-processors and will inform the Controller of any intended changes concerning the addition or replacement of sub-processors at least 30 days in advance, giving the Controller the opportunity to object.
            </p>
            <p className="mt-4">
              Our current sub-processors include:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Netlify, Inc.</strong> (USA) — Website hosting and content delivery. Data Processing Agreement available upon request.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Cloud infrastructure providers</strong> — As selected per client deployment (AWS, GCP, Azure, or client-managed infrastructure). Specific providers documented in the statement of work.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>AI model providers</strong> — DeepSeek and other providers as specified per engagement. Client data is never used to train or fine-tune provider models.</li>
            </ul>
            <p className="mt-4">
              All sub-processors are bound by written agreements that impose data protection obligations no less protective than those in this DPA. We remain fully liable to the Controller for the performance of our sub-processors&apos; obligations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. International Data Transfers</h2>
            <p>
              Personal data processed under this DPA may be transferred to and processed in countries outside the European Economic Area (EEA) or the United Kingdom. For such transfers, we ensure one or more of the following safeguards apply:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Adequacy Decision:</strong> The European Commission or UK Government has determined the recipient country ensures an adequate level of protection.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Standard Contractual Clauses (SCCs):</strong> EU Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) and the UK International Data Transfer Agreement, as applicable, are incorporated into this DPA by reference.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Binding Corporate Rules:</strong> Approved binding corporate rules where applicable.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Additional Safeguards:</strong> Supplementary technical, organizational, and contractual measures as required to ensure an essentially equivalent level of protection.</li>
            </ul>
            <p className="mt-4">
              Where SCCs are relied upon, we have conducted a Transfer Impact Assessment (TIA) and implemented supplementary measures as appropriate.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">8. Data Subject Rights</h2>
            <p>
              Taking into account the nature of the processing, we will assist the Controller by implementing appropriate technical and organizational measures, insofar as possible, to fulfill the Controller&apos;s obligation to respond to requests from data subjects exercising their rights under the GDPR, including:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right of access (Art. 15 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right to rectification (Art. 16 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right to erasure / &ldquo;right to be forgotten&rdquo; (Art. 17 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right to restriction of processing (Art. 18 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right to data portability (Art. 20 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Right to object (Art. 21 GDPR)</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Rights in relation to automated decision-making and profiling (Art. 22 GDPR)</li>
            </ul>
            <p className="mt-4">
              Data subjects wishing to exercise their rights should contact the Controller directly. If we receive a data subject request directly, we will forward it to the Controller without undue delay.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">9. Personal Data Breach Notification</h2>
            <p>
              In the event of a personal data breach, we will:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Notify the Controller without undue delay and, where feasible, no later than 48 hours after becoming aware of the breach.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Provide the Controller with a description of the nature of the breach, the categories and approximate number of data subjects and personal data records concerned, the likely consequences, and the measures taken or proposed to address the breach.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Cooperate with the Controller and take reasonable commercial steps to assist in the investigation, mitigation, and remediation of the breach.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Notify relevant supervisory authorities and affected data subjects as required by the Controller or applicable law.</li>
            </ul>
            <p className="mt-4">
              The Controller is responsible for determining whether notification to supervisory authorities or data subjects is required, unless applicable law requires us to notify directly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">10. Data Protection Impact Assessments and Prior Consultation</h2>
            <p>
              We will provide reasonable assistance to the Controller in conducting Data Protection Impact Assessments (DPIAs) and, where required, prior consultations with supervisory authorities. This assistance may include providing information about our security measures, processing operations, and sub-processor arrangements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">11. Audit Rights</h2>
            <p>
              Upon the Controller&apos;s written request and no more than once per twelve-month period (unless a data breach or regulatory requirement necessitates more frequent audits), we will:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Make available all information necessary to demonstrate compliance with this DPA and applicable data protection law.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Allow for and contribute to audits, including inspections, conducted by the Controller or an independent auditor mandated by the Controller, subject to reasonable notice and scope limitations.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> Provide the Controller with a summary of our most recent independent security audit or certification report (e.g., SOC 2 Type II report, ISO 27001 certificate) in lieu of a direct audit, where available and sufficient.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">12. Confidentiality</h2>
            <p>
              We ensure that all personnel authorized to process personal data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality. This obligation survives the termination of employment or engagement.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">13. Liability</h2>
            <p>
              Each party&apos;s liability under this DPA is subject to the limitations and exclusions of liability set out in the applicable master services agreement, except that nothing in this DPA limits either party&apos;s liability for: (a) breach of its confidentiality obligations; (b) intentional misconduct or gross negligence; or (c) any liability that cannot be limited or excluded under applicable law.
            </p>
            <p className="mt-4">
              Our total aggregate liability for claims under this DPA shall not exceed the total fees paid by the Controller during the twelve-month period preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">14. General Provisions</h2>
            <p>
              <strong>Severability:</strong> If any provision of this DPA is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
            <p className="mt-2">
              <strong>Order of Precedence:</strong> In the event of a conflict between this DPA and other agreements between the parties, this DPA shall prevail with respect to data protection and processing obligations.
            </p>
            <p className="mt-2">
              <strong>Governing Law:</strong> This DPA shall be governed by the laws specified in the applicable master services agreement. For data protection matters involving EU residents, the laws of the Controller&apos;s EU member state of establishment shall apply to the extent required by GDPR.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">15. Contact</h2>
            <p>
              For questions about this Data Processing Agreement, to exercise data subject rights, or to request a signed copy of this DPA:
            </p>
            <div className="mt-3 space-y-2">
              <p>Email:{" "}
                <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">
                  info@veritasglobalai.tech
                </a>
              </p>
              <p>Website: veritasglobalai.tech</p>
            </div>
            <p className="mt-4 text-sm text-muted">
              You have the right to lodge a complaint with a supervisory authority. EU residents may contact their local data protection authority. A list is available at{" "}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-navy hover:underline" target="_blank" rel="noopener">the EDPB website</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
