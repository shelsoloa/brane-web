import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

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

const contentDir = path.join(process.cwd(), "src/content/blog");

function normalizeMeta(data: Record<string, unknown>): PostMeta {
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date);
  return { ...(data as unknown as PostMeta), date };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);
    return normalizeMeta(data);
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
      const result = await remark()
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(content);
      return { ...normalizeMeta(data), contentHtml: result.toString() };
    }
  }
  return null;
}
