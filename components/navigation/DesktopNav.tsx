"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface DesktopNavProps {
  isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const whatsappUrl = createWhatsAppLink({
    customMessage: "Hello Guri Rupal Photography, I would like to enquire about your photography services.",
  });

  return (
    <div className="hidden md:flex items-center justify-between flex-1 ml-10 lg:ml-16">
      {/* Editorial Navigation Links */}
      <nav className="flex items-center justify-center gap-8 lg:gap-10 mx-auto" aria-label="Desktop primary navigation">
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`group relative text-xs tracking-[0.2em] transition-colors duration-300 font-medium ${
              isScrolled
                ? "text-espresso-primary hover:text-espresso-muted"
                : "text-espresso-primary/90 hover:text-espresso-primary"
            }`}
          >
            <span>{item.label}</span>
            {/* Subtle luxury underline reveal */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold-subtle transition-all duration-300 ease-luxury group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* WhatsApp Conversion Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire directly on WhatsApp"
        className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-peach-soft/95 hover:bg-peach-hover border border-peach-border/80 text-espresso-primary text-xs font-medium tracking-[0.1em] transition-all duration-300 shadow-subtle hover:shadow-editorial active:scale-[0.98]"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#1E7D34] group-hover:scale-110 transition-transform duration-300" />
        <span>WHATSAPP US</span>
      </a>
    </div>
  );
}
