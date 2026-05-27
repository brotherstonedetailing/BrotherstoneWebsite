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
  beforeImage: string;
  afterImage: string;
};

export const CLIENT_JOBS: ClientJob[] = [
  {
    slug: "jason-m",
    clientName: "Jason M.",
    quote:
      "Brotherstone did an amazing job on my car! The attention to detail was outstanding, and my car looks brand new.",
    serviceType: "Full Detail",
    vehicle: "2021 Honda Accord",
    location: "Katy, TX",
    duration: "4 hours",
    description:
      "A complete interior and exterior refresh for a daily driver with heavy road grime, pet hair, and water spots on the paint.",
    highlights: [
      "Deep interior vacuum and leather conditioning",
      "Clay bar treatment and paint sealant",
      "Wheels, tires, and door jambs fully restored",
    ],
    beforeImage: "/hero.jpg",
    afterImage: "/aboutUs.jpg",
  },
  {
    slug: "sarah-l",
    clientName: "Sarah L.",
    quote:
      "Fast, reliable, and professional. I highly recommend Brotherstone for anyone who wants their car looking perfect.",
    serviceType: "Interior Detail",
    vehicle: "2023 Toyota RAV4",
    location: "Katy, TX",
    duration: "2.5 hours",
    description:
      "Interior-focused detail for a family SUV with sticky cup holders, stained floor mats, and a musty cabin odor.",
    highlights: [
      "Full carpet and seat extraction",
      "Dashboard, vents, and crevices detailed",
      "Odor-neutralizing finish with fresh cabin scent",
    ],
    beforeImage: "/hero.jpg",
    afterImage: "/aboutUs.jpg",
  },
  {
    slug: "mike-r",
    clientName: "Mike R.",
    quote:
      "The team was punctual, friendly, and my car has never looked better. Excellent service!",
    serviceType: "Exterior Detail",
    vehicle: "2019 Ford F-150",
    location: "Katy, TX",
    duration: "3 hours",
    description:
      "Exterior restoration for a work truck with baked-on brake dust, tree sap, and faded plastic trim.",
    highlights: [
      "Hand wash with foam pre-soak",
      "Iron decontamination and ceramic sealant",
      "Trim restoration and tire dressing",
    ],
    beforeImage: "/hero.jpg",
    afterImage: "/aboutUs.jpg",
  },
];

export function getClientJob(slug: string) {
  return CLIENT_JOBS.find((job) => job.slug === slug);
}
