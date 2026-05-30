import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BOOKING_URL = "https://cal.com/branebridge/intro";
const COST_REPORT_URL = "/cost-report";
const ENGINEERING_MAILTO =
  "mailto:contact@branebridge.com?subject=Engineering%20engagement";

export function CaseStudyCTA({ variant }: { variant: "cost" | "build" }) {
  const primary =
    variant === "cost"
      ? { label: "Get your cost leak report", href: COST_REPORT_URL }
      : {
          label: "Talk to us about an engineering engagement",
          href: ENGINEERING_MAILTO,
        };

  return (
    <Card className="mt-14 max-w-md mx-auto">
      <CardContent className="py-8 flex flex-col items-center gap-4 text-center">
        <Button size="lg" asChild className="text-base px-8 py-3 h-auto">
          <Link href={primary.href}>{primary.label}</Link>
        </Button>

        <p className="text-sm text-[#374151]">
          Prefer to talk first?{" "}
          <Button
            variant="link"
            asChild
            className="px-0 text-sm text-primary hover:text-primary/80"
          >
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a call.
            </Link>
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}
