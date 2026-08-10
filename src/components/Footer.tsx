"use client";

import Link from "next/link";
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
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">{t("footer.solutionsTitle")}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.0.title")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.1.title")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.2.title")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.3.title")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.4.title")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("home.solutions.pillars.5.title")}</Link></li>
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