import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BraneBridge",
  description:
    "Technical writing from BraneBridge on GCP cost optimization, cloud engineering, and building production systems on Google Cloud.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
          Blog
        </h1>

        <div className="mt-12 space-y-10">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-bold text-[#111111] group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {new Date(post.date + "T00:00:00").toLocaleDateString(
                    "en-CA",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className="mt-2 text-[#374151] leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
