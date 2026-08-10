"use client";

import { useLocale } from "@/context/LocaleContext";

function getArrayStrings(
  t: (key: string) => string,
  basePath: string,
  index: number
): string[] {
  const result: string[] = [];
  let idx = 0;
  while (true) {
    const val = t(`${basePath}.${index}.${idx}`);
    if (val === `${basePath}.${index}.${idx}`) break;
    result.push(val);
    idx++;
  }
  return result;
}

export function LegalSection({ sectionKey, showEmail = false, showContact = false, emailSubjectLine = "" }: { sectionKey: string; showEmail?: boolean; showContact?: boolean; emailSubjectLine?: string }) {
  const { t } = useLocale();

  return (
    <div className="space-y-10 text-slate leading-relaxed">
      {Array.from({ length: 20 }).map((_, i) => {
        const title = t(`${sectionKey}.sections.${i}.title`);
        if (title === `${sectionKey}.sections.${i}.title`) return null;

        const paragraphs = getArrayStrings(t, `${sectionKey}.sections`, i);
        const extraParagraphs = (() => {
          const result: string[] = [];
          let idx = 0;
          while (true) {
            const val = t(`${sectionKey}.sections.${i}.extraParagraphs.${idx}`);
            if (val === `${sectionKey}.sections.${i}.extraParagraphs.${idx}`) {
              break;
            }
            result.push(val);
            idx++;
          }
          return result;
        })();
        const items = (() => {
          const result: string[] = [];
          let idx = 0;
          while (true) {
            const val = t(`${sectionKey}.sections.${i}.items.${idx}`);
            if (val === `${sectionKey}.sections.${i}.items.${idx}`) {
              break;
            }
            result.push(val);
            idx++;
          }
          return result;
        })();
        const extraItems = (() => {
          const result: string[] = [];
          let idx = 0;
          while (true) {
            const val = t(`${sectionKey}.sections.${i}.extraItems.${idx}`);
            if (val === `${sectionKey}.sections.${i}.extraItems.${idx}`) {
              break;
            }
            result.push(val);
            idx++;
          }
          return result;
        })();

        return (
          <div key={`section-${i}`}>
            <h2 className="font-serif text-2xl text-ink mb-3">{title}</h2>
            {paragraphs.map((p, pi) => (
              <p key={`p-${pi}`} className={pi > 0 ? "mt-4" : ""}>{p}</p>
            ))}
            {items.length > 0 && (
              <ul className="mt-3 space-y-2">
                {items.map((item, ii) => (
                  <li key={`item-${ii}`} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {item}</li>
                ))}
              </ul>
            )}
            {extraParagraphs.length > 0 && extraParagraphs.map((ep, epi) => (
              <p key={`ep-${epi}`} className="mt-4">{ep}</p>
            ))}
            {extraItems.length > 0 && (
              <ul className="mt-3 space-y-2">
                {extraItems.map((eitem, eii) => (
                  <li key={`eitem-${eii}`} className="flex items-start gap-3"><span className="text-gold mt-0.5">—</span> {eitem}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
