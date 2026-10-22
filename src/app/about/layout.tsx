import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Veritas Global AI — Sovereign AI Engineering",
  description: "An engineering-led AI consultancy building private, sovereign and self-hosted AI for regulated enterprises. Fixed-price, outcome-based, platform-agnostic.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
