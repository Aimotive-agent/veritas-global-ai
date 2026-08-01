import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Veritas AI — Enterprise AI Consulting & Solutions",
  description:
    "Veritas AI delivers enterprise-grade AI strategy, machine learning, and generative AI solutions that drive measurable business outcomes. Truth. Clarity. Results.",
  keywords: ["AI consulting", "enterprise AI", "machine learning", "generative AI", "AI strategy"],
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
