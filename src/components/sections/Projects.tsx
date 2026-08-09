"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function Projects() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      desc: t("projects.1.desc"),
      tags: ["Frontend", "Responsive", "SEO"],
      link: "https://oqsaroycardio.uz",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG9F52BCo_X5O7cXS-p6Dyp9ccWhvketwI_ZO4ysTd69N4DliQrNb15C8DOXpmgsHtMUji_RmuRlX_moUCR5NGdrRIVjSDzLPq5n4hcvuh-YeimA-ehgqycr7uGkJGUk3pNGURXv25Lohs5W8yMiRQkdNtNkxZYJ5TuXFewHODbdeYJXQMlAFWHpoGjngVg4cR5O4DDG3bzwKgk7zbM4PNEww5A-1a272y6o-qiZLm9StAa2vKhmugeg",
      reverse: false
    },
    {
      id: 2,
      title: t("projects.2.title"),
      desc: t("projects.2.desc"),
      tags: ["Corporate", "Logistics", "UI/UX"],
      link: "https://slrshipping.uz",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkvoyQ-9mAmZEoiuaA__oE-Oak1N5stTyiws05M-trMu_ur7paw8bRbItGiKQ7LDU0iCwY4onMmE8FUdDbKnelgdMoIUwwIMVVc_PL-3ZopmJUjPCpkGz4fR9weA23BcuqWk0vSmToKwkHNCs0Oa2BGfCCrIyAwLkRVyaQlOtBTzj_7-heDttv7BE-4K6qefS4YTrxxDPQ7oRnQYcgME17rYuz9da6y5XENpJKvDA9QxOOtv5KVjIT5Q",
      reverse: true
    },
    {
      id: 3,
      title: t("projects.3.title"),
      desc: t("projects.3.desc"),
      tags: ["Next.js", "React", "Dynamic UI"],
      link: "https://uzcorex-8p84.vercel.app",
      image: "/projects/uzcorex.png",
      reverse: false
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="px-6 max-w-[1280px] mx-auto mb-[120px]" id="works">
      <motion.h2 
        className="font-headline-md text-[32px] md:text-[40px] font-bold text-on-surface mb-12 tracking-tighter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t("projects.title")}
      </motion.h2>

      <div className="flex flex-col gap-12">
        {projects.map((proj, idx) => (
          <motion.div 
            layoutId={`project-container-${proj.id}`}
            key={proj.id}
            onClick={() => setSelectedId(proj.id)}
            className={`group glass-card rounded-xl overflow-hidden flex flex-col cursor-pointer ${proj.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <TiltCard innerClassName={`group flex flex-col w-full h-full ${proj.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`} tiltAmount={3}>
            <motion.div layoutId={`project-image-container-${proj.id}`} className="w-full md:w-1/2 min-h-[300px] relative bg-surface-container-high overflow-hidden">
              <motion.div 
                layoutId={`project-image-${proj.id}`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${proj.image}')` }}
              ></motion.div>
              <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <div className="absolute top-8 right-8 text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <motion.h3 layoutId={`project-title-${proj.id}`} className="font-headline-md text-[32px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">{proj.title}</motion.h3>
              <motion.p layoutId={`project-desc-${proj.id}`} className="font-body-lg text-lg text-on-surface-variant mb-8">
                {proj.desc}
              </motion.p>
              <motion.div layoutId={`project-tags-${proj.id}`} className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface/60 border border-outline-variant/30 font-label-code text-xs text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-12 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`project-container-${selectedProject.id}`}
              className="bg-surface w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative cursor-default border border-outline-variant/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-background/50 hover:bg-background backdrop-blur-md rounded-full flex items-center justify-center text-on-surface transition-colors"
              >
                ✕
              </button>

              <motion.div layoutId={`project-image-container-${selectedProject.id}`} className="w-full md:w-1/2 h-64 md:h-full relative bg-surface-container-high">
                <motion.div 
                  layoutId={`project-image-${selectedProject.id}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedProject.image}')` }}
                ></motion.div>
              </motion.div>
              
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col overflow-y-auto">
                <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="font-headline-md text-[40px] md:text-[56px] font-bold text-on-surface mb-6 leading-tight">
                  {selectedProject.title}
                </motion.h3>
                
                <motion.div layoutId={`project-tags-${selectedProject.id}`} className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 font-label-code text-sm text-primary">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.p layoutId={`project-desc-${selectedProject.id}`} className="font-body-lg text-xl text-on-surface-variant mb-12 leading-relaxed">
                  {selectedProject.desc}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto"
                >
                  <h4 className="text-on-surface font-bold text-lg mb-4">Project Highlights</h4>
                  <ul className="list-disc list-inside text-on-surface-variant space-y-2 mb-12">
                    <li>Developed responsive UI with pixel-perfect precision.</li>
                    <li>Integrated real-time data fetching and caching.</li>
                    <li>Optimized for 100/100 Lighthouse Performance.</li>
                  </ul>
                  
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-on-primary font-label-code font-bold uppercase tracking-wider hover:bg-primary-container transition-colors neon-glow"
                  >
                    Visit Live Site
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
