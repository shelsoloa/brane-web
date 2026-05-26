"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SPEND_OPTIONS = [
  { value: "<20", label: "Less than $20k / month" },
  { value: "20-50", label: "$20k - $50k / month" },
  { value: "50-100", label: "$50k - $100k / month" },
  { value: "100+", label: "$100k+ / month" },
] as const;

type Status = "idle" | "submitting" | "error";

export function RequestCostLeakReportForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/cost-report", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      router.push("/cost-report/thanks");
    } catch (error) {
      console.error("cost-report submit failed", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">
            Name{" "}
            <span className="font-normal italic text-[#6b7280]">
              (optional)
            </span>
          </FieldLabel>
          <Input id="name" name="name" type="text" />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Work Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="company">Company</FieldLabel>
          <Input id="company" name="company" type="text" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="monthlySpend">
            Approximate Monthly GCP Spend
          </FieldLabel>
          <Select name="monthlySpend" required>
            <SelectTrigger id="monthlySpend">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {SPEND_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="billingExport">
            GCP Billing Export{" "}
            <span className="font-normal italic text-[#6b7280]">
              (CSV, optional)
            </span>
          </FieldLabel>
          <FieldDescription>
            Your data is kept confidential and deleted after report delivery.
          </FieldDescription>
          <Input
            id="billingExport"
            name="billingExport"
            type="file"
            accept=".csv,.json,.zip,.gz"
          />
          <FieldDescription>
            Don&apos;t have this handy? You can send it after.{" "}
            <a
              href="https://branebridge.com/how-to-pull-a-gcp-billing-export"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Here&apos;s how to pull it &rarr;
            </a>
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="additionalNotes">
            Anything else we should know about your stack?{" "}
            <span className="font-normal italic text-[#6b7280]">
              (optional)
            </span>
          </FieldLabel>
          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={2}
            placeholder="Primary services (Cloud Run, GKE, BigQuery, Cloud SQL…), traffic patterns, known pain points, anything else worth flagging."
          />
        </Field>
      </FieldGroup>

      <div className="flex flex-col gap-4 items-end mt-4">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="text-base px-8 py-3 h-auto"
        >
          {status === "submitting" ? "Sending…" : "Find my cost leaks"}
        </Button>
        <p className="text-sm text-[#00b368]">
          $1.6M+ in GCP savings identified across 10+ engagements
        </p>
        <p className="text-sm text-[#6b7280]">
          Prefer to talk first?{" "}
          <a
            href="https://cal.com/branebridge/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Book a call instead
          </a>
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Email contact@branebridge.com and we&apos;ll
          pick it up there.
        </p>
      )}
    </form>
  );
}
