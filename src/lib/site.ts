/**
 * Canonical origin for the site.
 *
 * Every absolute URL we publish (sitemap entries, robots.txt sitemap pointer,
 * metadataBase, Open Graph images, canonical links) is built from this one
 * constant so the site can never point search engines at a stale host again.
 *
 * Override with NEXT_PUBLIC_SITE_URL at build time if the domain changes.
 */
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://veritasglobalai.com";

export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");
