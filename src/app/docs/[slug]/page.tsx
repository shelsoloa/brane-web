import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd, breadcrumbList } from "@/components/json-ld";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const doc = await getDocBySlug(params.slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | BraneBridge`,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}` },
  };
}

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = await getDocBySlug(params.slug);
  if (!doc) notFound();

  return (
    <article>
      <JsonLd
        data={breadcrumbList([
          { name: "Docs", path: "/docs" },
          { name: doc.title, path: `/docs/${doc.slug}` },
        ])}
      />
      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
      />
    </article>
  );
}
