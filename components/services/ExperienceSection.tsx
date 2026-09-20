import Image from "next/image";
import { experiencePillars } from "@/data/services";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/motion/ScrollReveal";

export function ExperienceSection() {
  return (
    <section className="w-full bg-[#FAF8F5] py-24 sm:py-32 border-t border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4 text-center">
              More than photographs.
            </h2>
            <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed max-w-xl mx-auto text-center">
              The way we operate during your sacred moments matters as deeply as the imagery we produce. Our presence is grounded in respect, discretion, and emotional resonance.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Pillar Editorial Grid with Imagery */}
        <ScrollRevealStagger staggerDelay={0.14}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {experiencePillars.map((pillar, idx) => (
              <ScrollRevealItem key={pillar.keyword} variant="fade-up" duration={0.7}>
                <div className="group flex flex-col bg-[#F4EFEB] rounded-lg overflow-hidden border border-[#2C2523]/10 shadow-subtle hover:shadow-editorial transition-all duration-500 hover:-translate-y-1 h-full">
                  {pillar.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECE6E0]">
                      <Image
                        src={pillar.image.src}
                        alt={pillar.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm text-[10px] font-mono tracking-widest text-espresso-primary uppercase font-medium">
                        PILLAR 0{idx + 1}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#2C2523]/15">
                        <span className="text-xs font-mono text-gold-subtle font-semibold">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-mono tracking-[0.2em] uppercase text-espresso-primary font-medium">
                          {pillar.keyword}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-espresso-primary mb-2.5 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-espresso-muted font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
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
