"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSlide } from "@/lib/types";
import { HERO_SLIDE_DURATION } from "@/data/hero";

interface HeroSlideshowProps {
  slides: HeroSlide[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  isPaused?: boolean;
}

export function HeroSlideshow({
  slides,
  currentIndex,
  onIndexChange,
  isPaused = false,
}: HeroSlideshowProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    onIndexChange((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length, onIndexChange]);

  // Slideshow interval timer (2.8s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, HERO_SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Handle subtle desktop pointer micro-tilt (max 6px)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // -4px to +4px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#F4EFEB]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{
            opacity: 1,
            scale: 1.0,
            x: mouseOffset.x,
            y: mouseOffset.y,
            transition: {
              opacity: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 0.6, ease: "easeOut" },
              y: { duration: 0.6, ease: "easeOut" },
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image with subtle Ken Burns drift */}
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.03 }}
            transition={{
              duration: HERO_SLIDE_DURATION / 1000 + 0.3,
              ease: "linear",
            }}
            className="relative w-full h-full"
          >
            <Image
              src={currentSlide.image.src}
              alt={currentSlide.image.alt}
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover transition-[object-position] duration-700"
              style={{
                objectPosition: currentSlide.image.objectPosition || "center center",
              }}
            />
          </motion.div>

          {/* Subtle Warm Luxury Vignette - Preserves rich photography colors, natural daylight and sharp detail */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/65 via-[#FAF8F5]/15 to-[#FAF8F5]/10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
