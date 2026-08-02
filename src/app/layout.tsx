import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Veritas Global AI — Enterprise AI Consulting & Solutions",
  description:
    "Veritas Global AI delivers enterprise-grade AI strategy, machine learning, and generative AI solutions that drive measurable business outcomes. Truth. Clarity. Results.",
  keywords: ["AI consulting", "enterprise AI", "machine learning", "generative AI", "AI strategy"],
  metadataBase: new URL("https://veritas.ai"),
  openGraph: {
    title: "Veritas Global AI — Enterprise AI Consulting & Solutions",
    description:
      "Enterprise AI that delivers real outcomes. Strategy to scale, built for your industry.",
    siteName: "Veritas Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas Global AI — Enterprise AI Consulting & Solutions",
    description:
      "Enterprise AI that delivers real outcomes. Strategy to scale, built for your industry.",
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-slate-900 bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
