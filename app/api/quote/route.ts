import { NextResponse } from "next/server";

/**
 * Receives a quote request from the site's form and forwards it to the
 * Google Apps Script web app that appends a row to Jason's lead sheet and
 * emails him. The script URL lives in QUOTE_WEBHOOK_URL (Vercel env var) so
 * it is never committed.
 */

const REQUIRED_FIELDS = [
  "name",
  "phone",
  "vehicle",
  "tier",
  "service",
  "city",
  "utilities",
] as const;

const MAX_FIELD_LENGTH = 500;
const MAX_NOTES_LENGTH = 2000;

function asText(value: unknown, limit = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not read that submission." },
      { status: 400 },
    );
  }

  // Honeypot: real people never see this field, bots fill it in. Answer with a
  // normal success so the bot has no signal that it was caught.
  if (asText(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !asText(body[field]));
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please fill in the required fields.", missing },
      { status: 400 },
    );
  }

  const lead = {
    submittedAt: new Date().toISOString(),
    name: asText(body.name),
    phone: asText(body.phone),
    email: asText(body.email),
    vehicle: asText(body.vehicle),
    tier: asText(body.tier),
    service: asText(body.service),
    city: asText(body.city),
    zip: asText(body.zip),
    preferredDate: asText(body.preferredDate),
    utilities: asText(body.utilities),
    notes: asText(body.notes, MAX_NOTES_LENGTH),
  };

  const endpoint = process.env.QUOTE_WEBHOOK_URL;

  // No endpoint configured yet. Never report success -- a lead that vanishes
  // silently is worse than one the customer knows to send by text instead.
  if (!endpoint) {
    console.error("QUOTE_WEBHOOK_URL is not set; dropped lead:", lead);
    return NextResponse.json(
      { ok: false, error: "The form isn't finished setting up." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });

    // Apps Script answers 200 even when its own code throws, so the body is
    // the only honest signal that the row actually landed in the sheet.
    const reply = await response.text();

    if (!response.ok || !reply.includes('"result":"success"')) {
      console.error(
        "Lead webhook rejected submission:",
        response.status,
        reply.slice(0, 300),
        lead,
      );
      return NextResponse.json(
        { ok: false, error: "We couldn't save that. Please text us instead." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Lead webhook unreachable:", error, lead);
    return NextResponse.json(
      { ok: false, error: "We couldn't save that. Please text us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
