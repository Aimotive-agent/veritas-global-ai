import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Demos & Live Applications — Veritas Global AI",
  description: "Working AI applications built by Veritas Global AI: document intelligence, research assistants, agents and more, running on self-hosted infrastructure.",
  path: "/demos",
});

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
