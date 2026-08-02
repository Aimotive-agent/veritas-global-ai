import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticleSlugs, getArticle } from "../articles";

interface Params {
  slug: string;
}

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
    title: `${article.title} — Veritas Global AI Insights`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

function renderBody(paragraphs: string[]) {
  const listItems: string[] = [];
  const flushList = (key: number) => {
    if (listItems.length === 0) return null;
    const items = listItems.splice(0);
    return (
      <ol key={key} className="list-decimal ml-6 my-6 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-slate leading-relaxed">{item}</li>
        ))}
      </ol>
    );
  };

  let listKey = 0;
  const nodes: React.ReactNode[] = [];
  paragraphs.forEach((p, i) => {
    if (p.startsWith("### ")) {
      nodes.push(flushList(listKey++));
      nodes.push(
        <h2 key={`h-${i}`} className="font-serif font-semibold text-2xl lg:text-3xl text-ink mt-12 mb-4 leading-tight">
          {p.slice(4)}
        </h2>
      );
    } else if (/^\d+\.\s/.test(p)) {
      listItems.push(p.replace(/^\d+\.\s*/, ""));
    } else {
      nodes.push(flushList(listKey++));
      nodes.push(
        <p key={`p-${i}`} className="mb-5 text-slate leading-relaxed text-[16px]">
          {p}
        </p>
      );
    }
  });
  nodes.push(flushList(listKey++));
  return nodes;
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
    <article className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{article.category}</span>
          <span className="text-sm text-muted">{article.date}</span>
          <span className="text-sm text-muted">{article.readingTime}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-10 leading-tight">
          {article.title}
        </h1>

        <div className="border-t border-line pt-10">
          {renderBody(article.body)}
        </div>

        <div className="mt-16 pt-8 border-t border-line">
          <Link
            href="/insights"
            className="inline-flex items-center text-navy font-semibold hover:underline"
          >
            <span className="mr-1">←</span> Back to Insights
          </Link>
        </div>
      </div>
    </article>
  );
}
