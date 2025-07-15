"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  console.log(email);

  if (!email || !name || !company || !message) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to branebridge contact
    await transporter.sendMail({
      from: "contact@branebridge.com",
      to: "contact@branebridge.com",
      subject: "New Contact Form Submission",
      text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Message: ${message}
      `,
    });

    // Send thank you email to user

    console.log("Contact email successfully sent.");
    return { success: true };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error: "Failed to process email" };
  }
}
