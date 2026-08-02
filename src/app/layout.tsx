import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased text-ink bg-paper`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
