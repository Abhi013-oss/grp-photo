"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroSlide } from "@/lib/types";

interface HeroContentProps {
  slide: HeroSlide;
}

export function HeroContent({ slide }: HeroContentProps) {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col items-center justify-center text-center mx-auto select-none">
      {/* Eyebrow & Category */}
      <motion.div
        key={`eyebrow-${slide.id}`}
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4.5 mx-auto"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/85 backdrop-blur-md border border-[#2C2523]/10 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-espresso-primary">
          {slide.eyebrow || "GURI RUPAL PHOTOGRAPHY"}
        </span>
        <span className="text-[11px] uppercase tracking-[0.22em] text-espresso-muted hidden sm:inline">
          {slide.category}
        </span>
      </motion.div>

      {/* Main Editorial Headline */}
      <motion.h1
        key={`title-${slide.id}`}
        initial={{ opacity: 0, y: 22, scale: 0.98, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal tracking-tight text-espresso-primary mb-3.5 sm:mb-5 drop-shadow-sm text-center mx-auto"
      >
        {slide.title}
      </motion.h1>

      {/* Subtitle / Narrative Copy */}
      <motion.p
        key={`sub-${slide.id}`}
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-xs sm:text-sm md:text-base text-espresso-muted max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal text-center"
      >
        {slide.subtitle}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        key={`cta-${slide.id}`}
        initial={{ opacity: 0, y: 14, scale: 0.96, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mx-auto"
      >
        {/* Primary CTA: View Portfolio */}
        <button
          onClick={handleScrollToWork}
          className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98]"
        >
          <span>{slide.primaryCtaText || "VIEW PORTFOLIO"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Secondary CTA: Get in Touch */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 backdrop-blur-sm active:scale-[0.98]"
        >
          <span>{slide.secondaryCtaText || "GET IN TOUCH"}</span>
        </Link>
      </motion.div>
    </div>
  );
}
