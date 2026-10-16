"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const { t } = useLocale();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

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

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-serif font-semibold text-2xl lg:text-3xl text-ink mb-8">{t("contact.requestTitle")}</h2>

                {formState === "success" ? (
                  <div className="border border-green-300 bg-green-50 p-8 lg:p-10">
                    <h3 className="font-serif font-semibold text-xl text-green-800 mb-3">{t("contact.successTitle")}</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      {t("contact.successMessage")}
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-6 btn-primary font-medium px-6 py-2.5 text-sm tracking-wide inline-flex items-center gap-2"
                    >
                      {t("contact.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="border border-line bg-paper p-8 lg:p-10">
                    {formState === "error" && (
                      <div className="mb-6 p-4 border border-red-300 bg-red-50 text-sm text-red-700">
                        {errorMsg}
                      </div>
                    )}
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
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-primary font-medium px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" ? (
                          <>
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            {t("contact.sending")}
                          </>
                        ) : (
                          <>
                            {t("contact.submitButton")}
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
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
                  <a href="mailto:info@veritasglobal.tech" className="text-navy hover:underline font-medium">
                    info@veritasglobal.tech
                  </a>
                </p>
                <p className="text-sm text-slate mt-2">
                  {t("contact.forSupport")}{" "}
                  <a href="mailto:info@veritasglobal.tech" className="text-navy hover:underline font-medium">
                    info@veritasglobal.tech
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
