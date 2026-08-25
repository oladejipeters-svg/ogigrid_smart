import PageHeader from "../components/PageHeader.jsx";

const STAGES = [
  { title: "Invoice", body: "Bills are generated per student, term, and fee category." },
  { title: "Payment", body: "Parents and guardians pay through supported channels." },
  { title: "Bank reconciliation", body: "Incoming transfers are matched to open invoices automatically." },
  { title: "Installment monitoring", body: "Partial payment plans are tracked against their schedule." },
  { title: "Arrears", body: "Outstanding balances surface early, before they become a collections problem." },
  { title: "Clearance", body: "A student's account closes out cleanly at term end." },
];

export default function Platform() {
  return (
    <div>
      <PageHeader
        eyebrow="Platform"
        title="How it works"
        description="The financial lifecycle from invoice to clearance, in six stages."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="space-y-8">
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="flex gap-6 border-b border-slate/10 pb-8 last:border-0">
              <span className="font-mono text-sm text-grid">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">{stage.title}</h2>
                <p className="mt-1 text-sm text-slate">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
