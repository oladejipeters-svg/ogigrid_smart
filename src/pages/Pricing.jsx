import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";

const FAQ = [
  {
    q: "How long does implementation take?",
    a: "Most institutions are live within a few weeks of signing, depending on data migration needs.",
  },
  {
    q: "Do you support migrating from an existing system?",
    a: "Yes — our onboarding team maps your existing records into Ogigrid Smart Solutions before go-live.",
  },
  {
    q: "What does a contract term look like?",
    a: "Institutional contracts are typically annual. We'll walk through specifics on a call.",
  },
];

export default function Pricing() {
  return (
    <div>
      <PageHeader
        eyebrow="Pricing"
        title="Built for institutional budgeting cycles"
        description="Pricing is scoped to your institution's size and product needs — talk to us for a clear number."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="rounded-card border border-grid/20 bg-white p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-ink">Request pricing</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate">
            Tell us about your institution and we'll come back with a plan that fits your size and
            the products you need.
          </p>
          <div className="mt-6">
            <Button to="/request-demo" variant="accent">
              Request a Demo
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="font-display text-lg font-semibold text-ink">Frequently asked</h2>
          <div className="mt-6 space-y-6">
            {FAQ.map((item) => (
              <div key={item.q}>
                <p className="font-display text-sm font-semibold text-ink">{item.q}</p>
                <p className="mt-1 text-sm text-slate">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
