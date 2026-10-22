import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Security & Disclosure — Veritas Global AI",
  description: "How we handle your data: never training on customer data, encrypted inference, no third-party logging, and a documented disclosure process.",
  path: "/security",
});

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
