import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PortfolioStory } from "@/lib/types";

interface FeaturedStoryProps {
  story: PortfolioStory;
}

export function FeaturedStory({ story }: FeaturedStoryProps) {
  return (
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
      <Link
        href={`/portfolio/${story.slug}`}
        className="group block relative overflow-hidden rounded-sm bg-surface-ivory shadow-editorial hover:shadow-hover transition-all duration-500"
      >
        {/* Large Featured Image Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden">
          <Image
            src={story.coverImage.src}
            alt={story.coverImage.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={92}
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
            style={{ objectPosition: story.coverImage.objectPosition || "center 28%" }}
          />

          {/* Gentle Luxury Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2523]/80 via-[#2C2523]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

          {/* Floating Category Pill & Camera Gear */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-espresso-primary">
              FEATURED CELEBRATION
            </span>
            {story.coverImage.camera && (
              <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-[#1A1615]/75 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#FAF8F5]/90">
                {story.coverImage.camera} {story.coverImage.lens ? `· ${story.coverImage.lens}` : ""}
              </span>
            )}
          </div>

          {/* Overlaid Editorial Content */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="max-w-2xl transform transition-transform duration-500 ease-luxury group-hover:-translate-y-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-[#F7E7DC] uppercase mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-subtle" />
                  {story.location}
                </span>
                <span>·</span>
                <span>{story.category}</span>
                <span>·</span>
                <span>{story.year}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 drop-shadow-sm">
                {story.title}
              </h2>

              <p className="font-sans text-xs sm:text-sm text-white/80 max-w-xl line-clamp-2 leading-relaxed font-light">
                {story.excerpt}
              </p>
            </div>

            {/* View Story Action Button */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 backdrop-blur-md self-start md:self-end shrink-0 shadow-sm group-hover:shadow-editorial">
              <span>VIEW FULL STORY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
