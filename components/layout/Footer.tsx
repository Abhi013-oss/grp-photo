import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const whatsappUrl = createWhatsAppLink({
    customMessage: "Hi, I am exploring your website and would love to enquire about photography for my upcoming event.",
  });

  return (
    <footer className="w-full bg-[#F4EFEB] text-espresso border-t border-[#2C2523]/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand Statement & Contact Bridge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#2C2523]/10">
          <div className="md:col-span-6 flex flex-col items-center text-center md:items-start md:text-left">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium text-espresso-primary mb-3">
              {siteConfig.name}
            </span>
            <p className="font-sans text-xs sm:text-sm text-espresso-muted max-w-md mx-auto md:mx-0 leading-relaxed mb-6 font-normal">
              Preserving the quiet emotion, sacred rituals, and royal grandeur of modern Indian celebrations across Rajasthan, Delhi, Goa, and worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] font-mono tracking-widest text-espresso-muted uppercase">
              <span>Jaipur</span>
              <span>·</span>
              <span>Udaipur</span>
              <span>·</span>
              <span>Delhi NCR</span>
              <span>·</span>
              <span>Goa</span>
              <span>·</span>
              <span>Worldwide</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left gap-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-subtle font-semibold mb-1">
              Explore
            </span>
            <Link
              href="/portfolio"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Selected Stories
            </Link>
            <Link
              href="/services"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Services & Experiences
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Studio Philosophy
            </Link>
            <Link
              href="/contact"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Private Enquiry
            </Link>
          </div>

          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-subtle font-semibold mb-2">
              Conversations
            </span>
            <p className="text-xs text-espresso-muted leading-relaxed mb-4">
              We welcome early consultations for upcoming celebration seasons.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs font-medium tracking-[0.1em] transition-all shadow-subtle hover:shadow-editorial mx-auto md:mx-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1E7D34]" />
              <span>WHATSAPP US</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All visual works protected.</p>
          <p className="text-[11px] tracking-wide">
            Fine Art Wedding & Editorial Photography Atelier
          </p>
        </div>
      </div>
    </footer>
  );
}
