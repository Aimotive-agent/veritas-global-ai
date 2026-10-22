import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sovereign AI — AI That Stays Inside Your Jurisdiction",
  description: "Jurisdiction, data residency and model control for regulated industries. Sovereign AI deployment with audit trails, explicit egress posture and per-role redaction.",
  path: "/sovereign-ai",
});

export default function SovereignAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
