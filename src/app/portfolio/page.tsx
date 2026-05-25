import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | BraneBridge",
  description:
    "Selected work from BraneBridge: GCP cost optimization at OtO Lawn Care, the PromoExchange creator marketplace, and brane-classify, a production HS tariff classification API on GCP.",
};

export default function Portfolio() {
  return (
    <section className="px-6 py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          Portfolio
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[#374151] leading-relaxed max-w-3xl">
          Production systems built and operated by BraneBridge.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Link href="/portfolio/oto" className="group block">
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardContent className="py-8">
                <p className="text-lg font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
                  OtO Lawn Care
                </p>
                <p className="mt-2 text-primary font-semibold">
                  ~$609K/yr saved across two GCP engagements
                </p>
                <p className="mt-3 text-[#374151] leading-[1.7]">
                  Cloud cost optimization for a smart-sprinkler hardware company,
                  from Series B through acquisition. Two case studies: spiky
                  SaaS/IoT workloads and analytics/BI.
                </p>
                <p className="mt-4 text-sm font-medium text-primary">
                  Read the case studies &rarr;
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portfolio/promoexchange" className="group block">
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardContent className="py-8">
                <p className="text-lg font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
                  PromoExchange
                </p>
                <p className="mt-2 text-primary font-semibold">
                  Founder &amp; sole engineer
                </p>
                <p className="mt-3 text-[#374151] leading-[1.7]">
                  A marketplace where social media creators sell promotions to
                  businesses, with Stripe escrow holding funds until delivery.
                  Designed, built, and shipped solo.
                </p>
                <p className="mt-4 text-sm font-medium text-primary">
                  Read more &rarr;
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="py-8">
              <p className="text-lg font-bold text-[#0a0a0a]">brane-classify</p>
              <p className="mt-3 text-lg text-[#111111] leading-[1.7]">
                Production HS tariff classification API. Two-stage LLM pipeline
                (Anthropic SDK, FastAPI, GCP Cloud Run, Supabase) for Canadian
                customs tariff classification. Built 2024&ndash;2025 as the core
                product of BraneBridge&apos;s original trade compliance focus;
                remains live as a portfolio piece.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
