"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
      {/* Dynamic gradients */}
      <motion.div 
        className="absolute inset-0 opacity-40 transition-opacity duration-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.4 : 0.8 }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 15% 50%, var(--primary) 0%, transparent 40%),
              radial-gradient(circle at 85% 30%, var(--tertiary) 0%, transparent 40%)
            `,
            opacity: 0.15
          }}
        />
      </motion.div>

      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />

      {/* SVG Noise */}
      <svg className="pointer-events-none fixed isolate z-50 opacity-[0.08] mix-blend-soft-light w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
