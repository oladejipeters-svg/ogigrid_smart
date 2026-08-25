import { Lock, KeyRound, FileSearch } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import DataFlowDiagram from "../components/DataFlowDiagram.jsx";

const PRACTICES = [
  {
    icon: Lock,
    title: "Encryption in transit",
    body: "Data moving between your dashboard and your local agent is encrypted end to end.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    body: "Staff see only what their role requires — a bursar's view isn't a teacher's view.",
  },
  {
    icon: FileSearch,
    title: "Full audit trail",
    body: "Every match, adjustment, and clearance is logged against its record, permanently.",
  },
];

export default function LocalAISecurity() {
  return (
    <div>
      <PageHeader
        eyebrow="Local AI & Security"
        title="The AI runs on your servers"
        description="A plain-language look at how OSS handles data, and why nothing leaves your infrastructure."
      />

      <section className="bg-porcelain py-16">
        <div className="mx-auto max-w-content px-6">
          <Reveal>
            <DataFlowDiagram />
          </Reveal>
        </div>
      </section>

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

      <section className="bg-ink-muted py-16">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {PRACTICES.map((practice) => {
              const Icon = practice.icon;
              return (
                <Reveal key={practice.title} className="flex flex-col items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-card bg-white/10">
                    <Icon size={20} className="text-ledger" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 font-display text-base font-semibold text-white">
                    {practice.title}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{practice.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
