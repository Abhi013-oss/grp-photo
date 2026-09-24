import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  return (
    <section className="w-full bg-[#F4EFEB] py-20 sm:py-24 border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
          LOCATION & AVAILABILITY
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-primary mb-6">
          Available for weddings, celebrations and photography sessions.
        </h2>

        {/* Location Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-xs font-mono text-espresso-primary tracking-wider uppercase shadow-sm">
            <MapPin className="w-3 h-3 text-gold-subtle" />
            {siteConfig.address}
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-xs font-mono text-espresso-primary tracking-wider uppercase shadow-sm">
            <MapPin className="w-3 h-3 text-gold-subtle" />
            Available for Weddings & Celebrations
          </span>
        </div>

        {siteConfig.mapsUrl && (
          <div className="inline-flex items-center justify-center">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] hover:bg-[#FAF8F5]/80 border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-subtle"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-subtle group-hover:rotate-45 transition-transform" />
              <span>VIEW ON MAP</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
