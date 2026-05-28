export const SERVICE_AREAS = [
  "Katy",
  "Richmond",
  "Fulshear",
  "Cypress",
  "Cinco Ranch",
] as const;

export type ServiceArea = (typeof SERVICE_AREAS)[number];

export const DEFAULT_SERVICE_AREA: ServiceArea = "Katy";

export const BOOKING_URL =
  "https://app.urable.com/virtual-shop/WvUCKdrJ1Bj2PcS2pUI2";

export const QUOTE_FORM_URL =
  "https://app.urable.com/form/WvUCKdrJ1Bj2PcS2pUI2/jUNsC94g4uYHnHV62mq8";

export const CONTACT_EMAIL = "info@brotherstonedetailing.com";
export const PHONE_NUMBER = "(832) 920-8069";
export const PHONE_HREF = "tel:+18329208069";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/brotherstonedetailing/",
  linkedin: "https://www.linkedin.com/in/jason-stone-140b83282/",
  facebook: "#",
} as const;

export const GOOGLE_REVIEWS_URL = "#";

export type VehicleTier = "coupe" | "midsize" | "large";

export const VEHICLE_TIERS: { id: VehicleTier; label: string }[] = [
  { id: "coupe", label: "Coupe / Sedan" },
  { id: "midsize", label: "Small / Midsize SUV" },
  { id: "large", label: "Truck / Large SUV" },
];

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  prices: Record<VehicleTier, string>;
  sections: {
    title?: string;
    items: string[];
  }[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "interior",
    name: "Interior Detail",
    description:
      "This is our thorough interior detailing service. Once done, your car's interior will invite you with a fresh look, smell, & feel for an amazing driving experience!",
    prices: { coupe: "$174.99", midsize: "$189.99", large: "$204.99" },
    sections: [
      {
        title: "Services Included",
        items: [
          "Detailed Vacuum of Floors, Carpets, and Trunk",
          "Detailed Wipe Down of All Interior Surfaces",
          "Plastics Cleaned (dash, door panels, etc)",
          "All Cracks + Crevices",
          "Floor Mats Cleaned",
          "Leather Conditioned",
          "Windows Cleaned to Streak-Free Finish",
          "Door Jambs Cleaned",
          "Trunk Cleaned",
          "Air Freshener (if requested)",
        ],
      },
    ],
  },
  {
    id: "full",
    name: "Full Detail",
    featured: true,
    description:
      "This is our full interior and exterior detail, designed to clean every inch of your car.",
    prices: { coupe: "$214.99", midsize: "$229.99", large: "$244.99" },
    sections: [
      {
        title: "INTERIOR (detailed cleaning)",
        items: [
          "Detailed Vacuum",
          "Detailed Wipe Down",
          "All Cracks + Crevices",
          "Clean & Protect Plastic",
          "Floor Mats Cleaned",
          "Leather Conditioned",
          "Windows & Mirrors Cleaned",
          "Door Jambs Cleaned",
          "Trunk Cleaned",
          "Air Freshener (if requested)",
        ],
      },
      {
        title: "EXTERIOR (detailed wash)",
        items: [
          "Professional Hand Wash + Foam Bath",
          "Bug Splatters Cleaned Off",
          "Wheels + Rims Deep Cleaned",
          "Tires Shined + Dressed",
        ],
      },
      {
        title: "Protection",
        items: ["3 Month Paint Sealant (protects + shines)"],
      },
    ],
  },
  {
    id: "wash-clay-seal",
    name: "Wash, Clay, & Seal",
    description:
      "This premium exterior detail is designed to remove micro contaminants from your cars paint, leave a silky smooth finish, and protect the paint for up to 8 months!",
    prices: { coupe: "$114.99", midsize: "$129.99", large: "$144.99" },
    sections: [
      {
        title: "Services Included",
        items: [
          "Professional Hand Wash + Foam Bath",
          "Bug Splatters Cleaned Off",
          "Clay Bar Treatment",
          "Micro Contaminants Removed from Paint",
          "Exterior Windows Cleaned",
          "Wheels + Rims Deep Cleaned",
          "Plastic Trim Dressed & Shined",
          "Ceramic Paint Sealant Applied",
        ],
      },
      {
        title: "Protection",
        items: [
          "6 Month Paint Sealant (protects + shines)",
          "Plastic Trim Coated & Dressed (UV protectant + deep black finish)",
        ],
      },
    ],
  },
];
