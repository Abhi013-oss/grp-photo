"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUpVariants, usePrefersReducedMotion } from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const customVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 16 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
