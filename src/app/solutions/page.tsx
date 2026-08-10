"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

export default function SolutionsPage() {
  const { t } = useLocale();

  const pillars = [
    {
      number: t("solutions.pillars.0.number"),
      title: t("solutions.pillars.0.title"),
      subtitle: t("solutions.pillars.0.subtitle"),
      description: t("solutions.pillars.0.description"),
      details: [
        t("solutions.pillars.0.details.0"),
        t("solutions.pillars.0.details.1"),
        t("solutions.pillars.0.details.2"),
        t("solutions.pillars.0.details.3"),
        t("solutions.pillars.0.details.4"),
        t("solutions.pillars.0.details.5"),
      ],
      deployment: t("solutions.pillars.0.deployment"),
      latency: t("solutions.pillars.0.latency"),
    },
    {
      number: t("solutions.pillars.1.number"),
      title: t("solutions.pillars.1.title"),
      subtitle: t("solutions.pillars.1.subtitle"),
      description: t("solutions.pillars.1.description"),
      details: [
        t("solutions.pillars.1.details.0"),
        t("solutions.pillars.1.details.1"),
        t("solutions.pillars.1.details.2"),
        t("solutions.pillars.1.details.3"),
        t("solutions.pillars.1.details.4"),
        t("solutions.pillars.1.details.5"),
      ],
      deployment: t("solutions.pillars.1.deployment"),
      latency: t("solutions.pillars.1.latency"),
    },
    {
      number: t("solutions.pillars.2.number"),
      title: t("solutions.pillars.2.title"),
      subtitle: t("solutions.pillars.2.subtitle"),
      description: t("solutions.pillars.2.description"),
      details: [
        t("solutions.pillars.2.details.0"),
        t("solutions.pillars.2.details.1"),
        t("solutions.pillars.2.details.2"),
        t("solutions.pillars.2.details.3"),
        t("solutions.pillars.2.details.4"),
        t("solutions.pillars.2.details.5"),
      ],
      deployment: t("solutions.pillars.2.deployment"),
      latency: t("solutions.pillars.2.latency"),
    },
    {
      number: t("solutions.pillars.3.number"),
      title: t("solutions.pillars.3.title"),
      subtitle: t("solutions.pillars.3.subtitle"),
      description: t("solutions.pillars.3.description"),
      details: [
        t("solutions.pillars.3.details.0"),
        t("solutions.pillars.3.details.1"),
        t("solutions.pillars.3.details.2"),
        t("solutions.pillars.3.details.3"),
        t("solutions.pillars.3.details.4"),
        t("solutions.pillars.3.details.5"),
      ],
      deployment: t("solutions.pillars.3.deployment"),
      latency: t("solutions.pillars.3.latency"),
    },
    {
      number: t("solutions.pillars.4.number"),
      title: t("solutions.pillars.4.title"),
      subtitle: t("solutions.pillars.4.subtitle"),
      description: t("solutions.pillars.4.description"),
      details: [
        t("solutions.pillars.4.details.0"),
        t("solutions.pillars.4.details.1"),
        t("solutions.pillars.4.details.2"),
        t("solutions.pillars.4.details.3"),
        t("solutions.pillars.4.details.4"),
        t("solutions.pillars.4.details.5"),
      ],
      deployment: t("solutions.pillars.4.deployment"),
      latency: t("solutions.pillars.4.latency"),
    },
    {
      number: t("solutions.pillars.5.number"),
      title: t("solutions.pillars.5.title"),
      subtitle: t("solutions.pillars.5.subtitle"),
      description: t("solutions.pillars.5.description"),
      details: [
        t("solutions.pillars.5.details.0"),
        t("solutions.pillars.5.details.1"),
        t("solutions.pillars.5.details.2"),
        t("solutions.pillars.5.details.3"),
        t("solutions.pillars.5.details.4"),
        t("solutions.pillars.5.details.5"),
      ],
      deployment: t("solutions.pillars.5.deployment"),
      latency: t("solutions.pillars.5.latency"),
    },
  ];

  const engagementModel = [
    {
      number: t("solutions.engagement.steps.0.number"),
      title: t("solutions.engagement.steps.0.title"),
      meta: t("solutions.engagement.steps.0.meta"),
    },
    {
      number: t("solutions.engagement.steps.1.number"),
      title: t("solutions.engagement.steps.1.title"),
      meta: t("solutions.engagement.steps.1.meta"),
    },
    {
      number: t("solutions.engagement.steps.2.number"),
      title: t("solutions.engagement.steps.2.title"),
      meta: t("solutions.engagement.steps.2.meta"),
    },
    {
      number: t("solutions.engagement.steps.3.number"),
      title: t("solutions.engagement.steps.3.title"),
      meta: t("solutions.engagement.steps.3.meta"),
    },
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("solutions.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("solutions.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("solutions.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto space-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.number}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-paper-2">
                      <span className="font-serif text-xl font-semibold text-navy">{p.number}</span>
                    </div>
                    <div>
                      <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-1">{p.title}</h2>
                      <p className="text-sm text-muted font-medium">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate leading-relaxed mb-6 text-[15px]">{p.description}</p>
                  <ul className="space-y-3">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-ink-2 text-sm">
                        <span className="text-gold mt-0.5">—</span> {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-6 text-sm border-t border-line pt-6">
                    <div>
                      <span className="text-muted">{t("solutions.deploymentLabel")}:</span>{" "}
                      <span className="font-semibold text-ink">{p.deployment}</span>
                    </div>
                    <div>
                      <span className="text-muted">{t("solutions.latencyLabel")}:</span>{" "}
                      <span className="font-semibold text-ink">{p.latency}</span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="border border-line bg-paper p-8 lg:p-10">
                    <div className="metric-num text-4xl mb-2">{p.number}</div>
                    <h3 className="font-serif font-semibold text-xl text-ink mb-4">{p.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">{p.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs font-medium mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span className="text-emerald-700">{t("solutions.deploymentReady")}</span>
                    </div>
                    <Link href="/contact" className="btn-secondary font-medium px-6 py-3 text-sm tracking-wide inline-flex items-center gap-2">
                      {t("solutions.discussButton")}
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("solutions.engagement.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">{t("solutions.engagement.title")}</h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("solutions.engagement.subtitle")}
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {engagementModel.map((s) => (
              <div key={s.number} className="bg-white p-8 lg:p-9">
                <div className="font-serif text-3xl font-semibold text-navy mb-5">{s.number}</div>
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{s.meta}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
