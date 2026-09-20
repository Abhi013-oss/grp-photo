"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroManualControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function HeroManualControls({ onPrev, onNext }: HeroManualControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrev}
        aria-label="Previous photograph"
        className="p-3 rounded-full border border-[#2C2523]/15 text-espresso-primary/80 hover:text-espresso-primary hover:bg-[#FAF8F5]/80 backdrop-blur-sm transition-all duration-200 active:scale-95 focus-visible:outline-none"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next photograph"
        className="p-3 rounded-full border border-[#2C2523]/15 text-espresso-primary/80 hover:text-espresso-primary hover:bg-[#FAF8F5]/80 backdrop-blur-sm transition-all duration-200 active:scale-95 focus-visible:outline-none"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
