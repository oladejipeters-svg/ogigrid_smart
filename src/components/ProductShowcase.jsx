import { useEffect, useRef, useState } from "react";
import { products } from "../data/products.js";

const SHOWCASE_ITEMS = products.filter((p) => p.screenshot);
const ROTATE_MS = 5000;

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion.current || SHOWCASE_ITEMS.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SHOWCASE_ITEMS.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  if (SHOWCASE_ITEMS.length === 0) return null;

  const current = SHOWCASE_ITEMS[index];

  return (
    <section
      className="relative overflow-hidden bg-ink py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Product showcase"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-ledger">
            See it in action
          </p>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition-colors hover:text-white"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-card border border-white/10">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <img
            key={current.slug}
            src={current.screenshot}
            alt={`${current.name} interface`}
            className="h-[280px] w-full animate-reveal-up object-cover object-top sm:h-[420px]"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div key={`${current.slug}-label`} className="animate-reveal-up">
            <h3 className="font-display text-lg font-semibold text-white">{current.name}</h3>
            <p className="text-sm text-white/60">{current.role}</p>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Select product">
            {SHOWCASE_ITEMS.map((item, i) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${item.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-6 rounded-full transition-colors ${
                  i === index ? "bg-amber" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
