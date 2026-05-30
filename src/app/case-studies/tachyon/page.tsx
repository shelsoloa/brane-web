import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudyCTA } from "@/components/case-study-cta";
import { JsonLd, breadcrumbList } from "@/components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tachyon | BraneBridge Case Study",
  description:
    "BraneBridge built Ex² (exsquared.io) for Tachyon — an edtech matching service connecting accredited academic professionals with researchers seeking assistance. MVP development, deployment, and infrastructure management.",
  alternates: { canonical: "/case-studies/tachyon" },
  openGraph: {
    title: "Tachyon | BraneBridge Case Study",
    description:
      "Built and deployed Ex² — an edtech matching service — from MVP through production on GCP.",
    type: "article",
    url: "/case-studies/tachyon",
  },
};

export default function TachyonCaseStudy() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-white">
      <JsonLd
        data={breadcrumbList([
          { name: "Case Studies", path: "/case-studies" },
          { name: "Tachyon", path: "/case-studies/tachyon" },
        ])}
      />
      <div className="max-w-5xl mx-auto">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to case studies
        </Link>

        <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Tachyon
        </h1>
        <p className="mt-4 text-primary font-semibold text-lg">
          Built &amp; deployed Ex&sup2;, an edtech matching service
        </p>

        <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          <p>
            BraneBridge built Ex&sup2; (
            <a
              href="https://exsquared.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              exsquared.io
            </a>
            ) for Tachyon (
            <a
              href="https://tachyonb2b.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              tachyonb2b.com
            </a>
            ) &mdash; an edtech matching service that connects accredited
            academic professionals with researchers seeking assistance. Matching
            researchers to the right expert by hand doesn&apos;t scale; Ex&sup2;
            automates the fit assessment so a match is only made when the expert
            actually fits the request.
          </p>
          <p>
            BraneBridge developed the MVP, deployed it, and provided critical
            infrastructure management throughout the engagement &mdash; product,
            frontend, backend, evaluation, and operations. The work was delivered
            in 2026.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">What we built</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  AI evaluation tool that assesses academic professionals
                  against research requests
                </li>
                <li>
                  Matching service that pairs accredited experts with
                  researchers seeking assistance
                </li>
                <li>Admin panel for managing matches, users, and review</li>
                <li>API service powering the matching and evaluation flows</li>
                <li>Client application for professionals and researchers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">What we delivered</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  MVP designed and built from first commit to production
                </li>
                <li>Deployed and operated the full stack in production</li>
                <li>
                  Critical infrastructure management across the engagement
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Architecture and stack notes available on request.
        </p>

        <CaseStudyCTA variant="build" />
      </div>
    </section>
  );
}
