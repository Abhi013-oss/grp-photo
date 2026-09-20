import Link from "next/link";
import { MessageCircle, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HomepageContactCTA() {
  const whatsappUrl = createWhatsAppLink();

  return (
    <section id="contact" className="w-full bg-[#F4EFEB] border-t border-[#2C2523]/10 py-24 sm:py-32 px-6 sm:px-8 text-center">
      <ScrollReveal variant="fade-up" duration={0.85}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
              <Sparkles className="w-3 h-3 text-gold-subtle" />
              YOUR STORY STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-espresso-primary tracking-tight leading-[1.12] mb-5">
            Let&apos;s talk about what you&apos;re planning.
          </h2>

          {/* Narrative */}
          <p className="font-sans text-sm sm:text-base text-espresso-muted max-w-xl font-light leading-relaxed mb-10">
            Whether you are envisioning a multi-day royal celebration in Rajasthan, an intimate coastal gathering, or a fine art bridal monograph, we would love to learn about your celebration.
          </p>

          {/* Dual Actions: WhatsApp Primary + Contact Page Secondary */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF8F5] hover:bg-[#FAF8F5]/80 border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 shadow-subtle"
            >
              <span>SEND WRITTEN ENQUIRY</span>
              <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
