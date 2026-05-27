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
    clientName: "Muhammad U.",
    quote:
      "Jason was great, attention to detail was impressive. Got all the nooks and crannies of my interior and exterior.",
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
    clientName: "Meredith B.",
    quote:
      "Brotherstone did an amazing job cleaning and detailing my Porsche. Communication was exceptional and they were very professional. The cleaning was thorough and my car looks brand new. If you're looking to have your car detailed, these are the guys to use!",
    serviceType: "Full Detail",
    vehicle: "Porsche",
    location: "Katy, TX",
    duration: "5 hours",
    description:
      "Complete inside and out detail for a luxury sports SUV, focusing on meticulous interior care and a protected, mirror-like exterior finish.",
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
