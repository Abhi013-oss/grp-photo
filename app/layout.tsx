import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { photographerData } from "@/data/about";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://varastories.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Luxury Indian Wedding Photography",
    "Editorial Wedding Photographer",
    "Udaipur Palace Wedding",
    "Jaipur Wedding Photography",
    "Destination Wedding India",
    "Contemporary Indian Bridal Photography",
    "Arjun Mehra Photography",
  ],
  authors: [{ name: photographerData.name, url: siteUrl }],
  creator: photographerData.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=90",
        width: 2400,
        height: 1600,
        alt: `${siteConfig.name} — Luxury Indian Wedding Photography`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=90",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteConfig.name,
        url: siteUrl,
        description: siteConfig.description,
        areaServed: siteConfig.locations,
        founder: {
          "@type": "Person",
          name: photographerData.name,
          jobTitle: photographerData.role,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-espresso selection:bg-peach selection:text-espresso-primary">
        {/* Keyboard Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-peach-soft focus:text-espresso-primary focus:border focus:border-peach-border focus:shadow-md rounded-[2px] font-mono text-xs tracking-wider uppercase"
        >
          Skip to main content
        </a>
        <div id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </div>
      </body>
    </html>
  );
}
