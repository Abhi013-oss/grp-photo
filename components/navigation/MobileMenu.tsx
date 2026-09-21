"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll safely when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const whatsappUrl = createWhatsAppLink({
    customMessage: "Hi, I am exploring your photography website on mobile and would love to enquire about availability.",
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] h-[100dvh] w-full overflow-y-auto bg-[#FAF8F5]/98 backdrop-blur-2xl px-6 py-6 md:hidden text-espresso flex flex-col justify-between shadow-2xl"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#2C2523]/10 pb-4 pt-1 flex-shrink-0">
            <Link
              href="/"
              onClick={onClose}
              className="flex flex-col focus:outline-none"
            >
              <span className="font-serif text-xl tracking-[0.22em] font-medium text-espresso-primary">
                {siteConfig.name}
              </span>
              <p className="text-[9px] uppercase tracking-[0.24em] text-espresso-muted mt-0.5">
                Editorial Atelier
              </p>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#2C2523]/15 text-espresso-primary hover:bg-peach-soft flex items-center justify-center transition-colors active:scale-95 shadow-sm"
            >
              <X className="w-5 h-5 text-espresso-primary" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className="flex flex-col items-center justify-center gap-3.5 my-auto py-8 text-center flex-1"
            aria-label="Mobile primary navigation"
          >
            {navLinks.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`group relative flex items-center justify-center gap-3 py-3 w-full transition-all active:scale-[0.98] ${
                    isActive ? "text-espresso-primary font-medium" : "text-espresso-muted hover:text-espresso-primary"
                  }`}
                >
                  <span className="text-[10px] font-mono text-gold-subtle tracking-widest uppercase">
                    0{index + 1}
                  </span>
                  <span
                    className={`font-serif text-2xl sm:text-3xl tracking-wide transition-colors ${
                      isActive ? "text-espresso-primary italic" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B89762] ml-1 shadow-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Conversion & Studio Presence Area */}
          <div className="flex flex-col items-center text-center gap-4 border-t border-[#2C2523]/10 pt-5 pb-2 flex-shrink-0">
            {/* Studio Locations */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono tracking-widest text-espresso-muted uppercase">
              <Sparkles className="w-3 h-3 text-gold-subtle" />
              <span>JAIPUR · UDAIPUR · DELHI · GOA · GLOBAL</span>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary font-medium text-xs sm:text-sm tracking-[0.1em] transition-all shadow-editorial active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#1E7D34]" />
              <span>WHATSAPP US DIRECTLY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-espresso-muted" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
