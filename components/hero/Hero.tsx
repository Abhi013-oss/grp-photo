"use client";

import { useState, useCallback, useEffect } from "react";
import { heroSlides, HERO_SLIDE_DURATION } from "@/data/hero";
import { HeroSlideshow } from "./HeroSlideshow";
import { HeroContent } from "./HeroContent";
import { HeroProgress } from "./HeroProgress";
import { HeroManualControls } from "./HeroManualControls";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const handleSelectSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation for Hero
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      id="hero"
      aria-label="Editorial Photography Showcase"
      className="relative w-full h-[100svh] min-h-[620px] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12"
    >
      {/* Background Slideshow with Crossfade & Ken Burns */}
      <HeroSlideshow
        slides={heroSlides}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
        isPaused={isPaused}
      />

      {/* Spacer for Top Header */}
      <div className="w-full pointer-events-none" />

      {/* Central Editorial Narrative & Primary Actions */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 my-auto flex flex-col items-center justify-center text-center">
        <HeroContent slide={currentSlide} />
      </div>

      {/* Bottom Editorial Controls & Indicators */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        {/* Slide Progress: 01 / 06 with linear bars */}
        <HeroProgress
          currentIndex={currentIndex}
          totalSlides={heroSlides.length}
          durationMs={HERO_SLIDE_DURATION}
          onSelectSlide={handleSelectSlide}
        />

        {/* Manual Arrow Controls & Scroll Indicator */}
        <div className="flex items-center gap-6 sm:gap-10">
          <HeroManualControls onPrev={handlePrev} onNext={handleNext} />
          <HeroScrollIndicator />
        </div>
      </div>
    </section>
  );
}
