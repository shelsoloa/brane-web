import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | BraneBridge",
  description:
    "Selected case studies from BraneBridge: GCP cost optimization, infrastructure management, and product development.",
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

export default function CaseStudies() {
  return (
    <section className="px-6 py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Case Studies
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[#374151] leading-relaxed max-w-3xl">
          Production systems built and operated by BraneBridge.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <PortfolioItem
            title="OtO Lawn Care (acquired by Rain Bird)"
            subheader="~$609K/yr saved across two GCP engagements"
            description="Cloud cost optimization for a smart-sprinkler hardware company, from Series B through acquisition. Two case studies: spiky SaaS/IoT workloads and analytics/BI."
            link="/case-studies/oto"
          />

          <PortfolioItem
            title="PromoExchange"
            subheader="Product, frontend, backend, payments, and infrastructure"
            description="A marketplace where social media creators sell promotions to businesses, with Stripe escrow holding funds until delivery. Designed, built, and shipped."
            link="/case-studies/promoexchange"
          />

          <PortfolioItem
            title="Tachyon"
            subheader="Built &amp; deployed Ex&sup2;"
            description="An edtech matching service connecting accredited academic professionals with researchers seeking assistance, with an AI evaluation tool. MVP built, deployed, and operated."
            link="/case-studies/tachyon"
          />

          <PortfolioItem
            title="brane-classify"
            subheader="Production HS tariff classification API"
            description="A two-stage LLM pipeline (Anthropic SDK, FastAPI, GCP Cloud Run, Supabase) for Canadian customs tariff classification. Built 2024&ndash;2025 as the core product of BraneBridge's original trade compliance focus; remains live as a case study."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
