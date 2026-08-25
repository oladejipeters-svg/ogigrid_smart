import PageHeader from "../components/PageHeader.jsx";

export default function LocalAISecurity() {
  return (
    <div>
      <PageHeader
        eyebrow="Local AI & Security"
        title="The AI runs on your servers"
        description="A plain-language look at how OSS handles data, and why nothing leaves your infrastructure."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">How it's deployed</h2>
            <p className="mt-2 text-sm text-slate">
              The AI component that powers reconciliation and forecasting runs as a local agent
              on your institution's own server. It never sends financial data to an external API —
              matching, scoring, and predictions all happen inside your infrastructure.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Data flow</h2>
            <p className="mt-2 text-sm text-slate">
              Institution's server → local agent → institution's dashboard. No external calls in
              the reconciliation path. A detailed architecture diagram is provided during
              onboarding once your deployment environment is confirmed.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Compliance posture</h2>
            <p className="mt-2 text-sm text-slate">
              We document our security practices and data handling in detail during procurement
              review. Specific certifications are confirmed on request — we don't list claims here
              that haven't been independently verified for your jurisdiction.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Questions we get often</h2>
            <p className="mt-2 text-sm text-slate">
              Implementation teams typically ask about backup strategy, access control, and audit
              logging. Our team walks through all of this live during a demo — happy to go deep on
              whatever matters most to your IT team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
