"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

interface StudyItem {
  id: string;
  title: string;
  category: string;
  image: string;
  provenance: string;
  aspect: string;
}

const studies: StudyItem[] = [
  {
    id: "genda",
    title: "The Golden Marigold Garland",
    category: "Botanical Sacred Flora",
    image: "/images/nature-marigold-garlands.jpg",
    provenance: "Courtyard Mandap, Udaipur",
    aspect: "aspect-[4/5]",
  },
  {
    id: "lotus",
    title: "Sacred Pink Lotus",
    category: "Temple Offering",
    image: "/images/nature-sacred-lotus.jpg",
    provenance: "Palace Waterbody, Varanasi",
    aspect: "aspect-[3/4]",
  },
  {
    id: "diya",
    title: "Tiered Brass Aarti Lamps",
    category: "Ancestral Flame",
    image: "/images/nature-temple-brass-diyas.jpg",
    provenance: "Twilight Rituals, Bishangarh Fort",
    aspect: "aspect-[4/5]",
  },
  {
    id: "bougainvillea",
    title: "Haveli Bougainvillea",
    category: "Heritage Flora",
    image: "/images/nature-bougainvillea-arch.jpg",
    provenance: "Courtyard Pergola, Jaipur",
    aspect: "aspect-[3/4]",
  },
  {
    id: "banyan",
    title: "Sacred Banyan Canopy",
    category: "Sacred Woodlands",
    image: "/images/nature-monsoon-banyan.jpg",
    provenance: "Temple Grove, Kerala",
    aspect: "aspect-[4/5]",
  },
  {
    id: "peacock",
    title: "The Royal Peacock",
    category: "Fauna of the Desert",
    image: "/images/nature-peacock-rajasthan.jpg",
    provenance: "Morning Haveli, Jodhpur",
    aspect: "aspect-[3/4]",
  },
];

export function BotanicalStudies() {
  return (
    <section
      aria-label="Indian Nature & Sacred Textures"
      className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] text-espresso overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#2C2523]/10 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-espresso-muted mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-subtle" />
            <span>VISUAL JOURNAL · BOTANICAL & TEXTURAL STUDIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-espresso-primary mb-4">
            Flora, Flames & Sacred Textures
          </h2>

          <p className="font-sans text-sm sm:text-base text-espresso-muted leading-relaxed font-normal">
            A visual ode to the tactile poetry of the Indian subcontinent: fragrant marigolds, holy lotus waters, flickering brass flames, and ancestral flora that frame your sacred days.
          </p>
        </div>

        {/* 6-Item Curated Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {studies.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#F4EFEB] rounded-lg overflow-hidden border border-[#2C2523]/8 transition-all duration-500 hover:shadow-editorial hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#ECE6E0]`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Caption Card */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-subtle font-medium block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-espresso-primary group-hover:text-gold-subtle transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-espresso-muted uppercase tracking-[0.14em] mt-3 pt-3 border-t border-[#2C2523]/10">
                  {item.provenance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
