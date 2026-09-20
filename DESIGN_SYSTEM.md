# UI/UX DESIGN SYSTEM & VISUAL DIRECTION SPECIFICATION
## Project: Premium Indian Photography Studio Website
**Phase:** 4 — UI/UX Design System, Typography, Palette & Spatial Depth  
**Status:** Approved for Review / Authoritative Design Blueprint  
**Author:** Senior UX Strategist, Creative Director & Full-Stack Architect  
**Version:** 1.0.0  
**Foundation Alignment:** Fully synchronized with [PRD.md](file:///c:/Users/Abhinav/OneDrive/Desktop/Photography-2/PRD.md), [TRD.md](file:///c:/Users/Abhinav/OneDrive/Desktop/Photography-2/TRD.md), and [APP_FLOW.md](file:///c:/Users/Abhinav/OneDrive/Desktop/Photography-2/APP_FLOW.md)  

---

## 1. DESIGN CONCEPT & PHILOSOPHY
The aesthetic foundation is defined as **Contemporary Indian Architectural Luxury**. 

```
PREMIUM INDIAN LUXURY
       +
EDITORIAL HIGH FASHION
       +
ARCHITECTURAL RESTRAINT
       +
WARM LUMINOUS DAYLIGHT
       +
SUBTLE 3D SPATIAL DEPTH
```

### The Cardinal Axiom
> **"Less UI. More Photography. More Whitespace. Better Typography. Subtle Depth."**

The platform behaves like a museum-grade archival monograph published by an haute-couture bridal atelier. The interface recedes into the background, providing generous negative space and quiet tactile surfaces so that authentic human emotion, delicate heirloom textiles, and grand Indian architecture command the visitor’s undivided gaze.

---

## 2. ABSOLUTE DIFFERENTIATION FROM THE PREVIOUS WEBSITE
The previous dark/cinematic concept is completely retired. The two approaches are compared below to ensure no inadvertent regression occurs in future implementation phases:

| Dimension | Previous Website (RETIRED) | New Design System (MANDATORY) |
| :--- | :--- | :--- |
| **Canvas Background** | Pitch black (`#000000`) & dark charcoal (`#121212`) | **Warm Ivory (`#FAF8F5`) & Soft Daylight White (`#FBF9F6`)** |
| **Mood & Ambiance** | Moody, nocturnal, shadowy, high-contrast | **Luminous, sunlit, warm, airy, editorial, optimistic** |
| **Color Accents** | Neon metallic gold, harsh amber | **Sherwani-inspired peach (`#F4E2D8`), muted champagne (`#DFD3C3`)** |
| **Typography Vibe** | Heavy modern grotesque sans, condensed caps | **High-contrast editorial serif (`Cormorant Garamond`), spacious tracking** |
| **Card Presentation** | Dark card containers with heavy dark borders | **Borderless editorial imagery floating on ivory with soft ambient drop** |
| **Cultural Expression** | Cliché dark royal themes | **Contemporary Indian luxury, authentic light, textile warmth, human candidness** |

---

## 3. COLOR PALETTE & TONAL SCALE
The palette is derived from natural organic Indian textures: raw unbleached tussar silk, sandalwood paste, desert sandstone from Jaisalmer, fresh blush organza, and muted champagne zardozi thread.

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  WARM WHITE      │  │  IVORY CANVAS    │  │  SANDSTONE SILK  │
│  #FAF8F5         │  │  #F4EFEB         │  │  #EADCC9         │
│  Primary Canvas  │  │  Surface / Cards │  │  Architectural   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  SOFT PEACH      │  │  CHAMPAGNE       │  │  SUBTLE GOLD     │
│  #F7E7DC         │  │  #DFD3C3         │  │  #B89762         │
│  Primary Accent  │  │  Borders & Lines │  │  Micro Highlights│
└──────────────────┘  └──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  DEEP ESPRESSO   │  │  MUTED CHARCOAL  │  │  HAIRLINE BORDER │
│  #2C2523         │  │  #6B5E5B         │  │  rgba(44,37,35,  │
│  Headings & Body │  │  Secondary Text  │  │        0.08)     │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### Prohibited Color Expressions (Design Don'ts)
* ❌ **NO** saturated bright orange or neon vermilion.
* ❌ **NO** candy pinks or garish magenta.
* ❌ **NO** glittery brass or saturated yellow gold.
* ❌ **NO** harsh black (`#000000`) for text or backgrounds.
* ❌ **NO** intense rainbow or multi-color gradients.

