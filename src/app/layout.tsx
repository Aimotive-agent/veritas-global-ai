import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Veritas Global AI — Enterprise AI Solutions",
  description:
    "Veritas Global AI — Intelligence, Engineered for the Enterprise. From sovereign SaaS platforms to autonomous agent swarms, neural chatbots, intelligent websites, RAG pipelines, and AI-driven marketing. Secured to the standards of global institutions.",
  keywords: ["enterprise AI", "AI solutions", "sovereign AI", "RAG systems", "AI agents", "neural chatbots"],
  metadataBase: new URL("https://veritas-global-ai.netlify.app"),
  openGraph: {
    title: "Veritas Global AI — Enterprise AI Solutions",
    description:
      "Intelligence, Engineered for the Enterprise. Full-spectrum enterprise AI, secured to institutional standards.",
    siteName: "Veritas Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas Global AI — Enterprise AI Solutions",
    description:
      "Intelligence, Engineered for the Enterprise. Full-spectrum enterprise AI, secured to institutional standards.",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
