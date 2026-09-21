"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppLink({
    customMessage: "Hi, I am exploring your photography website on mobile and would love to enquire.",
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-luxury ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#2C2523]/10 py-3 sm:py-4 shadow-subtle"
            : "bg-[#FAF8F5]/90 md:bg-gradient-to-b md:from-[#FAF8F5]/85 md:via-[#FAF8F5]/35 md:to-transparent backdrop-blur-md md:backdrop-blur-none border-b border-[#2C2523]/8 md:border-b-0 py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brandmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.22em] font-medium text-espresso-primary transition-opacity group-hover:opacity-80">
              {siteConfig.name}
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-espresso-muted -mt-0.5">
              Fine Art Photography
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav isScrolled={isScrolled} />

          {/* Mobile Right Actions: Direct WhatsApp + Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:hidden">
            {/* Quick Mobile WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-[11px] font-medium tracking-wider transition-colors shadow-sm active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1E7D34]" />
              <span className="hidden xs:inline text-[10px] font-mono tracking-widest">ENQUIRE</span>
            </a>

            {/* Mobile Hamburger Toggle Button (Tactile 44px Touch Target) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#2C2523]/15 text-espresso-primary hover:bg-peach-soft flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Menu className="w-5 h-5 text-espresso-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Full-Screen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