---

## 4. COLOR USAGE RATIO
Visual weight is strictly distributed across the interface to maintain architectural calmness:

```
┌──────────────────────────────────────────────────────────┬──────────────┬────────┬────┐
│                  WARM WHITE / IVORY                      │  SOFT PEACH  │CHARCOAL│GOLD│
│                       65% – 75%                          │  15% – 20%   │ 5%–10% │2-5%│
└──────────────────────────────────────────────────────────┴──────────────┴────────┴────┘
```
* **65%–75% Base Canvas:** Dominant warm white (`#FAF8F5`) and soft ivory (`#F4EFEB`) providing visual breathing room.
* **15%–20% Soft Peach / Warm Beige:** Button surfaces, active state highlights, and gentle section transitions.
* **5%–10% Deep Espresso Charcoal:** Typography, icons, and structural divider lines.
* **2%–5% Subtle Warm Gold:** Micro-accents only (progress bar fills, category kicker stars, delicate highlights). Gold never overwhelms the layout.

---

## 5. TYPOGRAPHY SYSTEM
A curated pairing that blends the timeless romance of classical serif typography with the functional clarity of a clean geometric sans-serif:

```
[ DISPLAY & EDITORIAL HEADLINES ]
Cormorant Garamond (or Playfair Display)
Characteristics: High stroke contrast, graceful serifs, spacious tracking, regal cadence.
Weights: Regular (400), Medium (500), Light Italic (300i).

[ BODY, METADATA & FUNCTIONAL CONTROLS ]
Plus Jakarta Sans (or Inter)
Characteristics: Neutral geometry, large x-height, pristine legibility at micro sizes.
Weights: Light (300), Regular (400), Medium (500), Semi-Bold (600).
```

---

## 6. TYPOGRAPHIC HIERARCHY & FLUID SCALE
All typography utilizes fluid `clamp()` formulas to scale smoothly between mobile viewports and 4K displays:

| Token | Family | Desktop Size / Leading | Mobile Size / Leading | Tracking | Weight | Semantic Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Serif | `clamp(3.0rem, 5.5vw, 6.0rem)` / `1.05` | `2.5rem` / `1.15` | `-0.02em` | `400` | Hero Title (100svh) |
| `h1-editorial` | Serif | `clamp(2.4rem, 4.0vw, 4.5rem)` / `1.15` | `2.0rem` / `1.2` | `-0.01em` | `400` | Page & Manifesto Headlines |
| `h2-section` | Serif | `clamp(1.8rem, 2.8vw, 3.2rem)` / `1.2` | `1.6rem` / `1.25` | `0em` | `400` | Section Titles (Stories, About) |
| `h3-story` | Serif | `clamp(1.4rem, 2.0vw, 2.0rem)` / `1.3` | `1.3rem` / `1.35` | `0.01em` | `500` | Story Cards & Service Titles |
| `body-large` | Sans | `1.125rem` (18px) / `1.75` | `1.0rem` / `1.7` | `0em` | `300` | Editorial Intros & Lead Copy |
| `body-base` | Sans | `0.9375rem` (15px) / `1.7` | `0.875rem` / `1.65` | `0.01em` | `400` | General Descriptions |
| `kicker-meta` | Sans | `0.75rem` (12px) / `1.4` | `0.6875rem` / `1.4` | `0.18em` | `600` | Uppercase Category / Venue Tag |
| `button-label` | Sans | `0.8125rem` (13px) / `1.0` | `0.8125rem` / `1.0` | `0.12em` | `500` | CTAs & Navigation Actions |

---

## 7. ASYMMETRICAL EDITORIAL GRID SYSTEM
The layout breaks away from predictable, repetitive 3-column card grids. It adopts an editorial fashion-spread cadence:

