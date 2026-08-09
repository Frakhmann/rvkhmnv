"use client";

import { useLanguage } from "./LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2 font-label-code text-sm">
      <button
        onClick={() => setLocale("uz")}
        className={`transition-colors hover:text-primary ${
          locale === "uz" ? "text-primary font-bold" : "text-on-surface-variant"
        }`}
      >
        UZ
      </button>
      <span className="text-on-surface-variant/50">|</span>
      <button
        onClick={() => setLocale("ru")}
        className={`transition-colors hover:text-primary ${
          locale === "ru" ? "text-primary font-bold" : "text-on-surface-variant"
        }`}
      >
        RU
      </button>
      <span className="text-on-surface-variant/50">|</span>
      <button
        onClick={() => setLocale("en")}
        className={`transition-colors hover:text-primary ${
          locale === "en" ? "text-primary font-bold" : "text-on-surface-variant"
        }`}
      >
        EN
      </button>
    </div>
  );
}
