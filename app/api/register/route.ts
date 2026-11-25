import { NextResponse } from "next/server";
import { packageOptions, site } from "@/lib/site";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isText(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const { name, email, phone, package: packageId, format, age, message, consent } = payload;
  if (
    !isText(name) ||
    name.trim().length < 2 ||
    name.trim().length > 80 ||
    !isText(email) ||
    email.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) ||
    !isText(phone) ||
    !/^\+?[0-9 ]{8,16}$/.test(phone.trim()) ||
    !isText(packageId) ||
    !packageOptions.some((option) => option.id === packageId) ||
    !["Face-to-face", "Online"].includes(String(format)) ||
    !["4–6", "7–12", "13–17", "18–20"].includes(String(age)) ||
    !isText(message) ||
    message.length > 500 ||
    consent !== true
  ) {
    return NextResponse.json({ error: "Please check the form details and consent, then try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Registration email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Email sending is not configured yet. Please contact us by email." },
      { status: 503 },
    );
  }

  const packageLabel = packageOptions.find((option) => option.id === packageId)?.label;
  const text = [
    "Registration inquiry",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    `Package: ${packageLabel}`,
    `Training format: ${format}`,
    `Learners' age group: ${age}`,
    `Message: ${message.trim() || "-"}`,
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: site.emails,
        reply_to: email.trim(),
        subject: "Registration inquiry",
        text,
      }),
    });
  } catch (error) {
    console.error("Could not reach the email provider for a registration request.", error);
    return NextResponse.json(
      { error: "We could not reach the email service. Please try again or email us directly." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Email provider rejected a registration request.", response.status, await response.text());
    return NextResponse.json(
      { error: "The email service could not send your request. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