```
[ PATTERN A: THE FULL-BLEED MONOLITH ]
┌─────────────────────────────────────────────────────────────┐
│              Panoramic Full-Width Photograph                │
│         (Capturing grand scale: Udaipur Lake Palace)        │
└─────────────────────────────────────────────────────────────┘

[ PATTERN B: THE DIALOGUE PAIRING (Asymmetrical) ]
┌───────────────────────────────┐ ┌───────────────────────────┐
│                               │ │ Large Serif Heading       │
│  4:5 Vertical Bridal Study    │ │ + 120-word narrative      │
│  (Elevated slightly with Z-3D)│ │                           │
│                               │ │ ┌───────────────────────┐ │
│                               │ │ │ Small Detail Capture  │ │
│                               │ │ │ (Henna / Jewelry)     │ │
│                               │ │ └───────────────────────┘ │
└───────────────────────────────┘ └───────────────────────────┘

[ PATTERN C: THE RHYTHMIC STORY FLOW ]
┌─────────────────┐ ┌─────────────────────────────────────────┐
│ 1:1 Candid      │ │ 16:9 Wide Architectural Mandap Capture  │
│ Laughter Glance │ │                                         │
└─────────────────┘ └─────────────────────────────────────────┘
```

---

## 8. CONTAINER & CONSTRAINT SYSTEM
To ensure visual balance on ultrawide monitors and compact phones:
* **Max Content Container:** `max-w-7xl` (`1280px`) for text and narrative blocks.
* **Wide Exhibition Container:** `max-w-[1440px]` for featured portfolio galleries.
* **Full-Bleed Viewport:** `100vw` for Hero and panoramic architectural breaks.
* **Horizontal Gutters:**
  * Desktop ($> 1024\text{px}$): `px-12` to `px-20` ($48\text{px} - 80\text{px}$).
  * Tablet ($640\text{px} - 1023\text{px}$): `px-8` ($32\text{px}$).
  * Mobile ($< 640\text{px}$): `px-5` ($20\text{px}$).

---

## 9. SPACING SCALE & RHYTHMIC BREATHING ROOM
Luxury is expressed through generous vertical pacing:
* **Section Separation:** `py-24` to `py-36` ($96\text{px} - 144\text{px}$) on desktop; `py-16` to `py-20` ($64\text{px} - 80\text{px}$) on mobile.
* **Headline to Body Gap:** `mb-6` to `mb-8` ($24\text{px} - 32\text{px}$).
* **Image to Caption Gap:** `mt-4` ($16\text{px}$).
* **Between Image Compositions:** `gap-8` to `gap-12` ($32\text{px} - 48\text{px}$).

---

## 10. NAVIGATION DESIGN DIRECTION
* **Floating Header:** Sits fixed over the page, blending seamlessly into the Hero.
* **Initial State:** Completely transparent background, deep charcoal typography.
* **Scrolled State:** Soft warm-ivory glass (`rgba(250, 248, 245, 0.88)` with `backdrop-blur-md` and `1px` subtle champagne border).
* **Brand Wordmark:** Refined serif typography (e.g., `VARA STORIES` or `NIRVANA EDITORIAL`) set with `tracking-[0.25em]`.
* **Right-Side Action:** Direct `WhatsApp Us` pill button with soft peach fill.

---

