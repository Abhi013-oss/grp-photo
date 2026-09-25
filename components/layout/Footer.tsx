import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ArrowUpRight, MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  const whatsappUrl = createWhatsAppLink({
    customMessage: "Hello Guri Rupal Photography, I would like to enquire about your photography services.",
  });

  return (
    <footer className="w-full bg-[#F4EFEB] text-espresso border-t border-[#2C2523]/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand Statement & Contact Bridge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#2C2523]/10">
          <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              href="/"
              className="mb-4 inline-block group"
              aria-label={`${siteConfig.name} Home`}
            >
              <Image
                src={siteConfig.logo || "/images/logo-cropped.png"}
                alt={siteConfig.name}
                width={160}
                height={112}
                className="h-14 sm:h-16 w-auto object-contain transition-opacity group-hover:opacity-85"
              />
            </Link>
            <span className="text-[11px] font-mono tracking-widest text-gold-subtle uppercase font-semibold mb-3">
              Guri Rupal · Photographer & Founder
            </span>
            <p className="font-sans text-xs sm:text-sm text-espresso-muted max-w-md mx-auto md:mx-0 leading-relaxed mb-4 font-normal">
              {siteConfig.description}
            </p>
            {siteConfig.address && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wide text-espresso-muted mb-4">
                <MapPin className="w-3.5 h-3.5 text-gold-subtle shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            )}
            {/* Social Links */}
            <div className="flex items-center gap-3 text-espresso-muted pt-1">
              {siteConfig.socialLinks?.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1.5 rounded-full hover:text-espresso-primary transition-colors hover:bg-[#FAF8F5]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks?.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-1.5 rounded-full hover:text-espresso-primary transition-colors hover:bg-[#FAF8F5]"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks?.youtube && (
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-1.5 rounded-full hover:text-espresso-primary transition-colors hover:bg-[#FAF8F5]"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
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
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              About Guri Rupal
            </Link>
            <Link
              href="/contact"
              className="text-xs sm:text-sm text-espresso-primary hover:text-espresso-muted transition-colors tracking-wide"
            >
              Contact
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-subtle font-semibold mb-2">
              Contact & Inquiries
            </span>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-espresso-primary hover:text-espresso-muted transition-colors mb-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-subtle" />
                <span>{siteConfig.phone}</span>
              </a>
            )}
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-espresso-primary hover:text-espresso-muted transition-colors mb-4"
              >
                <Mail className="w-3.5 h-3.5 text-gold-subtle" />
                <span>{siteConfig.email}</span>
              </a>
            )}
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
          <p className="text-[11px] tracking-wide font-mono uppercase text-espresso-muted/80">
            Professional Photography
          </p>
        </div>
      </div>
    </footer>
  );
}
