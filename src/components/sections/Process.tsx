"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function Process() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps = [
    { num: t("process.step1.num"), title: t("process.step1.title"), desc: t("process.step1.desc") },
    { num: t("process.step2.num"), title: t("process.step2.title"), desc: t("process.step2.desc") },
    { num: t("process.step3.num"), title: t("process.step3.title"), desc: t("process.step3.desc") },
    { num: t("process.step4.num"), title: t("process.step4.title"), desc: t("process.step4.desc") }
  ];

  return (
    <section className="px-6 max-w-[1280px] mx-auto mb-[120px]" id="process">
      <motion.h2 
        className="font-headline-md text-[32px] md:text-[40px] font-bold text-on-surface mb-12 tracking-tighter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t("process.title")}
      </motion.h2>

      <div className="relative" ref={containerRef}>
        
        {/* Desktop SVG Line */}
        <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] hidden md:block z-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" className="text-outline-variant/30" strokeWidth="2" />
            <motion.line 
              x1="0" y1="0" x2="100%" y2="0" 
              stroke="var(--primary)" 
              strokeWidth="3" 
              style={{ pathLength: scrollYProgress }} 
              className="drop-shadow-[0_0_8px_var(--primary)]"
            />
          </svg>
        </div>

        {/* Mobile SVG Line */}
        <div className="absolute top-[5%] bottom-[5%] left-[56px] w-[2px] block md:hidden z-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" className="text-outline-variant/30" strokeWidth="2" />
            <motion.line 
              x1="0" y1="0" x2="0" y2="100%" 
              stroke="var(--primary)" 
              strokeWidth="3" 
              style={{ pathLength: scrollYProgress }} 
              className="drop-shadow-[0_0_8px_var(--primary)]"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              className="glass-card rounded-xl p-8 flex flex-col hover:border-primary transition-colors bg-surface/80 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                <span className="font-label-code text-primary text-lg font-bold">{step.num}</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-semibold mb-4">{step.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
