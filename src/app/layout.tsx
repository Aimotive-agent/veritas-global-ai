import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Providers from "@/components/Providers";
import { SITE_URL } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Veritas Global AI — Private, Sovereign & Self-Hosted AI Deployment",
  description:
    "Enterprise AI that runs inside your own perimeter. Private AI deployment, sovereign AI, AI governance and AI readiness assessment for regulated industries. Fixed-price, outcome-based, platform-agnostic.",
  keywords: [
    "private AI deployment",
    "sovereign AI",
    "self-hosted AI",
    "AI governance",
    "AI readiness assessment",
    "enterprise AI",
    "RAG consulting",
    "AI agent orchestration",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    // Absolute canonical per page. Nested route layouts override this with
    // their own path, so every URL self-canonicalises.
    canonical: "/",
    languages: { en: `${SITE_URL}/`, "x-default": `${SITE_URL}/` },
  },
  openGraph: {
    title: "Veritas Global AI — Private, Sovereign & Self-Hosted AI Deployment",
    description:
      "Enterprise AI that runs inside your own perimeter. Private AI deployment, sovereign AI, AI governance and AI readiness assessment for regulated industries.",
    siteName: "Veritas Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas Global AI — Private, Sovereign & Self-Hosted AI Deployment",
    description:
      "Private AI deployment, sovereign AI, AI governance and AI readiness assessment for regulated industries.",
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-ink bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
