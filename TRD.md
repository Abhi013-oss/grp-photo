# TECHNICAL REQUIREMENTS DOCUMENT (TRD)
## Project: Premium Indian Photography Studio Website
**Phase:** 2 — Technical Architecture & Engineering Blueprint  
**Status:** Approved for Review / Final Architecture  
**Author:** Senior Full-Stack Architect & Product Strategist  
**Version:** 1.0.0  
**Target Environment:** Node.js v24.x / Next.js (App Router) / TypeScript / Tailwind CSS  

---

## 1. TECHNOLOGY STACK
The technology selection is strictly optimized for high visual fidelity, ultra-low latency, SEO indexing, and strict content-presentation decoupling.

| Layer | Technology | Version / Standard | Selection Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | Latest Stable (14.x/15.x) | React Server Components (RSC) by default; zero client runtime for static content; nested routing; native OpenGraph & Metadata API; automatic image optimization pipeline. |
| **Runtime & Language** | Node.js + TypeScript | Node v24.x / TS 5.x | Strict type safety for data models (Portfolio, Services, Testimonials); preventing runtime undefined property crashes on image payloads. |
| **Styling Engine** | Tailwind CSS | v3.4+ / v4.x | Utility-first CSS compiling to an atomic minimal stylesheet; native CSS variables for design token abstraction (ivory, peach, warm gold). |
| **Animation Engine** | Framer Motion | v11.x | Declarative physics, layout transitions, exit animations, GPU-accelerated transforms, and first-class `prefers-reduced-motion` compliance. |
| **Iconography** | Lucide React | Latest | Clean, feather-weight SVG icons (WhatsApp, arrow diagonals, location pins, sliders, close buttons) with zero external icon-font overhead. |
| **Image Optimization** | `next/image` | Native Next.js | Automatic AVIF/WebP transcoding, responsive `srcset`, prevention of Cumulative Layout Shift (CLS) via explicit aspect ratios, priority LCP hero preloading. |
| **Font Pipeline** | `next/font/google` | Native Next.js | Zero external network hops; font files self-hosted automatically at build time; zero layout shift (`size-adjust` fallback). |
| **Data Layer (Initial)** | Static TypeScript Models | Native TypeScript | Complete separation of content from UI; strictly typed data files ready for headless CMS or Supabase migration. |
| **Future Database** | Supabase (PostgreSQL) | Post-Phase 3 Ready | Documented schema for relational portfolio stories, media assets, and inbound enquiry queues. |

---

