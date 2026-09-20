"use client";

import { CelebrationCategory } from "@/lib/types";

interface CategoryFilterProps {
  categories: CelebrationCategory[];
  activeCategory: CelebrationCategory;
  onSelectCategory: (category: CelebrationCategory) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <nav
      aria-label="Portfolio Category Filter"
      className="w-full border-b border-[#2C2523]/10 pb-4 mb-12 sm:mb-16 overflow-x-auto scrollbar-none"
    >
      <div className="flex items-center justify-start sm:justify-center gap-8 sm:gap-10 min-w-max px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`group relative pb-2 text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 focus-visible:outline-none ${
                isActive
                  ? "text-espresso-primary font-medium"
                  : "text-espresso-muted hover:text-espresso-primary font-normal"
              }`}
            >
              <span>{category}</span>
              {/* Subtle active underline indicator */}
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-gold-subtle transition-all duration-300 ease-luxury ${
                  isActive ? "w-full" : "w-0 group-hover:w-1/2 group-hover:bg-[#2C2523]/30"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
