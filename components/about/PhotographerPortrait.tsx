import Image from "next/image";
import { photographerData } from "@/data/about";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function PhotographerPortrait() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24 sm:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Large Editorial Portrait (4:5 Ratio) */}
        <div className="lg:col-span-6 w-full">
          <ScrollReveal variant="fade-up" duration={0.85}>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] overflow-hidden rounded-[2px] bg-surface-ivory shadow-editorial">
              <Image
                src={photographerData.portrait.src}
                alt={photographerData.portrait.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={92}
                className="object-cover"
                style={{ objectPosition: photographerData.portrait.objectPosition || "center 25%" }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Editorial Introduction Block */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-4">
          <ScrollReveal variant="fade-up" duration={0.85} delay={0.12}>
            <span className="text-xs font-mono tracking-[0.25em] text-gold-subtle font-semibold uppercase mb-3">
              FOUNDER & LEAD PHOTOGRAPHER
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-espresso-primary tracking-tight leading-[1.1] mb-6 text-center lg:text-left">
              {photographerData.name}
            </h2>

            <div className="border-l-0 lg:border-l-2 border-gold-subtle px-4 lg:pl-6 sm:lg:pl-8 lg:pr-0 mb-8 text-center lg:text-left">
              <p className="font-serif text-xl sm:text-2xl text-espresso-primary font-normal leading-relaxed italic">
                &ldquo;{photographerData.shortIntro}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-espresso-muted uppercase tracking-widest pt-4 border-t border-[#2C2523]/10 w-full text-center lg:text-left">
              <div>
                <span className="text-gold-subtle block font-semibold mb-1">STUDIO</span>
                <span className="text-espresso-primary font-medium">{photographerData.studioName}</span>
              </div>
              <div>
                <span className="text-gold-subtle block font-semibold mb-1">BASE</span>
                <span className="text-espresso-primary font-medium">India · Worldwide</span>
              </div>
              <div>
                <span className="text-gold-subtle block font-semibold mb-1">DISCIPLINE</span>
                <span className="text-espresso-primary font-medium">Documentary & Fine Art</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
