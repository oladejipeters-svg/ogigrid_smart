import { FileText, CreditCard, RefreshCw, CalendarClock, AlertTriangle, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

const STAGES = [
  {
    icon: FileText,
    title: "Invoice",
    body: "Bills are generated per student, per term, and per fee category — tuition, transport, boarding, and any custom fee your institution defines. Every invoice carries a stable reference from day one, so nothing has to be reconciled by name or guesswork later.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    body: "Parents and guardians pay through the channels they already use — bank transfer, card, or mobile payment — without needing a new account or a new habit. Every payment is tagged to its invoice reference the moment it's initiated.",
  },
  {
    icon: RefreshCw,
    title: "Bank reconciliation",
    body: "Incoming transfers are matched against open invoices automatically, using reference numbers, amounts, and payer patterns — not a human scanning a bank statement line by line. Only genuine exceptions reach a person: a wrong reference, a partial payment, a discount applied inconsistently.",
  },
  {
    icon: CalendarClock,
    title: "Installment monitoring",
    body: "Payment plans are tracked against their actual schedule, not a static due date. If an installment slips, the system knows before term-end does — giving finance staff weeks of runway instead of a surprise at closing.",
  },
  {
    icon: AlertTriangle,
    title: "Arrears",
    body: "Outstanding balances surface early and by risk, not just by age — so a finance team can act on the account trending toward default weeks before it becomes an uncollectable balance, instead of finding out at the worst possible moment.",
  },
  {
    icon: CheckCircle2,
    title: "Clearance",
    body: "A student's account closes out cleanly at term end, with a full audit trail behind it — every invoice, every payment, every adjustment, in one place, ready for the next term or for an actual audit.",
  },
];

export default function Platform() {
  return (
    <div>
      <PageHeader
        eyebrow="Platform"
        title="Every Naira, tracked from invoice to clearance"
        description="This is the actual financial lifecycle SchoolPay runs — six stages, each one built to remove a specific kind of manual work and a specific kind of risk."
      />

      {/* Supporting visual — real product screenshot */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="overflow-hidden rounded-card border border-slate/10">
            <img
              src="/screenshots/schoolpay.jpg"
              alt="SchoolPay platform overview"
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-porcelain py-20">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              Six stages. No manual handoffs between them.
            </h2>
            <p className="mt-3 text-sm text-slate">
              Most finance platforms handle one or two of these stages well and leave the rest to a
              spreadsheet. SchoolPay treats the whole lifecycle as one connected system, so nothing
              falls through the gap between "payment received" and "books closed."
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-slate/15 sm:block" />
            <div className="space-y-10">
              {STAGES.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <Reveal key={stage.title} className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full bg-grid">
                      <Icon size={20} className="text-white" strokeWidth={1.75} />
                    </div>
                    <div className="pt-1">
                      <p className="font-mono text-xs uppercase tracking-wide text-grid">
                        Stage {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                        {stage.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">{stage.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Confidence band */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <Reveal>
              <p className="font-display text-lg font-semibold text-ink">One system, not five</p>
              <p className="mt-2 text-sm text-slate">
                Invoicing, collection, reconciliation, arrears, and closing all run on the same
                record — no exports, no re-keying data between tools.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-display text-lg font-semibold text-ink">Built for term-end, not just term-time</p>
              <p className="mt-2 text-sm text-slate">
                The stage where manual processes usually break — closing the books under deadline —
                is the stage this platform is built around first.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-display text-lg font-semibold text-ink">Every action, traceable</p>
              <p className="mt-2 text-sm text-slate">
                Every match, adjustment, and clearance is logged against its record — so "what
                happened to this payment" always has a real answer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-grid py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white lg:text-3xl">
              See the full lifecycle on your own numbers
            </h2>
            <div className="mt-8">
              <Button to="/request-demo" variant="accent">
                Request a Demo
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
