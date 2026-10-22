import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy — Veritas Global AI",
  description: "Which cookies veritasglobalai.com sets, what each one does, and how to control or remove them.",
  path: "/cookies",
});

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
