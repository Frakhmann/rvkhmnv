"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThreeSphere } from "@/components/ui/ThreeSphere";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center pt-24 pb-[120px] px-6 max-w-[1280px] mx-auto overflow-hidden w-full">
      
      <motion.div 
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="font-label-code text-sm text-on-surface-variant tracking-wider">
            {t("hero.badge")}
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[72px] leading-[1.2] md:leading-[1.1] tracking-tighter text-on-surface mb-6 font-bold">
          {t("hero.title").split("—")[0]} — <br/>
          <span className="text-gradient font-extrabold">{t("hero.title").split("—")[1]}</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mb-12">
          {t("hero.subtitle")}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="https://t.me/rakhmanov_f" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-on-primary font-label-code text-sm uppercase tracking-wider neon-glow hover:bg-primary-container transition-colors font-bold">
            {t("hero.primaryCTA")}
          </a>
          <a href="#works" className="w-full sm:w-auto px-8 py-4 rounded-full glass-card font-label-code text-sm uppercase tracking-wider text-on-surface hover:border-primary transition-colors">
            {t("hero.secondaryCTA")}
          </a>
        </div>
      </motion.div>

      {/* 3D Sphere Scene */}
      <ThreeSphere />
    </section>
  );
}
