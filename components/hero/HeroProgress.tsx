"use client";

import { motion } from "framer-motion";

interface HeroProgressProps {
  currentIndex: number;
  totalSlides: number;
  durationMs: number;
  onSelectSlide: (index: number) => void;
}

export function HeroProgress({
  currentIndex,
  totalSlides,
  durationMs,
  onSelectSlide,
}: HeroProgressProps) {
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-espresso-primary/90">
      {/* Current Slide Number */}
      <span className="text-espresso-primary font-medium">{currentFormatted}</span>

      {/* Progress Bars for all slides */}
      <div className="flex items-center gap-1.5" role="tablist" aria-label="Slideshow slide selectors">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onSelectSlide(i)}
            className="group relative w-7 sm:w-10 h-1 rounded-full bg-[#2C2523]/15 overflow-hidden transition-all duration-300 hover:h-1.5 focus-visible:outline-none"
          >
            {i === currentIndex && (
              <motion.div
                key={`progress-${currentIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: durationMs / 1000,
                  ease: "linear",
                }}
                className="h-full bg-gold-subtle"
              />
            )}
            {i < currentIndex && <div className="h-full w-full bg-gold-subtle/80" />}
          </button>
        ))}
      </div>

      {/* Total Slides Count */}
      <span className="text-espresso-muted">{totalFormatted}</span>
    </div>
  );
}
