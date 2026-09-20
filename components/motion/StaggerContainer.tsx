"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainerVariants, usePrefersReducedMotion } from "@/lib/motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.05,
  staggerChildren = 0.08,
}: StaggerContainerProps) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
