"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("done");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMessage("Couldn't send just now — email me directly instead.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-marigold">Contact — email only</p>
          <h2 className="display-font mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            Tell me about your project. I&apos;ll reply within a day.
          </h2>
          <p className="mt-3 max-w-md leading-7 text-white/70">
            A short intro call, no pressure and no jargon. If a smaller build would do, I&apos;ll
            say so.
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-white/80">
            <li>
              Prefer marketplaces?{" "}
              <a className="underline" href={site.upwork} target="_blank" rel="noreferrer">
                Upwork
              </a>{" "}
              or{" "}
              <a className="underline" href={site.fiverr} target="_blank" rel="noreferrer">
                Fiverr
              </a>
            </li>
            <li>
              Direct:{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              •{" "}
              <a className="underline" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 text-ink">
          {status === "done" ? (
            <div>
              <p className="display-font text-xl font-bold">Got it — thank you.</p>
              <p className="mt-2 text-slate-soft">
                Your note is on its way to {site.email}. I reply within one business day. For
                anything urgent, call {site.phoneDisplay}.
              </p>
              <button
                className="mt-4 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-hover"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Your name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 font-normal outline-none focus:border-signal"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 font-normal outline-none focus:border-signal"
                  />
                </label>
              </div>
              <label className="block text-sm font-semibold">
                Project type
                <select
                  name="type"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 font-normal outline-none focus:border-signal"
                  defaultValue="Mobile app"
                >
                  <option>Mobile app</option>
                  <option>Web app / dashboard</option>
                  <option>Backend / API</option>
                  <option>Landing page</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block text-sm font-semibold">
                Tell me in 2–3 lines
                <textarea
                  name="details"
                  required
                  rows={4}
                  placeholder="What should it do, who is it for, and when do you need it?"
                  className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 font-normal outline-none focus:border-signal"
                />
              </label>
              <button
                disabled={status === "sending"}
                className="reveal-press w-full rounded-full bg-signal px-4 py-3 text-sm font-semibold text-white hover:bg-signal-deep disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : `Send — replies from ${site.email}`}
              </button>
              {message && <p className="text-sm text-red-700">{message}</p>}
              <p className="text-xs text-slate-soft">
                Email only — no calls booked automatically. Your details go straight to my
                inbox, nowhere else.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
