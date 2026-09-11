import type { MetadataRoute } from "next";
import { CLIENT_JOBS } from "@/app/lib/jobs";
import { SITE_URL } from "@/app/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CLIENT_JOBS.map((job) => ({
      url: `${SITE_URL}/jobs/${job.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
