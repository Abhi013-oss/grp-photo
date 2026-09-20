"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Compass, Sun, ArrowRight } from "lucide-react";

interface DestinationRegion {
  id: string;
  name: string;
  tagline: string;
  coordinates: string;
  lightProfile: string;
  description: string;
  storySlug: string;
  storyTitle: string;
  images: {
    src: string;
    alt: string;
    caption: string;
    aspectRatio: "portrait" | "landscape" | "wide";
  }[];
}

const destinationsData: DestinationRegion[] = [
  {
    id: "rajasthan",
    name: "Rajasthan Palaces",
    tagline: "Royal courtyards, sandstone fortresses & golden dunes",
    coordinates: "24.5854° N, 73.6806° E",
    lightProfile: "Amber Golden Hour & Desert Twilight",
    description:
      "From the shimmering waters of Lake Pichola in Udaipur to the honey-colored sandstone bastions of Amber Fort and the rolling dunes of the Thar Desert, Rajasthan offers an imperial sanctuary for modern Indian celebrations.",
    storySlug: "ananya-arjun-udaipur",
    storyTitle: "Explore Udaipur Lake Palace Story",
    images: [
      {
        src: "/images/pro-destination-lake-palace-udaipur.jpg",
        alt: "Taj Lake Palace Udaipur floating over Lake Pichola at sunset",
        caption: "Lake Pichola — Udaipur",
        aspectRatio: "wide",
      },
      {
        src: "/images/pro-destination-amber-corridors.jpg",
        alt: "Arched sandstone corridors of Amber Fort in Jaipur",
        caption: "Amber Fort — Jaipur",
        aspectRatio: "portrait",
      },
      {
        src: "/images/pro-destination-hawa-mahal-night.jpg",
        alt: "Iconic honeycomb sandstone facade of Hawa Mahal illuminated at night",
        caption: "Hawa Mahal — Jaipur",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "varanasi",
    name: "Sacred Horizons & Ghats",
    tagline: "Centuries of devotion, dawn river mist & brass aarti flames",
    coordinates: "25.3176° N, 82.9739° E",
    lightProfile: "Morning River Glow & Twilight 108-Flame Aarti",
    description:
      "The ancient stone steps of Kashi along Mother Ganga offer a transcendent spiritual canvas. Quiet dawn vows on wooden boats lead into evening celebrations illuminated by the sacred flames of Dashashwamedh Ghat.",
    storySlug: "devika-vikram-varanasi",
    storyTitle: "Explore Sacred Varanasi Story",
    images: [
      {
        src: "/images/destination-varanasi-morning-ghats.jpg",
        alt: "Varanasi stone ghats glowing in early morning sun",
        caption: "First Light — The Ghats of Varanasi",
        aspectRatio: "wide",
      },
      {
        src: "/images/destination-varanasi-ganga-aarti.jpg",
        alt: "Multi-tiered brass aarti lamps held by priests in Varanasi",
        caption: "The Maha Aarti — Sacred River Flames",
        aspectRatio: "portrait",
      },
      {
        src: "/images/destination-rishikesh-river-ganga.jpg",
        alt: "River Ganga flowing through the Himalayan foothills",
        caption: "Ganga Current — Himalayan Foothills",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "kerala",
    name: "The Emerald Coast & Backwaters",
    tagline: "Palm-fringed lagoons, Kasavu weaves & mist-covered hills",
    coordinates: "9.4981° N, 76.3388° E",
    lightProfile: "Diffused Coconut Canopy & Sunset Water Reflections",
    description:
      "A serene paradise where traditional wooden houseboats glide along tranquil canals. Sacred vows are embraced by ancestral Kasavu gold borders, aromatic jasmine, and the rhythmic sound of sacred temple nadaswarams.",
    storySlug: "aarav-sanjana-kerala",
    storyTitle: "Explore Kerala Backwaters Story",
    images: [
      {
        src: "/images/destination-kerala-backwaters.jpg",
        alt: "Traditional houseboat cruising through Kerala canals",
        caption: "Vembanad Lake — Houseboat Procession",
        aspectRatio: "wide",
      },
      {
        src: "/images/wedding-kerala-temple-union.jpg",
        alt: "Kerala temple wedding in traditional kasavu attire",
        caption: "Sacred Temple Rites — Kasavu Weaves",
        aspectRatio: "portrait",
      },
      {
        src: "/images/destination-munnar-tea-gardens.jpg",
        alt: "Lush green rolling tea hills in Munnar Kerala",
        caption: "Western Ghats — Munnar Tea Valleys",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "north",
    name: "The High North & Himalayas",
    tagline: "Crystal azure lakes, cedar forests & high-altitude solitude",
    coordinates: "34.1526° N, 77.5771° E",
    lightProfile: "Crisp Alpine Luminosity & Blue Mountain Dawns",
    description:
      "From the mirror-still waters of Kashmir's Dal Lake to the rugged moonscapes and azure depths of Pangong Tso in Ladakh, Northern India provides a monumental stage for pre-wedding cinematic expeditions.",
    storySlug: "nandini-raghav-jaisalmer",
    storyTitle: "Explore High-Altitude Expeditions",
    images: [
      {
        src: "/images/destination-ladakh-pangong-lake.jpg",
        alt: "Azure waters and rugged mountains of Pangong Lake Ladakh",
        caption: "Pangong Tso — Ladakh at 14,000 Feet",
        aspectRatio: "wide",
      },
      {
        src: "/images/destination-kashmir-dal-lake.jpg",
        alt: "Traditional Kashmiri shikara boat resting on Dal Lake",
        caption: "Dal Lake — Srinagar Morning Shikara",
        aspectRatio: "portrait",
      },
      {
        src: "/images/pro-destination-royal-fort.jpg",
        alt: "Historic stone fortress ramparts in northern landscapes",
        caption: "Himalayan Citadel — High-Altitude Heritage",
        aspectRatio: "landscape",
      },
    ],
  },
];

export function DestinationsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("rajasthan");

  const currentDestination =
    destinationsData.find((d) => d.id === activeTab) || destinationsData[0];

  return (
    <section
      aria-label="Indian Heritage Destinations & Landscapes"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F4EFEB] text-espresso overflow-hidden border-t border-b border-[#2C2523]/10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-espresso-muted mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-subtle" />
            <span>INDIAN HORIZONS & SACRED LANDSCAPES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-espresso-primary mb-4">
            Where Ancient Heritage Meets Sacred Unions
          </h2>

          <p className="font-sans text-sm sm:text-base text-espresso-muted leading-relaxed font-normal max-w-2xl mx-auto">
            From regal palace courtyards to tranquil backwaters and eternal river ghats, we document celebrations across the subcontinent&apos;s most revered landscapes.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {destinationsData.map((dest) => {
            const isActive = activeTab === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveTab(dest.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 border ${
                  isActive
                    ? "bg-espresso-primary text-[#FAF8F5] border-espresso-primary shadow-editorial"
                    : "bg-[#FAF8F5]/80 text-espresso-muted border-[#2C2523]/10 hover:border-[#2C2523]/30 hover:text-espresso-primary"
                }`}
              >
                {dest.name}
              </button>
            );
          })}
        </div>

        {/* Active Destination Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDestination.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#2C2523]/10 text-xs text-espresso-muted uppercase tracking-[0.14em]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-subtle" />
                <span>{currentDestination.coordinates}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-gold-subtle" />
                <span>{currentDestination.lightProfile}</span>
              </div>
              <Link
                href={`/portfolio/${currentDestination.storySlug}`}
                className="group inline-flex items-center gap-1.5 text-espresso-primary hover:text-gold-subtle font-medium transition-colors"
              >
                <span>{currentDestination.storyTitle}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Editorial Multi-Photo Mosaic */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-8">
              {/* Primary Large Image */}
              <div className="md:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-lg overflow-hidden group shadow-editorial">
                <Image
                  src={currentDestination.images[0].src}
                  alt={currentDestination.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                  <p className="text-[11px] uppercase tracking-[0.2em] opacity-80 mb-1">
                    {currentDestination.name}
                  </p>
                  <p className="font-serif text-lg sm:text-2xl font-normal">
                    {currentDestination.images[0].caption}
                  </p>
                </div>
              </div>

              {/* Secondary Stacked Images */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="relative h-[200px] sm:h-[225px] lg:h-[255px] rounded-lg overflow-hidden group shadow-editorial">
                  <Image
                    src={currentDestination.images[1].src}
                    alt={currentDestination.images[1].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5]">
                    <p className="font-serif text-sm sm:text-base font-normal">
                      {currentDestination.images[1].caption}
                    </p>
                  </div>
                </div>

                <div className="relative h-[200px] sm:h-[225px] lg:h-[255px] rounded-lg overflow-hidden group shadow-editorial">
                  <Image
                    src={currentDestination.images[2].src}
                    alt={currentDestination.images[2].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5]">
                    <p className="font-serif text-sm sm:text-base font-normal">
                      {currentDestination.images[2].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Note */}
            <div className="max-w-3xl mx-auto text-center pt-2">
              <p className="font-sans text-sm sm:text-base text-espresso-muted leading-relaxed italic">
                &ldquo;{currentDestination.description}&rdquo;
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
