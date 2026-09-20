export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectPosition?: string;
  mobileObjectPosition?: string;
  priority?: boolean;
  caption?: string;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  camera?: string;
  lens?: string;
  lighting?: string;
  filmTone?: string;
  location?: string;
};

export type HeroSlide = {
  id: string;
  image: ImageAsset;
  eyebrow: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
};

export type CelebrationCategory =
  | "All"
  | "Weddings"
  | "Pre-Weddings"
  | "Destination"
  | "Portraits"
  | "Rituals & Heirlooms"
  | "Destinations & Landscapes";

export type PortfolioStory = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: CelebrationCategory;
  location: string;
  city: string;
  stateOrRegion?: string;
  year: string;
  coverImage: ImageAsset;
  images: ImageAsset[];
  excerpt: string;
  narrative: string[];
  featured: boolean;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  details?: {
    venue?: string;
    rituals?: string[];
    palette?: string;
    style?: string;
  };
};

export type ServiceOffering = {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: ImageAsset;
  category?: string;
  features: string[];
  relatedStorySlugs?: string[];
  inquiryPrompt?: string;
};

export type ExperiencePillar = {
  keyword: string;
  title: string;
  description: string;
  image?: ImageAsset;
};

export type ProcessStep = {
  stepNumber: string;
  title: string;
  description: string;
  image?: ImageAsset;
};

export type PhotographerProfile = {
  name: string;
  role: string;
  studioName: string;
  portrait: ImageAsset;
  shortIntro: string;
  storyBlocks: {
    heading: string;
    paragraphs: string[];
  }[];
  philosophyStatement: string;
  philosophyImage: ImageAsset;
  philosophyExplanation: string[];
  approachSteps: {
    number: string;
    keyword: string;
    summary: string;
    description: string;
    image?: ImageAsset;
  }[];
  values: {
    title: string;
    description: string;
    image?: ImageAsset;
  }[];
  locations: string[];
  selectedStorySlugs: string[];
  inquiryPrompt: string;
};

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  locations: string[];
  navItems: NavItem[];
  url?: string;
};

export type EventType =
  | "Wedding"
  | "Pre-Wedding"
  | "Destination Wedding"
  | "Couple Session"
  | "Portrait"
  | "Family"
  | "Event"
  | "Other";

export type EnquiryFormData = {
  name: string;
  email: string;
  phone?: string;
  eventType: EventType | "";
  eventDate?: string;
  location?: string;
  message: string;
  honeypot?: string;
};

export type EnquiryRecord = EnquiryFormData & {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "closed";
  source?: string;
};

export type ContactPageData = {
  intro: {
    eyebrow: string;
    heading: string;
    description: string;
    image: ImageAsset;
  };
  whatsappSection: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
  };
  whatToShare: {
    heading: string;
    subheading: string;
    points: string[];
  };
  availabilityNote: string;
  closingImage: ImageAsset;
};
