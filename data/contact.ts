import { ContactPageData, EventType } from "@/lib/types";

export const eventTypes: EventType[] = [
  "Wedding",
  "Pre-Wedding",
  "Destination Wedding",
  "Couple Session",
  "Portrait",
  "Family",
  "Event",
  "Other",
];

export const contactData: ContactPageData = {
  intro: {
    eyebrow: "GET IN TOUCH",
    heading: "LET'S CAPTURE YOUR STORY",
    description:
      "Planning a wedding, pre-wedding shoot or special celebration? Get in touch with Guri Rupal Photography to discuss your photography requirements.",
    image: {
      src: "/images/photo-1583939003579-730e3918a45a.jpg",
      alt: "Couple in traditional attire during photography session",
      width: 2000,
      height: 1333,
      objectPosition: "center 28%",
      priority: true,
    },
  },
  whatsappSection: {
    eyebrow: "DIRECT CONVERSATION",
    heading: "Prefer a direct conversation?",
    description:
      "Connect directly with Guri Rupal Photography on WhatsApp to discuss your event dates, locations, and photography requirements.",
    ctaText: "CHAT ON WHATSAPP",
  },
  whatToShare: {
    heading: "DETAILS TO SHARE",
    subheading: "Feel free to share any initial details you have in mind:",
    points: [
      "Your anticipated celebration or ceremony dates",
      "City, venue or location under consideration",
      "Type of celebration (wedding, pre-wedding, engagement, family event)",
      "Approximate days of coverage envisioned",
      "Any specific photography requirements or preferences",
    ],
  },
  availabilityNote: "Available for weddings, celebrations and photography sessions.",
  closingImage: {
    src: "/images/pro-destination-lake-palace-udaipur.jpg",
    alt: "Celebration architectural backdrop at golden hour",
    width: 2000,
    height: 1333,
    objectPosition: "center center",
  },
};
