import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Veritas Global AI",
  description: "Veritas Global AI cookie policy — information about cookies we use, how to control them, and your choices under GDPR and ePrivacy Directive.",
};

export default function CookiesPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: August 5, 2026</p>

        <div className="space-y-10 text-slate leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Veritas Global AI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website veritasglobalai.tech (the &ldquo;Site&rdquo;). It explains what these technologies are, why we use them, and your rights to control our use of them.
            </p>
            <p className="mt-4">
              This policy complies with the EU General Data Protection Regulation (GDPR), the ePrivacy Directive (Cookie Law), the UK GDPR, the California Consumer Privacy Act (CCPA), and other applicable privacy and data protection laws.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to the website owners.
            </p>
            <p className="mt-4">
              Cookies may be either:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>First-party cookies:</strong> Set directly by the website you are visiting. Only that website can read them.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Third-party cookies:</strong> Set by a domain other than the website you are visiting, typically used for advertising, analytics, or embedded content.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Session cookies:</strong> Temporary cookies that expire when you close your browser.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Persistent cookies:</strong> Remain on your device for a set period or until you manually delete them.</li>
            </ul>
            <p className="mt-4">
              In addition to cookies, we may also use similar technologies such as local storage, session storage, and server logs. In this policy, we refer to all these technologies collectively as &ldquo;cookies.&rdquo;
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">3. Types of Cookies We Use</h2>

            <div className="mt-4 border border-line rounded-sm p-5">
              <h3 className="font-serif text-lg text-ink mb-2">3.1 Strictly Necessary Cookies</h3>
              <p className="text-sm">These cookies are essential for the Site to function properly. They enable core functionality such as security, network management, and accessibility. The Site cannot operate without these cookies. They do not require your consent under applicable law.</p>
              <div className="mt-3 text-xs text-muted space-y-1">
                <p><strong>Examples:</strong> Session identifiers, CSRF tokens, load-balancing cookies, language preference storage.</p>
                <p><strong>Duration:</strong> Session only (deleted when browser is closed).</p>
                <p><strong>Legal basis:</strong> Legitimate interest (GDPR Art. 6(1)(f)).</p>
              </div>
            </div>

            <div className="mt-4 border border-line rounded-sm p-5">
              <h3 className="font-serif text-lg text-ink mb-2">3.2 Functional / Preference Cookies</h3>
              <p className="text-sm">These cookies allow the Site to remember choices you make (such as your language preference or region) and provide enhanced, more personalized features. They may be set by us or by third-party providers whose services we have added to our pages.</p>
              <div className="mt-3 text-xs text-muted space-y-1">
                <p><strong>Examples:</strong> Language selection, theme preferences (dark/light mode), UI customization settings.</p>
                <p><strong>Duration:</strong> Up to 12 months.</p>
                <p><strong>Legal basis:</strong> Consent (GDPR Art. 6(1)(a)) or legitimate interest for minimal functional preferences.</p>
              </div>
            </div>

            <div className="mt-4 border border-line rounded-sm p-5">
              <h3 className="font-serif text-lg text-ink mb-2">3.3 Analytics / Performance Cookies</h3>
              <p className="text-sm">These cookies help us understand how visitors interact with the Site by collecting and reporting information anonymously. We use privacy-respecting analytics that do not track individual users across sites. All IP addresses are anonymized before processing.</p>
              <div className="mt-3 text-xs text-muted space-y-1">
                <p><strong>Examples:</strong> Page view counts, session duration, referral sources, device type detection.</p>
                <p><strong>Duration:</strong> Up to 13 months.</p>
                <p><strong>Legal basis:</strong> Consent (GDPR Art. 6(1)(a)) or legitimate interest for aggregated, anonymized analytics.</p>
              </div>
            </div>

            <div className="mt-4 border border-line rounded-sm p-5">
              <h3 className="font-serif text-lg text-ink mb-2">3.4 Marketing / Targeting Cookies</h3>
              <p className="text-sm">We do not currently use advertising or targeting cookies on our Site. We do not serve targeted advertisements, and we do not share visitor data with advertising networks or social media platforms for ad targeting purposes. Should this change in the future, we will update this policy and obtain your explicit prior consent.</p>
              <div className="mt-3 text-xs text-muted space-y-1">
                <p><strong>Examples:</strong> None currently in use.</p>
                <p><strong>Duration:</strong> N/A.</p>
                <p><strong>Legal basis:</strong> Consent (GDPR Art. 6(1)(a)) — not currently applicable.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">4. Third-Party Cookies</h2>
            <p>
              Our Site may include content or functionality from trusted third-party service providers. These third parties may set their own cookies when you interact with their embedded content. We do not control the placement of these cookies, and we recommend reviewing the cookie policies of any third-party services. Currently, our Site uses:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Netlify:</strong> Our hosting provider may set essential cookies for load balancing, security, and site delivery optimization. <a href="https://www.netlify.com/privacy/" className="text-navy hover:underline" target="_blank" rel="noopener">Netlify Privacy Policy</a>.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Google Fonts:</strong> We use Google Fonts for typography. Google may collect information about your use of this service. <a href="https://policies.google.com/privacy" className="text-navy hover:underline" target="_blank" rel="noopener">Google Privacy Policy</a>.</li>
            </ul>
            <p className="mt-4">
              We regularly review our third-party integrations and will update this list as our service providers change. We select providers that comply with applicable data protection laws and provide adequate safeguards.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">5. Cookie Consent and Control</h2>
            <p>
              When you first visit our Site, you are presented with a cookie consent banner that allows you to accept or manage your cookie preferences. You can change your preferences at any time.
            </p>
            <p className="mt-4">In addition to our consent management tool, you can control cookies through:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some cookies, or to alert you when cookies are being sent. Note that disabling strictly necessary cookies may affect Site functionality.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Browser Extensions:</strong> Privacy-focused browser extensions can help you manage and block tracking cookies.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Do Not Track (DNT):</strong> Some browsers include a Do Not Track feature. Our Site currently does not respond to DNT signals, but we respect cookie consent preferences set through our consent management tool.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Opt-Out Tools:</strong> Industry bodies such as the Network Advertising Initiative (NAI) and the Digital Advertising Alliance (DAA) provide opt-out tools for targeted advertising cookies.</li>
            </ul>
            <p className="mt-4">
              For instructions on managing cookies in specific browsers, please refer to your browser&apos;s help documentation:
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
              <a href="https://support.google.com/chrome/answer/95647" className="text-navy hover:underline" target="_blank" rel="noopener">Google Chrome</a>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-navy hover:underline" target="_blank" rel="noopener">Mozilla Firefox</a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-navy hover:underline" target="_blank" rel="noopener">Apple Safari</a>
              <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" className="text-navy hover:underline" target="_blank" rel="noopener">Microsoft Edge</a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">6. Legal Basis for Processing (EU/UK Users)</h2>
            <p>Under the GDPR and UK GDPR, our legal bases for using cookies are:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Consent (Art. 6(1)(a)):</strong> For non-essential cookies (functional preferences, analytics). You may withdraw consent at any time through our cookie settings.</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> <strong>Legitimate Interests (Art. 6(1)(f)):</strong> For strictly necessary cookies essential to Site operation and security. We have conducted a legitimate interest assessment and determined that these cookies are necessary and proportionate.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">7. International Data Transfers</h2>
            <p>
              Cookies and related data may be stored and processed in servers located in the United States, European Economic Area (EEA), United Kingdom, and other jurisdictions where our service providers operate. Where personal data is transferred outside the EEA or UK, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission and UK International Data Transfer Agreement.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">8. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our cookie practices, technology, or legal requirements. We will post the updated version on this page and, where material changes occur, provide prominent notice on our Site or seek renewed consent where required.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">9. Contact and Supervisory Authority</h2>
            <p>
              If you have questions about our use of cookies or wish to exercise your data protection rights:
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
              You also have the right to lodge a complaint with your local data protection supervisory authority. For EU residents, a list of supervisory authorities is available at{" "}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-navy hover:underline" target="_blank" rel="noopener">the EDPB website</a>. For UK residents, you may contact the{" "}
              <a href="https://ico.org.uk" className="text-navy hover:underline" target="_blank" rel="noopener">Information Commissioner&apos;s Office (ICO)</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
