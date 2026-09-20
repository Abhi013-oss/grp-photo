"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // default 1.0 degree
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 1.0,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for rotation X and Y
  const rotateX = useSpring(0, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || prefersReduced) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate relative position (-0.5 to +0.5)
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      // Restrained tilt: ±1 degree maximum
      rotateX.set(-yPct * (maxTilt * 2));
      rotateY.set(xPct * (maxTilt * 2));
    },
    [maxTilt, prefersReduced, rotateX, rotateY]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full transition-shadow duration-300"
      >
        {children}
      </motion.div>
    </div>
  );
}
