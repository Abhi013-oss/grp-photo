import { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesList } from "@/components/services/ServicesList";
import { ExperienceSection } from "@/components/services/ExperienceSection";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Bespoke Photography Experiences & Coverage",
  description:
    "Explore our bespoke Indian wedding, pre-wedding editorial, and fine-art portrait photography services across Rajasthan, Delhi, Goa, and worldwide destinations.",
  openGraph: {
    title: `Bespoke Experiences & Services | ${siteConfig.name}`,
    description:
      "Documentary Indian wedding coverage, destination celebrations, and fine art bridal monographs.",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      {/* Editorial Fixed Navigation */}
      <Navbar />

      <div className="flex-1">
        {/* Editorial Introduction */}
        <ServicesIntro />

        {/* Primary Alternating Editorial Service Sections */}
        <ServicesList services={servicesData} />

        {/* Studio Stance & Philosophy ("More than photographs") */}
        <ExperienceSection />

        {/* 4-Step Editorial Process */}
        <ProcessSection />

        {/* Final WhatsApp Conversion Lounge */}
        <ServicesCTA />
      </div>

      {/* Luxury Editorial Footer */}
      <Footer />
    </main>
  );
}
