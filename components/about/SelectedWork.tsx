import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioStories } from "@/data/portfolio";
import { photographerData } from "@/data/about";
import { StoryCard } from "@/components/portfolio/StoryCard";

export function SelectedWork() {
  const selectedStories = portfolioStories.filter((s) =>
    photographerData.selectedStorySlugs.includes(s.slug)
  );

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 gap-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold block">
              SELECTED CELEBRATIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] text-center">
            RECENT WORK
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed max-w-2xl mx-auto text-center">
            A curated selection of celebrations capturing genuine moments, emotional truth, and personal stories.
          </p>

          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 text-xs font-mono tracking-[0.2em] text-espresso-primary hover:text-gold-subtle transition-colors uppercase border-b border-espresso-primary hover:border-gold-subtle pb-1 mt-2"
          >
            <span>VIEW PORTFOLIO</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Selected Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {selectedStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
