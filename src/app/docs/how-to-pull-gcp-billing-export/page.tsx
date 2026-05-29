import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to pull a GCP Billing Export | BraneBridge",
  description:
    "Step-by-step guide to enabling detailed Cloud Billing export to BigQuery so BraneBridge can analyze your GCP spend.",
};

export default function HowToPullGcpBillingExport() {
  return (
    <article>
      <h1 className="text-4xl font-bold tracking-tight text-[#111111]">
        How to pull a GCP Billing Export
      </h1>
      <p className="mt-6 text-lg text-[#374151] leading-relaxed">
        To find savings, we need your detailed billing data. The cleanest way to
        share it is to enable Cloud Billing export to BigQuery, then grant us
        read access to that dataset. This walkthrough takes about ten minutes and
        requires the <strong>Billing Account Administrator</strong> and{" "}
        <strong>BigQuery Admin</strong> roles.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">
        1. Create a dataset for the export
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        In the Google Cloud console, open <strong>BigQuery</strong> and create a
        new dataset (for example <code>billing_export</code>) in the project you
        want to hold the data. Pick a location close to your workloads and leave
        the default table expiration off so historical data is retained.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">
        2. Enable detailed usage cost export
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Go to <strong>Billing → Billing export → BigQuery export</strong>. Under{" "}
        <strong>Detailed usage cost</strong>, click <strong>Edit settings</strong>
        , then select the project and the dataset you created in step 1. Save.
        Detailed export includes per-resource and per-SKU breakdowns, which is
        what we use to spot waste.
      </p>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Data starts flowing within a few hours. Note that export is not
        backfilled — it only captures usage from the moment it is enabled, so the
        sooner it is turned on, the more history we have to work with.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">
        3. Grant BraneBridge read access
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        In BigQuery, open the dataset, click <strong>Sharing → Permissions</strong>
        , and add the service account or email we provide with the{" "}
        <strong>BigQuery Data Viewer</strong> role. Read-only access is all we
        need — we never modify your data or resources.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-[#111111]">
        4. Send us the details
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Reply to your onboarding thread with the project ID and dataset name. We
        will confirm access and begin the analysis. If you would rather not grant
        direct access, you can also export the billing tables to CSV and share
        them securely — but a live BigQuery connection keeps the data current.
      </p>
    </article>
  );
}
