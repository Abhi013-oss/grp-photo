import { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { WhatsAppCTA } from "@/components/contact/WhatsAppCTA";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactImage } from "@/components/contact/ContactImage";
import { MobileStickyWhatsApp } from "@/components/contact/MobileStickyWhatsApp";
import { siteConfig } from "@/data/site";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact & Bespoke Celebration Enquiries",
  description:
    "Start a conversation with Arjun Mehra and the VARA STORIES team. Enquire via WhatsApp or submit a celebration brief for bespoke Indian wedding photography coverage across Jaipur, Udaipur, Delhi, and worldwide.",
  openGraph: {
    title: `Contact & Enquiries | ${siteConfig.name}`,
    description:
      "Start a direct conversation about your celebration, wedding dates, or destination photography commissions.",
    images: [
      {
        url: contactData.intro.image.src.startsWith("http")
          ? contactData.intro.image.src
          : `${siteConfig.url || "https://varastories.com"}${contactData.intro.image.src}`,
        width: 2000,
        height: 1333,
        alt: contactData.intro.image.alt,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      {/* Editorial Navigation */}
      <Navbar />

      <div className="flex-1">
        {/* Editorial Split Hero */}
        <ContactIntro />

        {/* Primary WhatsApp Conversion Lounge */}
        <WhatsAppCTA />

        {/* Editorial Written Enquiry Form */}
        <EnquiryForm />

        {/* Emotional Closing Photograph with Subtle Depth */}
        <ContactImage />
      </div>

      {/* Mobile Sticky WhatsApp Action */}
      <MobileStickyWhatsApp />

      {/* Luxury Editorial Footer */}
      <Footer />
    </main>
  );
}
