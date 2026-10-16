"use client";

import { useLocale } from "@/context/LocaleContext";
import { LegalSection } from "@/components/LegalSections";

export default function DataPolicyPage() {
  const { t } = useLocale();

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">{t("dataPolicy.title")}</h1>
        <p className="text-sm text-muted mb-12">{t("dataPolicy.lastUpdated")}</p>

        <LegalSection sectionKey="dataPolicy" />

        <div className="text-sm text-slate mt-12 pt-8 border-t border-line space-y-1">
          <p>Email: <a href="mailto:info@veritasglobal.tech" className="text-navy hover:underline">info@veritasglobal.tech</a></p>
          <p>{t("dataPolicy.websiteLabel")}</p>
        </div>
      </div>
    </section>
  );
}
