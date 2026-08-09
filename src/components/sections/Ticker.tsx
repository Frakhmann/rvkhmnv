"use client";

import { motion } from "framer-motion";

export function Ticker() {
  const items = [
    "Next.js", "Python", "Node.js", "React", "Tailwind CSS", "Telegram Bots", "REST API"
  ];

  // Duplicate for infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full border-y border-outline-variant/20 bg-surface-container py-4 overflow-hidden mb-[120px]">
      <div className="ticker-track font-label-code text-sm text-primary/80 uppercase">
        <div className="flex items-center gap-8 whitespace-nowrap px-4">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-on-surface-variant">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
