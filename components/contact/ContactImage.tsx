import Image from "next/image";
import { contactData } from "@/data/contact";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ContactImage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
      <ScrollReveal variant="scale-up" duration={0.9}>
        <ParallaxImage offset={12} className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2px] bg-surface-ivory shadow-editorial">
          <Image
            src={contactData.closingImage.src}
            alt={contactData.closingImage.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={90}
            className="object-cover"
            style={{ objectPosition: contactData.closingImage.objectPosition || "center center" }}
          />
          <div className="absolute inset-0 bg-[#2C2523]/10" />
        </ParallaxImage>
      </ScrollReveal>
    </section>
  );
}
