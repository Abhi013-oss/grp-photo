"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  offset?: number; // default 10px
}

export function ParallaxImage({
  children,
  className = "",
  offset = 10,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Conservative vertical parallax: -offset to +offset (e.g. -10px to +10px)
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (prefersReduced) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
