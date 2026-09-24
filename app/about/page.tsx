import { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutIntro } from "@/components/about/AboutIntro";
import { PhotographerPortrait } from "@/components/about/PhotographerPortrait";
import { PhotographerStory } from "@/components/about/PhotographerStory";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LocationSection } from "@/components/about/LocationSection";
import { TravelJournal } from "@/components/about/TravelJournal";
import { SelectedWork } from "@/components/about/SelectedWork";
import { AboutCTA } from "@/components/about/AboutCTA";
import { siteConfig } from "@/data/site";
import { photographerData } from "@/data/about";

export const metadata: Metadata = {
  title: `About ${photographerData.name} — Photographer & Founder`,
  description:
    "Learn about Guri Rupal, Photographer & Founder of Guri Rupal Photography. Discover our philosophy, natural approach, and commitment to capturing genuine moments.",
  openGraph: {
    title: `About ${photographerData.name} | ${siteConfig.name}`,
    description:
      "Photography is about preserving emotions, connections and meaningful moments naturally.",
    images: [
      {
        url: photographerData.portrait.src.startsWith("http")
          ? photographerData.portrait.src
          : `${siteConfig.url || "https://photography2-indol.vercel.app"}${photographerData.portrait.src}`,
        width: 1600,
        height: 2000,
        alt: photographerData.portrait.alt,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      {/* Editorial Fixed Navigation */}
      <Navbar />

      <div className="flex-1">
        {/* Editorial Intro */}
        <AboutIntro />

        {/* 4:5 Large Daylight Portrait + Profile Statement */}
        <PhotographerPortrait />

        {/* 3 Editorial Story Chapters: A Little About Me, What I Notice, Why I Photograph */}
        <PhotographerStory />

        {/* Studio Philosophy & Sacred Pheras Candid Imagery */}
        <PhilosophySection />

        {/* 4-Step Approach: Listen, Observe, Guide, Document */}
        <ApproachSection />

        {/* Core Values & Non-Negotiables */}
        <ValuesSection />

        {/* Geographic Scope & Destination Reach */}
        <LocationSection />

        {/* Field Notes & Travel Journal Across India */}
        <TravelJournal />

        {/* Selected Stories Close to Guri's Heart */}
        <SelectedWork />

        {/* Warm, Sincere WhatsApp Inquiry Callout */}
        <AboutCTA />
      </div>

      {/* Luxury Editorial Footer */}
      <Footer />
    </main>
  );
}
