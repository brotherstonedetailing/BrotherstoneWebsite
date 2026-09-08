export type JobImage = {
  src: string;
  label?: string;
};

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
  images: JobImage[];
};

export const CLIENT_JOBS: ClientJob[] = [
  {
    slug: "nissan-gtr",
    clientName: "Tom P.",
    quote:
      "An exceptional job! Will use Jason again! He removed glue from a previous wrap and cleaned spots I did not know were there. An excellent detail service. I highly recommend!",
    serviceType: "Full Detail",
    vehicle: "2017 Nissan GT-R Premium",
    location: "Katy, TX",
    duration: "4 hours",
    description:
      "A complete interior and exterior detail on a 2017 Nissan GT-R Premium, including a full engine bay cleaning, finished with a deep, showroom-level shine inside and out.",
    highlights: [
      "Full interior vacuum, wipe-down, and leather conditioning",
      "Exterior hand wash, decontamination, and paint sealant",
      "Wheels, tires, and trim dressed to a showroom finish",
      "Engine bay cleaned and detailed",
    ],
    thumbnailImage: "/gtrExterior.jpg",
    images: [
      { src: "/gtrExterior.jpg", label: "Exterior" },
      { src: "/gtrInterior.jpg", label: "Interior" },
      { src: "/gtrWheels.jpg" },
      { src: "/gtrCockpit.jpg" },
      { src: "/gtrEngineBay.jpg" },
      { src: "/gtrSeats.jpg" },
    ],
  },
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
    images: [
      { src: "/m4exterior.png", label: "Exterior" },
      { src: "/m4interior.png", label: "Interior" },
    ],
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
    images: [
      { src: "/PorscheExterior.jpeg", label: "Exterior" },
      { src: "/PorscheInterior.jpeg", label: "Interior" },
    ],
  },
];

export function getClientJob(slug: string) {
  return CLIENT_JOBS.find((job) => job.slug === slug);
}
