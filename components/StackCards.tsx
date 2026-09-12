import { Reveal } from "./Reveal";

const groups = [
  {
    name: "Mobile",
    tech: "React Native • Kotlin • Swift",
    does: "Customer-facing apps for iOS and Android with offline support and push.",
  },
  {
    name: "Frontend",
    tech: "Next.js • React • Angular",
    does: "Fast marketing pages and admin screens with tables, roles and clear states.",
  },
  {
    name: "Backend",
    tech: "Spring Boot • Express.js • PostgreSQL",
    does: "Auth, catalogs, orders, slots and payments behind one clean API.",
  },
  {
    name: "Ship",
    tech: "Vercel • Oracle VPS • Expo builds",
    does: "Deploys, payment wiring, analytics, tests and handover docs.",
  },
];

export function StackCards() {
  return (
    <section aria-label="Stack" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-signal">Stack</p>
            <h2 className="display-font mt-2 text-3xl font-bold leading-tight">
              One person across the whole loop
            </h2>
            <p className="mt-3 text-[17px] leading-7 text-slate-soft">
              The tools I build with daily — mobile, frontend, backend and delivery.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 70}>
              <div className="reveal-lift h-full rounded-2xl border border-line bg-paper p-5">
                <p className="display-font text-lg font-bold">{g.name}</p>
                <p className="code-font mt-1.5 text-xs leading-5 text-signal">{g.tech}</p>
                <p className="mt-3 text-sm leading-6 text-slate-soft">{g.does}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
