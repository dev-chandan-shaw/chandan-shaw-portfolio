import { SectionIntro } from "./SectionIntro";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "A short call about your users, must-have flows and timeline. You get an honest read on whether an app is worth it.",
  },
  {
    n: "02",
    t: "Proposal",
    d: "Scope, screens, data model and timeline in writing. Milestones can run through a marketplace for protection.",
  },
  {
    n: "03",
    t: "Build in the open",
    d: "Weekly demo link for your phone. Core flows working early — polish last.",
  },
  {
    n: "04",
    t: "Launch and handover",
    d: "App builds and web deploys, short training notes, fixes window included. You own the code and data.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <SectionIntro
        kicker="How we'll work"
        title="Boring process, on purpose"
        body="Four steps, written down, demo every week."
      />
      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <li className="reveal-lift h-full rounded-2xl border border-line bg-white p-5">
              <p className="code-font text-sm text-slate-soft">{s.n}</p>
              <h3 className="display-font mt-1 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-soft">{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
