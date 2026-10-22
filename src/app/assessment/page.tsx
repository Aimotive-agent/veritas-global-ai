"use client";

import { useEffect } from "react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { useLocale } from "@/context/LocaleContext";

export default function AssessmentPage() {
  const { t } = useLocale();

  useEffect(() => {
    document.title = `${t("assessment.title")} — Veritas Global AI`;
  }, [t]);

  const deliverables = [
    t("assessment.deliverables.0"),
    t("assessment.deliverables.1"),
    t("assessment.deliverables.2"),
    t("assessment.deliverables.3"),
    t("assessment.deliverables.4"),
  ];

  const processSteps = [
    { step: t("assessment.processSteps.0.step"), title: t("assessment.processSteps.0.title"), text: t("assessment.processSteps.0.text") },
    { step: t("assessment.processSteps.1.step"), title: t("assessment.processSteps.1.title"), text: t("assessment.processSteps.1.text") },
    { step: t("assessment.processSteps.2.step"), title: t("assessment.processSteps.2.title"), text: t("assessment.processSteps.2.text") },
    { step: t("assessment.processSteps.3.step"), title: t("assessment.processSteps.3.title"), text: t("assessment.processSteps.3.text") },
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("assessment.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("assessment.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("assessment.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-6">{t("assessment.whatYouGet")}</h2>
                <ul className="space-y-4">
                  {deliverables.map((item, i) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-8 h-8 flex items-center justify-center bg-navy text-white text-sm font-semibold flex-shrink-0">{i + 1}</span>
                      <span className="text-slate pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-10 border border-line bg-paper p-6">
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">{t("assessment.howItWorks")}</h3>
                <ol className="space-y-4 text-sm text-slate">
                  {processSteps.map((s) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="font-serif font-semibold text-gold flex-shrink-0">{s.step}.</span>
                      <span><strong className="text-ink">{s.title}</strong> — {s.text}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <div>
              <Reveal className="border border-line bg-paper p-8 lg:p-10 lg:sticky lg:top-28">
                <h2 className="font-serif font-semibold text-2xl text-ink mb-6">{t("assessment.requestTitle")}</h2>
                <LeadForm
                  className="space-y-5"
                  submitLabel={t("assessment.submitButton")}
                  source="assessment"
                  interest="assessment"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-ink mb-2">{t("assessment.nameLabel")} <span className="text-red-700">*</span></label>
                      <input type="text" id="first-name" name="name" required placeholder="Jane Thornton" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">{t("assessment.companyLabel")} <span className="text-red-700">*</span></label>
                      <input type="text" id="company" name="company" required placeholder="Enterprise Corp" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">{t("assessment.emailLabel")} <span className="text-red-700">*</span></label>
                    <input type="email" id="email" name="email" required placeholder="jane@enterprise.com" className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="context" className="block text-sm font-medium text-ink mb-2">{t("assessment.contextLabel")} <span className="text-red-700">*</span></label>
                    <textarea id="context" name="message" rows={4} required placeholder={t("assessment.contextPlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none"></textarea>
                  </div>
                  <p className="text-xs text-muted text-center">
                    {t("assessment.confidentialNote")}
                  </p>
                </LeadForm>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
