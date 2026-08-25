const rows = [
  { label: "INV-20394", institution: "Bright Future Academy", amount: "₦450,000", status: "Reconciled" },
  { label: "INV-20395", institution: "Lakeside Grammar School", amount: "₦280,000", status: "Reconciled" },
  { label: "INV-20396", institution: "St. Augustine College", amount: "₦610,000", status: "Pending" },
];

export default function LedgerCard() {
  return (
    <div className="rounded-card border border-grid/10 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-ink">Today's reconciliation</span>
        <span className="rounded-full bg-ledger/10 px-2.5 py-1 font-mono text-xs text-ledger">Live</span>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between border-t border-slate/10 pt-3 first:border-t-0 first:pt-0">
            <div>
              <p className="font-mono text-xs text-slate">{row.label}</p>
              <p className="text-sm text-ink">{row.institution}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-ink">{row.amount}</p>
              <p
                className={`text-xs ${
                  row.status === "Reconciled" ? "text-ledger" : "text-amber"
                }`}
              >
                {row.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
