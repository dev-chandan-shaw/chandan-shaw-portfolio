import type { Project } from "@/lib/projects";

export function Motif({ kind, accent }: { kind: Project["motif"]; accent: string }) {
  if (kind === "basket") {
    return (
      <div className="paper-grid relative h-52 overflow-hidden" style={{ background: "#F4F9F4" }}>
        <div className="absolute left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">
          Oyster • in stock
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          {[
            { n: "Oyster 500g", p: "₹149" },
            { n: "Button 400g", p: "₹129" },
            { n: "Veg box 3kg", p: "₹349" },
          ].map((c) => (
            <div key={c.n} className="flex-1 rounded-xl border border-line bg-white px-3 py-3">
              <div
                className="h-10 rounded-lg"
                style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}55)` }}
              />
              <p className="mt-2 text-xs font-semibold">{c.n}</p>
              <p className="text-xs text-slate-soft">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "calendar") {
    return (
      <div className="relative h-52 overflow-hidden bg-[#F6F2FF] px-6 py-5">
        <div className="grid grid-cols-4 gap-2">
          {["9:00", "10:00", "11:30", "1:00", "2:30", "4:00", "5:30", "6:30"].map((t, i) => (
            <div
              key={t}
              className={`rounded-lg border px-2 py-2 text-center text-xs font-semibold ${
                i === 1 || i === 5 ? "border-transparent bg-ink text-white" : "border-line bg-white"
              }`}
            >
              {t}
              <span className="block text-[10px] font-normal opacity-70">
                {i === 1 || i === 5 ? "booked" : "open"}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-soft">UPI advance locks the chair. No double booking.</p>
      </div>
    );
  }
  if (kind === "ledger") {
    return (
      <div className="h-52 overflow-hidden bg-[#EFF3FF] px-6 py-5">
        {[
          ["#1042 — 12 items", "Packed", "₹2,340"],
          ["#1041 — 6 items", "Out for delivery", "₹980"],
          ["#1040 — 3 items", "Delivered", "₹540"],
        ].map(([a, b, c]) => (
          <div
            key={a}
            className="mb-2 flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2.5 text-xs"
          >
            <span className="font-semibold">{a}</span>
            <span className="rounded-full bg-mist px-2 py-0.5">{b}</span>
            <span className="font-semibold">{c}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="h-52 overflow-hidden bg-[#ECFAF8] px-6 py-5">
      <div className="rounded-xl border border-line bg-white p-3">
        <p className="text-xs font-semibold">This month</p>
        <div className="mt-2 flex h-16 items-end gap-1.5" aria-hidden>
          {[35, 55, 42, 70, 58, 82, 64, 90, 74, 60, 78, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: accent, opacity: i > 8 ? 1 : 0.35 }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-soft">Parsed on-device. Nothing leaves the phone.</p>
      </div>
    </div>
  );
}
