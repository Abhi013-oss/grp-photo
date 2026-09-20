import { MessageCircle, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/contact";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function WhatsAppCTA() {
  const whatsappUrl = createWhatsAppLink();

  return (
    <section className="w-full bg-[#F4EFEB] py-16 sm:py-24 border-y border-[#2C2523]/10 px-6 sm:px-8">
      <ScrollReveal variant="fade-up" duration={0.85}>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-2 block">
              {contactData.whatsappSection.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-espresso-primary tracking-tight mb-3">
              {contactData.whatsappSection.heading}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-espresso-muted font-light leading-relaxed">
              {contactData.whatsappSection.description}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98] shrink-0 mx-auto md:mx-0"
          >
            <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
            <span>{contactData.whatsappSection.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
