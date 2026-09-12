import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="display-font text-lg font-bold">Chandan Shaw</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-soft">
            Freelance developer for apps, web and backend. Remote worldwide.
          </p>
          <p className="mt-3 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#1F7A4D]" aria-hidden />{" "}
            {site.availability}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Direct</p>
          <ul className="mt-3 space-y-2 text-slate-soft">
            <li>
              <a className="hover:text-ink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.github} target="_blank" rel="noreferrer">
                GitHub — dev-chandan-shaw
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn — shawchandan
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Marketplaces</p>
          <ul className="mt-3 space-y-2 text-slate-soft">
            <li>
              <a className="hover:text-ink" href={site.upwork} target="_blank" rel="noreferrer">
                Upwork profile
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.fiverr} target="_blank" rel="noreferrer">
                Fiverr profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-slate-soft sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Chandan Shaw. Built with Next.js, hosted on Vercel.</span>
          <span>FarmFresh is a working title while availability is confirmed.</span>
        </div>
      </div>
    </footer>
  );
}
