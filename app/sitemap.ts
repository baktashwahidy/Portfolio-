import type { MetadataRoute } from "next";

import { getPublishedProjects } from "@/lib/projects";

const baseUrl = "https://www.baktashwahidy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getPublishedProjects().map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectUrls,
    {
      url: `${baseUrl}/imkon`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shop`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
