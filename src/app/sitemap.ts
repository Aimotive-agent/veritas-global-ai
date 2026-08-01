import type { MetadataRoute } from "next";

const BASE_URL = "https://veritas.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/why-veritas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/assessment", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/insights/mid-market-ai-gap", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/fixed-price-ai", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/truth-first-ai-governance", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/insurance-ai-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/platform-agnostic-ai-architecture", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
