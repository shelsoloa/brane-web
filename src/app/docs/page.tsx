import Link from "next/link";
import type { Metadata } from "next";
import { getAllDocs } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs | BraneBridge",
  description:
    "Documentation for working with BraneBridge — guides for GCP cost optimization and cloud engineering.",
  alternates: { canonical: "/docs" },
};

export default function DocsHome() {
  const docs = getAllDocs();

  return (
    <article>
      <h1 className="text-4xl font-bold tracking-tight text-[#111111]">Docs</h1>
      <p className="mt-6 text-lg text-[#374151] leading-relaxed">
        Guides for working with BraneBridge. Start with the walkthroughs below to
        get the data we need to find savings in your GCP bill.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">Guides</h2>
      <ul className="mt-4 space-y-3">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              className="text-primary hover:underline"
            >
              {doc.title}
            </Link>
            <p className="text-[#374151]">{doc.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
