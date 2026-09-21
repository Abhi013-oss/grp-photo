"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock body scroll when open
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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between bg-[#FAF8F5]/98 backdrop-blur-2xl px-6 py-8 md:hidden text-espresso overflow-y-auto"
          style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#2C2523]/10 pb-6 flex-shrink-0">
            <div>
              <span className="font-serif text-xl tracking-[0.2em] font-medium text-espresso-primary">
                {siteConfig.name}
              </span>
              <p className="text-[10px] uppercase tracking-[0.18em] text-espresso-muted mt-0.5">
                Editorial Photography
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-3 rounded-full border border-[#2C2523]/15 text-espresso-primary hover:bg-peach-soft transition-colors cursor-pointer focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-6 my-auto py-8 text-center flex-1 justify-center" aria-label="Mobile primary navigation">
            {siteConfig.navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="group flex flex-col items-center justify-center border-b border-[#2C2523]/5 pb-4 w-full transition-colors text-center cursor-pointer"
              >
                <span className="text-[10px] font-mono text-gold-subtle tracking-widest uppercase mb-1">
                  0{index + 1}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-espresso-primary group-hover:text-espresso-muted transition-colors tracking-wide">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Conversion Area */}
          <div className="flex flex-col items-center text-center gap-4 border-t border-[#2C2523]/10 pt-6 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs text-espresso-muted uppercase tracking-[0.15em] text-center">
              <span>Based in India</span>
              <span className="hidden sm:inline">·</span>
              <span>Jaipur · Udaipur · Worldwide</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary font-medium text-sm tracking-[0.08em] transition-all shadow-sm active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 text-[#1E7D34]" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
