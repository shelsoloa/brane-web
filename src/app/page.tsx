import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BraneBridgeLogo } from "@/components/logo";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <WhatWeDo />
      <About />
      <CTA />
      <Footer />
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
    <section className={`px-6 py-16 sm:py-24 ${className ?? ""}`} id={id}>
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Hero                                                    */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <Section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24" id="hero">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
        Your back office shouldn&apos;t be your bottleneck.
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-[#374151] leading-relaxed">
        BraneBridge builds automation for freight forwarders in
        Canada&nbsp;&mdash; so your ops team can stop rekeying data and start
        moving freight.
      </p>

      <div className="mt-10">
        <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
          <a href="#cta">Book a conversation</a>
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: Problem — dark background                               */
/* ------------------------------------------------------------------ */

function Problem() {
  return (
    <Section className="bg-[#1e293b]" id="problem">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#e2e8f0] leading-snug">
        Mid-sized freight forwarders are growing, but the back office isn&apos;t
        keeping up.
      </h2>

      <div className="mt-12 space-y-10">
        <div>
          <p className="font-bold text-[#e2e8f0]">Manual document processing.</p>
          <p className="mt-2 text-[#94a3b8] leading-relaxed">
            Every shipment generates a stack of documents&nbsp;&mdash; bills of
            lading, commercial invoices, packing lists, customs declarations.
            Your team is manually reading, rekeying, and cross-referencing this
            data across systems. It&apos;s slow, error-prone, and it
            doesn&apos;t scale.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#e2e8f0]">Disconnected systems.</p>
          <p className="mt-2 text-[#94a3b8] leading-relaxed">
            Your TMS says one thing, your accounting software says another, and
            the actual shipment status lives in someone&apos;s email. Data lives
            in silos, and your team spends hours reconciling instead of
            operating.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#e2e8f0]">Scaling means hiring.</p>
          <p className="mt-2 text-[#94a3b8] leading-relaxed">
            When volume goes up, the only option is adding headcount. Every new
            customer means more data entry, more coordination, more manual work.
            Growth should drive margin, not overhead.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#e2e8f0]">
            Vendor lock-in and inflexible software.
          </p>
          <p className="mt-2 text-[#94a3b8] leading-relaxed">
            Off-the-shelf freight software often forces you into rigid workflows
            that don&apos;t match how your team actually operates. Customization
            means expensive professional services or switching platforms
            entirely.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: What We Do                                              */
/* ------------------------------------------------------------------ */

function WhatWeDo() {
  return (
    <Section className="bg-white" id="what-we-do">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-snug">
        We automate the operational work your team shouldn&apos;t be doing
        manually.
      </h2>

      <div className="mt-12 space-y-10">
        <div>
          <p className="font-semibold text-primary">
            Document processing automation.
          </p>
          <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
            We build systems that read, extract, and route data from shipping
            documents&nbsp;&mdash; so your team doesn&apos;t have to. Bills of
            lading, invoices, customs paperwork&nbsp;&mdash; handled
            automatically.
          </p>
        </div>

        <div>
          <p className="font-semibold text-primary">
            System integration &amp; data flow.
          </p>
          <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
            We connect the systems you already use&nbsp;&mdash; TMS, accounting,
            email, carrier portals&nbsp;&mdash; so data moves between them
            without manual intervention. One entry, everywhere it needs to go.
          </p>
        </div>

        <div>
          <p className="font-semibold text-primary">
            Operational workflow automation.
          </p>
          <p className="mt-2 text-[#1a1a1a] leading-[1.7]">
            Repetitive coordination tasks&nbsp;&mdash; status updates, exception
            handling, report generation&nbsp;&mdash; automated and reliable. Your
            team focuses on the work that actually requires human judgment.
          </p>
        </div>
      </div>

      <p className="mt-12 text-[#1a1a1a] leading-[1.7]">
        Every freight forwarder operates differently. We don&apos;t sell a
        one-size-fits-all platform&nbsp;&mdash; we build automation that fits
        how your team actually works.
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: About                                                   */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <Section className="bg-[#f0f1f3]" id="about">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a0a0a]">
        About BraneBridge
      </h2>

      <div className="mt-8 space-y-4 text-[#111111] leading-[1.7]">
        <p>
          BraneBridge is a Toronto-based software company focused exclusively on
          freight forwarding operations in Canada. Founded by Sheldon Soloa, a
          software engineer with over a decade of experience building
          cloud-native systems, BraneBridge exists to bring modern automation to
          an industry that&apos;s been underserved by technology.
        </p>
        <p>
          We&apos;re not a general-purpose consultancy. We work with freight
          forwarders&nbsp;&mdash; that&apos;s it. We understand the operational
          complexity, the document-heavy workflows, and the pressure to scale
          without ballooning headcount.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start">
        <Image
          src="/images/sheldon-headshot.jpg"
          alt="Sheldon Soloa, Founder of BraneBridge"
          width={120}
          height={120}
          className="rounded-md flex-shrink-0"
        />
        <div>
          <p className="font-bold text-[#0a0a0a]">
            Sheldon Soloa&nbsp;&mdash; Founder
          </p>
          <p className="mt-1 text-[#111111] leading-[1.7]">
            Software engineer. Over a decade building scalable systems. Based in
            Toronto. Focused on making freight forwarding operations run better.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6: CTA — Book a Conversation                               */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <Section className="bg-white" id="cta">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
          Let&apos;s talk about your operations.
        </h2>

        <p className="mt-4 text-[#374151] leading-relaxed max-w-xl mx-auto">
          If your freight forwarding team is spending too much time on manual
          work, we should talk. No pitch deck, no demo&nbsp;&mdash; just a
          conversation about what&apos;s slowing you down.
        </p>

        <Card className="mt-10 max-w-md mx-auto">
          <CardContent className="py-8 flex flex-col items-center gap-4">
            <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
              <a
                href="https://cal.com/shelsola/intro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 20-minute call
              </a>
            </Button>

            <p className="text-sm text-[#374151]">
              Or email us at{" "}
              <Button variant="link" asChild className="px-0 text-sm">
                <a href="mailto:contact@branebridge.com">
                  contact@branebridge.com
                </a>
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7: Footer                                                  */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-[#111827] text-[#d1d5db] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <BraneBridgeLogo width={140} height={35} />
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a
                href="mailto:contact@branebridge.com"
                className="hover:text-white transition-colors"
              >
                contact@branebridge.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a
                href="tel:+16475981817"
                className="hover:text-white transition-colors"
              >
                +1 (647) 598-1817
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span>Toronto, ON, Canada</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-[#9ca3af]">
            &copy; {new Date().getFullYear()} BraneBridge
          </p>
          <a
            href="https://www.linkedin.com/company/branebridge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-white transition-colors"
            aria-label="BraneBridge on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
