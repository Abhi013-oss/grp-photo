import Image from "next/image";
import { photographerData } from "@/data/about";

export function PhilosophySection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-canvas text-espresso">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Large Prominent Statement */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-4 block">
            MY PHILOSOPHY
          </span>
          <blockquote className="font-serif text-3xl sm:text-5xl lg:text-[3.6rem] font-normal text-espresso-primary tracking-tight leading-[1.12] text-center">
            &ldquo;{photographerData.philosophyStatement}&rdquo;
          </blockquote>
        </div>

        {/* Asymmetric Image + Narrative Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] bg-surface-ivory shadow-editorial">
              <Image
                src={photographerData.philosophyImage.src}
                alt={photographerData.philosophyImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={90}
                className="object-cover"
                style={{ objectPosition: photographerData.philosophyImage.objectPosition || "center center" }}
              />
            </div>
            <p className="text-[11px] font-mono text-espresso-muted tracking-widest uppercase mt-3">
              Unprompted Joy — A candid interlude following the sacred pheras
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 text-sm sm:text-base text-espresso-muted font-light leading-relaxed">
            {photographerData.philosophyExplanation.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
