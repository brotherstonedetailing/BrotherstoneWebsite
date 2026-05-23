import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/app/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      area,
      vehicleType,
      year,
      make,
      model,
      services,
      message,
    } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const subject = `New Quote Request from ${firstName} ${lastName}`;
    const textBody = [
      `New quote request from Brotherstone website`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service Area: ${area}, TX`,
      `Vehicle Type: ${vehicleType || "Not specified"}`,
      `Vehicle: ${[year, make, model].filter(Boolean).join(" ") || "Not specified"}`,
      `Services: ${services?.length ? services.join(", ") : "None selected"}`,
      ``,
      `Additional Details:`,
      message || "None",
    ].join("\n");

    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: CONTACT_EMAIL,
          subject,
          text: textBody,
          replyTo: email,
          ...body,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote request.");
      }
    } else if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: CONTACT_EMAIL,
          reply_to: email,
          subject,
          text: textBody,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote request.");
      }
    } else {
      console.log("Quote request received (no email provider configured):");
      console.log(textBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to send your request. Please call us directly." },
      { status: 500 }
    );
  }
}
