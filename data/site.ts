import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Guri Rupal Photography",
  tagline: "Professional Photography",
  logo: "/images/logo-cropped.png",
  logoTransparent: "/images/logo-transparent.png",
  description:
    "Capturing genuine emotions, meaningful connections and unforgettable celebrations through photography.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919815290715",
  phone: "+91 98152 90715",
  email: "guristudio34@gmail.com",
  address: "3270, Sector 27D, Chandigarh, 160019",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Guri+Rupal+Photography+Sector+27D+Chandigarh",
  socialLinks: {
    instagram: "https://www.instagram.com/gurirupalphotography/",
    facebook: "https://www.facebook.com/GuriRupalPhotography",
    youtube: "https://www.youtube.com/@GuriRupalPhotography",
  },
  locations: ["Available for weddings, celebrations and photography sessions."],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://photography2-indol.vercel.app",
  navItems: [
    { label: "WORK", href: "/portfolio" },
    { label: "SERVICES", href: "/services" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
};
