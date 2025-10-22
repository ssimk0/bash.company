import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      console.log("Contact form submission (no email sent):", { name, email, message });
      return NextResponse.json(
        { success: true, message: "Message received (email not configured)" },
        { status: 200 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "your-email@bash.company",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #374151; margin-bottom: 5px; }
              .field-value { background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #d1d5db; }
              .footer { margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Bash.company Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the contact form on bash.company</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailData);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
