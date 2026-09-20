export type WhatsAppContextType =
  | "wedding"
  | "pre-wedding"
  | "destination"
  | "portfolio-story"
  | "general";

export type WhatsAppInquiryParams = {
  contextType?: WhatsAppContextType;
  category?: string;
  storyTitle?: string;
  location?: string;
  customMessage?: string;
};

export function createWhatsAppLink(params?: WhatsAppInquiryParams): string {
  // Use environment variable or fallback configuration
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, "");

  // Safe default fallback
  let message =
    "Hi, I found your photography website and would love to enquire about photography for my upcoming event.";

  if (params?.customMessage) {
    message = params.customMessage;
  } else if (params?.contextType === "wedding") {
    message =
      "Hi, I found your photography website and would like to enquire about wedding photography.";
  } else if (params?.contextType === "pre-wedding") {
    message =
      "Hi, I found your photography website and would like to enquire about a pre-wedding session.";
  } else if (params?.contextType === "destination") {
    message =
      "Hi, I found your photography website and would like to enquire about destination wedding photography.";
  } else if (params?.contextType === "portfolio-story" && !params.storyTitle) {
    message =
      "Hi, I found your photography portfolio and loved this story. I'd like to enquire about photography for my celebration.";
  } else if (params?.storyTitle) {
    message = `Hi, I just viewed the "${params.storyTitle}" celebration in ${params.location || "your portfolio"} on your website. I love your visual style and would like to check availability for my dates.`;
  } else if (params?.category) {
    message = `Hi, I am exploring your "${params.category}" photography on your website and would love to check availability.`;
  }

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}
