import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Why Veritas Global AI — Outcome-Based, Platform-Agnostic AI Delivery",
  description: "Fixed-price engagements, four to eight weeks to first production deployment, platform-agnostic engineering, and an audit trail you can hand to a regulator.",
  path: "/why-veritas",
});

export default function WhyVeritasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
