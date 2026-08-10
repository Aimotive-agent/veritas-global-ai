"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

export default function IndustriesPage() {
  const { t } = useLocale();

  const industries: {
    name: string;
    description: string;
    useCases: string[];
    highlight: string;
  }[] = Array.from({ length: 6 }, (_, i) => ({
    name: t(`industries.list.${i}.name`),
    description: t(`industries.list.${i}.description`),
    useCases: Array.from({ length: 5 }, (_, j) =>
      t(`industries.list.${i}.useCases.${j}`)
    ),
    highlight: t(`industries.list.${i}.highlight`),
  }));

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("industries.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("industries.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("industries.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto space-y-16">
          {industries.map((ind, i) => (
            <Reveal key={ind.name}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-paper-2">
                      <span className="font-serif text-xl font-semibold text-navy">0{i + 1}</span>
                    </div>
                    <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink pt-2">{ind.name}</h2>
                  </div>
                  <p className="text-slate leading-relaxed mb-6 text-[15px]">{ind.description}</p>
                  <ul className="space-y-3">
                    {ind.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3 text-ink-2 text-sm">
                        <span className="text-gold mt-0.5">—</span> {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="border border-line bg-paper p-8 lg:p-10">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">{t("industries.clientImpact")}</p>
                    <p className="text-lg text-ink font-medium leading-relaxed">
                      &ldquo;{ind.highlight}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            {t("industries.cta.title")}
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            {t("industries.cta.subtitle")}
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            {t("industries.cta.button")}
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
