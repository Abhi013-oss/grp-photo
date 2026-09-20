import { PortfolioStory } from "@/lib/types";
import { StoryCard } from "./StoryCard";

interface RelatedStoriesProps {
  currentStoryId: string;
  allStories: PortfolioStory[];
  category: string;
}

export function RelatedStories({
  currentStoryId,
  allStories,
  category,
}: RelatedStoriesProps) {
  // Find up to 3 related stories: first from the same category, then others
  const related = allStories
    .filter((s) => s.id !== currentStoryId)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-20 sm:my-28">
      <div className="border-t border-[#2C2523]/10 pt-16">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold">
            FURTHER DISCOVERY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-primary mt-1 text-center">
            Related Celebration Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {related.map((story) => (
            <StoryCard key={story.id} story={story} aspectRatioClass="aspect-[4/5]" />
          ))}
        </div>
      </div>
    </section>
  );
}
