"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#works", label: t("nav.works") },
    { href: "#process", label: t("nav.process") },
    { href: "#contacts", label: t("nav.contacts") },
  ];

  return (
    <>
      <nav className="docked full-width top-0 sticky z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-[1280px] mx-auto z-50">
          
          <div className="font-headline-md text-[32px] font-bold text-on-surface tracking-tighter uppercase relative z-50">
            rvkhmnv
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-body-md text-base uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-on-surface-variant hover:text-primary transition-all duration-300 active:scale-90">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Magnetic>
              <Link 
                href="https://t.me/rakhmanov_f"
                target="_blank"
                className="flex items-center justify-center px-6 py-2 rounded-full bg-primary text-on-primary font-label-code text-sm hover:bg-primary-container transition-colors neon-glow font-bold"
              >
                {t("nav.letsBuild")}
              </Link>
            </Magnetic>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-on-surface p-2 relative z-50 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="font-headline-md text-3xl font-semibold text-on-surface hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              
              <Link 
                href="https://t.me/rakhmanov_f"
                target="_blank"
                className="flex items-center justify-center px-8 py-4 rounded-full bg-primary text-on-primary font-label-code text-lg hover:bg-primary-container transition-colors neon-glow font-bold"
                onClick={closeMenu}
              >
                {t("nav.letsBuild")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
