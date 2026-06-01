---
title: How to Share Your GCP Billing Data
slug: how-to-pull-gcp-billing-export
description: "Step-by-step guide to pulling your GCP billing export so BraneBridge can analyze your cloud spend."
---

# How to Share Your GCP Billing Data

To produce your cost leak report, we need a 30-day summary of your GCP spend by service and SKU. You run a query against your own billing export table and share the results — no IAM grants, no service accounts, no access to your GCP environment.

The whole thing takes about five minutes.

## Prerequisites

You need Cloud Billing export to BigQuery enabled on your billing account. If it's already enabled, skip to Step 2. If not, follow Step 1 first — note that export is not backfilled, so only usage from the moment it's enabled will be captured.

## 1. Enable billing export (if not already active)

In the Google Cloud console, go to **Billing → Billing export → BigQuery export**. Under **Detailed usage cost**, click **Edit settings**, select a project and dataset (or create a new dataset called `billing_export`), and save. Data starts flowing within a few hours.

If you're unsure whether export is already enabled, check **Billing → Billing export** — if a dataset is listed under BigQuery export, you're good.

## 2. Run the summary query

Open BigQuery in the Google Cloud console and run the following query. Replace `your_project.your_dataset.gcp_billing_export_v1_XXXXXX` with your actual billing export table name.

```sql
SELECT
  invoice.month AS invoice_month,
  service.description AS service,
  sku.description AS sku,
  project.id AS project_id,
  SUM(cost) AS cost,
  SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)) AS credits,
  SUM(cost) + SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)) AS net_cost,
  SUM(usage.amount) AS usage_amount,
  usage.unit AS usage_unit
FROM
  `your_project.your_dataset.gcp_billing_export_v1_XXXXXX`
WHERE
  _PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 60 DAY)
GROUP BY
  invoice_month, service, sku, project_id, usage_unit
HAVING
  net_cost > 0.01
ORDER BY
  net_cost DESC
```

This returns a pre-aggregated summary — typically a few hundred rows, under 100KB. No resource names, no user data, no sensitive metadata. Just spend by service, SKU, and project ID.

## 3. Export and share the results

Click **Save Results → CSV** in the BigQuery console. Then either:

- **Upload it** on our [cost report page](/cost-report), or
- **Email it** to [contact@branebridge.com](mailto:contact@branebridge.com) with your company name and approximate monthly GCP spend

That's it. We'll review the data and send back your cost leak report within 48 hours — a one-page estimate (conservative / expected / aggressive) with your top 3 opportunity areas by dollar impact.

## What happens next

If the report shows meaningful savings potential and you want to go deeper, the next step is a 7-day read-only audit under NDA. That's when we request scoped, read-only IAM access to your GCP environment to look at utilization metrics, resource configs, and query patterns — everything needed to turn opportunity areas into a specific, prioritized savings plan.

You can revoke access at any time, and implementation is always gated through PRs and IaC review.

## FAQ

**Do I need to grant BraneBridge any access for the initial report?**
No. You run the query yourself and share the output. We never touch your GCP environment for the cost leak report.

**What if I don't have billing export enabled yet?**
Enable it now (Step 1) and reach out — we can start the report as soon as you have ~7 days of data, though 30+ days gives us a much better picture.

**Can I just send a screenshot of my billing dashboard instead?**
The dashboard view doesn't break down by SKU, which is where most of the savings hide. The query above takes five minutes and gives us 10x more signal.
