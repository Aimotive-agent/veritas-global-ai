"use client";

import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

export default function WhyVeritasPage() {
  const { t } = useLocale();

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">{t("whyVeritas.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] mb-7">
              {t("whyVeritas.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-xl">
              {t("whyVeritas.subtitle")}
            </p>
            <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              {t("whyVeritas.ctaHero")}
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="lg:col-span-5 reveal lg:pt-4">
            <div className="border border-line bg-white p-7 lg:p-8">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                <p className="font-serif font-semibold text-ink text-base">{t("whyVeritas.coreVersion")}</p>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span className="text-emerald-700">{t("whyVeritas.allSystemsOperational")}</span>
                </div>
              </div>
              <dl className="space-y-4 text-sm">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={t(`whyVeritas.specs.${i}.key`)} className="flex justify-between items-baseline">
                    <dt className="text-slate">{t(`whyVeritas.specs.${i}.key`)}</dt>
                    <dd className="font-semibold text-ink text-right">{t(`whyVeritas.specs.${i}.value`)}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">{t("whyVeritas.certificationsLabel")}</p>
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={t(`whyVeritas.certifications.${i}`)} className="px-2.5 py-1 border border-line text-xs text-ink font-medium">{t(`whyVeritas.certifications.${i}`)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {[0, 1, 2, 3].map((i) => (
              <div key={`diff-${i}`} className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-2xl font-semibold text-gold">{t(`whyVeritas.differences.${i}.number`)}</span>
                  <h2 className="font-serif font-semibold text-xl text-ink">{t(`whyVeritas.differences.${i}.title`)}</h2>
                </div>
                <p className="text-slate leading-relaxed text-[15px] mb-4">{t(`whyVeritas.differences.${i}.description`)}</p>
                <p className="text-sm text-muted leading-relaxed">{t(`whyVeritas.differences.${i}.footnote`)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("whyVeritas.guarantees.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              {t("whyVeritas.guarantees.title")}
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("whyVeritas.guarantees.subtitle")}
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={`guarantee-${i}`} className="bg-white p-7">
                <h3 className="font-serif font-semibold text-base text-ink mb-2">{t(`whyVeritas.guarantees.features.${i}.title`)}</h3>
                <p className="text-sm text-slate leading-relaxed">{t(`whyVeritas.guarantees.features.${i}.desc`)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("whyVeritas.advantage.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              {t("whyVeritas.advantage.title")}
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("whyVeritas.advantage.subtitle")}
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {[0, 1, 2, 3].map((i) => (
              <div key={`metric-${i}`} className="bg-white p-8 text-center">
                <div className="metric-num text-4xl md:text-5xl mb-2">{t(`whyVeritas.advantage.metrics.${i}.value`)}</div>
                <p className="text-sm text-slate leading-snug">{t(`whyVeritas.advantage.metrics.${i}.label`)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            {t("whyVeritas.ctaBlock.title")}
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            {t("whyVeritas.ctaBlock.subtitle")}
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            {t("whyVeritas.ctaBlock.button")}
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
