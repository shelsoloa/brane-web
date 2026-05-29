import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | BraneBridge",
  description:
    "Documentation for working with BraneBridge — guides for GCP cost optimization and cloud engineering.",
};

export default function DocsHome() {
  return (
    <article>
      <h1 className="text-4xl font-bold tracking-tight text-[#111111]">Docs</h1>
      <p className="mt-6 text-lg text-[#374151] leading-relaxed">
        Guides for working with BraneBridge. Start with the walkthroughs below to
        get the data we need to find savings in your GCP bill.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">Guides</h2>
      <ul className="mt-4 space-y-3">
        <li>
          <Link
            href="/docs/how-to-pull-gcp-billing-export"
            className="text-primary hover:underline"
          >
            How to pull a GCP Billing Export
          </Link>
          <p className="text-[#374151]">
            Enable detailed billing export to BigQuery so we can analyze your
            spend down to the SKU.
          </p>
        </li>
      </ul>
    </article>
  );
}
