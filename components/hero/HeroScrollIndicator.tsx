"use client";

import { motion } from "framer-motion";

export function HeroScrollIndicator() {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollClick}
      aria-label="Scroll to featured stories"
      className="group hidden lg:flex flex-col items-center gap-2.5 text-espresso-primary/80 hover:text-espresso-primary transition-colors focus-visible:outline-none"
    >
      <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
        Scroll
      </span>
      <div className="w-[1px] h-9 bg-[#2C2523]/20 relative overflow-hidden">
        <motion.div
          animate={{
            y: [-12, 36],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-3 bg-gold-subtle"
        />
      </div>
    </button>
  );
}
