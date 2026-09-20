import { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioArchiveView } from "@/components/portfolio/PortfolioArchiveView";
import { portfolioStories, portfolioCategories } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Celebration Stories & Wedding Archives",
  description:
    "Explore our curated photographic stories across royal palaces, desert dunes, coastal sanctuaries, and heritage estates in India and worldwide.",
  openGraph: {
    title: `Selected Stories | ${siteConfig.name}`,
    description:
      "Explore curated Indian wedding photography stories in Udaipur, Jaipur, Goa, and Delhi.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      {/* Editorial Fixed Navigation */}
      <Navbar />

      {/* Portfolio Archive View with Category Filter & Asymmetrical Grid */}
      <div className="flex-1">
        <PortfolioArchiveView
          initialStories={portfolioStories}
          categories={portfolioCategories}
        />
      </div>

      {/* Luxury Footer */}
      <Footer />
    </main>
  );
}
