import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";

export function HomepageServicesPreview() {
  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-[#F4EFEB] text-espresso border-t border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
              <Sparkles className="w-3 h-3 text-gold-subtle" />
              THE EXPERIENCES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.4rem] font-normal tracking-tight text-espresso-primary leading-[1.15] text-center">
            Structured around presence, legacy and emotion.
          </h2>

          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono tracking-widest uppercase text-espresso-primary hover:text-espresso-muted transition-colors pb-1 border-b border-gold-subtle mt-2"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-gold-subtle group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Service Grid with Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="group flex flex-col bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#2C2523]/10 shadow-subtle hover:shadow-editorial transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECE6E0]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm text-[10px] font-mono tracking-widest text-espresso-primary uppercase font-medium">
                  SERVICE {service.number}
                </span>
              </div>

              {/* Text Card */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-espresso-primary group-hover:text-gold-subtle transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso-muted font-light leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-espresso-primary group-hover:text-gold-subtle transition-colors pt-3 border-t border-[#2C2523]/10">
                  <span>DISCOVER DISCIPLINE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Bridge */}
        <div className="text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F5] hover:bg-[#FAF8F5]/90 border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 shadow-subtle hover:shadow-editorial"
          >
            <span>LEARN ABOUT OUR COVERAGE & PROCESS</span>
            <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
