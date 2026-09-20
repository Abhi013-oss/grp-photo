import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioStories } from "@/data/portfolio";
import { StoryCard } from "./StoryCard";
import { FeaturedStory } from "./FeaturedStory";

export function FeaturedPortfolioSection() {
  // Select top stories for homepage editorial preview
  const featuredStory = portfolioStories.find((s) => s.featured) || portfolioStories[0];
  const supportingStories = portfolioStories.filter((s) => s.id !== featuredStory.id).slice(0, 3);

  return (
    <section id="work" className="w-full py-24 sm:py-32 bg-canvas text-espresso">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-14 sm:mb-18 flex flex-col items-center text-center gap-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-ivory border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
            <Sparkles className="w-3 h-3 text-gold-subtle" />
            CURATED STORIES
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.6rem] font-normal tracking-tight text-espresso-primary leading-[1.12] text-center">
          Celebrations framed in quiet majesty.
        </h2>

        <Link
          href="/portfolio"
          className="group inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono tracking-widest uppercase text-espresso-primary hover:text-espresso-muted transition-colors pb-1 border-b border-gold-subtle mt-2"
        >
          <span>VIEW FULL ARCHIVE</span>
          <ArrowRight className="w-4 h-4 text-gold-subtle group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Large Featured Story Monograph */}
      <FeaturedStory story={featuredStory} />

      {/* Supporting 3-Column Editorial Spread */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {supportingStories.map((story) => (
            <StoryCard key={story.id} story={story} aspectRatioClass="aspect-[4/5]" />
          ))}
        </div>
      </div>

      {/* Bottom Exploration Bridge */}
      <div className="text-center">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface-ivory hover:bg-[#FAF8F5] border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-subtle hover:shadow-editorial"
        >
          <span>EXPLORE ALL {portfolioStories.length} CELEBRATION ARCHIVES</span>
          <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
