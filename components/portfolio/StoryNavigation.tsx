import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { PortfolioStory } from "@/lib/types";

interface StoryNavigationProps {
  prevStory: PortfolioStory | null;
  nextStory: PortfolioStory | null;
}

export function StoryNavigation({ prevStory, nextStory }: StoryNavigationProps) {
  return (
    <nav
      aria-label="Story Progression Navigation"
      className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-12"
    >
      <div className="border-t border-b border-[#2C2523]/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Previous Story */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
          {prevStory ? (
            <Link
              href={`/portfolio/${prevStory.slug}`}
              className="group flex items-center gap-3 text-center sm:text-left focus-visible:outline-none"
            >
              <div className="p-2.5 rounded-full border border-[#2C2523]/15 group-hover:bg-peach-soft transition-colors">
                <ArrowLeft className="w-4 h-4 text-espresso-primary group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-mono tracking-widest text-espresso-muted uppercase">
                  Previous Story
                </span>
                <span className="font-serif text-sm sm:text-base text-espresso-primary group-hover:text-espresso-muted transition-colors font-medium">
                  {prevStory.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* View All Stories Center Anchor */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2C2523]/15 hover:border-[#2C2523]/60 text-espresso-primary text-xs font-mono uppercase tracking-widest transition-all hover:bg-[#FAF8F5]"
          >
            <Grid className="w-3.5 h-3.5 text-gold-subtle" />
            <span>ALL STORIES</span>
          </Link>
        </div>

        {/* Next Story */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          {nextStory ? (
            <Link
              href={`/portfolio/${nextStory.slug}`}
              className="group flex items-center gap-3 text-center sm:text-right focus-visible:outline-none"
            >
              <div className="flex flex-col items-center sm:items-end">
                <span className="text-[10px] font-mono tracking-widest text-espresso-muted uppercase">
                  Next Story
                </span>
                <span className="font-serif text-sm sm:text-base text-espresso-primary group-hover:text-espresso-muted transition-colors font-medium">
                  {nextStory.title}
                </span>
              </div>
              <div className="p-2.5 rounded-full border border-[#2C2523]/15 group-hover:bg-peach-soft transition-colors">
                <ArrowRight className="w-4 h-4 text-espresso-primary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </nav>
  );
}
