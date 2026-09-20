import { MapPin, Mail, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactData } from "@/data/contact";

export function ContactDetails() {
  const email = process.env.NEXT_PUBLIC_STUDIO_EMAIL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <div className="w-full border-t border-[#2C2523]/10 pt-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Geographic Presence & Availability */}
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-2 block">
            AVAILABILITY & REACH
          </span>
          <p className="font-serif text-lg text-espresso-primary font-normal mb-2">
            {contactData.availabilityNote}
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-espresso-muted uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-gold-subtle shrink-0" />
            <span>{siteConfig.locations.join(" · ")}</span>
          </div>
        </div>

        {/* Optional Configured Details */}
        <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono text-espresso-muted">
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-espresso-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-subtle" />
              <span>{email}</span>
            </a>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-espresso-primary transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-gold-subtle" />
              <span>FOLLOW THE JOURNEY →</span>
            </a>
          )}

          <p className="text-[11px] text-espresso-muted/70 tracking-wide mt-1">
            Private consultations by prior appointment
          </p>
        </div>
      </div>
    </div>
  );
}
