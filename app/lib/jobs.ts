export type ClientJob = {
  slug: string;
  clientName: string;
  quote: string;
  serviceType: string;
  vehicle: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  thumbnailImage: string;
  interiorImage: string;
  exteriorImage: string;
};

export const CLIENT_JOBS: ClientJob[] = [
  {
    slug: "bmw-m4",
    clientName: "Alex R.",
    quote:
      "Brotherstone transformed my M4 inside and out. The interior looks factory fresh and the paint has incredible depth.",
    serviceType: "Full Detail",
    vehicle: "BMW M4",
    location: "Katy, TX",
    duration: "4 hours",
    description:
      "A complete interior and exterior detail on a performance coupe, restoring the cabin and bringing the paint back to a deep, glossy finish.",
    highlights: [
      "Full interior vacuum, wipe-down, and leather conditioning",
      "Exterior hand wash, decontamination, and paint sealant",
      "Wheels, tires, and trim dressed to a showroom finish",
    ],
    thumbnailImage: "/m4thumbnail.png",
    interiorImage: "/m4interior.png",
    exteriorImage: "/m4exterior.png",
  },
  {
    slug: "porsche",
    clientName: "Jordan T.",
    quote:
      "Absolutely flawless work on my Porsche. Every surface was handled with care and the results speak for themselves.",
    serviceType: "Full Detail",
    vehicle: "Porsche",
    location: "Katy, TX",
    duration: "4.5 hours",
    description:
      "Premium full detail for a luxury sports car, focusing on meticulous interior care and a protected, mirror-like exterior finish.",
    highlights: [
      "Detailed interior cleaning of leather, carpets, and trim",
      "Careful exterior wash with paint decontamination",
      "Ceramic sealant applied for lasting shine and protection",
    ],
    thumbnailImage: "/PorcheThumbNail.jpeg",
    interiorImage: "/PorscheInterior.jpeg",
    exteriorImage: "/PorscheExterior.jpeg",
  },
];

export function getClientJob(slug: string) {
  return CLIENT_JOBS.find((job) => job.slug === slug);
}
