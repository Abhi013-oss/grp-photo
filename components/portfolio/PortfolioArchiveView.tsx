"use client";

import { useState } from "react";
import { PortfolioStory, CelebrationCategory } from "@/lib/types";
import { PortfolioIntro } from "./PortfolioIntro";
import { CategoryFilter } from "./CategoryFilter";
import { FeaturedStory } from "./FeaturedStory";
import { PortfolioGrid } from "./PortfolioGrid";
import { PortfolioCTA } from "./PortfolioCTA";

interface PortfolioArchiveViewProps {
  initialStories: PortfolioStory[];
  categories: CelebrationCategory[];
}

export function PortfolioArchiveView({
  initialStories,
  categories,
}: PortfolioArchiveViewProps) {
  const [activeCategory, setActiveCategory] = useState<CelebrationCategory>("All");

  // Find the prominent featured story (Ananya & Arjun)
  const featuredStory = initialStories.find((s) => s.featured) || initialStories[0];

  // Filter stories based on selected category
  const filteredStories =
    activeCategory === "All"
      ? initialStories.filter((s) => s.id !== featuredStory.id) // exclude featured from the grid below it when viewing All
      : initialStories.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Portfolio Title & Intro */}
      <PortfolioIntro />

      {/* Category Navigation Bar */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Render Featured Story only when viewing All categories */}
      {activeCategory === "All" && featuredStory && (
        <FeaturedStory story={featuredStory} />
      )}

      {/* Asymmetrical Editorial Grid */}
      <PortfolioGrid stories={filteredStories} />

      {/* WhatsApp Conversion Section */}
      <PortfolioCTA
        eyebrow="RESERVE YOUR DATES"
        heading="Let's capture the story you'll cherish forever."
      />
    </div>
  );
}
