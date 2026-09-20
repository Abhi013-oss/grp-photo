import Image from "next/image";
import { Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/contact";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ContactIntro() {
  const whatsappUrl = createWhatsAppLink();

  return (
    <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <ScrollReveal variant="fade-up" duration={0.85}>
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-ivory border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
                <Sparkles className="w-3 h-3 text-gold-subtle" />
                {contactData.intro.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.1] font-normal tracking-tight text-espresso-primary mb-6 text-center lg:text-left">
              {contactData.intro.heading}
            </h1>

            {/* Supporting Narrative */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-espresso-muted leading-relaxed font-light max-w-xl mb-8 text-center lg:text-left">
              {contactData.intro.description}
            </p>

            {/* Quick WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
                <span>START ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs font-mono text-espresso-muted tracking-wide text-center sm:text-left">
                or fill out the written enquiry below ↓
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Editorial Photograph */}
        <div className="lg:col-span-5 w-full">
          <ScrollReveal variant="fade-up" duration={0.85} delay={0.15}>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-[2px] bg-surface-ivory shadow-editorial">
              <Image
                src={contactData.intro.image.src}
                alt={contactData.intro.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                className="object-cover"
                style={{ objectPosition: contactData.intro.image.objectPosition || "center 28%" }}
              />
              <div className="absolute inset-0 bg-[#2C2523]/10 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
