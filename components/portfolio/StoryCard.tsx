import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PortfolioStory } from "@/lib/types";
import { TiltCard } from "@/components/motion/TiltCard";

interface StoryCardProps {
  story: PortfolioStory;
  aspectRatioClass?: string;
}

export function StoryCard({ story, aspectRatioClass = "aspect-[4/5]" }: StoryCardProps) {
  return (
    <Link
      href={`/portfolio/${story.slug}`}
      className="group flex flex-col items-start w-full focus-visible:outline-none"
    >
      {/* 3D Paper Layer with Restrained Hover Depth */}
      <TiltCard maxTilt={1.0} className="w-full mb-4.5">
        <div
          className={`relative w-full ${aspectRatioClass} overflow-hidden rounded-[2px] bg-surface-ivory shadow-subtle hover:shadow-editorial transition-all duration-500`}
        >
          <Image
            src={story.coverImage.src}
            alt={story.coverImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
            style={{ objectPosition: story.coverImage.objectPosition || "center center" }}
          />

          {/* Soft Vignette on Hover */}
          <div className="absolute inset-0 bg-[#2C2523]/0 group-hover:bg-[#2C2523]/15 transition-colors duration-500" />

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm text-[10px] font-mono tracking-widest text-espresso-primary uppercase">
              {story.category}
            </span>
          </div>

          {/* Camera / Fine Art Badge */}
          {story.coverImage.camera && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#1A1615]/75 backdrop-blur-sm text-[9px] font-mono tracking-wider text-[#FAF8F5]/90">
                {story.coverImage.camera}
              </span>
            </div>
          )}
        </div>
      </TiltCard>

      {/* Editorial Metadata & Title */}
      <div className="flex flex-col items-start w-full transform transition-transform duration-300 ease-luxury group-hover:translate-x-1">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-espresso-muted uppercase mb-1.5">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gold-subtle" />
            {story.city}
          </span>
          <span>·</span>
          <span>{story.year}</span>
        </div>

        <div className="flex items-baseline justify-between w-full">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-espresso-primary group-hover:text-espresso-muted transition-colors">
            {story.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:text-espresso-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        {story.subtitle && (
          <p className="font-sans text-xs text-espresso-muted mt-1 font-light line-clamp-1">
            {story.subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
