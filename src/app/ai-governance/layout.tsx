import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Governance & Compliance — EU AI Act, ISO 27001, SOC 2",
  description: "AI governance for regulated enterprise: immutable audit trails, model change control, evaluation harnesses, per-role access and evidence packs for EU AI Act and ISO 42001.",
  path: "/ai-governance",
});

export default function AIGovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
