"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export function MagicText({ text, image, className }: { text: string; image: string; className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const finalX = useTransform(smoothX, (val) => val + 15);
  const finalY = useTransform(smoothY, (val) => val + 15);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };
    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered, x, y]);

  return (
    <>
      <span
        ref={ref}
        className={className || "relative inline-block cursor-pointer font-bold text-primary hover:text-primary-container transition-colors"}
        onMouseEnter={(e) => {
          setIsHovered(true);
          x.set(e.clientX);
          y.set(e.clientY);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </span>
      {mounted && createPortal(
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                x: finalX,
                y: finalY,
                pointerEvents: "none",
                zIndex: 999999,
              }}
              className="rounded-xl shadow-2xl overflow-hidden border border-outline-variant/30 w-32 h-32 md:w-48 md:h-48 bg-surface-container flex items-center justify-center p-2"
            >
              {/* If it's a simple path to an icon or image */}
              <div 
                className="w-full h-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
