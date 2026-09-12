"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="display-font text-lg font-bold">
          Chandan Shaw
          <span className="ml-2 hidden rounded-full bg-marigold-soft px-2.5 py-1 align-middle text-xs font-semibold text-ink sm:inline-block">
            freelance
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] text-slate-soft hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="reveal-press rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-signal"
          >
            Hire me
          </Link>
        </nav>
        <button
          className="rounded-lg border border-line px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Hire me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
