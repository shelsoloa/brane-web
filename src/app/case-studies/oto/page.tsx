import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudyCTA } from "@/components/case-study-cta";
import { JsonLd, breadcrumbList } from "@/components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OtO Lawn Care | BraneBridge Case Study",
  description:
    "Two GCP cost optimization case studies from OtO Lawn Care: ~$525K/yr saved on spiky SaaS/IoT workloads and ~$84K/yr saved on analytics/BI, from Series B through acquisition.",
  alternates: { canonical: "/case-studies/oto" },
  openGraph: {
    title: "OtO Lawn Care | BraneBridge Case Study",
    description:
      "~$609K/yr cut from a GCP bill across two engagements — Series B through acquisition.",
    type: "article",
    url: "/case-studies/oto",
  },
};

export default function OtoCaseStudy() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Case Studies", path: "/case-studies" },
          { name: "OtO Lawn Care", path: "/case-studies/oto" },
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
          OtO Lawn Care
        </h1>
        <p className="mt-4 text-primary font-semibold text-lg">
          ~$609K/yr saved across two GCP engagements
        </p>

        <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          <p>
            A connected-hardware company with a device fleet doubling in the
            field has a cloud bill that grows with every unit &mdash; fast. OtO
            (
            <a
              href="https://otolawn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              otolawn.com
            </a>
            ) builds a smart, self-installing sprinkler that connects to a
            garden hose and Wi-Fi to automate residential watering &mdash; a
            companion app, a fleet of devices in the field, and the telemetry
            that comes with both. The company is a two-time CES Innovation Award
            winner.
          </p>
          <p>
            Sheldon Soloa, BraneBridge&apos;s founder, was a lead software
            engineer at OtO from Series B through the company&apos;s
            acquisition, owning the cloud infrastructure and bringing more than
            $1.6M in cumulative cloud spend under control while the fleet grew.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="py-8">
              <p className="text-lg font-bold text-[#0a0a0a]">
                Case 1 &mdash; Spiky SaaS/IoT Workloads
              </p>
              <p className="mt-2 text-primary font-semibold">
                ~$525K/yr saved. Unit cost down 87%.
              </p>

              <p className="mt-6 font-semibold text-[#0a0a0a]">
                What we changed
              </p>
              <ul className="mt-2 space-y-1.5 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  Migrated service workloads from Cloud Functions to Cloud Run
                </li>
                <li>
                  Right-sized autoscaling and minimized cold start times for
                  Cloud Run services
                </li>
                <li>Removed idle and zombie workloads</li>
                <li>
                  Used profiling to identify and remove bottlenecks in service
                  logic
                </li>
                <li>
                  Implemented budgets, alerts, and labels to prevent regressions
                  and isolate cost by service
                </li>
              </ul>

              <p className="mt-6 font-semibold text-[#0a0a0a]">
                How we verified
              </p>
              <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
                Weekly reporting on Per Unit Cost derived from primary service
                usage metrics.
              </p>

              <p className="mt-6 font-semibold text-[#0a0a0a]">Outcome</p>
              <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
                Before &rarr; After: $6.00 &rarr; $0.75 per unit (~87&ndash;88%
                reduction). Annualized savings ~$525K/yr. Fleet size doubled
                during the engagement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-8">
              <p className="text-lg font-bold text-[#0a0a0a]">
                Case 2 &mdash; Analytics / BI
              </p>
              <p className="mt-2 text-primary font-semibold">
                ~$84K/yr saved. BigQuery spend down 70%.
              </p>

              <p className="mt-6 font-semibold text-[#0a0a0a]">
                What we changed
              </p>
              <ul className="mt-2 space-y-1.5 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
                <li>
                  Implemented medallion architecture with Dataform across 20+
                  workloads
                </li>
                <li>Added materialized views for hot aggregates</li>
                <li>Re-partitioned and clustered high-scan tables</li>
              </ul>

              <p className="mt-6 font-semibold text-[#0a0a0a]">
                How we verified
              </p>
              <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
                Month-over-month Cloud Billing export plus{" "}
                <code className="text-sm">INFORMATION_SCHEMA.JOBS*</code>{" "}
                reports to confirm bytes scanned and spend deltas.
              </p>

              <p className="mt-6 font-semibold text-[#0a0a0a]">Outcome</p>
              <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
                BigQuery analysis spend $10K &rarr; $3K per month (~70%
                reduction). Annualized savings ~$84K/yr.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-lg text-[#111111] leading-[1.7] max-w-3xl">
          For a venture-backed company, a $609K/yr cut is months of runway you
          didn&apos;t have to raise for &mdash; and it didn&apos;t require
          hiring a dedicated cloud engineer to get it. BraneBridge runs the same
          review on any GCP account.
        </p>

        <CaseStudyCTA variant="cost" />
      </div>
    </section>
  );
}
