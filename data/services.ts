import { ServiceOffering, ExperiencePillar, ProcessStep } from "@/lib/types";

export const servicesData: ServiceOffering[] = [
  {
    id: "service-weddings",
    slug: "wedding-photography",
    number: "01",
    title: "The Wedding Archive",
    shortDescription:
      "Complete multi-day wedding storytelling covering the emotions, sacred rituals, family bonds, and atmosphere of your celebration.",
    description:
      "Your wedding isn't a single choreographed moment; it is hundreds of fleeting, unrepeatable glances unfolding around the people you love most. We approach your multi-day Indian wedding with a documentary spirit and high-fashion grace, capturing everything from quiet morning prayers to the electric euphoria of the midnight Baraat.",
    image: {
      src: "/images/photo-1583939003579-730e3918a45a.jpg",
      alt: "Couple standing in royal wedding attire inside palace courtyard",
      width: 1800,
      height: 1200,
      objectPosition: "center 28%",
    },
    category: "Weddings",
    features: [
      "Multi-day celebration coverage (Haldi, Mehndi, Sangeet, Pheras, Reception)",
      "Unobtrusive documentary team preserving natural family interactions",
      "Signature fine-art editorial portrait sessions during golden hour",
      "Archival color-grading respecting authentic Indian skin tones and silk textures",
      "Handcrafted private digital gallery & museum-grade heirloom album curation",
    ],
    relatedStorySlugs: ["ananya-arjun-udaipur", "meera-kabir-jaipur"],
    inquiryPrompt: "Hi, I am interested in discussing coverage for our upcoming wedding celebration.",
  },
  {
    id: "service-pre-weddings",
    slug: "pre-wedding-stories",
    number: "02",
    title: "Pre-Wedding Narratives",
    shortDescription:
      "Editorial couple sessions designed around your dynamic, architectural heritage, and natural golden-hour interaction.",
    description:
      "Before the whirlwind of your wedding days begins, the pre-wedding session is a relaxed creative interlude. Rather than stiff, artificial poses, we design a visual narrative that mirrors who you are—exploring historic havelis, sweeping sand dunes, or private estates with natural cinematic movement.",
    image: {
      src: "/images/photo-1545232979-8bf68ee9b1af.jpg",
      alt: "Pre-wedding couple embracing during warm sunset golden hour",
      width: 1800,
      height: 1200,
      objectPosition: "center 30%",
    },
    category: "Pre-Weddings",
    features: [
      "Dedicated creative consultation and location scouting",
      "Architectural and daylight-led composition tailored to couple styling",
      "Relaxed, movement-focused directing for natural spontaneity",
      "Curated editorial stills designed for celebration invitations and keepsakes",
    ],
    relatedStorySlugs: ["tara-aman-jodhpur"],
    inquiryPrompt: "Hi, I would love to enquire about scheduling an editorial pre-wedding story session.",
  },
  {
    id: "service-destination",
    slug: "destination-celebrations",
    number: "03",
    title: "Destination Weddings",
    shortDescription:
      "Bespoke photography for multi-day weddings across Rajasthan palaces, coastal retreats, and international sanctuaries.",
    description:
      "A destination wedding gathers your closest world in one extraordinary setting. We travel alongside you with complete technical readiness, capturing the spirit of the destination—the reflections of Lake Pichola, the sea breeze of coastal Goa, or the monumental stone of Jodhpur—as an organic character in your story.",
    image: {
      src: "/images/pro-destination-lake-palace-udaipur.jpg",
      alt: "Taj Lake Palace Udaipur floating over Lake Pichola for luxury destination celebrations",
      width: 1800,
      height: 1200,
      objectPosition: "center 40%",
    },
    category: "Destination",
    features: [
      "Travel-ready documentation team familiar with palace & coastal lighting",
      "Welcome dinner and sundowner cocktail coverage",
      "Scenic landscape integrations celebrating local architectural character",
      "Multi-timezone digital coordination and delivery for diaspora couples",
    ],
    relatedStorySlugs: ["simran-rohan-goa", "dia-aryaman-mumbai"],
    inquiryPrompt: "Hi, I am planning a destination wedding and would love to check availability for our dates.",
  },
  {
    id: "service-portraits",
    slug: "fine-art-portraits",
    number: "04",
    title: "Fine Art & Heirlooms",
    shortDescription:
      "Daylight-inspired bridal monographs, generational family studies, and cultural ritual details preserved for posterity.",
    description:
      "Beyond grand celebrations, there is deep reverence in solitary studies and multi-generational heritage. We document bridal shringars, handwoven zardozi textiles, ancestral jewelry, and the quiet dignity of elders with fine-art stillness and natural light.",
    image: {
      src: "/images/pro-bride-portrait-jewelry.jpg",
      alt: "Fine art bridal portrait showcasing heirloom polki necklace, matha patti, and nath",
      width: 1800,
      height: 1200,
      objectPosition: "center 22%",
    },
    category: "Portraits",
    features: [
      "Daylight studio or on-location private portraiture",
      "Detailed capture of heirloom textiles, Banarasi weaves, and polki jewels",
      "Multi-generational family portraits composed with classical poise",
      "Fine-art printing on museum-grade Hahnemühle rag paper",
    ],
    relatedStorySlugs: ["kavya-editorial-chandigarh", "avani-dev-jaipur"],
    inquiryPrompt: "Hi, I would love to enquire about a private bridal or family portraiture session.",
  },
];

