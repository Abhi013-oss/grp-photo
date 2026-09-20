"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full">
      {/* Editorial Luxury Gold Beam on Page Open / Route Change */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-gold-subtle to-transparent z-[9999] pointer-events-none origin-left"
      />

      {/* Main Page Transition Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
