import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | BraneBridge",
  description:
    "How BraneBridge cuts GCP bills for seed-to-growth companies, keeps the infrastructure running, and ships production software — with the savings numbers to back it up.",
  alternates: { canonical: "/case-studies" },
};

function PortfolioItem({
  title,
  subheader,
  description,
  link,
}: {
  title: string;
  subheader: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} className="group block">
      <Card className="h-full transition-colors group-hover:border-primary">
        <CardContent className="py-8">
          <p className="text-lg font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
            {title}
          </p>
          <p className="mt-2 text-primary font-semibold">{subheader}</p>
          <p className="mt-3 text-[#374151] leading-[1.7]">{description}</p>
          <p className="mt-4 text-sm font-medium text-primary">
            Read more &rarr;
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

function StaticItem({
  title,
  subheader,
  description,
}: {
  title: string;
  subheader: string;
  description: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="py-8">
        <p className="text-lg font-bold text-[#0a0a0a]">{title}</p>
        <p className="mt-2 text-primary font-semibold">{subheader}</p>
        <p className="mt-3 text-[#374151] leading-[1.7]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function CaseStudies() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Case Studies
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[#374151] leading-relaxed max-w-3xl">
          We cut cloud bills for seed-to-growth companies, then keep the
          infrastructure running so you don&apos;t have to hire ahead of need.
          Recent work below.
        </p>
        <p className="mt-4 text-base text-[#6b7280] max-w-3xl">
          Investors: we help portfolio companies extend runway without growing
          the engineering team.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <PortfolioItem
            title="OtO Lawn Care (acquired by Rain Bird)"
            subheader="~$609K/yr cut from a GCP bill — Series B through acquisition"
            description="Cloud cost optimization for a smart-sprinkler hardware company. Unit cost down 87%, BigQuery spend down 70% — the kind of cut that extends runway without cutting headcount."
            link="/case-studies/oto"
          />

          <PortfolioItem
            title="Yelp"
            subheader="Led development of Yelp Guest Manager"
            description="BraneBridge's team includes engineers who led the development of Yelp Guest Manager in senior roles at Yelp — project scoping, API development, and coordinating a team of 15+ engineers. The same people doing your cost reviews and builds."
            link="/case-studies/yelp"
          />

          <PortfolioItem
            title="Gabzebo"
            subheader="Software that closed $200K+ in new business"
            description="Device application, media processing pipelines, and a WYSIWYG editor for an interactive video booth media company. Rebuilt the database and telemetry; migrated SQLite to PostgreSQL on GCP."
            link="/case-studies/gabzebo"
          />

          <PortfolioItem
            title="Tachyon"
            subheader="Built &amp; shipped Ex&sup2; to production"
            description="A matching service connecting accredited academic professionals with researchers seeking assistance, automating the fit assessment before a match is made. MVP built, deployed, and operated."
            link="/case-studies/tachyon"
          />

          <PortfolioItem
            title="PromoExchange"
            subheader="A full payments marketplace, shipped by one engineer"
            description="A marketplace where social media creators sell promotions to businesses, with Stripe escrow holding funds until delivery. Designed, built, and shipped."
            link="/case-studies/promoexchange"
          />

          <StaticItem
            title="brane-classify"
            subheader="Production HS tariff classification API"
            description="A two-stage LLM pipeline (Anthropic SDK, FastAPI, GCP Cloud Run, Supabase) for Canadian customs tariff classification. Built 2024–2025 as the core product of BraneBridge's original trade compliance focus; remains live as a case study."
          />
        </div>
      </div>
    </section>
  );
}
