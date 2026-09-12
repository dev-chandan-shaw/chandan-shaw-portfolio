import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const proof = [
  { n: "4", label: "projects built" },
  { n: "3", label: "layers covered: mobile, web, backend" },
  { n: "2", label: "mobile platforms: iOS + Android" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="relative">
        <div className="paper-grid-bg" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-14 text-center lg:pt-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1F7A4D]" aria-hidden />
              {site.availability} • {site.location}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-font mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Freelance developer for <span className="marigold-underline">apps, web and backend</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-soft">
              I&apos;m Chandan Shaw. I take projects from idea to a working app — mobile,
              web and API — with clean code and weekly demos you can open on your phone.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="#work"
                className="reveal-press rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-deep"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="reveal-press rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold hover:border-hover"
              >
                Contact
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink/70">
              <a className="underline hover:text-ink" href={site.upwork} target="_blank" rel="noreferrer">
                Upwork
              </a>
              <a className="underline hover:text-ink" href={site.fiverr} target="_blank" rel="noreferrer">
                Fiverr
              </a>
              <a className="underline hover:text-ink" href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="underline hover:text-ink" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 pb-14">
          <Reveal delay={120}>
            <dl className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-center">
              {proof.map((p) => (
                <div key={p.label} className="rounded-2xl border border-line bg-white px-3 py-4">
                  <dt className="display-font text-3xl font-extrabold">{p.n}</dt>
                  <dd className="mt-1 text-xs leading-5 text-slate-soft">{p.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