## 2. EXISTING REPOSITORY ASSESSMENT
* **Current State:** The repository was inspected at `c:\Users\Abhinav\OneDrive\Desktop\Photography-2`.
* **Findings:**
  * Zero preexisting legacy code, outdated boilerplates, or conflicting dependencies exist.
  * Only [`PRD.md`](file:///c:/Users/Abhinav/OneDrive/Desktop/Photography-2/PRD.md) is present.
  * Node.js runtime is `v24.18.0`, with npm `11.16.0`.
* **Architectural Decision:** Clean greenfield implementation. The project will be architected from scratch adhering directly to Next.js App Router conventions without technical debt or legacy baggage.

---

## 3. ARCHITECTURE OVERVIEW & CORE PRINCIPLE
### 3.1 The Cardinal Rule: Content $\ne$ UI
```
+-------------------------------------------------------------------------+
|                              DATA LAYER                                 |
|   (data/site.ts, data/portfolio.ts, data/services.ts, data/hero.ts)     |
+-------------------------------------------------------------------------+
                                    │
                                    ▼
+-------------------------------------------------------------------------+
|                        SERVER COMPONENT LAYER                           |
|       (app/page.tsx, app/portfolio/page.tsx, app/portfolio/[slug])       |
|    - Fetches/imports typed data                                         |
|    - Generates dynamic SEO metadata                                     |
|    - Renders static semantic markup (Zero Client JS overhead)          |
+-------------------------------------------------------------------------+
                                    │
                                    ▼
+-------------------------------------------------------------------------+
|                        CLIENT COMPONENT LAYER                           |
|                  (Only where user interactivity exists)                 |
|   - HeroSlideshow (crossfade, Ken Burns, timer)                         |
|   - PortfolioLightbox (full-screen modal view)                          |
|   - MobileNav (drawer toggle)                                           |
|   - WhatsAppCTA (dynamic parameter generator)                           |
+-------------------------------------------------------------------------+
```

---

## 4. DIRECTORY & FOLDER STRUCTURE
```
photography-2/
├── app/
│   ├── layout.tsx                  # Root layout: font loaders, metadata, smooth scroll
│   ├── page.tsx                    # Editorial Homepage (RSC)
│   ├── globals.css                 # Design tokens, CSS variables, typography utility classes
│   ├── portfolio/
│   │   ├── page.tsx                # Portfolio Archive (RSC)
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic Story Narrative Page (RSC + generateStaticParams)
│   ├── services/
│   │   └── page.tsx                # Services & Experiences Showcase (RSC)
│   ├── about/
│   │   └── page.tsx                # Studio Story & Philosophy (RSC)
│   ├── contact/
│   │   └── page.tsx                # Direct Concierge & Structured Form (RSC)
│   ├── sitemap.ts                  # Programmatic XML sitemap generator
│   ├── robots.ts                   # Search crawler access directives
│   └── not-found.tsx               # Luxury editorial 404 handler
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx          # Sticky ivory glass header
│   │   ├── Navbar.tsx              # Desktop editorial nav + mobile drawer trigger
│   │   ├── MobileNav.tsx           # Accessible slide-out overlay (Client Component)
│   │   └── Footer.tsx              # Editorial footer with location credits & links
│   ├── hero/
│   │   ├── Hero.tsx                # Hero section wrapper (RSC)
│   │   ├── HeroSlideshow.tsx       # 2-3s crossfade + Ken Burns controller (Client Component)
│   │   ├── HeroContent.tsx         # Editorial typography, slide counter, and primary CTA
│   │   └── HeroProgress.tsx        # Subtle luxury progress bar (01 / 06)
│   ├── portfolio/
│   │   ├── PortfolioSection.tsx    # Homepage featured story showcase
│   │   ├── StoryCard.tsx           # Dimensional editorial preview card with tilt
│   │   ├── PortfolioGrid.tsx       # Filterable archive grid
│   │   ├── PortfolioFilters.tsx    # Category filter pills (Client Component)
│   │   ├── StoryGallery.tsx        # Dynamic photo flow for [slug]
│   │   └── PortfolioLightbox.tsx   # Accessible high-res image modal (Client Component)
│   ├── services/
│   │   ├── ServicesSection.tsx     # Homepage services teaser
│   │   ├── ServiceList.tsx         # Comprehensive experience breakdown
│   │   └── ServiceCard.tsx         # Editorial package presentation
│   ├── about/
│   │   ├── AboutSection.tsx        # Homepage artist introduction
│   │   ├── PhotographerProfile.tsx # Portrait, biography, artistic stance
│   │   ├── PhilosophyBlock.tsx     # Three-pillar philosophy statement
│   │   └── ProcessSteps.tsx        # 4-stage client journey
│   ├── testimonials/
│   │   ├── TestimonialsSection.tsx # Homepage quote showcase
│   │   └── TestimonialCard.tsx     # Editorial pull-quote with couple tag
│   ├── contact/
│   │   ├── ContactSection.tsx      # Dual-channel conversion hub
│   │   ├── EnquiryForm.tsx         # Structured form with validation (Client Component)
│   │   └── WhatsAppLounge.tsx      # High-touch WhatsApp conversion banner
│   ├── ui/
│   │   ├── Button.tsx              # Luxury button primitive (Primary, Outline, Text)
│   │   ├── Container.tsx           # Standardized responsive constraint wrapper
│   │   ├── SectionHeading.tsx      # Editorial serif headline + uppercase kicker
│   │   ├── ImageWrapper.tsx        # Next.js Image abstraction with smooth placeholder fade
│   │   └── Badge.tsx               # Muted champagne category pill
│   └── motion/
│       ├── FadeIn.tsx              # Viewport reveal wrapper
│       ├── Parallax.tsx            # Multi-plane scroll offset wrapper
│       └── TiltCard.tsx            # Desktop pointer-tracking micro-tilt wrapper
├── data/
│   ├── site.ts                     # Studio identity, meta, social links, contact info
│   ├── hero.ts                     # Hero slide imagery, captions, durations
│   ├── portfolio.ts                # Curated celebration stories and image arrays
│   ├── services.ts                 # Experiences, coverage pillars, deliverables
│   ├── testimonials.ts             # Client reflections, couple names, venue tags
│   └── about.ts                    # Artist bio, philosophy, 4-step methodology
├── lib/
│   ├── utils.ts                    # `cn()` helper (clsx + tailwind-merge)
│   ├── metadata.ts                 # Dynamic OpenGraph / Twitter metadata generator
│   ├── whatsapp.ts                 # Dynamic WhatsApp deep-link URL generator
│   └── constants.ts                # Design tokens, motion timing defaults, contact fallback
├── public/
│   ├── images/
│   │   ├── hero/                   # High-res curated hero slides (WebP)
│   │   ├── portfolio/              # Story covers and gallery assets
│   │   ├── services/               # Experience atmospheric imagery
│   │   ├── about/                  # Lead photographer portrait
│   │   └── testimonials/           # Couple preview thumbnails
│   └── favicon.ico
├── PRD.md                          # Phase 1 Product Requirements Document
└── TRD.md                          # Phase 2 Technical Requirements Document
```

---

## 5. ROUTING ARCHITECTURE
### 5.1 Public Routes
| Route | Type | Render Strategy | Description |
| :--- | :--- | :--- | :--- |
| `/` | Page | Static / ISR | Flagship landing page (Hero $\rightarrow$ Stories $\rightarrow$ Services $\rightarrow$ About $\rightarrow$ WhatsApp). |
| `/portfolio` | Page | Static / ISR | Complete curated archive with category filtering. |
| `/portfolio/[slug]` | Dynamic Page | SSG (`generateStaticParams`) | Deep-dive story with narrative intro, venue metadata, and full photo gallery. |
| `/services` | Page | Static / ISR | Deep dive into the 3 bespoke experiences and coverage philosophy. |
| `/about` | Page | Static / ISR | Full biography, creative direction stance, and 4-step trust blueprint. |
| `/contact` | Page | Static / ISR | High-touch WhatsApp concierge + secondary private enquiry form. |
| `/sitemap.xml` | Route Handler | Dynamic XML | Auto-indexes all static pages and dynamic portfolio story URLs. |
| `/robots.txt` | Route Handler | Text | Declares crawl access and sitemap URL location. |

### 5.2 Dynamic Story Generation Pattern
```typescript
// app/portfolio/[slug]/page.tsx
import { portfolioStories } from "@/data/portfolio";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return portfolioStories.map((story) => ({
    slug: story.slug,
  }));
}
```

---

## 6. COMPONENT ARCHITECTURE & RESPONSIBILITY MATRIX
Every component possesses a single, unambiguous responsibility:

```
[ Layout Components ]
  ├── SiteHeader      -> Coordinates scroll state, glass blur effect, wraps Navbar
  ├── Navbar          -> Desktop link list, WhatsApp direct link, mobile drawer button
  ├── MobileNav       -> Focus-trapped, animated off-canvas drawer for mobile screens
  └── Footer          -> Copyright, brand statement, location tags, back-to-top

[ Hero Components ]
  ├── Hero            -> Section semantic wrapper, layout boundary (100svh)
  ├── HeroSlideshow   -> Preloads slide 0, manages active index state, handles 2-3s interval
  ├── HeroContent     -> Renders editorial title, subtitle, and primary CTA buttons
  └── HeroProgress    -> Renders linear progress bar and "01 / 06" counter

[ Portfolio Components ]
  ├── PortfolioSection-> Editorial grid container with asymmetrical layout
  ├── StoryCard       -> Image container with hover depth, couple names, venue, and year
  ├── PortfolioGrid   -> Filterable CSS grid for the archive page
  ├── StoryGallery    -> Dynamic editorial masonry/asymmetric flow for the [slug] page
  └── PortfolioLightbox-> Keyboard-navigable full-viewport modal with high-res zoom

[ UI & Motion Primitives ]
  ├── Button          -> Polymorphic (button or anchor), luxury styling variants
  ├── ImageWrapper    -> Encapsulates `next/image` with graceful shimmer/fade-in
  ├── TiltCard        -> Subtle 3D mouse-tracking transform for desktop
  └── FadeIn          -> Intersection-observer-driven opacity and y-offset reveal
```

---

## 7. SERVER VS. CLIENT COMPONENT STRATEGY
Strict rule: **"Server Components by default; Client Components only at the leaf nodes."**

### 7.1 Server Components (RSC)
* `app/page.tsx`
* `app/portfolio/page.tsx`
* `app/portfolio/[slug]/page.tsx`
* `app/services/page.tsx`
* `app/about/page.tsx`
* `app/contact/page.tsx`
* `components/layout/SiteHeader.tsx`
* `components/layout/Footer.tsx`
* `components/portfolio/PortfolioSection.tsx`
* `components/services/ServicesSection.tsx`
* `components/about/AboutSection.tsx`
* `components/testimonials/TestimonialsSection.tsx`

### 7.2 Client Components (`"use client"`)
Only components requiring DOM events, browser APIs, or React lifecycle state:
* `components/hero/HeroSlideshow.tsx` (Needs `setInterval`, `useState`, `AnimatePresence`)
* `components/layout/MobileNav.tsx` (Needs toggle state, escape key listener, scroll lock)
* `components/portfolio/PortfolioFilters.tsx` (Needs active filter state)
* `components/portfolio/PortfolioLightbox.tsx` (Needs keyboard events, full-screen portal)
* `components/contact/EnquiryForm.tsx` (Needs input change events and submission state)
* `components/motion/TiltCard.tsx` (Needs mouse move coordinate calculation)

---

## 8. DATA ARCHITECTURE
Data and presentation are strictly decoupled. Content resides in `/data/*.ts` using TypeScript interfaces.

### Data Flow Diagram:
```
/data/site.ts        \
/data/hero.ts         \
/data/portfolio.ts    ───>  Page (RSC)  ───>  Sub-Components (Props)
/data/services.ts     /
/data/about.ts       /
/data/testimonials.ts
```

---

## 9. IMAGE ARCHITECTURE & MODELS
Images are treated as first-class citizens with explicit focal coordinates, dimensions, and priority flags.

```typescript
// lib/types.ts
export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: "16:9" | "4:5" | "1:1" | "3:2";
  objectPosition?: string; // e.g. "center 30%" for optimal face cropping
  priority?: boolean;      // True for first hero slide and LCP candidates
  caption?: string;
};
```

---

## 10. PORTFOLIO DATA MODEL
```typescript
// data/portfolio.ts
import { ImageAsset } from "@/lib/types";

export type CelebrationCategory = 
  | "Palace Wedding" 
  | "Contemporary Urban" 
  | "Pre-Wedding Editorial" 
  | "Destination Celebration" 
  | "Fine Art Portraiture";

export type PortfolioStory = {
  id: string;
  slug: string;
  title: string;                 // e.g. "The Royal Courtyard"
  coupleNames: string;           // e.g. "Ananya & Arjun"
  category: CelebrationCategory;
  location: string;              // e.g. "Fairmont, Jaipur"
  city: string;                  // e.g. "Jaipur"
  stateOrRegion: string;         // e.g. "Rajasthan"
  year: string;                  // e.g. "2025"
  coverImage: ImageAsset;
  heroHeadline?: string;
  excerpt: string;               // 1-2 sentence preview for cards
  narrative: string[];           // 2-3 poetic editorial paragraphs
  gallery: ImageAsset[];         // 8-16 high-res images in rhythm
  featured: boolean;             // True for homepage editorial display
  stats?: {
    days?: string;               // e.g. "3 Days"
    rituals?: string[];          // ["Haldi", "Sangeet", "Pheras"]
  };
};
```

---

## 11. SERVICES DATA MODEL
```typescript
// data/services.ts
import { ImageAsset } from "@/lib/types";

export type ServiceExperience = {
  id: string;
  slug: string;
  title: string;                 // e.g. "The Wedding Archive"
  subtitle: string;              // e.g. "Multi-Day Heritage Celebrations"
  overview: string;              // Experiential description
  philosophyQuote: string;
  coverImage: ImageAsset;
  coverageFeatures: string[];    // Deliverables & coverage points
  idealFor: string;
  inquiryPrompt: string;         // Context for WhatsApp prefill
};
```

---

## 12. TESTIMONIALS DATA MODEL
```typescript
// data/testimonials.ts
import { ImageAsset } from "@/lib/types";

export type Testimonial = {
  id: string;
  coupleNames: string;           // e.g. "Meera & Siddharth"
  celebrationType: string;       // e.g. "Palace Wedding"
  venue: string;                 // e.g. "The Leela Palace, Udaipur"
  quote: string;                 // Authentic emotional reflection
  highlightWords: string;        // For editorial pull-quote typography
  couplePhoto?: ImageAsset;
  featured: boolean;
};
```

---

## 13. PHOTOGRAPHER & STUDIO DATA MODEL
```typescript
// data/about.ts
import { ImageAsset } from "@/lib/types";

export type PhotographerProfile = {
  studioName: string;
  artistName: string;
  role: string;
  portrait: ImageAsset;
  signatureQuote: string;
  biography: string[];
  pillars: {
    title: string;
    description: string;
  }[];
  methodologySteps: {
    stepNumber: string;          // "01", "02", "03", "04"
    title: string;
    summary: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
};
```

---

## 14. WHATSAPP ARCHITECTURE
WhatsApp operates as the primary commercial conversion funnel.

### 14.1 Dynamic Link Generator
```typescript
// lib/whatsapp.ts
export type WhatsAppInquiryParams = {
  category?: string;
  storyTitle?: string;
  location?: string;
  customMessage?: string;
};

export function createWhatsAppLink(params?: WhatsAppInquiryParams): string {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, "");

  let message = "Hello! I am exploring your photography studio and would love to enquire about availability.";

  if (params?.storyTitle) {
    message = `Hello! I just viewed the "${params.storyTitle}" celebration in ${params.location || "your portfolio"} on your website. I love your visual style and would like to enquire about my upcoming event.`;
  } else if (params?.category) {
    message = `Hello! I am reviewing your "${params.category}" experience on your website and would love to check availability and details.`;
  } else if (params?.customMessage) {
    message = params.customMessage;
  }

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}
```

---

## 15. CONTACT FORM ARCHITECTURE
A lightweight, high-trust dual-path system:
1. **Direct Path:** WhatsApp Quick Action (1-click launch).
2. **Consultation Path:** Multi-field structured form.

### Form Architecture Pipeline:
```
[ User Input ]
     │
     ▼
[ Client-Side Validation ] (Zod / React Hook Form lightweight schema)
     │
     ▼
[ Next.js Server Action ] (`app/actions/enquire.ts`)
     │
     ▼
[ Sanitization & Rate Limiting ]
     │
     ▼
[ Future Destination ] (Database queue / Resend email notification / Admin webhook)
```

---

## 16. FUTURE SUPABASE ARCHITECTURE (POST-PHASE 3)
Designed for frictionless drop-in replacement when moving from static TypeScript data to a managed database:

```sql
-- Conceptual Relational Schema
CREATE TABLE portfolio_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  couple_names TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  city TEXT NOT NULL,
  year TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  narrative TEXT[] NOT NULL,
  cover_image JSONB NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID REFERENCES portfolio_stories(id) ON DELETE CASCADE,
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  width INT NOT NULL,
  height INT NOT NULL,
  object_position TEXT DEFAULT 'center center',
  sort_order INT DEFAULT 0
);

CREATE TABLE client_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone_whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE,
  location TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 17. DESIGN TOKEN ARCHITECTURE
Tokens are declared as CSS custom properties in `globals.css` and mapped into `tailwind.config.ts`.

### 17.1 Color Tokens
```css
:root {
  /* Canvas & Surfaces */
  --bg-warm-white: #FAF8F5;
  --bg-ivory: #F4EFEB;
  --bg-sandstone: #EADCC9;
  
  /* Accents */
  --accent-peach: #F7E7DC;
  --accent-champagne: #DFD3C3;
  --accent-gold: #B89762;
  
  /* Text & Contrast */
  --text-espresso: #2C2523;
  --text-muted: #6B5E5B;
  --text-subtle: #9C8E8B;
  
  /* Borders */
  --border-subtle: rgba(44, 37, 35, 0.08);
  --border-accent: rgba(184, 151, 98, 0.25);
}
```

### 17.2 Typography Tokens
* `--font-serif`: High-editorial serif (`Cormorant Garamond` / `Playfair Display`).
* `--font-sans`: Refined geometric sans (`Plus Jakarta Sans` / `Inter`).

---

## 18. MOTION ARCHITECTURE
Built on top of Framer Motion with centralized cubic-bezier timing curves:

### 18.1 Standard Curves & Timings
```typescript
// lib/motion.ts
export const luxuryEase = [0.16, 1, 0.3, 1]; // Quintic out for smooth gliding
export const slowFade = {
  duration: 0.9,
  ease: luxuryEase,
};
export const staggerChildren = {
  staggerChildren: 0.12,
  delayChildren: 0.2,
};
```

### 18.2 Reduced Motion Fallback
All motion components wrap within:
```typescript
const shouldReduceMotion = useReducedMotion();
// If true, duration is set to 0.01s with opacity-only transitions
```

---

## 19. 3D & SPATIAL DEPTH ARCHITECTURE
* **No Heavy WebGL:** Avoids the multi-megabyte bundle overhead of Three.js.
* **Pure CSS 3D Perspective:**
  * Container: `perspective: 1200px;`
  * Card Elements: `transform-style: preserve-3d;`
  * Parallax Layers: Multi-plane `translateZ()` combined with Framer Motion `useScroll()` and `useTransform()`.
  * Pointer Tilt: Desktop-only `onMouseMove` calculation mapping mouse position to $\pm 2^\circ$ rotation ($RX, RY$).

---

## 20. RESPONSIVE ARCHITECTURE
* **Device Breakpoints:**
  * `sm`: 640px (Large phones)
  * `md`: 768px (Tablets)
  * `lg`: 1024px (Laptops)
  * `xl`: 1280px (Desktop)
  * `2xl`: 1536px (Ultrawide)
* **Mobile-First UX Rules:**
  * `100svh` hero height prevents dynamic address-bar resizing jumps.
  * Bottom floating bar on mobile screens providing an instant WhatsApp CTA.
  * Desktop-only tilt effects are disabled on touch devices (`@media (hover: hover)`).

---

## 21. SEO & SEARCH DISCOVERY ARCHITECTURE
* **Metadata API:** Dynamic `generateMetadata()` per story page generating open-graph image tags and descriptions.
* **JSON-LD Schema Integration:**
  * Homepage: `LocalBusiness` / `PhotographyStudio` schema.
  * Portfolio: `ImageGallery` schema.
* **Canonical URL Enforcement:** Strict canonical tags using `metadataBase`.

---

## 22. ACCESSIBILITY (a11y) ARCHITECTURE
* **WCAG 2.1 AA Compliance:**
  * Contrast check: `#2C2523` on `#FAF8F5` yields `13.8:1` (far exceeds the required 4.5:1).
  * High-contrast focus rings: `focus-visible:ring-2 focus-visible:ring-[#B89762]`.
  * Screen-reader text (`sr-only`) on icon-only buttons.
  * Keyboard navigation for hero carousel with arrow keys and aria-live announcements.

---

## 23. PERFORMANCE BUDGETS & TARGETS
* **Core Web Vitals Thresholds:**
  * **LCP (Largest Contentful Paint):** $\le 1.8\text{s}$ (Hero image preloaded with `priority`).
  * **FID / INP (Interaction to Next Paint):** $\le 100\text{ms}$.
  * **CLS (Cumulative Layout Shift):** $\le 0.05$ (Rigid aspect ratio containers on all images).
* **Bundle Budget:** First load JS shared by all pages $\le 85\text{kB}$.

---

## 24. ERROR HANDLING & RESILIENCE
* **`app/not-found.tsx`:** Custom luxury 404 page redirecting back to `/portfolio` or `/`.
* **Missing Slug Handling:** Safe fallback in `portfolio/[slug]` executing `notFound()` if slug does not match.
* **Missing Image Handling:** Next.js Image fallback with blur-up placeholder shimmer.
* **Empty State Grace:** Portfolio and Testimonials components support clean zero-data render without crashing.

---

## 25. ENVIRONMENT CONFIGURATION
```env
# Public Client Variables
NEXT_PUBLIC_SITE_URL=https://luxuryindianphotography.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

# Future Private Server Variables (Do NOT expose on client)
# SUPABASE_URL=
# SUPABASE_ANON_KEY=
# RESEND_API_KEY=
```
*Rule:* No secret API keys committed to git; all variables documented in `.env.example`.

---

## 26. SECURITY SPECIFICATIONS
* No `dangerouslySetInnerHTML` permitted.
* All user input sanitized via validation schemas prior to any processing.
* Security headers configured via `next.config.js`:
  * `Content-Security-Policy`
  * `X-Frame-Options: DENY`
  * `X-Content-Type-Options: nosniff`
  * `Referrer-Policy: strict-origin-when-cross-origin`

---

## 27. DEPENDENCY STRATEGY
Strictly curated, lightweight dependency manifest:
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.2.0",
    "lucide-react": "^0.395.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```
*Rule:* Zero unvetted third-party packages.

---

## 28. NON-FUNCTIONAL REQUIREMENTS MATRIX
| Category | Requirement | Verification Method |
| :--- | :--- | :--- |
| **Performance** | Lighthouse Performance Score $\ge 90$ | Automated Lighthouse CLI |
| **Accessibility** | Lighthouse a11y Score $\ge 95$ | Axe DevTools / Lighthouse |
| **Maintainability** | TypeScript Strict Mode (`strict: true`) | `tsc --noEmit` build step |
| **Responsiveness** | Seamless rendering across 320px to 2560px | Responsive visual audit |
| **Decoupling** | 100% data isolated from UI components | Code review of `/components` |

---

## 29. FUTURE SCALABILITY BLUEPRINT
* **CMS Transition:** Static imports from `data/*.ts` can be replaced with async fetchers `getPortfolioStories()` querying Supabase or Sanity without changing any component JSX.
* **Client Proofing Area:** Ready for `/client-portal/[token]` routing.
* **International Currency:** Formatters prepared for INR ₹ and USD $.

---

## 30. DEVELOPMENT RULES FOR ALL SUBSEQUENT PHASES
1. **Never hardcode content in components.** All text, imagery, and links must originate from `/data` or props.
2. **Preserve Server Component boundaries.** Do not add `"use client"` unless DOM hooks or events are necessary.
3. **Always use Next.js `Image`.** Never use raw `<img>` tags. Always supply `alt`, `width`, and `height`.
4. **Enforce luxury color palettes.** No pure black (`#000000`) or cold hospital white (`#FFFFFF`). Use `--bg-warm-white` and `--text-espresso`.
5. **No fake vanity claims.** Keep awards and stats strictly modular and data-backed.
6. **No heavy 3D bundles.** Stick to CSS 3D transforms and Framer Motion.

---

## 31. FINAL ARCHITECTURAL VALIDATION CHECKLIST
- [x] **Premium full-screen hero:** 100svh container with absolute layered layout.
- [x] **2–3 second hero slideshow:** Framer Motion timer-driven crossfade architecture.
- [x] **Indian photography focus:** Aspect ratios, high-res optimization, and authentic metadata schemas.
- [x] **Large editorial typography:** Scaled display serif tokens with tracking.
- [x] **White + peach luxury design:** Custom Tailwind tokens and CSS variables.
- [x] **Portfolio galleries & Dynamic routes:** `/portfolio` archive + `/portfolio/[slug]` SSG.
- [x] **Services, About, Testimonials:** Dedicated data models and component layers.
- [x] **WhatsApp CTA:** Centralized dynamic URL generator with contextual message passing.
- [x] **Contact form:** Structured schema, client validation, and server action readiness.
- [x] **Subtle 3D depth:** CSS perspective, mouse tilt, and scroll-bound parallax.
- [x] **Framer Motion system:** Reusable motion primitives with reduced-motion fallbacks.
- [x] **Responsive design:** Mobile-first layout with dedicated touch adaptations.
- [x] **SEO & Accessibility:** JSON-LD schema, metadata API, and WCAG AA contrast.
- [x] **Future Supabase & CMS integration:** Decoupled data layer and relational schema ready.

---
*End of Phase 2 Technical Requirements Document.*
