import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myportfolio-eight-ecru-21.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/projects/kl-cse-capstone-management`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/projects/gr-styles`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/projects/dealrix`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/projects/ai-showcase`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/projects/developer-portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/skills`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
