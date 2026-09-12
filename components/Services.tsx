import Link from "next/link";
import { site } from "@/lib/site";
import { SectionIntro } from "./SectionIntro";
import { Reveal } from "./Reveal";

const services = [
  {
    name: "Mobile apps",
    like: "Ordering, booking, tracking",
    includes: "React Native customer apps with auth, catalogs or slots, payments and push.",
  },
  {
    name: "Web apps + admin",
    like: "Dashboards that get used",
    includes: "Next.js or Angular screens — orders, stock, schedules, users and roles.",
  },
  {
    name: "Backend + APIs",
    like: "One clean API",
    includes: "Spring Boot + PostgreSQL: auth, domain models, webhooks and admin endpoints.",
  },
  {
    name: "MVP landing pages",
    like: "Validate before building",
    includes: "One fast page with waitlist form, analytics and Vercel deploy.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-line bg-mist/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro
          kicker="Services"
          title="Clear scopes, weekly demos"
          body="Fixed-scope builds with a demo you can open on your phone every week. Same scopes mirrored on my marketplace profiles."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="reveal-lift h-full rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold text-signal">{s.like}</p>
                <h3 className="display-font mt-1 text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-slate-soft">{s.includes}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/#contact"
            className="reveal-press rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-deep"
          >
            Discuss your project
          </Link>
          <a
            href={site.fiverr}
            target="_blank"
            rel="noreferrer"
            className="reveal-press rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold hover:border-hover"
          >
            Fiverr profile
          </a>
          <a
            href={site.upwork}
            target="_blank"
            rel="noreferrer"
            className="reveal-press rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold hover:border-hover"
          >
            Upwork profile
          </a>
        </div>
      </div>
    </section>
  );
}
