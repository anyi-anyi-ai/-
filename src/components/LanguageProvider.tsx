"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Locale = "zh" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (copy: LocalizedCopy) => string;
};

export type LocalizedCopy = {
  zh: string;
  en: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "zh";
    const saved = window.localStorage.getItem("anno-locale");
    return saved === "zh" || saved === "en" ? saved : "zh";
  });

  const value = useMemo<LanguageContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      window.localStorage.setItem("anno-locale", nextLocale);
    };

    return {
      locale,
      setLocale,
      t: (copy) => copy[locale],
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function LocalizedText({ zh, en }: LocalizedCopy) {
  const { locale } = useLanguage();
  return locale === "zh" ? zh : en;
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-grid grid-cols-2 rounded-lg border border-current/10 bg-white/10 p-1 ${
        compact ? "text-[0.68rem]" : "text-xs"
      }`}
      aria-label="语言切换"
    >
      {(["zh", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-md px-2.5 py-1.5 font-semibold transition ${
            locale === item ? "bg-current text-white mix-blend-difference" : "text-current/60 hover:text-current"
          }`}
          aria-pressed={locale === item}
        >
          {item === "zh" ? "中" : "EN"}
        </button>
      ))}
    </div>
  );
}
