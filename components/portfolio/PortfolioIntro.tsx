import { Sparkles } from "lucide-react";

export function PortfolioIntro() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center">
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-ivory border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
            <Sparkles className="w-3 h-3 text-gold-subtle" />
            SELECTED CELEBRATION STORIES
          </span>
        </div>

        {/* Large Editorial Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-normal tracking-tight text-espresso-primary mb-6 text-center">
          Moments that deserve to be remembered.
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-espresso-muted leading-relaxed font-light max-w-2xl mx-auto text-center">
          We document Indian weddings, private vows, and family milestones with an editorial sensibility rooted in quiet observation. Every celebration is preserved as an individual chapter of timeless literature.
        </p>
      </div>
    </section>
  );
}
