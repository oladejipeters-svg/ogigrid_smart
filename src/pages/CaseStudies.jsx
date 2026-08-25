import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

const EXAMPLES = [
  {
    title: "A mid-sized private school",
    challenge:
      "A 900-student private school ran termly reconciliation entirely by hand: a finance officer cross-checking bank statements against a spreadsheet of expected payments, a process that historically took the better part of two weeks at the start of every term — time spent chasing discrepancies instead of closing the books.",
    approach:
      "SchoolPay's reconciliation engine matched incoming transfers against expected invoices automatically, flagging only the transfers that needed a human decision — a wrong reference number, a partial payment, a sibling discount applied inconsistently.",
    outcome:
      "Reconciliation work that once took two weeks of manual cross-checking becomes a routine that finance staff review, rather than perform from scratch, each term.",
  },
  {
    title: "A multi-campus school group",
    challenge:
      "A school group operating three campuses had three separate finance offices, each with its own spreadsheet, no shared visibility into group-wide collection rates, and no way for group leadership to see arrears across campuses without requesting a manual report from each site.",
    approach:
      "A single SchoolPay instance gave each campus its own reconciliation workflow while giving group finance leadership a consolidated view of collections, arrears, and term-close status across all three campuses.",
    outcome:
      "Group-level visibility into collection status becomes available without waiting on manually compiled reports from each campus.",
  },
  {
    title: "An institution prioritizing data control",
    challenge:
      "A school's IT and compliance lead was hesitant to adopt any finance platform that meant student and family financial data leaving the institution's own infrastructure.",
    approach:
      "SchoolPay's AI-driven reconciliation runs on the institution's own servers, so financial data used for matching and forecasting never leaves infrastructure the school controls.",
    outcome:
      "The institution adopts automated reconciliation without changing its data-residency posture.",
  },
];

export default function CaseStudies() {
  return (
    <div>
      <PageHeader
        eyebrow="Case Studies"
        title="What closing the books actually looks like"
        description="Illustrative examples of the kind of impact SchoolPay is designed to deliver. Real institution results will replace these as reference customers are confirmed."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {EXAMPLES.map((example) => (
              <Reveal
                key={example.title}
                className="flex flex-col rounded-card border border-slate/10 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-grid">
                  Illustrative example
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {example.title}
                </h3>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate">
                  <div>
                    <p className="font-semibold text-ink">The challenge</p>
                    <p className="mt-1">{example.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">The approach</p>
                    <p className="mt-1">{example.approach}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ledger">The illustrative outcome</p>
                    <p className="mt-1">{example.outcome}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grid py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white lg:text-3xl">
              Want to see this on your own data?
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
