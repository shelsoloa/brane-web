import type { Metadata } from "next";
import { RequestCostLeakReportForm } from "@/components/request-cost-report-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cost leak report | BraneBridge",
  description:
    "Send us your GCP billing export and we'll return a one-page cost leak report within 48 hours.",
  alternates: { canonical: "/cost-report" },
};

export default function CostReportPage() {
  return (
    <div className="bg-[#111827] flex py-10 border-b border-gray-200">
      <Card className="max-w-2xl mx-auto border-2 border-b-8 border-[#00b368]">
        <CardContent className="py-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
            Get your cost leak report
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#374151] leading-relaxed">
            Get a one-page report with conservative, expected, and aggressive
            savings estimates within 48 hours. Just a few details and an
            optional billing export to get started.
          </p>
          <div className="mt-12">
            <RequestCostLeakReportForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
