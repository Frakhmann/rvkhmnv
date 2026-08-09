"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";
import en from "./locales/en.json";

type Locale = "ru" | "uz" | "en";

type Dictionary = typeof ru;

const dictionaries: Record<Locale, Dictionary> = {
  ru,
  uz,
  en,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Dictionary) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("app_locale") as Locale;
    if (saved && ["ru", "uz", "en"].includes(saved)) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("app_locale", newLocale);
  };

  const t = (key: keyof Dictionary): any => {
    return dictionaries[locale][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.2s" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
