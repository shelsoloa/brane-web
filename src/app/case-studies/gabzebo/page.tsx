import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabzebo | BraneBridge Case Study",
  description:
    "BraneBridge built the device application, media processing pipelines, and a WYSIWYG editor for interactive presentations for Gabzebo (gabzebo.com), an interactive video booth media company. Software that helped secure $200K+ in new business, deployed on GCP.",
};

export default function GabzeboCaseStudy() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to case studies
        </Link>

        <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Gabzebo
        </h1>
        <p className="mt-4 text-primary font-semibold text-lg">
          $200K+ in new business engagements
        </p>

        <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          <p>
            Gabzebo (
            <a
              href="https://gabzebo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              gabzebo.com
            </a>
            ) is an interactive video booth media company. BraneBridge built the
            application that runs on the booth devices, the media processing
            pipelines behind it, and a WYSIWYG editor for building interactive
            presentations &mdash; the software that helped the business secure
            over $200K in new business engagements.
          </p>
          <p>
            We also rebuilt their database and telemetry, migrating from SQLite
            to PostgreSQL. The system was deployed on GCP.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">What we built</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>Device application running on the interactive video booths</li>
                <li>Media processing pipelines for captured video</li>
                <li>
                  WYSIWYG editor for building interactive presentations
                </li>
                <li>Rebuilt database and telemetry</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">
                How it&apos;s built
              </p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  Database migrated from SQLite to PostgreSQL
                </li>
                <li>Deployed and operated on GCP</li>
                <li>
                  Telemetry rebuilt for visibility into the device fleet
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Architecture and stack notes available on request.
        </p>
      </div>
    </section>
  );
}
