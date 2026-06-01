import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudyCTA } from "@/components/case-study-cta";
import { JsonLd, breadcrumbList } from "@/components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yelp | BraneBridge Case Study",
  description:
    "BraneBridge's team includes engineers who led the development of Yelp Guest Manager — project scoping, API development, and coordinating a team of 15+ engineers.",
  alternates: { canonical: "/case-studies/yelp" },
  openGraph: {
    title: "Yelp | BraneBridge Case Study",
    description:
      "Engineers who led development of Yelp Guest Manager — the same people doing your cost reviews and builds.",
    type: "article",
    url: "/case-studies/yelp",
  },
};

export default function YelpCaseStudy() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Case Studies", path: "/case-studies" },
          { name: "Yelp", path: "/case-studies/yelp" },
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
          Yelp
        </h1>
        <p className="mt-4 text-primary font-semibold text-lg">
          Led development of Yelp Guest Manager
        </p>

        <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          <p>
            The same people doing your cost reviews and builds have shipped
            software at national scale. BraneBridge&apos;s team includes
            engineers who, in senior roles at Yelp (
            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              yelp.com
            </a>
            ), led the development of Yelp Guest Manager &mdash; the restaurant
            front-of-house product for managing waitlists, reservations, and
            seating.
          </p>
          <p>
            That work spanned project scoping, API development, and coordinating
            a team of 15+ engineers through delivery.
          </p>
          <p>
            For an investor weighing a vendor for a portfolio company, that
            track record is the de-risking: a small team that has already run
            infrastructure and shipped products at scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">The role</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>Scoped the project and defined the technical direction</li>
                <li>Led API development for the product</li>
                <li>Coordinated a team of 15+ engineers through delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">The product</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  Yelp Guest Manager &mdash; front-of-house management for
                  restaurants
                </li>
                <li>Waitlist, reservation, and seating workflows at scale</li>
                <li>Built and operated within Yelp&apos;s engineering org</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Reflects prior senior engineering experience on the BraneBridge team.
        </p>

        <CaseStudyCTA variant="cost" />
      </div>
    </section>
  );
}