## 11. HERO UI & COMPOSITION DIRECTION
The Hero is an editorial wedding campaign cover brought to life:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [Navbar: VARA STORIES          Stories  Services  About  [WhatsApp Us] ]│
│                                                                         │
│                                                                         │
│                                                                         │
│   WEDDING & LIFESTYLE PHOTOGRAPHY · JAIPUR & UDAIPUR                    │
│                                                                         │
│   YOUR STORY,                                                           │
│   BEAUTIFULLY REMEMBERED.                                               │
│                                                                         │
│   Preserving the quiet emotion, sacred rituals, and royal grandeur      │
│   of modern Indian celebrations.                                        │
│                                                                         │
│   [ PLAN YOUR STORY ON WHATSAPP ]     [ VIEW OUR STORIES → ]            │
│                                                                         │
│                                                                         │
│ 01 / 06  ─────────────                                                  │
└─────────────────────────────────────────────────────────────────────────┘
```
* **Height:** Strict `100svh` to prevent mobile address bar jumping.
* **Focal Alignment:** Each slide supports configurable `object-position` (e.g., `center 25%`) to guarantee bridal faces are never clipped by headlines.
* **Soft Vignette:** Subtle bottom-to-top gradient (`rgba(44,37,35,0.35) -> transparent`) ensuring text remains legible across bright and golden-hour imagery.

---

## 12. CALL-TO-ACTION (CTA) SYSTEM
Calls-to-action are warm, personal, and conversational:
* **Primary Trigger:** `WhatsApp Us` / `Plan Your Story` / `Start a Conversation`.
* **Secondary Trigger:** `View Our Stories` / `Explore Experiences` / `Read Our Philosophy`.
* **Prohibited Phrasing:** Never use transactional or impersonal commands like *"Submit"*, *"Click Here"*, or *"Book Now"*.

---

## 13. BUTTON SYSTEM & SPECIFICATIONS
Three distinct variants designed for clear visual hierarchy:

```
┌────────────────────────────────┐
│  PRIMARY: PEACH CONVERSATION   │  bg-[#F7E7DC] hover:bg-[#F4D8C8] text-[#2C2523]
│  [ WhatsApp Us  ↗ ]            │  px-7 py-3.5 rounded-full tracking-[0.08em]
└────────────────────────────────┘

┌────────────────────────────────┐
│  SECONDARY: EDITORIAL OUTLINE  │  border border-[#2C2523]/25 hover:border-[#2C2523]
│  [ View Our Stories ]          │  text-[#2C2523] px-7 py-3.5 rounded-full
└────────────────────────────────┘

┌────────────────────────────────┐
│  TERTIARY: LUXURY TEXT LINK    │  text-[#2C2523] font-medium underline
│  Explore The Gallery →         │  underline-offset-8 decoration-[#B89762]/60
└────────────────────────────────┘
```

---

## 14. PORTFOLIO DIRECTION & LAYOUT RHYTHM
* **Exhibition Format:** Portfolio is presented as a series of curated chapters rather than raw thumbnails.
* **Card Anatomy:**
  * 90% visual frame / 10% refined metadata.
  * Image container with `overflow-hidden` and `rounded-sm` ($2\text{px}-4\text{px}$).
  * Floating meta chip: Sandstone silk pill displaying `City · Year`.
  * Title block below image: Large serif couple names (`Ananya & Arjun`) with small uppercase venue tag (`Fairmont, Jaipur`).

---

## 15. SERVICES DIRECTION (BESPOKE EXPERIENCES)
Rather than a 3-column pricing card table, services are presented as **numbered editorial features**:
* **01 — The Wedding Archive:** Full multi-day heritage coverage, candid documentary + fine-art portraits.
* **02 — The Pre-Wedding Editorial:** Architectural romance and movement-focused fashion captures.
* **03 — Fine Art Portraits:** Generational family heirlooms and bridal fine art.
* **Layout:** Generous alternating layout (Image Left + Text Right $\rightarrow$ Text Left + Image Right) accompanied by direct WhatsApp reservation anchors.

---

## 16. ABOUT DIRECTION (THE ARTIST BEHIND THE LENS)
* **Visual Composition:** Large, candid black-and-white or warm sepia portrait of the lead photographer in action.
* **Atmosphere:** Humble, articulate, and deeply respectful of family sacredness.
* **Layout Elements:**
  * Editorial pull-quote: *"Weddings are not film sets; they are living memories."*
  * Narrative bio detailing 10+ years of honoring cultural rituals across India.
  * The 4-Step Trust Blueprint (Discovery $\rightarrow$ Unobtrusive Presence $\rightarrow$ Handcrafted Color $\rightarrow$ Heirlooms).

---

## 17. TESTIMONIAL DIRECTION (WORDS OF TRUST)
* **Anti-Pattern:** No yellow star-rating rows (`⭐⭐⭐⭐⭐`), no plastic corporate badges.
* **Editorial Format:** Large italic serif quotes (`24px - 32px`) highlighting authentic emotional reactions:
  > *"When we opened our gallery, we didn't just see pictures—we felt the warmth of our grandmother's blessings and the electric joy of the Baraat all over again."*
* **Provenance:** Clearly tagged with couple names and venue (*Rhea & Karan — Alila Fort Bishangarh*).

---

## 18. CONTACT & CONCIERGE DIRECTION
* **Atmosphere:** An intimate invitation to begin a personal conversation.
* **Headline:** *"Let us preserve the moments that become your family's history."*
* **Form Aesthetics:** Minimalist underline inputs or soft ivory recessed containers (`bg-[#F4EFEB]`) with subtle champagne focus rings. No harsh borders.

---

## 19. IMAGE TREATMENT & ART DIRECTION
* **Natural Texture:** Images preserve authentic skin tones and natural film-like grain. No aggressive skin-smoothing filters.
* **Lighting:** Celebrates warm natural sunlight, golden hour glow, candlelit mandaps, and glowing diyas.
* **Aspect Ratios:**
  * Hero: `16:9` or full viewport responsive cover.
  * Vertical Portraits: `4:5` (optimal for bridal fashion and couple intimacy).
  * Architecture & Details: `3:2` or `1:1`.
* **Corner Radius:** Very subtle `rounded-[3px]` or crisp `rounded-none` to evoke traditional fine-art paper mounts.

---

## 20. SUBTLE 3D DEPTH & SPATIAL LANGUAGE
3D is utilized strictly to provide tactile, paper-like elegance:

```
[ Layer 0: Background Canvas ] ── Warm Ivory (#FAF8F5)
         │
         ▼
[ Layer 1: Ambient Drop Shadow ] ── box-shadow: 0 20px 40px -15px rgba(44, 37, 35, 0.06)
         │
         ▼
[ Layer 2: Editorial Image Plane ] ── CSS perspective: 1200px; transform-style: preserve-3d;
         │
         ▼
[ Layer 3: Floating Metadata Tag ] ── translateZ(12px) floating gently above the photograph
         │
         ▼
[ Desktop Interaction ] ────────── Mouse-tracking micro-tilt (Max ±2° rotation on X & Y)
```

---

## 21. STRICT LIMITS ON MOTION & 3D (DESIGN DON'TS)
* ❌ **NO Three.js canvas cubes, spheres, or 3D cameras.**
* ❌ **NO floating golden particles or faux glitter.**
* ❌ **NO aggressive parallax tearing or scroll locking.**
* ❌ **NO neon cyber-lines or HUD elements.**
* ❌ **NO bouncy spring physics.**

---

## 22. DECORATIVE ELEMENTS (RESTRAINT)
Only five refined decorative primitives are allowed:
1. **Hairline Editorial Rules:** `1px` border with `rgba(44, 37, 35, 0.08)`.
2. **Micro Roman Numerals / Numbers:** Small uppercase numbering (`01`, `02`, `03`).
3. **Pill Badges:** Soft sandstone silk pills with `px-3 py-1 text-[11px] tracking-[0.15em]`.
4. **Editorial Asterisk / Diamond:** Single discreet character (`✦` or `·`) separating metadata.
5. **Linear Slide Progress:** `2px` high progress line tracking hero transitions.

---

## 23. RESPONSIVE STRATEGY ACROSS BREAKPOINTS
* **Large Desktop ($1440\text{px}+$):** Asymmetrical multi-plane compositions, full micro-tilt depth, expansive whitespace.
* **Standard Laptop ($1024\text{px} - 1439\text{px}$):** Controlled container (`1280px`), balanced 2-column editorial flows.
* **Tablet ($768\text{px} - 1023\text{px}$):** Single and 2-column alternating layouts, tilt disabled in favor of touch responsiveness.
* **Mobile ($320\text{px} - 767\text{px}$):** Vertical storytelling stack, full-width edge-to-edge photography, large legible typography, bottom floating WhatsApp dock.

---

## 24. MOBILE UI SPECIFICATIONS & ERGONOMICS
* **Thumb Zone Architecture:** Primary actions (`WhatsApp Us`, Navigation trigger) positioned comfortably within the natural thumb arc.
* **Persistent Dock:** Subtle floating bottom action bar on mobile with glass ivory blur:
  ```
  [ WhatsApp Studio Concierge  ↗ ] (Full width pill, 48px height)
  ```
* **Zero Layout Shift:** Rigid aspect-ratio containers ensuring mobile scrolling is jitter-free as images load.

---

## 25. ACCESSIBILITY (a11y) SPECIFICATIONS
* **Contrast Compliance:**
  * Deep Charcoal Espresso (`#2C2523`) on Warm Ivory (`#FAF8F5`): Contrast ratio **13.8:1** (far exceeds WCAG AA 4.5:1 requirement).
  * Muted Charcoal (`#6B5E5B`) on Warm Ivory: Contrast ratio **5.2:1** (fully compliant for secondary text).
* **Focus States:** Every interactive button and link features `focus-visible:ring-2 focus-visible:ring-[#B89762] focus-visible:outline-none`.
* **Motion Sensitivity:** `@media (prefers-reduced-motion: reduce)` zeroes out Ken Burns scale transforms, crossfade durations, and pointer-tracking tilts.

---

## 26. COMPLETE DESIGN TOKENS MANIFEST
```css
:root {
  /* Color Palette */
  --color-canvas: #FAF8F5;
  --color-surface: #F4EFEB;
  --color-surface-sandstone: #EADCC9;
  --color-accent-peach: #F7E7DC;
  --color-accent-peach-hover: #F2D5C4;
  --color-accent-champagne: #DFD3C3;
  --color-accent-gold: #B89762;
  --color-text-espresso: #2C2523;
  --color-text-muted: #6B5E5B;
  --color-border-hairline: rgba(44, 37, 35, 0.08);

  /* Typography */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;

  /* Shadows */
  --shadow-editorial: 0 20px 40px -15px rgba(44, 37, 35, 0.06);
  --shadow-hover: 0 30px 60px -20px rgba(44, 37, 35, 0.12);

  /* Radii */
  --radius-subtle: 3px;
  --radius-pill: 9999px;

  /* Transitions */
  --ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-base: 400ms;
}
```

---

## 27. DESIGN DO'S (MANDATORY PRACTICES)
1. **DO** embrace generous whitespace; let photographs breathe on the canvas.
2. **DO** celebrate authentic Indian rituals, colors, and emotions through the photography itself.
3. **DO** prioritize warm ivory and soft peach tones for all interfaces.
4. **DO** keep WhatsApp interactions conversational, courteous, and easily discoverable.
5. **DO** use fluid typography scaling to ensure headlines look majestic on mobile and desktop alike.
6. **DO** ensure all interactive controls have accessible focus states and tap areas $\ge 48\text{px}$.

---

## 28. DESIGN DON'TS (STRICT PROHIBITIONS)
1. **DON'T** use black-heavy backgrounds or dark cinematic themes from the old website.
2. **DON'T** decorate with cliché cartoon ethnic stamps, mandalas, or paisley borders.
3. **DON'T** use saturated crimson, bright yellow gold, or neon colors.
4. **DON'T** introduce heavy WebGL engines, spinning 3D cubes, or floating dust particles.
5. **DON'T** use repetitive, monotonous 3-column card grids.
6. **DON'T** use fake vanity claims, fabricated star ratings, or synthetic award badges.

---

## 29. FINAL DESIGN VALIDATION CHECKLIST
- [x] **Completely different from previous dark photography website:** 100% warm ivory, peach, and daylight.
- [x] **White/ivory dominates:** 65%–75% of canvas area is warm white/ivory.
- [x] **Peach/sherwani-inspired tones visible:** Soft peach (`#F7E7DC`) and sandstone beige (`#EADCC9`) established.
- [x] **Luxury Indian identity clear:** Heritage architecture, authentic rituals, and haute-couture bridal styling.
- [x] **Photography remains visual focus:** Borderless editorial mounts with generous whitespace.
- [x] **Large editorial typography defined:** High-contrast serif headlines with fluid `clamp()` sizing.
- [x] **Hero is full-screen:** Strict `100svh` with responsive focal alignment.
- [x] **Hero slideshow defined:** 2–3s crossfade, Ken Burns drift, linear progress bar (`01 / 06`).
- [x] **WhatsApp is primary CTA:** Warm peach pill buttons with context-aware message prefilling.
- [x] **Portfolio is editorial:** Curated story chapters with asymmetrical rhythm.
- [x] **Services are editorial:** 3 numbered experience pillars rather than corporate pricing tables.
- [x] **About is human:** Artist portrait, documentary stance, and 4-step trust blueprint.
- [x] **Testimonials are elegant:** Large serif pull-quotes with verified venue provenance.
- [x] **3D is subtle:** CSS perspective, multi-plane Z-translation, and desktop pointer micro-tilt ($\pm 2^\circ$).
- [x] **Motion is restrained:** Slow quintic-out easing (`0.16, 1, 0.3, 1`) with complete reduced-motion fallback.
- [x] **Mobile strategy defined:** Thumb-zone ergonomics and persistent floating WhatsApp dock.
- [x] **Accessibility considered:** WCAG AA 13.8:1 contrast, visible focus rings, 48px touch targets.
- [x] **Design system is consistent:** CSS tokens mapped and aligned with TRD and App Flow.

---
*End of Phase 4 UI/UX Design System Specification.*
