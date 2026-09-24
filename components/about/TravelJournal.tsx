import Image from "next/image";
import { Compass } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/motion/ScrollReveal";

interface JournalEntry {
  title: string;
  region: string;
  image: string;
  note: string;
}

const entries: JournalEntry[] = [
  {
    title: "THE ART OF CANDID WEDDING PHOTOGRAPHY",
    region: "Quiet Observation",
    image: "/images/photo-1583939003579-730e3918a45a.jpg",
    note: "Documenting authentic, unchoreographed emotions as they unfold naturally throughout the celebration day.",
  },
  {
    title: "WHY THE LITTLE MOMENTS MATTER",
    region: "Personal Connections",
    image: "/images/photo-1606800052052-a08af7148866.jpg",
    note: "The shared glances, spontaneous laughter, and quiet pauses often carry the deepest emotional memories of an event.",
  },
  {
    title: "BEHIND THE CAMERA",
    region: "Our Approach",
    image: "/images/pro-destination-lake-palace-udaipur.jpg",
    note: "Approaching every celebration with humility, presence, and an artistic commitment to natural lighting and timeless composition.",
  },
  {
    title: "CREATING TIMELESS WEDDING MEMORIES",
    region: "Enduring Imagery",
    image: "/images/pro-bride-yellow-maroon-lehenga.jpg",
    note: "Crafting a collection of refined photographs that you and your loved ones can return to and treasure for years to come.",
  },
];

export function TravelJournal() {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#2C2523]/10 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-espresso-muted mb-4">
              <Compass className="w-3.5 h-3.5 text-gold-subtle" />
              <span>VISUAL JOURNAL · PERSPECTIVES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-espresso-primary mb-4">
              Behind the Lens & Stories We Capture
            </h2>

            <p className="font-sans text-sm sm:text-base text-espresso-muted leading-relaxed font-normal">
              Thoughts on photography, genuine moments, and the art of preserving meaningful celebrations.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Item Grid */}
        <ScrollRevealStagger staggerDelay={0.14}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {entries.map((entry) => (
              <ScrollRevealItem key={entry.title} variant="fade-up" duration={0.7}>
                <div className="group flex flex-col bg-[#F4EFEB] rounded-lg overflow-hidden border border-[#2C2523]/8 transition-all duration-500 hover:shadow-editorial h-full">
                  <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-[#ECE6E0]">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F5]">
                      <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 block mb-1">
                        {entry.region}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal">
                        {entry.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="font-sans text-sm text-espresso-muted leading-relaxed italic">
                      &ldquo;{entry.note}&rdquo;
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
