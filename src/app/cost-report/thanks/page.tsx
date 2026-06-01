import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks | BraneBridge",
  robots: { index: false, follow: false },
};

export default function CostReportThanksPage() {
  return (
    <div className="bg-[#111827] flex py-10 border-b border-gray-200 min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-6 flex items-center">
        <div className="rounded-lg border-2 border-b-8 border-[#00b368] px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Thanks!
          </h1>
          <p className="mt-4 text-lg text-[#374151] leading-relaxed">
            We&apos;ll be in contact with you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
