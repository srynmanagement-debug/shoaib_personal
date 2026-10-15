export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  subTagline: string;
  philosophy: string;
  companyName: string;
  memaarTagline: string;
  contact: {
    // International format without + or spaces e.g. "919876543210". Empty string when unconfigured.
    whatsappNumber: string;
    whatsappDisplay: string;
    isWhatsappConfigured: boolean;
    email: string;
    emailDisplay: string;
    isEmailConfigured: boolean;
    location: string;
    operatingRegions: string[];
    notice: string;
  };
  claims: {
    experienceStartYear: number;
    projectCount: string;
    verifiedNote: string;
  };
  navigation: {
    name: string;
    href: string;
  }[];
  socials: {
    platform: string;
    url?: string;
    isConfigured: boolean;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Suheb Naik",
  title: "Suheb Naik — Real Estate • Development • Investment | Goa",
  tagline: "Building Opportunities.",
  subTagline: "Real Estate • Development • Investment",
  philosophy: "What can this land become?",
  companyName: "Memaar",
  memaarTagline: "Creating Places. Building Opportunities.",
  contact: {
    // Contact details are strictly flagged as unconfigured placeholders until verified numbers are provided.
    whatsappNumber: "", // Enter verified international phone number here (e.g., "919822123456") to enable WhatsApp links.
    whatsappDisplay: "[WhatsApp Number Pending Client Setup]",
    isWhatsappConfigured: false,
    email: "", // Enter verified client inquiry email here (e.g., "inquiry@suhebnaik.com")
    emailDisplay: "[Inquiry Email Pending Client Setup]",
    isEmailConfigured: false,
    location: "Goa, India",
    operatingRegions: ["North Goa (Bardez, Pernem)", "South Goa (Salcete, Verna)", "Central Goa (Tiswadi)"],
    notice: "Official direct phone and email channels will be enabled upon final client onboarding. Direct submissions are currently in draft staging mode.",
  },
  claims: {
    experienceStartYear: 2017,
    projectCount: "62+ Projects",
    verifiedNote: "Note: Experience timeline ('Since 2017') and project metrics ('62+ Projects') are claims referenced from the brand brief, awaiting final client verification prior to production launch.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Property Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  socials: [
    { platform: "LinkedIn", isConfigured: false },
    { platform: "WhatsApp", isConfigured: false },
  ],
};

/**
 * Returns a valid WhatsApp URL if configured, or null if unconfigured.
 */
export function getWhatsAppLink(prefillMessage = "Hello Suheb, I would like to inquire regarding a Goa property opportunity."): string | null {
  if (!siteConfig.contact.isWhatsappConfigured || !siteConfig.contact.whatsappNumber) {
    return null;
  }
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefillMessage)}`;
}
