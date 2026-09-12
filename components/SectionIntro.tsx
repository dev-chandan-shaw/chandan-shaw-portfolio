export function SectionIntro({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold text-signal">{kicker}</p>
      <h2 className="display-font mt-2 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {body && <p className="mt-3 text-[17px] leading-7 text-slate-soft">{body}</p>}
    </div>
  );
}
