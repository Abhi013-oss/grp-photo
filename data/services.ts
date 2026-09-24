import { ServiceOffering, ExperiencePillar, ProcessStep } from "@/lib/types";

export const servicesData: ServiceOffering[] = [
  {
    id: "service-weddings",
    slug: "wedding-photography",
    number: "01",
    title: "WEDDING PHOTOGRAPHY",
    shortDescription:
      "From intimate rituals to grand celebrations, meaningful moments are documented with a natural and timeless approach.",
    description:
      "From intimate rituals to grand celebrations, meaningful moments are documented with a natural and timeless approach. We focus on genuine connections, sacred traditions, and unscripted emotions throughout your celebration day.",
    image: {
      src: "/images/photo-1583939003579-730e3918a45a.jpg",
      alt: "Wedding celebration couple in traditional attire",
      width: 1800,
      height: 1200,
      objectPosition: "center 28%",
    },
    category: "Weddings",
    features: [
      "Comprehensive wedding day documentation",
      "Unobtrusive approach preserving genuine family moments",
      "Natural couple portraiture with gentle guidance",
      "Timeless, natural color grading and professional post-processing",
      "High-resolution digital collection curated for your keepsakes",
    ],
    relatedStorySlugs: ["weddings"],
    inquiryPrompt:
      "Hello Guri Rupal Photography, I would like to enquire about your wedding photography services.",
  },
  {
    id: "service-pre-weddings",
    slug: "pre-wedding-photography",
    number: "02",
    title: "PRE-WEDDING PHOTOGRAPHY",
    shortDescription:
      "Couple portraits and stories captured in a relaxed, expressive and visually beautiful way.",
    description:
      "Couple portraits and stories captured in a relaxed, expressive and visually beautiful way. Designed around your personal dynamic, natural daylight, and meaningful locations.",
    image: {
      src: "/images/photo-1545232979-8bf68ee9b1af.jpg",
      alt: "Couple during warm golden hour pre-wedding photography session",
      width: 1800,
      height: 1200,
      objectPosition: "center 30%",
    },
    category: "Pre-Weddings",
    features: [
      "Creative consultation and session planning",
      "Relaxed, movement-focused directing for natural spontaneity",
      "Carefully chosen daylight locations and scenic settings",
      "Curated high-resolution imagery designed for invitations and albums",
    ],
    relatedStorySlugs: ["pre-weddings"],
    inquiryPrompt:
      "Hello Guri Rupal Photography, I would like to enquire about pre-wedding photography sessions.",
  },
  {
    id: "service-cinematic-films",
    slug: "cinematic-wedding-films",
    number: "03",
    title: "CINEMATIC WEDDING FILMS",
    shortDescription:
      "Emotional visual storytelling that preserves the atmosphere, people and moments of your celebration.",
    description:
      "Emotional visual storytelling that preserves the atmosphere, people and moments of your celebration. Crafted with cinematic depth, natural soundscapes, and timeless pacing.",
    image: {
      src: "/images/pro-destination-lake-palace-udaipur.jpg",
      alt: "Celebration setting for cinematic wedding film documentation",
      width: 1800,
      height: 1200,
      objectPosition: "center 40%",
    },
    category: "Weddings",
    features: [
      "Cinematic highlight films and celebration features",
      "Careful capture of ambient vows, speeches, and music",
      "Artful cinematic composition and professional color grading",
      "Seamless integration alongside the photography team",
    ],
    relatedStorySlugs: ["weddings"],
    inquiryPrompt:
      "Hello Guri Rupal Photography, I would like to enquire about cinematic wedding films.",
  },
  {
    id: "service-event-celebration",
    slug: "event-celebration-photography",
    number: "04",
    title: "EVENT & CELEBRATION PHOTOGRAPHY",
    shortDescription:
      "Professional photography for engagements, birthdays, family celebrations and other meaningful occasions.",
    description:
      "Professional photography for engagements, birthdays, family celebrations and other meaningful occasions. Documenting the joy and togetherness of the milestones that matter most.",
    image: {
      src: "/images/pro-celebration-sangeet-energy.jpg",
      alt: "Event and celebration photography capturing joyful moments",
      width: 1800,
      height: 1200,
      objectPosition: "center center",
    },
    category: "Celebrations",
    features: [
      "Photography coverage for engagements, anniversaries, and family milestones",
      "Candid documentation of guests, family interactions, and decor",
      "High-resolution digital delivery with complete retouching",
      "Professional and reliable service for occasions of every scale",
    ],
    relatedStorySlugs: ["engagements", "celebrations"],
    inquiryPrompt:
      "Hello Guri Rupal Photography, I would like to enquire about event and celebration photography.",
  },
];

export const experiencePillars: ExperiencePillar[] = [
  {
    keyword: "OBSERVE",
    title: "Notice the Quiet and Unscripted",
    description:
      "We watch for real moments happening naturally—a shared glance between loved ones, spontaneous laughter, and the quiet dignity of family traditions.",
    image: {
      src: "/images/photo-1606800052052-a08af7148866.jpg",
      alt: "Hands joined during celebration prayer and ritual",
    },
  },
  {
    keyword: "CONNECT",
    title: "Comfort Over Performance",
    description:
      "We believe that when people feel relaxed and unhurried, their genuine grace emerges effortlessly without rigid posing or awkward choreography.",
    image: {
      src: "/images/pro-couple-royal-wedding-portrait.jpg",
      alt: "Couple sharing a serene, unscripted moment",
    },
  },
  {
    keyword: "COMPOSE",
    title: "Light and Atmosphere in Harmony",
    description:
      "We use natural daylight, architectural symmetry, and ambient warmth to create photographs that feel authentic, balanced, and timeless.",
    image: {
      src: "/images/pro-destination-lake-palace-udaipur.jpg",
      alt: "Lakeside architectural setting in soft golden daylight",
    },
  },
  {
    keyword: "PRESERVE",
    title: "Art That Outlives the Celebration",
    description:
      "Every frame is edited to a natural, timeless palette that you can return to for years to come without feeling tied to fleeting trends.",
    image: {
      src: "/images/pro-bride-regal-maroon-sabyasachi.jpg",
      alt: "Timeless bridal portrait preserving delicate details",
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "CONNECT",
    description:
      "Understand your vision, event and the moments that matter most to you.",
    image: {
      src: "/images/pro-destination-jaipur-courtyard.jpg",
      alt: "Initial consultation and discussion in natural daylight",
    },
  },
  {
    stepNumber: "02",
    title: "PLAN",
    description:
      "Discuss the photography approach, schedule and important details before the event.",
    image: {
      src: "/images/pro-destination-amber-corridors.jpg",
      alt: "Planning the photography approach and celebration timeline",
    },
  },
  {
    stepNumber: "03",
    title: "CAPTURE",
    description:
      "Document the emotions, people and moments naturally throughout the celebration.",
    image: {
      src: "/images/pro-ceremony-pheras-mandap.jpg",
      alt: "Documenting authentic moments and rituals throughout the celebration",
    },
  },
  {
    stepNumber: "04",
    title: "DELIVER",
    description:
      "Turn those moments into photographs you can revisit and treasure.",
    image: {
      src: "/images/pro-bride-yellow-maroon-lehenga.jpg",
      alt: "Delivering timeless photographs to revisit and treasure",
    },
  },
];
