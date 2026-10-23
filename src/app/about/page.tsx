"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
  const { t } = useLocale();

  const values = [
    { title: t("about.commitments.values.0.title"), desc: t("about.commitments.values.0.desc") },
    { title: t("about.commitments.values.1.title"), desc: t("about.commitments.values.1.desc") },
    { title: t("about.commitments.values.2.title"), desc: t("about.commitments.values.2.desc") },
    { title: t("about.commitments.values.3.title"), desc: t("about.commitments.values.3.desc") },
    { title: t("about.commitments.values.4.title"), desc: t("about.commitments.values.4.desc") },
  ];

  const storyParagraphs = [
    t("about.story.paragraphs.0"),
    t("about.story.paragraphs.1"),
    t("about.story.paragraphs.2"),
  ];

  const complianceBadges = [
    t("about.compliance.badges.0"),
    t("about.compliance.badges.1"),
    t("about.compliance.badges.2"),
    t("about.compliance.badges.3"),
    t("about.compliance.badges.4"),
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("about.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("about.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("about.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <div className="section-rule mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("about.story.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">{t("about.story.title")}</h2>
            </Reveal>
            <div className="space-y-6 text-lg text-slate leading-relaxed">
              {storyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("about.commitments.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">{t("about.commitments.title")}</h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("about.commitments.subtitle")}
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("about.compliance.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              {t("about.compliance.title")}
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("about.compliance.subtitle")}
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            {complianceBadges.map((c) => (
              <span key={c} className="px-4 py-2 border border-line text-ink text-sm font-medium">{c}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            {t("about.cta.title")}
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            {t("about.cta.subtitle")}
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            {t("about.cta.button")}
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
              Follow the work
            </p>
            <SocialLinks variant="light" className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
}
