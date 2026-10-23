"use client";

import Link from "next/link";
import { articleIndex } from "@/app/insights/articles";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="py-14 px-6 lg:px-10 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/veritas-logo.png" alt="Veritas Global AI logo" className="w-8 h-8 object-contain" />
              <span className="font-serif font-semibold text-base text-white">Veritas Global AI</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href="https://www.youtube.com/@VeritasaiGlobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veritas Global AI on YouTube"
                className="flex items-center justify-center w-9 h-9 border border-white/15 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61595818258637"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veritas Global AI on Facebook"
                className="flex items-center justify-center w-9 h-9 border border-white/15 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">{t("footer.solutionsTitle")}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/private-ai-deployment" className="hover:text-white transition-colors">{t("footer.privateAIDeployment")}</Link></li>
              <li><Link href="/sovereign-ai" className="hover:text-white transition-colors">{t("footer.sovereignAI")}</Link></li>
              <li><Link href="/ai-governance" className="hover:text-white transition-colors">{t("footer.aiGovernance")}</Link></li>
              <li><Link href="/private-ai-cost" className="hover:text-white transition-colors">{t("footer.costPage")}</Link></li>
              <li><Link href="/choosing-an-ai-consultant" className="hover:text-white transition-colors">{t("footer.chooseConsultant")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("footer.sixPillars")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">{t("footer.companyTitle")}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/why-veritas" className="hover:text-white transition-colors">{t("navbar.whyVeritas")}</Link></li>
              <li><Link href="/demos" className="hover:text-white transition-colors">{t("navbar.demos")}</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">{t("navbar.industries")}</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">{t("navbar.insights")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t("navbar.about")}</Link></li>
              <li><Link href="/assessment" className="hover:text-white transition-colors">{t("footer.assessment")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">{t("footer.complianceTitle")}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                SOC 2 Type II
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ISO 27001
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                GDPR &amp; HIPAA
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {t("footer.fedrampReady")}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <h4 className="font-serif font-semibold text-sm text-white mb-4">
            {t("footer.latestInsights")}
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {articleIndex.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Veritas Global AI. {t("footer.rightsReserved")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("footer.privacyPolicy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("footer.termsOfService")}</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">{t("footer.cookiePolicy")}</Link>
            <Link href="/data-policy" className="hover:text-white transition-colors">{t("footer.dataPolicy")}</Link>
            <a href="/security" className="hover:text-white transition-colors">{t("footer.security")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}