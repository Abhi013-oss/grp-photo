import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { photographerData } from "@/data/about";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HomepageAboutPreview() {
  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-canvas text-espresso border-t border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal variant="fade-up" duration={0.85}>
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-[2px] bg-surface-ivory shadow-editorial">
                <Image
                  src={photographerData.portrait.src}
                  alt={photographerData.portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  className="object-cover"
                  style={{ objectPosition: photographerData.portrait.objectPosition || "center 25%" }}
                />
                <div className="absolute inset-0 bg-[#2C2523]/10" />
              </div>
              <div className="mt-4 text-center sm:text-left max-w-md mx-auto">
                <span className="font-mono text-[11px] tracking-widest text-espresso-muted uppercase">
                  {photographerData.name} · {photographerData.role}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <ScrollReveal variant="fade-up" duration={0.85} delay={0.12}>
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-ivory border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
                  <Sparkles className="w-3 h-3 text-gold-subtle" />
                  BEHIND THE CAMERA
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.2rem] font-normal tracking-tight text-espresso-primary leading-[1.15] mb-6 text-center lg:text-left">
                The person behind the photographs.
              </h2>

              {/* Pull Quote */}
              <div className="border-l-0 lg:border-l-2 border-gold-subtle px-4 lg:pl-6 lg:pr-0 mb-6 text-center lg:text-left">
                <p className="font-serif text-lg sm:text-xl text-espresso-primary font-normal leading-relaxed italic">
                  &ldquo;{photographerData.shortIntro}&rdquo;
                </p>
              </div>

              {/* Supporting Story Excerpt */}
              <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed mb-8 max-w-xl text-center lg:text-left">
                Photography is cultural stewardship. We honor sacred rituals with contemporary editorial restraint—allowing families to celebrate naturally without artificial posing or commercial disruption.
              </p>

              {/* 3 Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 pb-8 border-t border-[#2C2523]/10 mb-8 text-center sm:text-left">
                <div>
                  <span className="block font-mono text-[10px] text-gold-subtle uppercase tracking-widest mb-1">
                    01 · PRESENCE
                  </span>
                  <span className="font-serif text-sm text-espresso-primary">
                    Candid Observation
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-gold-subtle uppercase tracking-widest mb-1">
                    02 · ARTISTRY
                  </span>
                  <span className="font-serif text-sm text-espresso-primary">
                    Timeless Natural Color
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-gold-subtle uppercase tracking-widest mb-1">
                    03 · REVERENCE
                  </span>
                  <span className="font-serif text-sm text-espresso-primary">
                    Sacred Ritual Empathy
                  </span>
                </div>
              </div>

              {/* Link to Full About Page */}
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 shadow-subtle hover:shadow-editorial mx-auto lg:mx-0"
              >
                <span>MEET THE PHOTOGRAPHER & READ OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
