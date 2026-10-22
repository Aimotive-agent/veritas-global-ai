import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights — Enterprise AI Strategy, Governance & Pricing",
  description: "Analysis on enterprise AI strategy, private and sovereign deployment, truth-first governance, outcome-based pricing and the industries being reshaped by AI.",
  path: "/insights",
});

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
