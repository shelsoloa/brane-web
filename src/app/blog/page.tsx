import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="px-6 py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Blog
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[#374151] leading-relaxed max-w-3xl">
          Technical writing on GCP cost optimization, cloud engineering, and
          building production systems on Google Cloud.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <Card className="h-full transition-colors group-hover:border-primary">
                <CardContent className="py-8">
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.date + "T00:00:00").toLocaleDateString(
                      "en-CA",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
                    {post.title}
                  </p>
                  <p className="mt-3 text-[#374151] leading-[1.7]">
                    {post.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    Read more &rarr;
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
