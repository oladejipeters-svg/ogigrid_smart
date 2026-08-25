/**
 * The Grid Ledger — the site's one deliberate visual flourish (Section 3.4
 * of the design documentation). A faint grid sits behind section content;
 * a handful of intersections pulse in Circuit Amber, echoing the idea that
 * every transaction is tracked and reconciled node by node. Respects
 * prefers-reduced-motion via the global stylesheet (animation-duration
 * collapses to near-zero), so this never needs its own media query.
 */
export default function GridLedgerBackground({ nodeCount = 5, className = "" }) {
  const columns = 12;
  const rows = 6;

  // Deterministic pseudo-random node placement so the pattern is stable
  // across renders instead of jumping around on every re-render.
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const seed = (i + 1) * 47;
    const col = seed % columns;
    const row = (seed * 3) % rows;
    return { col, row, delay: (i * 0.35).toFixed(2) };
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id="grid-ledger-lines"
            width={`${100 / columns}%`}
            height={`${100 / rows}%`}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${1000 / columns} 0 L 0 0 0 ${1000 / rows}`}
              fill="none"
              stroke="#2C3E9E"
              strokeWidth="1"
              opacity="0.06"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-ledger-lines)" />
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={`${(node.col / columns) * 100}%`}
            cy={`${(node.row / rows) * 100}%`}
            r="3"
            fill="#F0A020"
            className="animate-grid-pulse"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
