import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { ServiceOffering } from "@/lib/types";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ServiceSectionProps {
  service: ServiceOffering;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const isImageRight = index % 2 === 1;

  const whatsappUrl = createWhatsAppLink({
    category: service.title,
    customMessage: service.inquiryPrompt,
  });

  return (
    <article
      id={service.slug}
      className="py-16 sm:py-24 border-b border-[#2C2523]/10 last:border-b-0"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Block */}
          <div
            className={`lg:col-span-6 ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            } w-full`}
          >
            <ScrollReveal variant="fade-up" duration={0.8}>
              <div className="group relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-[2px] bg-surface-ivory shadow-subtle hover:shadow-editorial transition-all duration-500">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                  style={{ objectPosition: service.image.objectPosition || "center center" }}
                />

                {/* Floating Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-[10px] font-mono tracking-widest text-espresso-primary uppercase">
                    EXPERIENCE {service.number}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text & Inclusions Block */}
          <div
            className={`lg:col-span-6 ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            } flex flex-col items-center text-center lg:items-start lg:text-left`}
          >
            <ScrollReveal variant="fade-up" duration={0.8} delay={0.12}>
              {/* Number Kicker */}
              <span className="text-xs font-mono tracking-[0.25em] text-gold-subtle font-semibold mb-2">
                {service.number} · {service.category?.toUpperCase()}
              </span>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4 text-center lg:text-left">
                {service.title}
              </h2>

              {/* Short & Long Description */}
              <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed mb-6 text-center lg:text-left">
                {service.description}
              </p>

              {/* Inclusions & Highlights */}
              {service.features && service.features.length > 0 && (
                <div className="w-full max-w-md mx-auto lg:mx-0 mb-8 pt-4 border-t border-[#2C2523]/8 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-espresso-muted block mb-3 text-center lg:text-left">
                    What The Experience Includes
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-espresso-primary font-normal">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="p-0.5 rounded-full bg-peach-soft text-espresso-primary mt-0.5 shrink-0">
                          <Check className="w-3 h-3 text-[#1E7D34]" />
                        </span>
                        <span className="leading-snug text-espresso-muted font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dual Actions: WhatsApp Consultation + View Stories */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 shadow-subtle hover:shadow-editorial active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
                  <span>INQUIRE ON WHATSAPP</span>
                </a>

                <Link
                  href={`/portfolio?category=${service.category || "All"}`}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-espresso-primary hover:text-espresso-muted transition-colors py-2 border-b border-gold-subtle"
                >
                  <span>VIEW STORIES</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-subtle group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </article>
  );
}
