import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd, ORGANIZATION_ID, breadcrumbList } from "@/components/json-ld";

const BASE_URL = "https://branebridge.com";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | BraneBridge`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    image: `${BASE_URL}/opengraph-image`,
  };

  const breadcrumbSchema = breadcrumbList([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <section className="px-6 py-16 sm:py-24">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to blog
        </Link>

        <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
          {post.title}
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          {post.author} &middot;{" "}
          {new Date(post.date + "T00:00:00").toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div
          className="mt-10 prose prose-lg max-w-none prose-headings:text-[#111111] prose-p:text-[#1a1a1a] prose-p:leading-[1.7] prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:text-[#374151] prose-strong:text-[#111111]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </section>
  );
}
