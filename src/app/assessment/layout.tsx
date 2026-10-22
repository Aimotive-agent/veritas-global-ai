import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Readiness Assessment — Confidential Enterprise Evaluation",
  description: "A confidential, structured assessment of your AI readiness: data estate mapping, regulatory constraints, latency requirements, a scored gap analysis and a phased target architecture.",
  path: "/assessment",
});

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
