import { PortfolioStory } from "@/lib/types";
import { StoryCard } from "./StoryCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface PortfolioGridProps {
  stories: PortfolioStory[];
}

export function PortfolioGrid({ stories }: PortfolioGridProps) {
  if (stories.length === 0) {
    return (
      <div className="text-center py-20 px-6 max-w-xl mx-auto">
        <p className="font-serif text-2xl text-espresso-primary mb-3">
          New Stories in Curation
        </p>
        <p className="font-sans text-sm text-espresso-muted leading-relaxed font-light">
          Photographs for this category are currently undergoing handcrafted color grading. Please explore our other celebration archives.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
      {/* Editorial Flow */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 sm:gap-y-20">
        {stories.map((story, index) => {
          // Asymmetrical rhythm pattern across the grid
          const patternIndex = index % 5;

          if (patternIndex === 0) {
            // Full-width panoramic or 8-col hero in row
            return (
              <div key={story.id} className="md:col-span-8">
                <ScrollReveal variant="fade-up" duration={0.75}>
                  <StoryCard story={story} aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]" />
                </ScrollReveal>
              </div>
            );
          } else if (patternIndex === 1) {
            // Offset 4-col vertical companion
            return (
              <div key={story.id} className="md:col-span-4 md:pt-12">
                <ScrollReveal variant="fade-up" duration={0.75} delay={0.1}>
                  <StoryCard story={story} aspectRatioClass="aspect-[4/5]" />
                </ScrollReveal>
              </div>
            );
          } else if (patternIndex === 2) {
            // 5-col companion
            return (
              <div key={story.id} className="md:col-span-5">
                <ScrollReveal variant="fade-up" duration={0.75}>
                  <StoryCard story={story} aspectRatioClass="aspect-[4/5]" />
                </ScrollReveal>
              </div>
            );
          } else if (patternIndex === 3) {
            // 7-col offset companion
            return (
              <div key={story.id} className="md:col-span-7 md:pt-8">
                <ScrollReveal variant="fade-up" duration={0.75} delay={0.1}>
                  <StoryCard story={story} aspectRatioClass="aspect-[16/11]" />
                </ScrollReveal>
              </div>
            );
          } else {
            // 6-col balanced
            return (
              <div key={story.id} className="md:col-span-6">
                <ScrollReveal variant="fade-up" duration={0.75}>
                  <StoryCard story={story} aspectRatioClass="aspect-[4/3]" />
                </ScrollReveal>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
