import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { FeaturedPortfolioSection } from "@/components/portfolio/FeaturedPortfolioSection";
import { DestinationsShowcase } from "@/components/home/DestinationsShowcase";
import { HomepageServicesPreview } from "@/components/services/HomepageServicesPreview";
import { BotanicalStudies } from "@/components/home/BotanicalStudies";
import { HomepageAboutPreview } from "@/components/about/HomepageAboutPreview";
import { HomepageContactCTA } from "@/components/contact/HomepageContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col">
      {/* Editorial Fixed Navigation */}
      <Navbar />

      {/* Full-Screen Daylight Editorial Hero (100svh) */}
      <Hero />

      {/* Homepage Portfolio Integration: Featured Stories Preview */}
      <FeaturedPortfolioSection />

      {/* Indian Heritage Destinations & Sacred Landscapes */}
      <DestinationsShowcase />

      {/* Homepage Services Integration: Editorial Experiences Preview */}
      <HomepageServicesPreview />

      {/* Indian Nature, Sacred Flora & Botanical Studies */}
      <BotanicalStudies />

      {/* Homepage About Integration: Photographer Story & Philosophy Preview */}
      <HomepageAboutPreview />

      {/* Homepage Contact Integration: Concluding Conversation Lounge */}
      <HomepageContactCTA />

      {/* Luxury Editorial Footer */}
      <Footer />
    </main>
  );
}
