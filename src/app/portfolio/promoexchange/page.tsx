import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromoExchange | BraneBridge Portfolio",
  description:
    "PromoExchange (promoexchange.io) is a marketplace where social media creators sell promotions to businesses, with Stripe escrow payments. Designed, built, and shipped solo by BraneBridge's founder.",
};

export default function PromoExchange() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/portfolio"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to portfolio
        </Link>

        <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
          PromoExchange
        </h1>
        <p className="mt-4 text-primary font-semibold text-lg">
          Founder &amp; sole engineer
        </p>

        <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          <p>
            PromoExchange (
            <a
              href="https://promoexchange.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              promoexchange.io
            </a>
            ) is a marketplace where social media creators sell promotions to
            businesses. Creators publish a public channel listing what they
            offer; buyers book and pay through the site; funds sit in Stripe
            escrow until the promotion is delivered. It replaces the scattered
            DMs and email that this kind of deal usually runs on.
          </p>
          <p>
            Sheldon Soloa, BraneBridge&apos;s founder, designed, built, and
            shipped PromoExchange solo &mdash; product, frontend, backend,
            payments, and infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">What it does</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  Public creator channels for listing and showcasing available
                  promotions
                </li>
                <li>
                  Campaign dashboard for tracking requests, messages, and
                  content delivery
                </li>
                <li>
                  Stripe-backed escrow payments that release on delivery, plus
                  tiered subscriptions and per-transaction fees
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-7">
              <p className="font-semibold text-[#0a0a0a]">How it&apos;s built</p>
              <ul className="mt-3 space-y-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>Next.js / React frontend and API routes, TypeScript</li>
                <li>
                  Stripe for escrow, payouts, subscriptions, and fee collection
                </li>
                <li>
                  Built and operated by one engineer, from first commit to
                  production
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Stack details reflect the public product. Architecture notes available
          on request.
        </p>
      </div>
    </section>
  );
}
