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
    eyebrow: "LET'S TALK",
    heading: "Tell us about your day.",
    description:
      "Your date, your people, your plans — start with whatever you already know. We document celebrations with presence, cultural reverence, and quiet editorial grace.",
    image: {
      src: "/images/photo-1583939003579-730e3918a45a.jpg",
      alt: "Couple in traditional bridal attire against heritage sandstone courtyard",
      width: 2000,
      height: 1333,
      objectPosition: "center 28%",
      priority: true,
    },
  },
  whatsappSection: {
    eyebrow: "READY WHEN YOU ARE",
    heading: "Prefer a conversation?",
    description:
      "WhatsApp is the fastest and most personal way to connect with Arjun and our studio team. Ask questions, share tentative dates, or send moodboards directly.",
    ctaText: "START A CONVERSATION ON WHATSAPP",
  },
  whatToShare: {
    heading: "NOT SURE WHAT TO SEND?",
    subheading: "That's completely fine. Start with whatever details you have:",
    points: [
      "Your anticipated celebration or ceremony dates (if you have them)",
      "Location, city, or venue you are considering",
      "Type of celebration (multi-day royal wedding, intimate ceremony, destination)",
      "Approximate guest count or days of coverage envisioned",
      "What matters most to you in your photography",
    ],
  },
  availabilityNote: "Share your date and we'll let you know what's possible.",
  closingImage: {
    src: "/images/pro-destination-lake-palace-udaipur.jpg",
    alt: "Taj Lake Palace Udaipur glowing at sunset across Lake Pichola",
    width: 2000,
    height: 1333,
    objectPosition: "center center",
  },
};
