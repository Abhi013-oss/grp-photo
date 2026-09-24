import { MapPin, Mail, Instagram, Phone, Navigation } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactData } from "@/data/contact";

export function ContactDetails() {
  const email = process.env.NEXT_PUBLIC_STUDIO_EMAIL || siteConfig.email;
  const phone = siteConfig.phone;
  const address = siteConfig.address;
  const mapsUrl = siteConfig.mapsUrl;
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || siteConfig.socialLinks?.instagram;

  return (
    <div className="w-full border-t border-[#2C2523]/10 pt-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Business Presence & Address */}
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-2 block">
            LOCATION & STUDIO
          </span>
          <p className="font-serif text-xl text-espresso-primary font-normal mb-2">
            {siteConfig.name}
          </p>
          {address && (
            <div className="flex items-start gap-2 text-xs font-mono text-espresso-muted tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-gold-subtle shrink-0 mt-0.5" />
              <span>{address}</span>
            </div>
          )}
          <p className="font-sans text-xs text-espresso-muted mb-4 font-light">
            {contactData.availabilityNote}
          </p>
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-espresso-primary hover:text-espresso-muted transition-colors py-1 border-b border-gold-subtle"
            >
              <Navigation className="w-3 h-3 text-gold-subtle" />
              <span>VIEW ON MAP</span>
            </a>
          )}
        </div>

        {/* Direct Contact Actions: Phone, Email, Instagram */}
        <div className="flex flex-col items-start md:items-end gap-3 text-xs font-mono text-espresso-muted">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-1">
            DIRECT INQUIRY
          </span>

          {phone && (
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-espresso-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-subtle" />
              <span>{phone}</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}?subject=${encodeURIComponent("Photography Enquiry — Guri Rupal Photography")}`}
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
              <span>@gurirupalphotography</span>
            </a>
          )}

          <p className="text-[11px] text-espresso-muted/70 tracking-wide mt-2">
            Consultations by appointment · Chandigarh
          </p>
        </div>
      </div>
    </div>
  );
}
