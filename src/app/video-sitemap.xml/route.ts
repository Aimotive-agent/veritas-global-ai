import { SITE_URL } from "@/lib/site";

/**
 * Video sitemap.
 *
 * Google's video indexing wants every video declared in a sitemap with the
 * video namespace — VideoObject markup alone leaves the videos in the
 * "not indexed" bucket and Search Console emails a warning about it.
 *
 * Each entry points at the self-hosted mp4 (the page's own player) with its
 * poster as the thumbnail, so Google can fetch both without JS.
 */
type Film = {
  page: string;
  file: string;
  poster: string;
  title: string;
  description: string;
  duration: number;
  published: string;
};

const FILMS: Film[] = [
  {
    page: "/mininotebook",
    file: "/mininotebook-demo.mp4",
    poster: "/mininotebook-demo-poster.jpg",
    title: "miniNotebook — full product walkthrough",
    description:
      "A screen-recorded walkthrough of miniNotebook, the grounded AI notebook that runs entirely inside your perimeter: creating a notebook, adding sources, grounded chat with inline citations and a fact-check report, and generating studio artifacts on the same machine.",
    duration: 127,
    published: "2026-10-23",
  },
  {
    page: "/veritas-os",
    file: "/veritas-os-demo.mp4",
    poster: "/veritas-os-demo-poster.jpg",
    title: "Veritas OS — an agent-native desktop shell (full demo)",
    description:
      "A walkthrough of Veritas OS: the overview, Hermes in conversation, the Agent Hub, adding an agent from a JSON spec, missions, files, automations, themes, connections, and the rest of the shell.",
    duration: 269,
    published: "2026-10-24",
  },
  {
    page: "/ai-wise-health",
    file: "/ai-wise-health-demo.mp4",
    poster: "/ai-wise-health-demo-poster.jpg",
    title: "AI Wise Health Companion — private health assistant (full demo)",
    description:
      "A walkthrough of AI Wise Health Companion: the AI medical assistant answering from the user's own record with a medical disclaimer, document upload and analysis, calendar, tasks, medications, cases, dashboard and reports.",
    duration: 206,
    published: "2026-10-24",
  },
  {
    page: "/ai-pawsitive-care",
    file: "/ai-pawsitive-demo.mp4",
    poster: "/ai-pawsitive-demo-poster.jpg",
    title: "AI Pawsitive Care — private pet health companion (full demo)",
    description:
      "A walkthrough of AI Pawsitive Care: the AI veterinary assistant answering from a pet's own record, pets, health records, medications, appointments, the photo library and the emergency checker.",
    duration: 206,
    published: "2026-10-24",
  },
  {
    page: "/mindvault",
    file: "/mindvault-demo.mp4",
    poster: "/mindvault-demo-poster.jpg",
    title: "MindVault — your digital brain, anywhere (product walkthrough)",
    description:
      "A walkthrough of the MindVault product line: portable AI storage hardware, the desktop software tiers, the security model, the knowledge graph and the performance specifications.",
    duration: 129,
    published: "2026-10-24",
  },
  {
    page: "/taxai",
    file: "/taxai-demo.mp4",
    poster: "/taxai-demo-poster.jpg",
    title: "Veritas Tax AI — cross-border tax compliance in one workspace",
    description:
      "A walkthrough of Veritas Tax AI: creating a company, tax overview, the AI assistant answering a deduction question, invoices and receipts, and country-specific tax forms across six jurisdictions.",
    duration: 158,
    published: "2026-10-24",
  },
];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const entries = FILMS.map(
    (f) => `  <url>
    <loc>${SITE_URL}${f.page}</loc>
    <video:video>
      <video:thumbnail_loc>${SITE_URL}${f.poster}</video:thumbnail_loc>
      <video:title>${esc(f.title)}</video:title>
      <video:description>${esc(f.description)}</video:description>
      <video:content_loc>${SITE_URL}${f.file}</video:content_loc>
      <video:duration>${f.duration}</video:duration>
      <video:publication_date>${f.published}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
