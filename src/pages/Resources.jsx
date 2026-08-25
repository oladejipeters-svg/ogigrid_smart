import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

const ARTICLES = [
  {
    category: "Finance Operations",
    title: "The real cost of manual reconciliation",
    body: "Every finance officer knows the term-end scramble: a stack of bank statements, a spreadsheet of expected payments, and a deadline that doesn't care how many discrepancies show up. What's less often counted is the actual cost of that process — not just the hours spent, but the errors that slip through when reconciliation happens under time pressure: a duplicate payment missed, an arrears case that goes uncollected for another term because nobody caught it in time.\n\nManual reconciliation isn't just slow — it's a process that gets less accurate exactly when institutions need it to be most reliable: at term close, under deadline, with the highest transaction volume of the year. The fix isn't more spreadsheet discipline. It's removing the matching work from the list of things a human has to get right under pressure, and reserving human judgment for the handful of cases that actually need it — the mismatched reference, the partial payment, the sibling discount applied inconsistently.",
  },
  {
    category: "Data & Security",
    title: "Why \"the cloud\" is the wrong default for school financial data",
    body: "Most SaaS finance tools are built on an assumption that makes sense for a retail business: send the data to us, we'll process it, you get the result back. That assumption breaks down for school financial data, which sits at the intersection of two of the most sensitive categories of information an institution holds — a family's financial details and a minor's personal data — often in the same record.\n\nThe question worth asking any finance platform isn't just \"is it secure,\" but \"where does the processing actually happen, and whose infrastructure is my data passing through to get an answer.\" A platform that can give you AI-driven reconciliation without your data ever leaving your own servers isn't offering a feature — it's avoiding a category of risk that shouldn't exist in the first place for this kind of data.",
  },
  {
    category: "Finance Operations",
    title: "What a healthy collection rate actually looks like",
    body: "Finance teams often benchmark collection rates against a single number without asking what's hiding inside it. A 92% collection rate at the start of a term and a 92% rate three weeks before term close mean very different things — one is on track, the other is a warning sign arriving too late to act on.\n\nThe more useful question isn't \"what's our collection rate,\" but \"what does our collection curve look like compared to the same point last term.\" A platform that can show that curve in real time — not just a term-end total — turns collections from a number you report on into a number you can actually manage while there's still time to act on it.",
  },
  {
    category: "Operations & Scale",
    title: "Multi-campus finance: one system, or five spreadsheets?",
    body: "Every school group hits the same inflection point: the moment a second campus opens, \"how are we doing financially\" stops being a question one person can answer by looking at one spreadsheet. What starts as a convenient per-campus workaround — each site running its own tracking, its own reconciliation habits — quietly becomes a structural problem the moment leadership needs a group-wide view.\n\nThe fix isn't asking every campus to adopt identical manual processes (they won't stay identical for long). It's giving each campus its own workflow while feeding a single, consolidated view up to group leadership — so \"how are we doing across all campuses\" is a question with a real-time answer, not a request that goes out to five different finance offices.",
  },
];

export default function Resources() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // No backend endpoint for newsletter signups yet — this just confirms
    // intent in the UI. Wire this to a real subscription list before launch.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Straight talk on school finance and the technology behind it"
        description="Guides and perspectives for bursars, finance leads, and school administrators — not sales pitches."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {ARTICLES.map((article) => (
              <Reveal
                key={article.title}
                className="rounded-card border border-slate/10 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-grid">
                  {article.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {article.title}
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate">
                  {article.body.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              Get one useful thing a month, not a sales newsletter
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate">
              Practical notes on school finance operations — no product pitches,
              unsubscribe anytime.
            </p>

            {subscribed ? (
              <p className="mt-8 font-display text-sm font-semibold text-ledger">
                You're subscribed — thanks for joining.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@institution.edu"
                  className="w-full rounded-card border border-slate/20 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-grid"
                />
                <Button type="submit" variant="accent" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
