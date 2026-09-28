import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    // The blog is authored and rendered by ContentOS (site-render, tenant
    // "rafique" on links.rafiqueai.com.br) and served here under /blog so
    // it ranks on the main domain. site-render emits canonical URLs, links
    // and sitemaps for www.rafiqueai.com.br/blog; its static assets live
    // under /_sr so they don't collide with this app's own /_next.
    return [
      { source: "/blog", destination: "https://links.rafiqueai.com.br/blog" },
      { source: "/blog/:path*", destination: "https://links.rafiqueai.com.br/blog/:path*" },
      { source: "/_sr/:path*", destination: "https://links.rafiqueai.com.br/_sr/:path*" },
    ];
  },
};

export default nextConfig;
