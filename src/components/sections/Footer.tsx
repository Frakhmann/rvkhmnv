"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowUpRight, Globe, Image as ImageIcon, Briefcase, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();

  const SOCIAL_LINKS = [
    {
      name: "Telegram",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "https://t.me/rakhmanov_f",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:4200770@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Briefcase className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/rvkhmnv",
    },
    {
      name: "Instagram",
      icon: <ImageIcon className="w-5 h-5" />,
      url: "https://www.instagram.com/rvkhmnv/",
    }
  ];

  return (
    <footer className="relative border-t border-outline-variant/20 bg-background pt-24 pb-12 overflow-hidden" id="contacts">
      {/* Glow effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline-md text-[40px] md:text-[60px] font-extrabold tracking-tighter text-on-surface mb-6">
              {t("footer.title")}
            </h2>
            <p className="font-body-lg text-on-surface-variant text-lg mb-8">
              {t("footer.desc")}
            </p>
            <Link 
              href="https://t.me/rakhmanov_f" 
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-on-surface text-background font-label-code text-sm font-bold uppercase tracking-wider hover:bg-on-surface/90 transition-colors"
            >
              {t("footer.telegram")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-headline-md text-xl font-bold text-on-surface">{t("footer.socials")}</h3>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.url}
                    target="_blank"
                    className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-md"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant font-label-code tracking-wider">
          <p>{t("footer.rights")}</p>
          <p>{t("footer.builtWith")}</p>
        </div>
        
      </div>
    </footer>
  );
}
