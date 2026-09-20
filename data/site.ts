import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "VARA STORIES",
  tagline: "Bespoke Indian Wedding & Celebration Storytelling",
  description:
    "An editorial photography studio preserving the quiet emotion, sacred rituals, and royal grandeur of modern Indian celebrations.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  locations: ["Jaipur", "Udaipur", "Delhi NCR", "Goa", "Worldwide"],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://varastories.com",
  navItems: [
    { label: "WORK", href: "/portfolio" },
    { label: "SERVICES", href: "/services" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
};
