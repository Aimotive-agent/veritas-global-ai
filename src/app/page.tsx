"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import IndustryTabs from "@/components/IndustryTabs";
import { useLocale } from "@/context/LocaleContext";

const trustMark = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const pillarIcons = [  <svg key="0" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 21V9h6v12" /></svg>,
  <svg key="1" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-8 0 4 4 0 008 0zm6 0a3 3 0 10-6 0 3 3 0 006 0z" /></svg>,
  <svg key="2" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  <svg key="3" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 0a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2m6-9V7a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2" /></svg>,
  <svg key="4" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg key="5" width="24" height="24" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

const securityIcons = [
  <svg key="0" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm4 0v-4" /></svg>,
  <svg key="1" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  <svg key="2" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.94.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.94 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.94-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.94 3.42 3.42 0 013.138-3.138z" /></svg>,
  <svg key="3" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="4" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2m-2 4l3 3m-3-3l-3 3M9 7v2a4 4 0 004 4h2" /></svg>,
  <svg key="5" width="20" height="20" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
];

export default function Home() {
  const { t } = useLocale();

  const industries = [
    t("home.trustIndustries.0"),
    t("home.trustIndustries.1"),
    t("home.trustIndustries.2"),
    t("home.trustIndustries.3"),
    t("home.trustIndustries.4"),
    t("home.trustIndustries.5"),
  ];

  const pillars = [
    { title: t("home.solutions.pillars.0.title"), subtitle: t("home.solutions.pillars.0.subtitle"), description: t("home.solutions.pillars.0.description"), features: [t("home.solutions.pillars.0.features.0"), t("home.solutions.pillars.0.features.1"), t("home.solutions.pillars.0.features.2")], icon: pillarIcons[0] },
    { title: t("home.solutions.pillars.1.title"), subtitle: t("home.solutions.pillars.1.subtitle"), description: t("home.solutions.pillars.1.description"), features: [t("home.solutions.pillars.1.features.0"), t("home.solutions.pillars.1.features.1"), t("home.solutions.pillars.1.features.2")], icon: pillarIcons[1] },
    { title: t("home.solutions.pillars.2.title"), subtitle: t("home.solutions.pillars.2.subtitle"), description: t("home.solutions.pillars.2.description"), features: [t("home.solutions.pillars.2.features.0"), t("home.solutions.pillars.2.features.1"), t("home.solutions.pillars.2.features.2")], icon: pillarIcons[2] },
    { title: t("home.solutions.pillars.3.title"), subtitle: t("home.solutions.pillars.3.subtitle"), description: t("home.solutions.pillars.3.description"), features: [t("home.solutions.pillars.3.features.0"), t("home.solutions.pillars.3.features.1"), t("home.solutions.pillars.3.features.2")], icon: pillarIcons[3] },
    { title: t("home.solutions.pillars.4.title"), subtitle: t("home.solutions.pillars.4.subtitle"), description: t("home.solutions.pillars.4.description"), features: [t("home.solutions.pillars.4.features.0"), t("home.solutions.pillars.4.features.1"), t("home.solutions.pillars.4.features.2")], icon: pillarIcons[4] },
    { title: t("home.solutions.pillars.5.title"), subtitle: t("home.solutions.pillars.5.subtitle"), description: t("home.solutions.pillars.5.description"), features: [t("home.solutions.pillars.5.features.0"), t("home.solutions.pillars.5.features.1"), t("home.solutions.pillars.5.features.2")], icon: pillarIcons[5] },
  ];

  const differences = [
    { number: "01", title: t("home.difference.differences.0.title"), description: t("home.difference.differences.0.description"), footnote: t("home.difference.differences.0.footnote") },
    { number: "02", title: t("home.difference.differences.1.title"), description: t("home.difference.differences.1.description"), footnote: t("home.difference.differences.1.footnote") },
    { number: "03", title: t("home.difference.differences.2.title"), description: t("home.difference.differences.2.description"), footnote: t("home.difference.differences.2.footnote") },
    { number: "04", title: t("home.difference.differences.3.title"), description: t("home.difference.differences.3.description"), footnote: t("home.difference.differences.3.footnote") },
  ];

  const securityFeatures = [
    { title: t("home.security.features.0.title"), description: t("home.security.features.0.description"), icon: securityIcons[0] },
    { title: t("home.security.features.1.title"), description: t("home.security.features.1.description"), icon: securityIcons[1] },
    { title: t("home.security.features.2.title"), description: t("home.security.features.2.description"), icon: securityIcons[2] },
    { title: t("home.security.features.3.title"), description: t("home.security.features.3.description"), icon: securityIcons[3] },
    { title: t("home.security.features.4.title"), description: t("home.security.features.4.description"), icon: securityIcons[4] },
    { title: t("home.security.features.5.title"), description: t("home.security.features.5.description"), icon: securityIcons[5] },
  ];

  const impactMetrics = [
    { value: "99.997%", label: t("home.impact.metrics.0.label") },
    { value: "1.8ms", label: t("home.impact.metrics.1.label") },
    { value: "2.4B+", label: t("home.impact.metrics.2.label") },
    { value: "340+", label: t("home.impact.metrics.3.label") },
  ];

  const impactTabs = [
    {
      id: "finance",
      label: t("home.impact.industries.0.label"),
      intro: t("home.impact.industries.0.intro"),
      stats: [
        { value: t("home.impact.industries.0.stats.0.value"), text: t("home.impact.industries.0.stats.0.text") },
        { value: t("home.impact.industries.0.stats.1.value"), text: t("home.impact.industries.0.stats.1.text") },
        { value: t("home.impact.industries.0.stats.2.value"), text: t("home.impact.industries.0.stats.2.text") },
      ],
    },
    {
      id: "healthcare",
      label: t("home.impact.industries.1.label"),
      intro: t("home.impact.industries.1.intro"),
      stats: [
        { value: t("home.impact.industries.1.stats.0.value"), text: t("home.impact.industries.1.stats.0.text") },
        { value: t("home.impact.industries.1.stats.1.value"), text: t("home.impact.industries.1.stats.1.text") },
        { value: t("home.impact.industries.1.stats.2.value"), text: t("home.impact.industries.1.stats.2.text") },
      ],
    },
    {
      id: "legal",
      label: t("home.impact.industries.2.label"),
      intro: t("home.impact.industries.2.intro"),
      stats: [
        { value: t("home.impact.industries.2.stats.0.value"), text: t("home.impact.industries.2.stats.0.text") },
        { value: t("home.impact.industries.2.stats.1.value"), text: t("home.impact.industries.2.stats.1.text") },
        { value: t("home.impact.industries.2.stats.2.value"), text: t("home.impact.industries.2.stats.2.text") },
      ],
    },
    {
      id: "industry4",
      label: t("home.impact.industries.3.label"),
      intro: t("home.impact.industries.3.intro"),
      stats: [
        { value: t("home.impact.industries.3.stats.0.value"), text: t("home.impact.industries.3.stats.0.text") },
        { value: t("home.impact.industries.3.stats.1.value"), text: t("home.impact.industries.3.stats.1.text") },
        { value: t("home.impact.industries.3.stats.2.value"), text: t("home.impact.industries.3.stats.2.text") },
      ],
    },
  ];

  const pipelineSteps = [
    { step: "1", title: t("home.architecture.pipelineSteps.0.title"), subtitle: t("home.architecture.pipelineSteps.0.subtitle") },
    { step: "2", title: t("home.architecture.pipelineSteps.1.title"), subtitle: t("home.architecture.pipelineSteps.1.subtitle") },
    { step: "3", title: t("home.architecture.pipelineSteps.2.title"), subtitle: t("home.architecture.pipelineSteps.2.subtitle") },
    { step: "4", title: t("home.architecture.pipelineSteps.3.title"), subtitle: t("home.architecture.pipelineSteps.3.subtitle") },
    { step: "5", title: t("home.architecture.pipelineSteps.4.title"), subtitle: t("home.architecture.pipelineSteps.4.subtitle") },
  ];

  const specRows = [
    { key: t("home.architecture.specRows.0.key"), value: t("home.architecture.specRows.0.value") },
    { key: t("home.architecture.specRows.1.key"), value: t("home.architecture.specRows.1.value") },
    { key: t("home.architecture.specRows.2.key"), value: t("home.architecture.specRows.2.value") },
    { key: t("home.architecture.specRows.3.key"), value: t("home.architecture.specRows.3.value") },
    { key: t("home.architecture.specRows.4.key"), value: t("home.architecture.specRows.4.value") },
    { key: t("home.architecture.specRows.5.key"), value: t("home.architecture.specRows.5.value") },
  ];

  const engagementSteps = [
    { number: "01", title: t("home.engagement.steps.0.title"), description: t("home.engagement.steps.0.description"), meta: t("home.engagement.steps.0.meta") },
    { number: "02", title: t("home.engagement.steps.1.title"), description: t("home.engagement.steps.1.description"), meta: t("home.engagement.steps.1.meta") },
    { number: "03", title: t("home.engagement.steps.2.title"), description: t("home.engagement.steps.2.description"), meta: t("home.engagement.steps.2.meta") },
    { number: "04", title: t("home.engagement.steps.3.title"), description: t("home.engagement.steps.3.description"), meta: t("home.engagement.steps.3.meta") },
  ];

  const faqs = [
    { q: t("home.faq.questions.0.q"), a: t("home.faq.questions.0.a") },
    { q: t("home.faq.questions.1.q"), a: t("home.faq.questions.1.a") },
    { q: t("home.faq.questions.2.q"), a: t("home.faq.questions.2.a") },
    { q: t("home.faq.questions.3.q"), a: t("home.faq.questions.3.a") },
    { q: t("home.faq.questions.4.q"), a: t("home.faq.questions.4.a") },
    { q: t("home.faq.questions.5.q"), a: t("home.faq.questions.5.a") },
  ];

  const deploymentModes = [
    t("home.security.deploymentModes.0"),
    t("home.security.deploymentModes.1"),
    t("home.security.deploymentModes.2"),
    t("home.security.deploymentModes.3"),
  ];

  const docuconFeatures = [
    { icon: "📄", title: t("home.docucon.features.0.title"), desc: t("home.docucon.features.0.desc") },
    { icon: "🗣️", title: t("home.docucon.features.1.title"), desc: t("home.docucon.features.1.desc") },
    { icon: "🌐", title: t("home.docucon.features.2.title"), desc: t("home.docucon.features.2.desc") },
    { icon: "🧠", title: t("home.docucon.features.3.title"), desc: t("home.docucon.features.3.desc") },
    { icon: "🎨", title: t("home.docucon.features.4.title"), desc: t("home.docucon.features.4.desc") },
    { icon: "🔒", title: t("home.docucon.features.5.title"), desc: t("home.docucon.features.5.desc") },
  ];

  const sectionHeader = (eyebrow: string, title: string, description: string) => (
    <Reveal className="max-w-3xl mb-16">
      <div className="section-rule mb-6" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">{title}</h2>
      <p className="text-slate text-lg leading-relaxed">{description}</p>
    </Reveal>
  );

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">{t("home.hero.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-7">
              <span dangerouslySetInnerHTML={{ __html: t("home.hero.title") }} />
            </h1>
            <p className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-xl">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
                {t("home.hero.ctaPrimary")}
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a href="#architecture" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
                {t("home.hero.ctaSecondary")}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">{trustMark} {t("home.hero.certifications.soc2")}</span>
              <span className="flex items-center gap-2">{trustMark} {t("home.hero.certifications.iso")}</span>
              <span className="flex items-center gap-2">{trustMark} {t("home.hero.certifications.gdprHipaa")}</span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-4">
            <div className="border border-line bg-paper p-7 lg:p-8">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                <div>
                  <p className="font-serif font-semibold text-ink text-base">{t("home.platformAtGlance.title")}</p>
                  <p className="text-xs text-muted mt-0.5">veritas-core v4.3.0</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span className="text-emerald-700">{t("home.platformAtGlance.status")}</span>
                </div>
              </div>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.deployment")}</dt>
                  <dd className="font-semibold text-ink text-right">{t("home.platformAtGlance.deploymentValue")}</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.latency")}</dt>
                  <dd className="font-semibold text-ink">1.8ms p50</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.uptime")}</dt>
                  <dd className="font-semibold text-ink">99.997%</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.residency")}</dt>
                  <dd className="font-semibold text-ink text-right">{t("home.platformAtGlance.residencyValue")}</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.training")}</dt>
                  <dd className="font-semibold text-ink">{t("home.platformAtGlance.trainingValue")}</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-slate">{t("home.platformAtGlance.audit")}</dt>
                  <dd className="font-semibold text-ink">{t("home.platformAtGlance.auditValue")}</dd>
                </div>
              </dl>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">{t("home.platformAtGlance.certifications")}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">SOC 2</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">ISO 27001</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">HIPAA</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">GDPR</span>
                  <span className="px-2.5 py-1 border border-line text-xs text-ink font-medium">FedRAMP</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 px-6 lg:px-10 border-b border-line bg-paper">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">{t("home.trustStrip.eyebrow")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {industries.map((ind) => (
              <span key={ind} className="font-serif font-semibold text-lg text-slate">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS / SIX PILLARS */}
      <section id="solutions" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            t("home.solutions.eyebrow"),
            t("home.solutions.title"),
            t("home.solutions.subtitle")
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {pillars.map((p) => (
              <Reveal key={p.title} className="card p-8 lg:p-10 border-0">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-paper-2">{p.icon}</div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-ink mb-1">{p.title}</h3>
                    <p className="text-sm text-muted font-medium">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate leading-relaxed mb-6 text-[15px]">{p.description}</p>
                <ul className="space-y-2.5 text-sm text-ink-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE VERITAS DIFFERENCE */}
      <section id="difference" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            t("home.difference.eyebrow"),
            t("home.difference.title"),
            t("home.difference.subtitle")
          )}
          <Reveal className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {differences.map((d) => (
              <div key={d.number} className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-2xl font-semibold text-gold">{d.number}</span>
                  <h3 className="font-serif font-semibold text-xl text-ink">{d.title}</h3>
                </div>
                <p className="text-slate leading-relaxed text-[15px] mb-4">{d.description}</p>
                <p className="text-sm text-muted leading-relaxed">{d.footnote}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div className="section-rule mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("home.security.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-6 leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t("home.security.title") }} />
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                {t("home.security.subtitle")}
              </p>
              <div className="border border-line bg-white p-6">
                <h4 className="font-serif font-semibold text-ink mb-4 flex items-center gap-2 text-base">
                  <svg width="18" height="18" fill="none" stroke="#0F2A4A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  {t("home.security.deploymentTitle")}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {deploymentModes.map((mode) => (
                    <span key={mode} className="px-4 py-2 border border-line text-ink text-sm font-medium">{mode}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              {securityFeatures.map((f) => (
                <div key={f.title} className="bg-white p-7">
                  <div className="w-10 h-10 flex items-center justify-center mb-4 bg-paper-2">{f.icon}</div>
                  <h3 className="font-serif font-semibold text-base text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY IMPACT */}
      <section id="impact" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            t("home.impact.eyebrow"),
            t("home.impact.title"),
            t("home.impact.subtitle")
          )}
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line mb-20">
            {impactMetrics.map((m) => (
              <div key={m.label} className="bg-white p-8 text-center">
                <div className="metric-num text-4xl md:text-5xl mb-2">{m.value}</div>
                <p className="text-sm text-slate leading-snug">{m.label}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <IndustryTabs tabs={impactTabs} />
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            t("home.architecture.eyebrow"),
            t("home.architecture.title"),
            t("home.architecture.subtitle")
          )}
          <Reveal className="grid lg:grid-cols-5 gap-px bg-line border border-line">
            <div className="lg:col-span-3 bg-white p-8 lg:p-10">
              <h3 className="font-serif font-semibold text-lg text-ink mb-2">{t("home.architecture.runtimeTitle")}</h3>
              <p className="text-sm text-muted mb-8">{t("home.architecture.runtimeVersion")}</p>
              <div className="space-y-3">
                {pipelineSteps.map((s) => (
                  <div key={s.step} className="flex items-center gap-4 p-4 border border-line bg-paper-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy text-white text-xs font-semibold flex-shrink-0">{s.step}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-ink">{s.title}</div>
                      <div className="text-xs text-muted">{s.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 bg-white p-8 lg:p-10">
              <h3 className="font-serif font-semibold text-lg text-ink mb-2">{t("home.architecture.pipelineTitle")}</h3>
              <p className="text-sm text-muted mb-8">{t("home.architecture.pipelineSubtitle")}</p>
              <dl className="space-y-5">
                {specRows.map((row) => (
                  <div key={row.key} className="flex justify-between items-baseline pb-4 border-b border-line">
                    <dt className="text-sm text-slate">{row.key}</dt>
                    <dd className="text-sm font-semibold text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 pt-6 border-t border-line flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="text-ink font-medium">{t("home.architecture.operationalStatus")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section id="engage" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          {sectionHeader(
            t("home.engagement.eyebrow"),
            t("home.engagement.title"),
            t("home.engagement.subtitle")
          )}
          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {engagementSteps.map((s) => (
              <div key={s.number} className="bg-white p-8 lg:p-9">
                <div className="font-serif text-3xl font-semibold text-navy mb-5">{s.number}</div>
                <h3 className="font-serif font-semibold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-slate leading-relaxed mb-4">{s.description}</p>
                <p className="text-xs text-muted leading-relaxed">{s.meta}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-14">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("home.faq.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">
              {t("home.faq.title")}
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("home.faq.subtitle")}
            </p>
          </Reveal>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-line py-6" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif font-semibold text-lg text-ink pr-4">{f.q}</span>
                  <svg className="flex-shrink-0 text-muted group-open:rotate-45 transition-transform" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </summary>
                <p className="text-slate leading-relaxed pt-4 text-[15px]">{f.a}</p>
              </details>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="text-slate text-[15px] mb-5">{t("home.faq.ctaSubtitle")}</p>
            <Link href="/contact" className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
              {t("home.faq.cta")}
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MASTER MILD WIZARD */}
      <section className="py-20 md:py-28 px-6 lg:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #4a0e4e 60%, #1a0533 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(180,130,255,0.15) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 mb-4">{t("home.masterMildWizard.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                {t("home.masterMildWizard.title")}
              </h2>
              <p className="text-lg text-purple-100/80 leading-relaxed mb-6">
                {t("home.masterMildWizard.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  {t("home.masterMildWizard.features.0")}
                </div>
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  {t("home.masterMildWizard.features.1")}
                </div>
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  {t("home.masterMildWizard.features.2")}
                </div>
              </div>
              <Link
                href="https://www.mastermildwizard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                style={{ background: '#B08D57', color: '#fff' }}
              >
                {t("home.masterMildWizard.cta")}
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://drive.google.com/thumbnail?id=1t0g7HcI_2bgf3eVOlEJgHxCXCNEkSZHy&sz=w800"
                  alt={t("home.masterMildWizard.title")}
                  className="relative w-full h-auto rounded-xl border-2 border-purple-400/30 shadow-2xl"
                  loading="lazy"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a href="https://youtube.com/@mastermildwizard" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">YouTube</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.tiktok.com/@master.mind_wizard" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">TikTok</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.facebook.com/share/1asTkDrEEA/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Facebook</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://discord.gg/j7Hb3FhnM" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Discord</a>
                  <span className="text-purple-500">·</span>
                  <a href="https://www.instagram.com/mastermildwizard.pbm" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-xs transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOCUCON PROMO */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white border-b border-indigo-500/20">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              {t("home.docucon.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {t("home.docucon.title")}
            </h2>
            <p className="text-lg md:text-xl text-indigo-100/80 max-w-3xl mx-auto leading-relaxed">
              {t("home.docucon.subtitle")}
            </p>
          </Reveal>

          <Reveal className="grid md:grid-cols-3 gap-6 mb-12">
            {docuconFeatures.map((f, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-indigo-200/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://docucon.veritasglobalai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              >
                {t("home.docucon.cta")}
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <span className="text-sm text-indigo-300/60">
                {t("home.docucon.ctaSubtitle")}
              </span>
            </div>
            <p className="mt-6 text-xs text-indigo-300/40 max-w-md mx-auto">
              {t("home.docucon.footer")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* VERITAS OS */}
      <section className="py-20 md:py-28 px-6 lg:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #112240 30%, #0f2a4a 60%, #0a1628 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(176,141,87,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(30,80,160,0.2) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">{t("home.veritasOS.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                {t("home.veritasOS.title")}
              </h2>
              <p className="text-lg text-slate-300/80 leading-relaxed mb-8">
                {t("home.veritasOS.subtitle")}
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Multi-Agent Hub — every agent as a live card: phase, port, start/stop/restart, log tail, pair",
                  "Agents in the sidebar — connected agents sit with Hermes at the top",
                  "Embedded agent UIs — OpenCode rendered inside the shell in a native view",
                  "Any agent you want — drop a JSON spec in agents.json and it appears in the sidebar",
                  "A real shell — windows, dock, spaces, files, canvas, capture, terminal, automations",
                  "Themes, plugins, voice, memory, missions, connections, and BrowserOS integration",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300/90 text-[15px]">
                    <svg width="16" height="16" fill="none" stroke="#B08D57" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/Aimotive-agent/veritas-os"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                style={{ background: '#B08D57', color: '#fff' }}
              >
                {t("home.veritasOS.cta")}
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-2xl" />
                <div className="relative bg-navy-deep border border-white/10 rounded-xl p-8 text-paper">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">veritas-os</span>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Agent Hub</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-200">Hermes</span>
                          <span className="text-emerald-400 text-xs">Running</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-200">OpenCode</span>
                          <span className="text-emerald-400 text-xs">Running</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-200">Claude Code</span>
                          <span className="text-gray-400 text-xs">Stopped</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Shell</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                        <div className="border border-white/10 rounded px-2 py-1.5">Dock</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Windows</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Spaces</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Files</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Canvas</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Terminal</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      MIT License · Node ≥ 22 · Electron 44
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MININOTEBOOK */}
      <section className="py-20 md:py-28 px-6 lg:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #081614 0%, #0d2521 35%, #0f2b26 65%, #081614 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(176,141,87,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(30,140,120,0.22) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">{t("home.miniNotebook.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                {t("home.miniNotebook.title")}
              </h2>
              <p className="text-lg text-slate-300/80 leading-relaxed mb-8">
                {t("home.miniNotebook.subtitle")}
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Notebooks with PDF, DOCX, TXT and text sources",
                  "Grounded chat that answers only from your sources",
                  "Full-corpus analysis across every indexed chunk",
                  "Automatic summaries and related-source discovery",
                  "Studio: podcast-style audio and narrated video overviews",
                  "Fully self-hosted on our own hardware",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300/90 text-[15px]">
                    <svg width="16" height="16" fill="none" stroke="#B08D57" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="http://192.168.1.42:8095"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                style={{ background: '#B08D57', color: '#fff' }}
              >
                {t("home.miniNotebook.cta")}
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl" />
                <div className="relative bg-navy-deep border border-white/10 rounded-xl p-8 text-paper">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">mininotebook</span>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Notebook · Research</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-200">mri-scan.pdf</span>
                          <span className="text-emerald-400 text-xs">Indexed</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-200">sample.txt</span>
                          <span className="text-emerald-400 text-xs">Indexed</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-emerald-400 text-xs">6862 chunks</span>
                          <span className="text-gray-400 text-xs">full corpus</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Studio</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                        <div className="border border-white/10 rounded px-2 py-1.5">Audio Overview</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Video Overview</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Summaries</div>
                        <div className="border border-white/10 rounded px-2 py-1.5">Related</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      Self-hosted · ChromaDB · Ollama embeddings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("home.contact.eyebrow")}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5 leading-tight">
              {t("home.contact.title")}
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              {t("home.contact.subtitle")}
            </p>
          </Reveal>
          <Reveal className="border border-line bg-paper p-8 lg:p-10">
            <form method="POST" action="/contact" className="block">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.nameLabel")} <span className="text-red-700">*</span></label>
                  <input type="text" id="name" name="name" required placeholder={t("home.contact.form.namePlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.companyLabel")} <span className="text-red-700">*</span></label>
                  <input type="text" id="company" name="company" required placeholder={t("home.contact.form.companyPlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.emailLabel")} <span className="text-red-700">*</span></label>
                  <input type="email" id="email" name="email" required placeholder={t("home.contact.form.emailPlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.roleLabel")}</label>
                  <select id="role" name="role" className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                    {[0,1,2,3,4,5,6].map((i) => (
                      <option key={i} value={["", "c-level", "vp", "head-tech", "procurement", "architect", "other"][i]}>{t(`home.contact.form.roleOptions.${i}`)}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="interest" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.interestLabel")}</label>
                <select id="interest" name="interest" required className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                  {[0,1,2,3,4,5,6,7].map((i) => (
                    <option key={i} value={["", "saas", "agents", "chatbots", "websites", "rag", "marketing", "full"][i]}>{t(`home.contact.form.interestOptions.${i}`)}</option>
                  ))}
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">{t("home.contact.form.messageLabel")} <span className="text-red-700">*</span></label>
                <textarea id="message" name="message" rows={4} required placeholder={t("home.contact.form.messagePlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none"></textarea>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 border-line text-navy focus:ring-navy flex-shrink-0" />
                <label htmlFor="consent" className="text-xs text-muted leading-relaxed">{t("home.contact.form.consentLabel")}</label>
              </div>
              <div className="mt-8">
                <button type="submit" className="btn-primary font-medium px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                  {t("home.contact.form.submitButton")}
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}