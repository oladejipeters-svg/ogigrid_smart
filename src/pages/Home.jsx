import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import GridLedgerBackground from "../components/GridLedgerBackground.jsx";
import LedgerCard from "../components/LedgerCard.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import ProductIcon from "../components/ProductIcon.jsx";
import ProductShowcase from "../components/ProductShowcase.jsx";
import { products } from "../data/products.js";

const PAIN_POINTS = [
  {
    title: "Unmatched transfers",
    body: "Payments arrive from parents, agents, and banks with no clean way to tell which invoice they settle.",
  },
  {
    title: "Slow reconciliation",
    body: "Term close takes days of manual cross-checking between bank statements and the ledger.",
  },
  {
    title: "Manual ledgers",
    body: "Spreadsheets and paper trails make it hard to answer \"what's outstanding\" on demand.",
  },
  {
    title: "No default visibility",
    body: "Arrears build up quietly until they're a collections problem instead of a conversation.",
  },
];

const LIFECYCLE = [
  "Invoice",
  "Payment",
  "Bank reconciliation",
  "Installment monitoring",
  "Arrears",
  "Clearance",
];

export default function Home() {
  return (
    <div>
      <ProductShowcase />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GridLedgerBackground nodeCount={6} />
        <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-grid">
              Financial infrastructure for schools
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink lg:text-5xl">
              Every transfer, matched. Every term, closed on time.
            </h1>
            <p className="mt-5 max-w-lg text-base text-slate lg:text-lg">
              OSS gives finance teams one platform for billing, collection, and bank
              reconciliation — with AI that runs on your own servers, not ours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/request-demo" variant="accent">
                Request a Demo
              </Button>
              <Button to="/platform" variant="secondary">
                See how it works
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:justify-self-end">
            <LedgerCard />
          </Reveal>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-content px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              The finance team's day, as it actually is
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PAIN_POINTS.map((point) => (
              <Reveal key={point.title} className="rounded-card border border-slate/10 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm text-slate">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform snapshot */}
      <section className="relative overflow-hidden bg-porcelain py-20">
        <GridLedgerBackground nodeCount={4} className="hidden sm:block" />
        <div className="relative mx-auto max-w-content px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              One lifecycle, start to finish
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate">
              Every transaction moves through the same six stages — visible the whole way,
              never lost in a spreadsheet.
            </p>
          </Reveal>

          {/* Mobile: vertical stack, one stage per row */}
          <Reveal className="mt-10 flex flex-col items-start gap-2 sm:hidden">
            {LIFECYCLE.map((stage, i) => (
              <div key={stage} className="flex flex-col items-start gap-2">
                <span className="rounded-full border border-grid/20 bg-white px-4 py-2 font-mono text-xs text-grid">
                  {stage}
                </span>
                {i < LIFECYCLE.length - 1 && (
                  <ArrowDown size={14} className="ml-4 text-slate" strokeWidth={2} />
                )}
              </div>
            ))}
          </Reveal>

          {/* Tablet and up: horizontal flow */}
          <Reveal className="mt-10 hidden sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            {LIFECYCLE.map((stage, i) => (
              <div key={stage} className="flex items-center gap-3">
                <span className="rounded-full border border-grid/20 bg-white px-4 py-2 font-mono text-xs text-grid">
                  {stage}
                </span>
                {i < LIFECYCLE.length - 1 && <span className="text-slate">→</span>}
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <Button to="/platform" variant="secondary">
              Explore the full lifecycle
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Local AI trust strip */}
      <section className="bg-ink-muted py-16">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ledger">Local AI</p>
              <h2 className="mt-2 max-w-xl font-display text-xl font-semibold text-white lg:text-2xl">
                The AI runs on your servers. Nothing leaves your infrastructure.
              </h2>
            </div>
            <Button to="/local-ai-security" variant="accent">
              Review our security model
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Product suite teaser */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-content px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              One suite, six products
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate">
              SchoolPay is the flagship. The full suite covers the rest of the institution.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <Link
                  to={`/products#${product.slug}`}
                  className="block h-full rounded-card border border-slate/10 p-6 transition-shadow hover:shadow-md"
                >
                  <ProductIcon name={product.icon} size="sm" />
                  <p className="mt-3 font-mono text-xs uppercase tracking-wide text-grid">{product.role}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate">{product.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button to="/products" variant="secondary">
              View the full product suite
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-grid py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white lg:text-3xl">
              See it against your own numbers
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
              A short call, a walkthrough, and a clear answer on whether OSS fits your institution.
            </p>
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
