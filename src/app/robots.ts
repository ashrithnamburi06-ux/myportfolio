import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://myportfolio-eight-ecru-21.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/analytics", "/api/admin/"]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
