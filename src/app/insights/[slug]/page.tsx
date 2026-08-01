import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticleSlugs, getArticle } from "../articles";

interface Params {
  slug: string;
}

const categoryColors: Record<string, string> = {
  Strategy: "bg-blue-100 text-blue-700",
  Industry: "bg-emerald-100 text-emerald-700",
  Governance: "bg-purple-100 text-purple-700",
  Technical: "bg-amber-100 text-amber-700",
};

export function generateStaticParams(): Params[] {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Veritas AI Insights`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

function renderBody(paragraphs: string[]) {
  return paragraphs.map((p, i) => {
    if (p.startsWith("### ")) {
      return (
        <h3 key={i} className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          {p.slice(4)}
        </h3>
      );
    }
    if (p.startsWith("1. ") || p.startsWith("2. ") || p.startsWith("3. ") || p.startsWith("4. ") || p.startsWith("5. ")) {
      // Ordered list items — we'll collect in groups
      return (
        <li key={i} className="ml-6 mb-2 text-slate-700 leading-relaxed list-decimal">
          {p.replace(/^\d+\.\s*/, "")}
        </li>
      );
    }
    return (
      <p key={i} className="mb-4 text-slate-700 leading-relaxed">
        {p}
      </p>
    );
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <article className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                categoryColors[article.category] || "bg-slate-100 text-slate-600"
              }`}
            >
              {article.category}
            </span>
            <span className="text-sm text-slate-400">{article.date}</span>
            <span className="text-sm text-slate-400">{article.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            {article.title}
          </h1>

          <div className="prose prose-slate max-w-none">
            {renderBody(article.body)}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              href="/insights"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              <span className="mr-1">←</span> Back to Insights
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
