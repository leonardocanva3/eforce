import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/historia`,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
