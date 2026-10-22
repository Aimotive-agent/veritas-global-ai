import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Veritas Global AI — Request a Private Consultation",
  description: "Request a private consultation. Tell us what you are building and we will tell you whether your infrastructure and regulatory constraints allow it.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
