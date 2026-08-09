"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Terminal, Gauge, Bot, Cpu } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagicText } from "@/components/ui/MagicText";

export function ServicesBento() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <section className="px-6 max-w-[1280px] mx-auto mb-[120px]" id="services">
      <motion.h2 
        className="font-headline-md text-[32px] md:text-[40px] font-bold text-on-surface mb-12 tracking-tighter"
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("services.title")}
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-[16px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Large Card: Full-Stack */}
        <motion.div 
          className="md:col-span-8"
          variants={itemVariants}
        >
          <TiltCard className="glass-card bento-card rounded-xl p-8 flex flex-col justify-between min-h-[320px]" tiltAmount={4}>
          <div>
            <Terminal className="text-primary w-10 h-10 mb-4" />
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">{t("services.card1.title")}</h3>
            <p className="font-body-md text-base text-on-surface-variant max-w-md">
              {t("services.card1.desc")}
            </p>
          </div>
          <div className="flex gap-2 mt-8">
            <MagicText 
              text="Next.js" 
              image="https://cdn.worldvectorlogo.com/logos/next-js.svg" 
              className="px-3 py-1 rounded bg-surface/60 border border-outline-variant/30 font-label-code text-xs text-on-surface-variant cursor-pointer hover:bg-surface/80 hover:text-primary transition-colors"
            />
            <MagicText 
              text="Python" 
              image="https://cdn.worldvectorlogo.com/logos/python-5.svg" 
              className="px-3 py-1 rounded bg-surface/60 border border-outline-variant/30 font-label-code text-xs text-on-surface-variant cursor-pointer hover:bg-surface/80 hover:text-primary transition-colors"
            />
          </div>
          </TiltCard>
        </motion.div>

        {/* Side Card: Landing Pages */}
        <motion.div 
          className="md:col-span-4"
          variants={itemVariants}
        >
          <TiltCard className="glass-card bento-card rounded-xl p-8 flex flex-col justify-between min-h-[320px]" tiltAmount={5}>
          <div>
            <Gauge className="text-tertiary w-10 h-10 mb-4" />
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">{t("services.card2.title")}</h3>
            <p className="font-body-md text-base text-on-surface-variant">
              {t("services.card2.desc")}
            </p>
          </div>
          </TiltCard>
        </motion.div>

        {/* Bottom Left Card: Bots */}
        <motion.div 
          className="md:col-span-4"
          variants={itemVariants}
        >
          <TiltCard className="glass-card bento-card rounded-xl p-8 flex flex-col justify-between min-h-[280px]" tiltAmount={6}>
          <div>
            <Bot className="text-secondary w-10 h-10 mb-4" />
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">{t("services.card3.title")}</h3>
            <p className="font-body-md text-base text-on-surface-variant">
              {t("services.card3.desc")}
            </p>
          </div>
          </TiltCard>
        </motion.div>

        {/* Bottom Right Card: USP */}
        <motion.div 
          className="md:col-span-8"
          variants={itemVariants}
        >
          <TiltCard className="glass-card bento-card rounded-xl p-8 flex flex-col justify-between min-h-[280px]" tiltAmount={4}>
          <div>
            <Cpu className="text-primary w-10 h-10 mb-4" />
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">{t("services.card4.title")}</h3>
            <p className="font-body-md text-base text-on-surface-variant max-w-xl">
              {t("services.card4.desc")}
            </p>
          </div>
          </TiltCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
