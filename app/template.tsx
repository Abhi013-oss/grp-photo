"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="relative w-full flex flex-col flex-1">
      {/* Luxury Atelier Opening Curtain / Shutter Reveal */}
      <motion.div
        key={`shutter-${pathname}`}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1], // Cinematic luxury shutter curve
          delay: 0.05,
        }}
        className="fixed inset-0 z-[99999] pointer-events-none bg-[#121110] flex flex-col items-center justify-center border-b border-[#B89762]/50 shadow-2xl"
      >
        {/* Shutter Monogram & Golden Hairline */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-2.5 px-6 text-center"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#B89762]">
            PROFESSIONAL PHOTOGRAPHY
          </span>
          <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] tracking-wide italic font-normal">
            Guri Rupal Photography
          </span>
          <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#B89762] to-transparent mt-2" />
        </motion.div>

        {/* Dynamic Golden Edge Beam along the bottom of the rising curtain */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_25px_#D4AF37]" />
      </motion.div>

      {/* Top Gold Horizon Beam that sweeps across as page opens */}
      <motion.div
        key={`beam-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#B89762] to-transparent z-[9999] pointer-events-none origin-left"
      />

      {/* Main Page Content Dynamic Entrance */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 38, filter: "blur(8px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transitionEnd: {
            filter: "none",
            transform: "none",
          },
        }}
        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        transition={{
          duration: 0.75,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex flex-col flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}

