import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Data Policy — Veritas Global AI",
  description: "Our data handling commitments: never train on customer data, jurisdiction-pinned storage, documented retention, and cryptographic audit trails.",
  path: "/data-policy",
});

export default function DataPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
