import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  author: string;
  description: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

const contentDir = path.join(process.cwd(), "src/content");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);
    return data as PostMeta;
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  for (const filename of files) {
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      const result = await remark().use(html).process(content);
      return { ...(data as PostMeta), contentHtml: result.toString() };
    }
  }
  return null;
}
