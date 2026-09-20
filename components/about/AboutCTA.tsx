import Link from "next/link";
import { MessageCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import { photographerData } from "@/data/about";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AboutCTA() {
  const whatsappUrl = createWhatsAppLink({
    customMessage: photographerData.inquiryPrompt,
  });

  return (
    <section className="w-full bg-[#F4EFEB] py-24 sm:py-32 px-6 sm:px-8 text-center">
      <ScrollReveal variant="fade-up" duration={0.85}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-4">
            YOUR STORY
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-5">
            If the photographs matter to you, let&apos;s talk.
          </h2>

          {/* Narrative */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-espresso-muted max-w-xl font-light leading-relaxed mb-8">
            Tell us about your celebration, your people, and the moments you want to remember. We accept a limited number of commissions each wedding season to give every family our complete presence and artistic dedication.
          </p>

          {/* Dual Actions: WhatsApp Primary + Contact Form Secondary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
              <span>START A CONVERSATION ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase text-espresso-primary hover:text-espresso-muted transition-colors"
            >
              <span>OR SEND WRITTEN ENQUIRY</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Reassurance note */}
          <p className="mt-6 text-[11px] font-mono text-espresso-muted/70 uppercase tracking-wider">
            Direct conversation with Arjun & the VARA team · We look forward to hearing about your celebration
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
