"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'th';

export type Translations = Record<string, any>;

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
  const [translations, setTranslations] = useState<Translations>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem('veritas-locale', locale);
  }, [locale, mounted]);

  useEffect(() => {
    if (!mounted) return;
    async function loadTranslations() {
      try {
        const data = await import(`../messages/${locale}.json`);
        setTranslations(data.default);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        if (locale !== 'en') {
          const fallbackData = await import(`../messages/en.json`);
          setTranslations(fallbackData.default);
        }
      }
    }

    loadTranslations();
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
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