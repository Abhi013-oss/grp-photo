import Link from "next/link";
import { MessageCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface PortfolioCTAProps {
  eyebrow?: string;
  heading?: string;
  storyTitle?: string;
  location?: string;
  category?: string;
}

export function PortfolioCTA({
  eyebrow = "YOUR STORY COULD BE NEXT",
  heading = "Let's create something you'll want to keep forever.",
  storyTitle,
  location,
  category,
}: PortfolioCTAProps) {
  const whatsappUrl = createWhatsAppLink({
    storyTitle,
    location,
    category,
  });

  return (
    <section className="w-full bg-[#F4EFEB] border-t border-b border-[#2C2523]/10 py-20 sm:py-28 px-6 sm:px-8 text-center my-16 sm:my-24">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-4">
          {eyebrow}
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-5">
          {heading}
        </h2>

        {/* Narrative support */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-espresso-muted max-w-xl font-light leading-relaxed mb-8">
          We welcome conversations with couples and families planning celebrations across India and destinations worldwide.
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
            <span>ENQUIRE ON WHATSAPP</span>
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
      </div>
    </section>
  );
}
