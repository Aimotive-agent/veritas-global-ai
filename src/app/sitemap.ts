import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap with REAL per-URL modification dates.
 *
 * This used to be `lastModified: new Date()` for every route, which meant
 * every deploy re-stamped all 19 URLs with the build time. A lastmod that
 * changes on every crawl tells Google nothing, so it stops trusting the value
 * and falls back to re-crawling on its own schedule.
 *
 * The dates below are the last time each page's content actually changed.
 */
const routes: {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  lastModified: string;
}[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-10-22" },
  { path: "/private-ai-deployment", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/sovereign-ai", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/ai-governance", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/private-ai-cost", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-10-23" },
  { path: "/choosing-an-ai-consultant", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-10-23" },
  { path: "/assessment", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/why-veritas", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-10-22" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-10-22" },
  { path: "/demos", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-10-22" },
  { path: "/mininotebook", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-23" },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-16" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-10-16" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-10-16" },
  { path: "/security", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-10-16" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-16" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-16" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-16" },
  { path: "/data-policy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-16" },
  // Articles keep their publication month. They are edited in place, not
  // republished, so the original date stays the truthful one.
  { path: "/insights/mid-market-ai-gap", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-01" },
  { path: "/insights/fixed-price-ai", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-01" },
  { path: "/insights/truth-first-ai-governance", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-01" },
  { path: "/insights/insurance-ai-2026", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-01" },
  { path: "/insights/platform-agnostic-ai-architecture", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(`${lastModified}T00:00:00.000Z`),
    changeFrequency,
    priority,
  }));
}
