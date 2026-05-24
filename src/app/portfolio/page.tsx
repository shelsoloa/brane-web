import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | BraneBridge",
  description:
    "Selected work from BraneBridge, including brane-classify, a production HS tariff classification API built on GCP.",
};

export default function Portfolio() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-[#374151] leading-relaxed">
          Production systems built and operated by BraneBridge.
        </p>

        <div className="mt-12">
          <Card>
            <CardContent className="py-8">
              <p className="font-bold text-[#0a0a0a]">brane-classify</p>
              <p className="mt-3 text-[#111111] leading-[1.7]">
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
