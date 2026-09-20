"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "scale-up"
  | "slide-left"
  | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  distance = 32,
  once = false,
  amount = 0.08,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = (): Variants => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: {
            opacity: 0,
            y: distance,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "fade-down":
        return {
          hidden: {
            opacity: 0,
            y: -distance,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "scale-up":
        return {
          hidden: {
            opacity: 0,
            scale: 0.94,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: duration + 0.1,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "slide-left":
        return {
          hidden: {
            opacity: 0,
            x: distance,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "slide-right":
        return {
          hidden: {
            opacity: 0,
            x: -distance,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "fade-in":
      default:
        return {
          hidden: {
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-30px 0px -30px 0px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function ScrollRevealStagger({
  children,
  className = "",
  staggerDelay = 0.12,
  once = false,
}: ScrollRevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.08, margin: "-30px 0px -30px 0px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className = "",
  variant = "fade-up",
  distance = 28,
  duration = 0.65,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "scale-up" | "fade-in";
  distance?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants: Variants = {
    hidden:
      variant === "scale-up"
        ? { opacity: 0, scale: 0.94, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeOut" } }
        : variant === "fade-up"
        ? { opacity: 0, y: distance, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeOut" } }
        : { opacity: 0, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeOut" } },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
