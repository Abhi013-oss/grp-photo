import Image from "next/image";
import { processSteps } from "@/data/services";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/motion/ScrollReveal";

export function ProcessSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-canvas text-espresso">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
              HOW WE WORK TOGETHER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4 text-center">
              A calm, unhurried journey.
            </h2>
            <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed max-w-xl mx-auto text-center">
              From your first inquiry to the delivery of your archival master collection, our collaboration is personal, transparent, and seamless.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Editorial Process Grid with Authentic Photography */}
        <ScrollRevealStagger staggerDelay={0.14}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {processSteps.map((step) => (
              <ScrollRevealItem key={step.stepNumber} variant="fade-up" duration={0.7}>
                <div className="group flex flex-col bg-[#F4EFEB] rounded-lg overflow-hidden border border-[#2C2523]/10 shadow-subtle hover:shadow-editorial transition-all duration-500 hover:-translate-y-1 h-full">
                  {/* Photo Frame */}
                  {step.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECE6E0]">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm text-[10px] font-mono tracking-widest text-espresso-primary uppercase font-medium">
                        PHASE {step.stepNumber}
                      </div>
                    </div>
                  )}

                  {/* Text Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#2C2523]/15 pb-3 mb-3">
                        <span className="font-mono text-xl text-gold-subtle font-medium">
                          {step.stepNumber}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-espresso-muted uppercase">
                          COLLABORATION
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-espresso-primary mb-2.5 leading-snug">
                        {step.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-espresso-muted font-light leading-relaxed">
                        {step.description}
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
