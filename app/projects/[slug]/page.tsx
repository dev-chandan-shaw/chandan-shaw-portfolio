import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { Motif } from "@/components/Motif";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — case study`,
    description: `${p.subtitle}. ${p.outcome}`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <nav aria-label="Breadcrumb">
        <ol className="flex min-w-0 items-center gap-2 text-[13px] text-slate-soft">
          <li className="shrink-0">
            <Link href="/#work" className="hover:text-ink hover:underline">
              Work
            </Link>
          </li>
          <li aria-hidden="true" className="shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M4.5 2.5 8 6l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li aria-current="page" className="truncate font-medium text-ink">
            {p.title}
          </li>
        </ol>
      </nav>
      <p className="mt-5 inline-block rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold">
        {p.place}
      </p>
      <h1 className="display-font mt-3 text-4xl font-extrabold sm:text-5xl">{p.title}</h1>
      <p className="mt-2 text-lg text-slate-soft">{p.subtitle}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line">
        <Motif kind={p.motif} accent={p.accent} />
      </div>

      <p className="mt-8 border-l-4 pl-4 text-lg leading-8" style={{ borderColor: p.accent }}>
        {p.outcome}
      </p>

      <div className="mt-6 space-y-4 text-[16px] leading-7 text-slate-soft">
        {p.description.map((d) => (
          <p key={d.slice(0, 24)}>{d}</p>
        ))}
      </div>

      <h2 className="display-font mt-10 text-2xl font-bold">What&apos;s inside</h2>
      <ul className="mt-4 space-y-2.5">
        {p.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[15px] leading-6">
            <span
              className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full"
              style={{ background: p.accent }}
              aria-hidden
            />
            {f}
          </li>
        ))}
      </ul>

      {p.roadmap && (
        <>
          <h2 className="display-font mt-10 text-2xl font-bold">Roadmap</h2>
          <ol className="mt-4 space-y-2.5">
            {p.roadmap.map((r) => (
              <li key={r} className="code-font rounded-xl bg-mist px-4 py-2.5 text-sm">
                {r}
              </li>
            ))}
          </ol>
        </>
      )}

      <div className="mt-8 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full bg-mist px-3 py-1 text-xs text-slate-soft">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3 rounded-2xl border border-line bg-mist/60 p-6">
        <Link
          href="/#contact"
          className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-deep"
        >
          Discuss a similar build
        </Link>
        <a
          href={site.upwork}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-semibold hover:border-hover"
        >
          Upwork profile
        </a>
      </div>
    </main>
  );
}
