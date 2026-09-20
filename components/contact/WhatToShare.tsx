import { Check } from "lucide-react";
import { contactData } from "@/data/contact";

export function WhatToShare() {
  return (
    <div className="w-full bg-[#FAF8F5] border border-[#2C2523]/10 p-8 sm:p-10 rounded-[2px] mb-12">
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-2 block">
        {contactData.whatToShare.heading}
      </span>
      <h3 className="font-serif text-xl sm:text-2xl font-normal text-espresso-primary mb-3">
        {contactData.whatToShare.subheading}
      </h3>

      <ul className="space-y-2.5 mt-4">
        {contactData.whatToShare.points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-espresso-muted font-light">
            <span className="p-0.5 rounded-full bg-peach-soft text-gold-subtle shrink-0 mt-0.5">
              <Check className="w-3 h-3" />
            </span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
