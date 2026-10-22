import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Solutions — Six Integrated AI Pillars",
  description: "Six AI capabilities deployed independently or as one intelligence fabric: enterprise SaaS, AI agents, neural chatbots, intelligent websites, RAG systems and AI marketing.",
  path: "/solutions",
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
