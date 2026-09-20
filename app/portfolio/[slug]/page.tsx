import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Tag, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryGallery } from "@/components/portfolio/StoryGallery";
import { StoryNavigation } from "@/components/portfolio/StoryNavigation";
import { RelatedStories } from "@/components/portfolio/RelatedStories";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { portfolioStories } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

interface StoryPageProps {
  params: {
    slug: string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://varastories.com";

export async function generateStaticParams() {
  return portfolioStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = portfolioStories.find((s) => s.slug === params.slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  const rawImageUrl = story.coverImage.src;
  const imageUrl = rawImageUrl.startsWith("http") ? rawImageUrl : `${siteUrl}${rawImageUrl}`;

  return {
    title: `${story.title} — ${story.location}`,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} | ${siteConfig.name}`,
      description: story.excerpt,
      images: [
        {
          url: imageUrl,
          width: story.coverImage.width || 1200,
          height: story.coverImage.height || 800,
          alt: story.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${story.title} | ${siteConfig.name}`,
      description: story.excerpt,
      images: [imageUrl],
    },
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const storyIndex = portfolioStories.findIndex((s) => s.slug === params.slug);

  if (storyIndex === -1) {
    notFound();
  }

  const story = portfolioStories[storyIndex];
  const prevStory = storyIndex > 0 ? portfolioStories[storyIndex - 1] : null;
  const nextStory = storyIndex < portfolioStories.length - 1 ? portfolioStories[storyIndex + 1] : null;

  // Breadcrumb Structured Data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteUrl}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: story.title,
        item: `${siteUrl}/portfolio/${story.slug}`,
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      {/* Schema.org BreadcrumbList Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Editorial Fixed Header */}
      <Navbar />

      <article className="pt-28 sm:pt-36 flex-1">
        {/* Story Header & Narrative Metadata */}
        <header className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-ivory border border-[#2C2523]/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-espresso-primary">
              <Sparkles className="w-3 h-3 text-gold-subtle" />
              {story.category} · {story.year}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-primary mb-4">
            {story.title}
          </h1>

          {story.subtitle && (
            <p className="font-serif text-lg sm:text-2xl text-espresso-muted font-light italic mb-6">
              {story.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-espresso-muted uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-subtle" />
              {story.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-subtle" />
              {story.year}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-gold-subtle" />
              {story.city}, {story.stateOrRegion}
            </span>
          </div>
        </header>

        {/* Full-Bleed Panoramic Cover Image */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24">
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-[2px] shadow-editorial bg-surface-ivory">
            <Image
              src={story.coverImage.src}
              alt={story.coverImage.alt}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              quality={92}
              className="object-cover"
              style={{ objectPosition: story.coverImage.objectPosition || "center 30%" }}
            />
          </div>
        </div>

        {/* Narrative Prologue & Celebration Nuance */}
        <div className="max-w-3xl mx-auto px-6 sm:px-8 mb-16 sm:mb-24 text-left">
          <div className="border-l-2 border-gold-subtle pl-6 sm:pl-8 mb-10">
            <p className="font-serif text-xl sm:text-2xl text-espresso-primary font-normal leading-relaxed italic">
              &ldquo;{story.excerpt}&rdquo;
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base md:text-lg text-espresso-muted font-light leading-relaxed">
            {story.narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Celebration Details Grid */}
          {story.details && (
            <div className="mt-12 p-6 sm:p-8 rounded-[2px] bg-[#F4EFEB] border border-[#2C2523]/8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div>
                <span className="font-mono uppercase tracking-widest text-gold-subtle font-semibold block mb-1">
                  Location & Venue
                </span>
                <p className="text-espresso-primary font-medium">{story.details.venue}</p>
              </div>

              <div>
                <span className="font-mono uppercase tracking-widest text-gold-subtle font-semibold block mb-1">
                  Color Palette
                </span>
                <p className="text-espresso-primary font-medium">{story.details.palette}</p>
              </div>

              {story.details.rituals && (
                <div className="sm:col-span-2">
                  <span className="font-mono uppercase tracking-widest text-gold-subtle font-semibold block mb-1.5">
                    Celebration Rituals Captured
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {story.details.rituals.map((r, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-sm bg-[#FAF8F5] border border-[#2C2523]/10 text-espresso-primary font-medium"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Editorial Photo Gallery with Lightbox */}
        <StoryGallery images={story.images} />

        {/* Previous & Next Story Navigation */}
        <StoryNavigation prevStory={prevStory} nextStory={nextStory} />

        {/* WhatsApp & Written Inquiry Conversion Section */}
        <PortfolioCTA
          eyebrow="RESERVE YOUR CELEBRATION"
          heading={`Planning a celebration in ${story.city}?`}
          storyTitle={story.title}
          location={story.location}
          category={story.category}
        />

        {/* Related Stories */}
        <RelatedStories
          currentStoryId={story.id}
          allStories={portfolioStories}
          category={story.category}
        />
      </article>

      {/* Luxury Footer */}
      <Footer />
    </main>
  );
}
