import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ eyebrow, title, description }) {
  const navigate = useNavigate();

  return (
    <section className="border-b border-slate/10 bg-white py-16">
      <div className="mx-auto max-w-content px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back
        </button>

        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-grid">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold text-ink lg:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-slate">{description}</p>}
      </div>
    </section>
  );
}
