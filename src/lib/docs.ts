import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface DocMeta {
  title: string;
  slug: string;
  description: string;
}

export interface Doc extends DocMeta {
  contentHtml: string;
}

const contentDir = path.join(process.cwd(), "src/content/docs");

function normalizeMeta(data: Record<string, unknown>): DocMeta {
  return data as unknown as DocMeta;
}

export function getAllDocs(): DocMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);
    return normalizeMeta(data);
  });
}

export function getAllDocSlugs(): string[] {
  return getAllDocs().map((d) => d.slug);
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  for (const filename of files) {
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      const result = await remark().use(html).process(content);
      return { ...normalizeMeta(data), contentHtml: result.toString() };
    }
  }
  return null;
}
