"use client";

import { Transition, Variants } from "framer-motion";

export const motionTokens = {
  durations: {
    micro: 0.2,
    standard: 0.4,
    cinematic: 0.8,
  },
  easings: {
    luxury: [0.16, 1, 0.3, 1] as const,
    gentle: [0.25, 0.1, 0.25, 1] as const,
    easeOut: [0, 0, 0.2, 1] as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
  distances: {
    micro: 4,
    small: 8,
    medium: 16,
    large: 24,
  },
};

export const defaultTransition: Transition = {
  duration: motionTokens.durations.standard,
  ease: motionTokens.easings.luxury,
};

export const microTransition: Transition = {
  duration: motionTokens.durations.micro,
  ease: motionTokens.easings.luxury,
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distances.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.normal,
      delayChildren: 0.05,
    },
  },
};

/**
 * Hook to dynamically react to the user's reduced motion preference.
 */
export function usePrefersReducedMotion(): boolean {
  return false;
}
