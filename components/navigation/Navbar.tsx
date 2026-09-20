"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-luxury ${
          isScrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#2C2523]/8 py-4 shadow-subtle"
            : "bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brandmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] font-medium text-espresso-primary transition-opacity group-hover:opacity-80">
              {siteConfig.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-espresso-muted -mt-0.5">
              Fine Art Photography
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav isScrolled={isScrolled} />

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-3 rounded-full border border-[#2C2523]/15 text-espresso-primary hover:bg-peach-soft transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Full-Screen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
