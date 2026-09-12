import { NextResponse } from "next/server";
import { site } from "@/lib/site";

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = body.email;
  const type = typeof body.type === "string" ? body.type.slice(0, 80) : "General enquiry";
  const details = typeof body.details === "string" ? body.details.trim().slice(0, 4000) : "";

  if (!name || !isEmail(email) || !details) {
    return NextResponse.json({ error: "Name, valid email and details are required." }, { status: 400 });
  }

  const subject = `Portfolio enquiry — ${type} — ${name}`;
  const text = `From: ${name} <${email}>\nType: ${type}\n\n${details}\n\n— sent from portfolio contact form`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;

  // v1 without a key: log and succeed so the Vercel demo works end-to-end.
  if (!apiKey) {
    console.log("[contact:dev-mode]", { to, subject, text });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("[contact:resend-error]", err);
      return NextResponse.json({ error: "Email provider rejected the message." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[contact:error]", e);
    return NextResponse.json({ error: "Send failed." }, { status: 500 });
  }
}
