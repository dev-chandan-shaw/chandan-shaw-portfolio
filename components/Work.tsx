import Link from "next/link";
import { projects } from "@/lib/projects";
import { Motif } from "./Motif";
import { SectionIntro } from "./SectionIntro";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <SectionIntro
        kicker="Selected work"
        title="Projects across mobile, web and backend"
        body="Each one shows a different layer: ordering flows, scheduling, dashboards and reliable mobile code."
      />
      <div className="mt-10 space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 60, 180)}>
            <Link
              href={`/projects/${p.slug}`}
              className="reveal-lift group grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2"
              aria-label={`${p.title} — open case study`}
            >
              <span className={i % 2 === 1 ? "lg:order-2" : ""} aria-hidden="true">
                <Motif kind={p.motif} accent={p.accent} />
              </span>
              <span className="block p-6 sm:p-8">
                <span className="block text-xs text-slate-soft">{p.place}</span>
                <span className="display-font mt-3 block text-2xl font-bold group-hover:underline">
                  {p.title}
                </span>
                <span className="mt-1 block text-[15px] font-medium text-slate-soft">{p.subtitle}</span>
                <span className="mt-3 block border-l-[3px] pl-3 text-[15px] leading-6" style={{ borderColor: p.accent }}>
                  {p.outcome}
                </span>
                <span className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-mist px-2.5 py-1 text-xs text-slate-soft">
                      {s}
                    </span>
                  ))}
                </span>
                <span className="reveal-press mt-5 inline-block rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white group-hover:bg-signal">
                  Open case study
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-soft">
        Visuals are stylised placeholders for v1 — real device shots plug into the same slots
        when you share them.
      </p>
    </section>
  );
}
