"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
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
            ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#2C2523]/8 py-3.5 shadow-subtle"
            : "bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brandmark */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <Image
              src={siteConfig.logo || "/images/logo-cropped.png"}
              alt={`${siteConfig.name} Logo`}
              width={140}
              height={98}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav isScrolled={isScrolled} />

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-3 rounded-full border border-[#2C2523]/15 text-espresso-primary hover:bg-peach-soft transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Full-Screen Mobile Menu Portal */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
