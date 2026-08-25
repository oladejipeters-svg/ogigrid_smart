export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate/10 bg-white py-16">
      <div className="mx-auto max-w-content px-6">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-grid">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold text-ink lg:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-slate">{description}</p>}
      </div>
    </section>
  );
}
