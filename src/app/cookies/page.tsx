"use client";

import { useLocale } from "@/context/LocaleContext";
import { LegalSection } from "@/components/LegalSections";

export default function CookiesPage() {
  const { t } = useLocale();

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">{t("cookies.title")}</h1>
        <p className="text-sm text-muted mb-12">{t("cookies.lastUpdated")}</p>

        <LegalSection sectionKey="cookies" />

        <div className="text-sm text-slate mt-12 pt-8 border-t border-line space-y-1">
          <p>Email: <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">info@veritasglobalai.tech</a></p>
          <p>{t("cookies.websiteLabel")}</p>
        </div>
      </div>
    </section>
  );
}
