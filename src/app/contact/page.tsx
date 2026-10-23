"use client";

import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import SocialLinks from "@/components/SocialLinks";
import { useLocale } from "@/context/LocaleContext";


export default function ContactPage() {
  const { t } = useLocale();
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">{t("contact.eyebrow")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate">
            Prefer to look first? The walkthroughs live on YouTube and the page.
          </p>
          <SocialLinks variant="light" />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-8">{t("contact.requestTitle")}</h2>

                <LeadForm
                  className="border border-line bg-paper p-8 lg:p-10"
                  submitLabel={t("contact.submitButton")}
                  sendingLabel={t("contact.sending")}
                  source="contact"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">{t("contact.nameLabel")} <span className="text-red-700">*</span></label>
                        <input type="text" id="name" name="name" required placeholder={t("contact.namePlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">{t("contact.companyLabel")} <span className="text-red-700">*</span></label>
                        <input type="text" id="company" name="company" required placeholder={t("contact.companyPlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">{t("contact.emailLabel")} <span className="text-red-700">*</span></label>
                        <input type="email" id="email" name="email" required placeholder={t("contact.emailPlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">{t("contact.roleLabel")}</label>
                        <select id="role" name="role" className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                            <option key={`role-${i}`} value={i === 0 ? "" : `role-${i}`}>{t(`contact.roleOptions.${i}`)}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="interest" className="block text-sm font-medium text-ink mb-2">{t("contact.interestLabel")}</label>
                      <select id="interest" name="interest" required className="w-full px-4 py-3 bg-white border border-line text-ink text-sm focus:border-navy transition-colors">
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <option key={`interest-${i}`} value={i === 0 ? "" : `interest-${i}`}>{t(`contact.interestOptions.${i}`)}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">{t("contact.messageLabel")} <span className="text-red-700">*</span></label>
                      <textarea id="message" name="message" rows={5} required placeholder={t("contact.messagePlaceholder")} className="w-full px-4 py-3 bg-white border border-line text-ink placeholder-muted text-sm focus:border-navy transition-colors resize-none"></textarea>
                    </div>
                    <div className="mt-6 flex items-start gap-3">
                      <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 border-line text-navy focus:ring-navy flex-shrink-0" />
                      <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
                        {t("contact.consentLabel").split("<link>")[0]}
                        <a href="/privacy" className="text-navy hover:underline">Privacy Policy</a>
                        {t("contact.consentLabel").split("</link>")[1] || t("contact.consentLabel").split("<link>")[1]?.split("</link>")[1]}
                      </label>
                    </div>
                </LeadForm>
              </Reveal>
            </div>

            <div className="space-y-10">
              <Reveal>
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">{t("contact.whatToExpect")}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={`expect-${i}`} className="flex gap-3">
                      <span className="font-serif text-lg font-semibold text-gold flex-shrink-0">{t(`contact.expectSteps.${i}.step`)}</span>
                      <span className="text-sm text-slate">{t(`contact.expectSteps.${i}.text`)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="border border-line bg-paper p-6">
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">{t("contact.preferEmail")}</h3>
                <p className="text-sm text-slate">
                  {t("contact.reachUsAt")}{" "}
                  <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline font-medium">
                    info@veritasglobalai.tech
                  </a>
                </p>
                <p className="text-sm text-slate mt-2">
                  {t("contact.forSupport")}{" "}
                  <a href="mailto:support@veritasglobalai.tech" className="text-navy hover:underline font-medium">
                    support@veritasglobalai.tech
                  </a>
                </p>
              </Reveal>

              <Reveal>
                <h3 className="font-serif font-semibold text-lg text-ink mb-4">{t("contact.compliance")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["SOC 2", "ISO 27001", "HIPAA", "GDPR", "FedRAMP"].map((c) => (
                    <span key={c} className="px-2.5 py-1 border border-line text-xs text-ink font-medium">{c}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
