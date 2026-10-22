"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enMessages from "../messages/en.json";

export type Locale = 'en' | 'th';

export type Translations = Record<string, unknown>;

/**
 * English is imported STATICALLY so the server-rendered HTML contains the real
 * copy. Translations used to be fetched in an effect, which meant the HTML a
 * crawler receives contained translation KEYS — the <h1> on 14 of 19 pages read
 * literally "solutions.title" and the pages had no indexable body text.
 *
 * Thai stays a dynamic import: it is only needed when a visitor explicitly
 * picks it, and it is 172 KB.
 */
const EN = enMessages as unknown as Translations;

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('veritas-locale');
    if (stored === 'en' || stored === 'th') return stored;
  }
  return 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Translations>(EN);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // localStorage does not exist during SSR, so the stored locale can only be
    // read after mount. The state update is deferred to a task so it is not a
    // synchronous setState inside the effect body.
    const id = window.setTimeout(() => {
      setLocaleState(getInitialLocale());
      setMounted(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem('veritas-locale', locale);
  }, [locale, mounted]);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;
    // The load is deferred to a task so the state update is not a synchronous
    // setState inside the effect body.
    const id = window.setTimeout(async () => {
      try {
        if (locale === 'en') {
          setTranslations(EN);
          return;
        }
        const data = await import(`../messages/${locale}.json`);
        if (!cancelled) setTranslations(data.default as Translations);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        if (!cancelled) setTranslations(EN);
      }
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
