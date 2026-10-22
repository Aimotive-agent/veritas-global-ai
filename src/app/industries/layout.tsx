import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Enterprise AI for Regulated Industries",
  description: "Private AI deployment for financial services, healthcare, legal and compliance, logistics, energy and telecommunications — running inside your own infrastructure.",
  path: "/industries",
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
