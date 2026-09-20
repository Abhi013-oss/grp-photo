"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageAsset } from "@/lib/types";

interface PortfolioLightboxProps {
  images: ImageAsset[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PortfolioLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: PortfolioLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];
  const counterText = `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Full-screen photograph viewer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1615]/95 backdrop-blur-xl p-4 sm:p-8 select-none"
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 text-white/90">
          <span className="text-xs font-mono tracking-widest text-[#F7E7DC]">
            {counterText}
          </span>

          <button
            onClick={onClose}
            aria-label="Close full-screen image"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all active:scale-95 focus-visible:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Main Central Image */}
        <div className="relative w-full h-[75vh] sm:h-[82vh] max-w-6xl mx-auto flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={95}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all active:scale-95 focus-visible:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Editorial Caption & Camera Metadata Bar */}
        <div className="absolute bottom-6 left-6 right-6 text-center z-20 flex flex-col items-center gap-2">
          {currentImage.caption && (
            <p className="font-serif text-sm sm:text-base text-white/90 font-light max-w-xl mx-auto drop-shadow">
              {currentImage.caption}
            </p>
          )}

          {/* Technical Metadata Badges */}
          {(currentImage.camera || currentImage.lens || currentImage.lighting || currentImage.filmTone) && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
              {currentImage.camera && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-white/80 border border-white/10">
                  {currentImage.camera} {currentImage.lens ? `· ${currentImage.lens}` : ""}
                </span>
              )}
              {currentImage.lighting && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-[#F7E7DC] border border-white/10">
                  {currentImage.lighting}
                </span>
              )}
              {currentImage.filmTone && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-white/70 border border-white/10">
                  {currentImage.filmTone}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
