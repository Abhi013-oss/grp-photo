"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full flex flex-col flex-1">
      {/* Luxury Editorial Shutter / Curtain Veil Opening */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.82,
          ease: [0.77, 0, 0.175, 1], // Cinematic luxury shutter curve
        }}
        className="fixed inset-0 z-[99999] pointer-events-none bg-[#141210] flex flex-col items-center justify-center border-b border-[#B89762]/40 shadow-2xl"
      >
        {/* Shutter Monogram & Golden Hairline Shimmer */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-2.5 px-6 text-center"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#B89762]">
            FINE ART PHOTOGRAPHY & ARCHIVES
          </span>
          <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] tracking-wide italic">
            Vara Stories
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B89762] to-transparent mt-1" />
        </motion.div>

        {/* Dynamic Golden Edge Beam along the bottom of the rising curtain */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89762] to-transparent shadow-[0_0_20px_#B89762]" />
      </motion.div>

      {/* Top Gold Horizon Beam that sweeps across as page opens */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#B89762] to-transparent z-[9999] pointer-events-none origin-left"
      />

      {/* Main Page Content Dynamic Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        transition={{
          duration: 0.75,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex flex-col flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}

