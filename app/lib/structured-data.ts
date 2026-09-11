import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  PHONE_HREF,
  PRICING_PLANS,
  SERVICE_AREAS,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/app/lib/constants";

/**
 * LocalBusiness markup for the site, so search engines can read the service
 * area, contact details and package prices rather than inferring them from
 * page copy.
 *
 * Deliberately absent: aggregateRating. Google disallows a business marking up
 * its own rating ("self-serving" review markup) and it can earn a manual
 * penalty. The 5.0 on the Google Business Profile already does that job in the
 * place customers actually see it.
 *
 * Also absent: openingHours, because nobody recorded what they are. Wrong hours
 * are worse than none -- customers see them in search results.
 */

// Read the real prices out of the packages so the range can't drift.
const priceValues = PRICING_PLANS.flatMap((plan) =>
  Object.values(plan.prices).map((price) => Number(price.replace(/[^0-9.]/g, ""))),
);
const lowest = Math.floor(Math.min(...priceValues));
const highest = Math.ceil(Math.max(...priceValues));

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description:
    "Mobile auto detailing serving Katy, Texas and the surrounding area. Interior, exterior and full detail packages performed at your home or office.",
  url: SITE_URL,
  telephone: PHONE_HREF.replace("tel:", ""),
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/gtrExterior.jpg`,
  logo: `${SITE_URL}/icon.png`,
  priceRange: `$${lowest}-$${highest}`,
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Zelle, Venmo, Cash App",
  // A mobile business travels to the customer, so the locality is given
  // without a street address rather than publishing a home address.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Katy",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: `${area}, TX`,
  })),
  sameAs: [SOCIAL_LINKS.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Detailing packages",
    itemListElement: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      priceCurrency: "USD",
      price: Number(plan.prices.coupe.replace(/[^0-9.]/g, "")),
      itemOffered: {
        "@type": "Service",
        name: plan.name,
        serviceType: "Auto detailing",
      },
    })),
  },
};
