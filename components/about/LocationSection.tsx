import { MapPin } from "lucide-react";
import { photographerData } from "@/data/about";

export function LocationSection() {
  return (
    <section className="w-full bg-[#F4EFEB] py-20 sm:py-24 border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
          GEOGRAPHIC SCOPE
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-primary mb-6">
          Based in India · Documenting Celebrations Across
        </h2>

        {/* Location Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {photographerData.locations.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#2C2523]/10 text-xs font-mono text-espresso-primary tracking-wider uppercase shadow-sm"
            >
              <MapPin className="w-3 h-3 text-gold-subtle" />
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
