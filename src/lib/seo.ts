import type { Metadata } from "next";
import { SITE_URL } from "./site";

/**
 * Per-page metadata.
 *
 * Before this existed only `app/layout.tsx` exported `metadata`, so 14 of the
 * 19 pages shipped the same title and the same description. Google cannot
 * distinguish /solutions from /about from /why-veritas when they all claim to
 * be "Veritas Global AI — Enterprise AI Solutions", so none of them can rank
 * for a distinct query.
 *
 * The site serves ONE canonical English URL. The Thai UI is a client-side
 * preference - it lives in localStorage and never changes the URL - so the
 * English URL is also the default. That is declared with hreflang "en" plus
 * "x-default" rather than pretending we have a second URL.
 */
export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const path = input.path === "/" ? "/" : input.path.replace(/\/+$/, "");
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = input.title.includes("Veritas Global AI")
    ? input.title
    : `${input.title} — Veritas Global AI`;

  return {
    title: fullTitle,
    description: input.description,
    alternates: {
      canonical: path,
      languages: { en: url, "x-default": url },
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url,
      type: input.ogType ?? "website",
      siteName: "Veritas Global AI",
      locale: "en_US",
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
    },
  };
}

/* ------------------------------------------------------------------ JSON-LD */

const LOGO = `${SITE_URL}/veritas-logo.png`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Veritas Global AI",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: LOGO },
    description:
      "Enterprise AI consulting and self-hosted AI delivery — sovereign, hybrid or air-gapped deployments, AI governance, and AI readiness assessment for regulated industries.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Private AI deployment",
      "Sovereign AI",
      "AI governance",
      "AI readiness assessment",
      "Retrieval-augmented generation",
      "AI agent orchestration",
    ],
    sameAs: [
      "https://www.youtube.com/@VeritasaiGlobal",
      "https://www.facebook.com/profile.php?id=61595818258637",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/contact`,
      availableLanguage: ["en", "th"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Veritas Global AI",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/** The brand film on the home page — VideoObject makes it eligible for video search. */
export function promoVideoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Veritas Global AI — Intelligence, Engineered for the Enterprise",
    description:
      "The Veritas Global AI brand film: enterprise AI that runs inside your own perimeter, with the six integrated AI pillars and the platform at a glance.",
    thumbnailUrl: [`${SITE_URL}/veritas-promo-poster.jpg`],
    uploadDate: "2026-10-22",
    duration: "PT75S",
    contentUrl: `${SITE_URL}/veritas-promo.mp4`,
    embedUrl: `${SITE_URL}/`,
    inLanguage: "en",
    isFamilyFriendly: true,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function mininotebookVideoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "miniNotebook — full product walkthrough",
    description:
      "A screen-recorded walkthrough of miniNotebook, the grounded AI notebook that runs entirely inside your perimeter: creating a notebook, adding sources, grounded chat with inline citations and a fact-check report, and generating studio artifacts on the same machine.",
    thumbnailUrl: [`${SITE_URL}/mininotebook-demo-poster.jpg`],
    uploadDate: "2026-10-23",
    duration: "PT2M7S",
    contentUrl: `${SITE_URL}/mininotebook-demo.mp4`,
    embedUrl: `${SITE_URL}/mininotebook`,
    sameAs: ["https://youtu.be/QNF0hW4EzkE"],
    inLanguage: "en",
    isFamilyFriendly: true,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function veritasOsVideoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Veritas OS — an agent-native desktop shell (full demo)",
    description:
      "A screen-recorded walkthrough of Veritas OS: the overview, Hermes in conversation, the Agent Hub, adding an agent from a JSON spec, missions, files, automations, themes, connections, and the rest of the shell.",
    thumbnailUrl: [`${SITE_URL}/veritas-os-demo-poster.jpg`],
    uploadDate: "2026-10-24",
    duration: "PT4M29S",
    contentUrl: `${SITE_URL}/veritas-os-demo.mp4`,
    embedUrl: `${SITE_URL}/veritas-os`,
    sameAs: ["https://youtu.be/PUomY6isd8I"],
    inLanguage: "en",
    isFamilyFriendly: true,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(a: {
  title: string;
  description: string;
  slug: string;
  date: string;
  dateISO: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.dateISO,
    dateModified: a.dateISO,
    articleSection: a.category,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${a.slug}` },
    image: [`${SITE_URL}/veritas-promo-poster.jpg`],
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
