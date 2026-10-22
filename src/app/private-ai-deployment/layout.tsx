import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Private AI Deployment — Self-Hosted AI On Your Infrastructure",
  description: "Deploy LLMs, retrieval and agents inside your own perimeter. No data leaves your building, no vendor logs your prompts. On-premise, private cloud or hybrid.",
  path: "/private-ai-deployment",
});

export default function PrivateAIDeploymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
