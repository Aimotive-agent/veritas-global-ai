import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticleSlugs, getArticle, articleIndex, articleDateISO } from "../articles";
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

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
  return pageMeta({
    title: article.title,
    description: article.summary,
    path: `/insights/${article.slug}`,
    ogType: "article",
    publishedTime: articleDateISO[article.slug],
    modifiedTime: articleDateISO[article.slug],
  });
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.summary,
              slug: article.slug,
              date: article.date,
              dateISO: articleDateISO[article.slug],
              category: article.category,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Insights", path: "/insights" },
              { name: article.title, path: `/insights/${article.slug}` },
            ])
          ),
        }}
      />
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

        {/* RELATED — contextual internal links. Each article used to link out
            only to the insights index, which left the whole cluster with a
            single internal link. */}
        <div className="mt-14 pt-8 border-t border-line">
          <h2 className="font-serif text-xl font-semibold text-ink mb-6">
            Related reading
          </h2>
          <ul className="space-y-5 mb-12">
            {articleIndex
              .filter((a) => a.slug !== article.slug)
              .map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="font-serif text-lg text-ink hover:underline leading-snug block mb-1"
                  >
                    {a.title}
                  </Link>
                  <p className="text-sm text-muted">{a.category} · {a.readingTime}</p>
                </li>
              ))}
          </ul>
          <h2 className="font-serif text-xl font-semibold text-ink mb-5">
            Put it into practice
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/private-ai-deployment",
                label: "Private AI deployment",
                body: "The architecture behind a data boundary you actually control.",
              },
              {
                href: "/sovereign-ai",
                label: "Sovereign AI",
                body: "Jurisdiction, control, operability and evidence.",
              },
              {
                href: "/assessment",
                label: "AI readiness assessment",
                body: "A confidential, structured evaluation of where you stand.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block border border-line p-5 hover:border-navy transition-colors"
              >
                <span className="font-serif text-base font-semibold text-ink block mb-2">
                  {l.label}
                </span>
                <span className="text-sm text-slate leading-relaxed block">{l.body}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
