import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { SectionNav } from "@/components/section-nav";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const BOOKING_URL = "https://cal.com/branebridge/intro";
const COST_REPORT_URL = "/cost-report";

export default function Home() {
  return (
    <div>
      <SectionNav />
      <Hero />
      <TrustStrip />
      <Process />
      <Methods />
      <Pricing />
      <Cases />
      <About />
      <Engineering />
      <FAQ />
      <CTA />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared layout helpers                                              */
/* ------------------------------------------------------------------ */

function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section className={`px-6 py-20 sm:py-28 ${className ?? ""}`} id={id}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <Section className="bg-white pt-24 sm:pt-32 pb-20 sm:pb-28" id="hero">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05]">
        Cut your GCP bill 15% in 7 days. Or pay $0.
      </h1>

      <p className="mt-8 text-xl sm:text-2xl text-[#374151] leading-relaxed max-w-3xl">
        BraneBridge runs cloud for teams spending $20k+/mo on Google Cloud
        Platform. Cost optimization, infrastructure, and engineering; without a
        retainer.
      </p>

      <div className="mt-10">
        <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
          <a href={COST_REPORT_URL}>Get your cost leak report</a>
        </Button>
        <p className="mt-3 text-sm text-[#6b7280]">
          No system access needed for the initial report.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Trust strip — thin band directly under the Hero                    */
/* ------------------------------------------------------------------ */

function TrustStrip() {
  // Replace these wordmarks with real logo files when available, e.g.
  // <Image src="/images/logos/yelp.svg" alt="Yelp" width={64} height={20} />
  const companies = ["Yelp", "OtO", "Rainbird"];

  return (
    <section className="bg-[#f8f9fa] border-y border-[#e5e7eb] px-6 py-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 text-sm text-[#374151] lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>
            <span className="font-bold text-primary">$1.6M+</span> saved
          </span>
          <span className="hidden h-4 w-px bg-[#d1d5db] sm:inline-block" />
          <span>
            <span className="font-bold text-primary">20+</span> production
            services shipped
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-[#6b7280]">Worked with</span>
          {companies.map((name) => (
            <span
              key={name}
              className="font-semibold tracking-tight text-[#4b5563]"
            >
              {name}
            </span>
          ))}
          <span className="text-[#6b7280]">and 10+ others</span>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <Section className="bg-[#1e293b]" id="process">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e2e8f0] leading-snug">
        How we work
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-[#94a3b8] leading-relaxed max-w-3xl">
        Three steps. No retainers. You only pay from verified savings on your
        bill.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        <Card className="bg-[#1e293b] border-2 border-b-8 border-primary">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-[#e2e8f0]">
              1. 48-Hour Cost Leak Report
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-[#94a3b8] leading-[1.7]">
            Upload a billing export and get a one-page estimate (conservative /
            expected / aggressive) with your top 3 fixes by dollar impact.
          </CardContent>
        </Card>
        <Card className="bg-[#1e293b] border-2 border-b-8 border-primary">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-[#e2e8f0]">
              2. 7-Day Read-Only Audit
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-[#94a3b8] leading-[1.7]">
            Under NDA and read-only IAM, we pinpoint leaks across your GCP
            environment and deliver a prioritized, measurable savings plan.
          </CardContent>
        </Card>

        <Card className="bg-[#1e293b] border-2 border-b-8 border-primary">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-[#e2e8f0]">
              3. 30-Day Savings Plan &amp; Execution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-[#94a3b8] leading-[1.7]">
            We implement with staged, monitored, rollback-ready changes, send
            weekly savings deltas, and you pay 25% of verified first-year
            savings only after it shows on your bill.
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Methods() {
  return (
    <Section className="bg-white" id="methods">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-snug">
        Why it works
      </h2>

      <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2 text-lg text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
        <li>Right-size autoscaling for spiky Cloud Run and GKE traffic</li>
        <li>
          Prune BigQuery scans (partitions, clustering, materialized views)
        </li>
        <li>Right-size Cloud SQL classes and storage tiers</li>
        <li>Cut waste: idle services, zombie workloads, unwanted egress</li>
        <li>Stage &rarr; test &rarr; monitor; no performance regressions</li>
      </ul>
    </Section>
  );
}

function Pricing() {
  return (
    <Section className="bg-[#1e293b]" id="pricing">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e2e8f0] leading-snug">
        Pricing &amp; guarantee
      </h2>

      <div className="mt-8 space-y-5 text-lg sm:text-xl text-[#cbd5e1] leading-[1.7] max-w-3xl">
        <p>
          <span className="font-bold text-[#e2e8f0]">Pricing:</span>{" "}
          Savings-share only &mdash; 25% of verified first-year savings.
        </p>
        <p>
          <span className="font-bold text-[#e2e8f0]">Guarantee:</span> If we
          don&apos;t identify &ge;15% of savings, you pay $0.
        </p>
      </div>

      <div className="mt-10">
        <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
          <a href={COST_REPORT_URL}>Get your cost leak report</a>
        </Button>
      </div>
    </Section>
  );
}

function Cases() {
  return (
    <Section className="bg-white" id="cases">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-snug">
        Case highlights
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-[#374151] leading-relaxed max-w-3xl">
        Real engagements with spiky traffic and heavy analytics. Client names
        withheld; references available under NDA.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="py-8">
            <p className="text-lg font-bold text-[#0a0a0a]">
              Case 1 &mdash; Spiky SaaS/IoT Workloads
            </p>
            <p className="mt-2 text-primary font-semibold">
              ~$525K/yr saved. Unit cost down 87%.
            </p>

            <p className="mt-6 font-semibold text-[#0a0a0a]">What we changed</p>
            <ul className="mt-2 space-y-1.5 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
              <li>
                Migrated service workloads from Cloud Functions to Cloud Run
              </li>
              <li>
                Right-sized autoscaling and minimized cold start times for Cloud
                Run services
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

            <p className="mt-6 font-semibold text-[#0a0a0a]">How we verified</p>
            <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
              Weekly reporting on Per Unit Cost derived from primary service
              usage metrics.
            </p>

            <p className="mt-6 font-semibold text-[#0a0a0a]">Outcome</p>
            <ul className="mt-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
              <li>
                $6.00/unit/month reduced to $0.75/unit/month (~87&ndash;88%
                reduction).
              </li>
              <li>Annualized savings ~$525K/yr.</li>
              <li>Fleet size doubled during the engagement.</li>
            </ul>
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

            <p className="mt-6 font-semibold text-[#0a0a0a]">What we changed</p>
            <ul className="mt-2 space-y-1.5 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
              <li>
                Implemented medallion architecture with Dataform across 20+
                workloads
              </li>
              <li>Added materialized views for hot aggregates</li>
              <li>Re-partitioned and clustered high-scan tables</li>
            </ul>

            <p className="mt-6 font-semibold text-[#0a0a0a]">How we verified</p>
            <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
              Month-over-month Cloud Billing export plus{" "}
              <code className="text-sm">INFORMATION_SCHEMA.JOBS*</code> reports
              to confirm bytes scanned and spend deltas.
            </p>

            <p className="mt-6 font-semibold text-[#0a0a0a]">Outcome</p>
            <ul className="mt-2 text-[#1a1a1a] leading-[1.7] list-disc pl-5 marker:text-primary">
              <li>
                BigQuery analysis spend $10K/month reduced to $3K/month (~70%
                reduction).
              </li>
              <li>Annualized savings ~$84K/yr.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Engineering() {
  return (
    <Section className="bg-[#f0f1f3]" id="engineering">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] leading-snug">
        Beyond cost optimization
      </h2>

      <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
        <p>
          Cost work is the wedge, not the whole story. BraneBridge also takes on
          cloud engineering for early-stage and growth teams on GCP &mdash; MVP
          builds, infrastructure-as-code (Pulumi), CI/CD, security hardening,
          and migration work. Projects are scoped and priced separately from the
          savings-share audit.
        </p>
        <p>
          If you&apos;re past prototype and want your GCP stack built the way it
          would be at a mature engineering org, we can help.
        </p>
      </div>

      <p className="mt-8 text-lg">
        <a
          href="mailto:contact@branebridge.com?subject=Engineering%20engagement"
          className="text-primary font-medium hover:underline"
        >
          Talk to us about an engineering engagement &rarr;
        </a>
      </p>
    </Section>
  );
}

function About() {
  return (
    <Section className="bg-white" id="about">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
        Who&apos;s behind BraneBridge
      </h2>

      <div className="mt-8 space-y-5 text-lg text-[#111111] leading-[1.7] max-w-3xl">
        <p>
          BraneBridge was founded and is run by Sheldon Soloa, a cloud engineer
          with 10+ years of experience building and operating production systems
          on GCP.
        </p>
        <p>
          As a lead cloud engineer, Sheldon has led teams from Series B through
          acquisition,{" "}
          <span className="font-bold text-primary">
            saving companies more than $1.6M in cumulative GCP spend.
          </span>
        </p>
        <p>
          BraneBridge launched in 2024 as a trade compliance service. The
          company refocused in 2025 on providing GCP cost optimization and cloud
          engineering to early &amp; growth stage startups.
        </p>
        <p>Based in Toronto, Ontario.</p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-end">
        <Image
          src="/images/sheldon-headshot.jpg"
          alt="Sheldon Soloa, Founder of BraneBridge"
          width={140}
          height={140}
          className="rounded-md flex-shrink-0"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-[#0a0a0a]">Sheldon Soloa</p>
          <p className="text-sm text-[#111111] leading-[1.7]">
            Founder &amp; Principal Engineer
          </p>
          <div className="flex items-center gap-2">
            <a href="mailto:contact@branebridge.com">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sheldon-soloa/">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Will this hurt performance?",
      a: "No. We stage, test, and monitor every change with rollback ready.",
    },
    {
      q: "How does access work?",
      a: "Read-only IAM under mutual NDA for the 7-day audit. Revoke anytime. Implementation is gated and reviewed.",
    },
    {
      q: "Do you need production access?",
      a: "Read-only for the audit. Implementation goes through PRs and IaC where possible.",
    },
    {
      q: "Do you cover AWS?",
      a: "GCP first. AWS coming.",
    },
    {
      q: "Can legal sign an NDA?",
      a: "Yes. Yours or ours.",
    },
    {
      q: "What if you don't find 15% in savings?",
      a: "You pay $0.",
    },
  ];

  return (
    <Section className="bg-[#f0f1f3]" id="faq">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]">
        Frequently asked questions
      </h2>

      <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {faqs.map((item) => (
          <div key={item.q}>
            <p className="text-lg font-bold text-[#0a0a0a]">{item.q}</p>
            <p className="mt-2 text-lg text-[#111111] leading-[1.7]">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="bg-white" id="cta">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
          Find where you&apos;re burning spend
        </h2>

        <p className="mt-5 text-lg sm:text-xl text-[#374151] leading-relaxed max-w-2xl mx-auto">
          Spending $20k+/mo on Google Cloud Platform? Book a call and we&apos;ll
          start with a cost leak report. No system access needed.
        </p>

        <Card className="mt-10 max-w-md mx-auto">
          <CardContent className="py-8 flex flex-col items-center gap-4">
            <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
              <a href={COST_REPORT_URL}>Get your cost leak report</a>
            </Button>

            <p className="text-sm text-[#374151]">
              Prefer to talk first?{" "}
              <Button
                variant="link"
                asChild
                className="px-0 text-sm text-primary hover:text-primary/80"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call.
                </a>
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
