import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

const BELIEFS = [
  {
    title: "Financial infrastructure is infrastructure",
    body: "A school's ability to track every Naira that comes in and goes out isn't a nice-to-have — it's as foundational as its ability to pay staff or keep the lights on. We build accordingly.",
  },
  {
    title: "Sensitive data stays where it belongs",
    body: "Financial records for a school and its families are not the kind of data that should be flowing through a third party's cloud by default. That's why SchoolPay's AI runs on the institution's own infrastructure — not because it's a marketing line, but because it's the only defensible default for this category of data.",
  },
  {
    title: "Simple, not simplified",
    body: "School finance is genuinely complex — partial payments, siblings on shared accounts, mid-term withdrawals, scholarship adjustments. We don't hide that complexity behind a falsely simple interface; we build tools that handle it properly.",
  },
];

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About OSS"
        title="Built for institutions that can't afford ambiguity"
        description="School finance deserves the same rigor as any other financial institution. We built OSS because it didn't have it."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
            <p>
              School bursars manage more money, with less infrastructure, than almost any
              other finance role. A mid-sized institution can move tens of millions of
              Naira a term through bank transfers, cash, and mobile payments — reconciled
              by hand, tracked in spreadsheets, and closed out under deadline pressure at
              the end of every term.
            </p>
            <p>
              OgiGrid Smart Solutions was founded by trailblazing professionals, out of a
              simple observation: the tools built for corporate finance teams never made
              it into schools. Enterprise reconciliation software assumes a treasury
              department. School finance offices don't have one — they have a bursar, a
              spreadsheet, and a term-end deadline that doesn't move.
            </p>
            <p>
              We built SchoolPay to close that gap: a platform that treats every invoice,
              every transfer, and every reconciliation with the same discipline a bank
              would — without asking a school to hire a finance team it doesn't have.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-porcelain py-20">
        <div className="mx-auto max-w-content px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              What we believe
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {BELIEFS.map((belief) => (
              <Reveal
                key={belief.title}
                className="rounded-card border border-slate/10 bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {belief.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{belief.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              The team
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              OSS is built by people who've sat on both sides of the problem — engineers
              who understand financial systems, and operators who understand what a
              term-end close actually feels like from inside a school's finance office.
              Full team profiles are coming soon as our leadership page goes live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-ledger">
                Where we're headed
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-white lg:text-2xl">
                SchoolPay is the first product in a wider platform for school operations.
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Caregivers Connect, OgiGrid LMS, DocuWrite, SchoolPortal, and CFO all
                share the same principle: enterprise-grade tools without enterprise-grade
                overhead, and sensitive data that stays under the institution's own
                control.
              </p>
            </div>
            <Button to="/products" variant="accent">
              See the full product suite
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
