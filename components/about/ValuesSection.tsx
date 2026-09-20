import Image from "next/image";
import { photographerData } from "@/data/about";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/motion/ScrollReveal";

export function ValuesSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-canvas text-espresso border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
              CORE PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4 text-center">
              What matters most.
            </h2>
            <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed max-w-xl mx-auto text-center">
              The non-negotiable artistic and human standards that guide every commission we accept.
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger staggerDelay={0.14}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {photographerData.values.map((v) => (
              <ScrollRevealItem key={v.title} variant="fade-up" duration={0.7}>
                <div className="group flex flex-col sm:flex-row bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#2C2523]/10 shadow-subtle hover:shadow-editorial transition-all duration-500 hover:-translate-y-1 h-full">
                  {v.image && (
                    <div className="relative w-full sm:w-48 sm:min-w-[190px] h-48 sm:h-auto overflow-hidden bg-[#ECE6E0]">
                      <Image
                        src={v.image.src}
                        alt={v.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-espresso-primary font-semibold mb-2.5">
                      {v.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-espresso-muted font-light leading-relaxed">
                      {v.description}
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
