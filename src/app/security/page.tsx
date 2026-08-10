"use client";

import { useLocale } from "@/context/LocaleContext";

export default function SecurityPage() {
  const { t } = useLocale();

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-2">{t("securityDisclosure.title")}</h1>
        <p className="text-sm text-muted mb-12">{t("securityDisclosure.lastUpdated")}</p>

        <div className="space-y-10 text-slate leading-relaxed">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            const section = t(`securityDisclosure.sections.${i}.title`);
            const paragraphs = () => {
              const result: string[] = [];
              let pIndex = 0;
              while (true) {
                const p = t(`securityDisclosure.sections.${i}.paragraphs.${pIndex}`);
                if (p === `securityDisclosure.sections.${i}.paragraphs.${pIndex}`) break;
                result.push(p);
                pIndex++;
              }
              return result;
            };
            const items = () => {
              const result: string[] = [];
              let itIndex = 0;
              while (true) {
                const item = t(`securityDisclosure.sections.${i}.items.${itIndex}`);
                if (item === `securityDisclosure.sections.${i}.items.${itIndex}`) break;
                result.push(item);
                itIndex++;
              }
              return result;
            };
            const extraParagraphs = () => {
              const result: string[] = [];
              let epIndex = 0;
              while (true) {
                const ep = t(`securityDisclosure.sections.${i}.extraParagraphs.${epIndex}`);
                if (ep === `securityDisclosure.sections.${i}.extraParagraphs.${epIndex}`) break;
                result.push(ep);
                epIndex++;
              }
              return result;
            };
            const extraItems = () => {
              const result: string[] = [];
              let eiIndex = 0;
              while (true) {
                const ei = t(`securityDisclosure.sections.${i}.extraItems.${eiIndex}`);
                if (ei === `securityDisclosure.sections.${i}.extraItems.${eiIndex}`) break;
                result.push(ei);
                eiIndex++;
              }
              return result;
            };

            const pArr = paragraphs();
            const iArr = items();
            const epArr = extraParagraphs();
            const eiArr = extraItems();

            return (
              <div key={`sec-${i}`}>
                <h2 className="font-serif text-2xl text-ink mb-3">{section}</h2>
                {pArr.map((p, pi) => (
                  <p key={`p-${pi}`} className={pi > 0 ? "mt-4" : ""}>{p}</p>
                ))}
                {iArr.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {iArr.map((item, ii) => (
                      <li key={`item-${ii}`} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {item}</li>
                    ))}
                  </ul>
                )}
                {epArr.length > 0 && (
                  <>
                    {epArr.map((ep, epi) => (
                      <p key={`ep-${epi}`} className="mt-4">{ep}</p>
                    ))}
                  </>
                )}
                {eiArr.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {eiArr.map((eitem, eii) => (
                      <li key={`eitem-${eii}`} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {eitem}</li>
                    ))}
                  </ul>
                )}
                {i === 6 && (
                  <div className="mt-3 space-y-2">
                    <p>
                      Email:{" "}
                      <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline font-medium">
                        info@veritasglobalai.tech
                      </a>
                      {" "}(please use subject line: &ldquo;{t("securityDisclosure.emailSubjectLine")}&rdquo;)
                    </p>
                  </div>
                )}
                {i === 9 && (
                  <div className="mt-3 space-y-1">
                    <p>Email:{" "}
                      <a href="mailto:info@veritasglobalai.tech" className="text-navy hover:underline">
                        info@veritasglobalai.tech
                      </a>
                    </p>
                    <p>{t("securityDisclosure.websiteLabel")}</p>
                    <p className="mt-2 text-sm text-muted">PGP key available upon request for encrypted communications.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
