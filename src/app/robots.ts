import type { MetadataRoute } from "next";

const baseUrl = "https://www.rafiqueai.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /_next/ stays crawlable: Google needs the JS/CSS to render pages.
      disallow: ["/api/", "/admin/"],
    },
    // The blog (served from ContentOS under /blog) keeps its own sitemap.
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/blog/sitemap.xml`],
  };
}
