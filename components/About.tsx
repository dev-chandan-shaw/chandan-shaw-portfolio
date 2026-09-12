import { site } from "@/lib/site";
import { SectionIntro } from "./SectionIntro";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionIntro
            kicker="About"
            title="One developer, full loop"
            body="Design, mobile app, web, backend and deploy — without coordinating four people."
          />
          <div className="mt-6 space-y-4 text-[16px] leading-7 text-slate-soft">
            <p>
              I&apos;m <span className="font-semibold text-ink">Chandan Shaw</span>. My day-to-day
              stack is React Native for mobile, Next.js or Angular for web, Spring Boot +
              PostgreSQL behind it, with online payments where needed. Kotlin when a build truly
              needs native.
            </p>
            <p>
              Recent work: FarmFresh (fresh-produce ordering, building now), an appointment
              scheduling starter, the Xeeva back-office, and an offline-first Kotlin expense
              tracker with 60 unit tests.
            </p>
            <p>
              This site covers freelance work. Profiles and code live on Upwork, Fiverr and
              GitHub — linked below.
            </p>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-mist/70 p-6">
          <p className="font-semibold">Working agreement</p>
          <ul className="mt-3 space-y-2.5 text-[15px] leading-6 text-slate-soft">
            <li>• Scope and timeline agreed in writing before build.</li>
            <li>• Milestones can run through Upwork / Fiverr.</li>
            <li>• Demo link every week you can open on your phone.</li>
            <li>• You own the repo, the store listing and the data.</li>
            <li>• Launch fixes window included.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-hover"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-hover"
            >
              LinkedIn
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