export const experiencePillars: ExperiencePillar[] = [
  {
    keyword: "OBSERVE",
    title: "Notice the Quiet and Unscripted",
    description:
      "We watch for the real moments happening naturally—the shared glance between sisters during the varmala, the proud silence of a father, and the spontaneous laughter when rituals turn playful.",
    image: {
      src: "/images/photo-1606800052052-a08af7148866.jpg",
      alt: "Hands joined in sacred Vedic prayer during quiet wedding ritual",
    },
  },
  {
    keyword: "CONNECT",
    title: "Comfort Over Performance",
    description:
      "We believe that when people feel safe, unhurried, and respected, their truest grace emerges effortlessly without barking commands or rigid choreography.",
    image: {
      src: "/images/pro-couple-royal-wedding-portrait.jpg",
      alt: "Regal Indian bride and groom sharing a serene intimate moment",
    },
  },
  {
    keyword: "COMPOSE",
    title: "Light and Heritage in Harmony",
    description:
      "We use natural sandstone geometry, the soft peach radiance of morning light, and the amber glow of candlelit mandaps to elevate documentary realism into timeless art.",
    image: {
      src: "/images/pro-destination-lake-palace-udaipur.jpg",
      alt: "Taj Lake Palace Udaipur reflecting across golden hour water",
    },
  },
  {
    keyword: "PRESERVE",
    title: "Art That Outlives the Celebration",
    description:
      "Every frame is timed to an organic, filmic palette. Twenty years from now, your photographs will evoke the authentic warmth and scent of your day, untainted by fleeting digital filter trends.",
    image: {
      src: "/images/pro-bride-regal-maroon-sabyasachi.jpg",
      alt: "Timeless royal bridal couture preserving generational heritage",
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "THE DISCOVERY DIALOGUE",
    description:
      "Share your anticipated dates, chosen venue, and the emotional spirit of your celebration. We discuss your vision, personal aesthetics, and family rituals.",
    image: {
      src: "/images/pro-destination-jaipur-courtyard.jpg",
      alt: "Intimate consultation walk through sunlit heritage courtyard in Jaipur",
    },
  },
  {
    stepNumber: "02",
    title: "STORY MAPPING",
    description:
      "Prior to the event, we review the lighting angles, sacred ceremony timelines, and family dynamics to ensure comprehensive and discreet coverage.",
    image: {
      src: "/images/pro-destination-amber-corridors.jpg",
      alt: "Arched sandstone corridors and natural daylight architecture of Amber Fort",
    },
  },
  {
    stepNumber: "03",
    title: "DOCUMENTARY CAPTURE",
    description:
      "During the celebrations, our team operates with quiet reverence. We guide gently during portraits and observe unobtrusively during sacred rituals.",
    image: {
      src: "/images/pro-ceremony-pheras-mandap.jpg",
      alt: "Sacred agni rituals and unobtrusive documentary capture of wedding pheras",
    },
  },
  {
    stepNumber: "04",
    title: "THE HANDCRAFTED HEIRLOOM",
    description:
      "Every image is individually color-timed and presented in a private master digital gallery, followed by the curation of your bespoke archival heirloom album.",
    image: {
      src: "/images/pro-bride-yellow-maroon-lehenga.jpg",
      alt: "Heirloom handcrafted Banarasi zardozi bridal lehenga and antique polki",
    },
  },
];
