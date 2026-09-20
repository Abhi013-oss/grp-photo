"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageAsset } from "@/lib/types";
import { PortfolioLightbox } from "./PortfolioLightbox";
import { Maximize2 } from "lucide-react";

interface StoryGalleryProps {
  images: ImageAsset[];
}

export function StoryGallery({ images }: StoryGalleryProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-16 sm:my-24">
      {/* Editorial Rhythmic Flow */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
        {images.map((image, index) => {
          // Determine alternating layout:
          // index 0: Full width 12-col panoramic
          // index 1, 2: 6-col and 6-col pairing
          // index 3: 7-col offset
          // index 4: 5-col portrait offset
          // index 5+: 12-col or balanced 6-col
          const pattern = index % 5;
          let colSpan = "md:col-span-12";
          let aspectClass = "aspect-[16/9]";

          if (pattern === 0) {
            colSpan = "md:col-span-12";
            aspectClass = "aspect-[16/10] sm:aspect-[16/9]";
          } else if (pattern === 1) {
            colSpan = "md:col-span-6";
            aspectClass = "aspect-[4/5]";
          } else if (pattern === 2) {
            colSpan = "md:col-span-6 md:pt-10";
            aspectClass = "aspect-[4/5]";
          } else if (pattern === 3) {
            colSpan = "md:col-span-7";
            aspectClass = "aspect-[16/11]";
          } else if (pattern === 4) {
            colSpan = "md:col-span-5 md:pt-12";
            aspectClass = "aspect-[4/5]";
          }

          return (
            <div
              key={index}
              onClick={() => setActiveLightboxIndex(index)}
              className={`${colSpan} group cursor-pointer relative overflow-hidden rounded-[2px] bg-surface-ivory shadow-subtle hover:shadow-editorial transition-all duration-500`}
            >
              <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1200px"
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                />

                {/* Hover Overlay with subtle icon */}
                <div className="absolute inset-0 bg-[#2C2523]/0 group-hover:bg-[#2C2523]/25 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-espresso-primary shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption Pill if available */}
                {image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1.5 rounded-sm bg-[#FAF8F5]/92 backdrop-blur-md text-espresso-primary text-xs font-serif font-light">
                      {image.caption}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Integration */}
      <PortfolioLightbox
        images={images}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={setActiveLightboxIndex}
      />
    </div>
  );
}
