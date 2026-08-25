import { Server, Cpu, Monitor, CloudOff, ArrowRight } from "lucide-react";

const FLOW = [
  { icon: Server, label: "Your server", caption: "Financial data lives here" },
  { icon: Cpu, label: "Local AI agent", caption: "Matching & forecasting run here" },
  { icon: Monitor, label: "Your dashboard", caption: "Results shown here" },
];

export default function DataFlowDiagram() {
  return (
    <div className="rounded-card border border-slate/10 bg-white p-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2">
        {FLOW.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-grid">
                  <Icon size={28} className="text-white" strokeWidth={1.75} />
                </div>
                <p className="mt-3 font-display text-sm font-semibold text-ink">{step.label}</p>
                <p className="mt-1 max-w-[9rem] text-xs text-slate">{step.caption}</p>
              </div>
              {i < FLOW.length - 1 && (
                <ArrowRight
                  size={22}
                  className="mb-8 hidden flex-none text-ledger sm:block"
                  strokeWidth={1.75}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 flex max-w-sm items-center gap-3 rounded-card border border-dashed border-slate/25 bg-porcelain px-4 py-3">
        <CloudOff size={20} className="flex-none text-slate" strokeWidth={1.75} />
        <p className="text-xs text-slate">
          <span className="font-semibold text-ink">No external cloud in this path.</span> Financial
          data never leaves the boxes above.
        </p>
      </div>
    </div>
  );
}
