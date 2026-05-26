import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const FROM = "BraneBridge Team <team@mail.branebridge.com>";
const TEAM_RECIPIENTS = ["sheldon@soloa.tech", "sheldon@branebridge.com"];
const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024;

export async function POST(request: Request) {
  const form = await request.formData();

  const prospectName = (form.get("name") ?? "").toString().trim();
  const prospectEmail = (form.get("email") ?? "").toString().trim();
  const prospectCompany = (form.get("company") ?? "").toString().trim();
  const prospectSpend = (form.get("monthlySpend") ?? "").toString().trim();
  const prospectNotes = (form.get("additionalNotes") ?? "").toString().trim();
  const prospectBillingExport = form.get("billingExport");

  if (!prospectEmail || !prospectCompany || !prospectSpend) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email transport is not configured." },
      { status: 500 },
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (prospectBillingExport instanceof File && prospectBillingExport.size > 0) {
    if (prospectBillingExport.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: "Billing export is too large (max 20 MB)." },
        { status: 413 },
      );
    }
    const buffer = Buffer.from(await prospectBillingExport.arrayBuffer());
    attachments.push({
      filename: prospectBillingExport.name || "billing-export",
      content: buffer,
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  // Send notification email to us
  const { error } = await resend.emails.send({
    from: FROM,
    to: ["sheldon@soloa.tech", "sheldon@branebridge.com"],
    subject: `REPORT REQUEST RECEIVED [${prospectEmail}]`,
    text: TeamAlertTemplate(
      prospectName,
      prospectEmail,
      prospectCompany,
      prospectSpend,
      prospectNotes,
      !!prospectBillingExport,
    ),
    attachments,
  });
  if (error) {
    console.error("cost-report email send failed", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502 },
    );
  }

  // Send confirmation email to the user
  const { error: confirmationError } = await resend.emails.send({
    from: FROM,
    to: prospectEmail,
    subject: "Thank you for your report request",
    text: ConfirmationTemplate(
      prospectName,
      prospectCompany,
      prospectSpend,
      prospectNotes,
    ),
  });
  if (confirmationError) {
    console.error(
      "cost-report confirmation email send failed",
      confirmationError,
    );
  }
  return NextResponse.json({ ok: true });
}

function TeamAlertTemplate(
  prospectName: string,
  prospectEmail: string,
  prospectCompany: string,
  prospectSpend: string,
  prospectNotes: string,
  prospectBillingExport: boolean,
) {
  return `
  New report request received:
  Name: ${prospectName}
  Email: ${prospectEmail}
  Company: ${prospectCompany}
  Monthly GCP spend: ${prospectSpend}
  Notes: ${prospectNotes}
  Billing export: ${prospectBillingExport ? "attached" : "not attached"}
  `;
}

function ConfirmationTemplate(
  prospectName: string,
  prospectCompany: string,
  prospectSpend: string,
  prospectNotes: string,
) {
  return `
  Thank you for your report request, ${prospectName}!
  We'll be in contact with you shortly.

  Company: ${prospectCompany}
  Monthly GCP spend: ${prospectSpend}
  Notes: ${prospectNotes}
  `;
}
