import PageHeader from "../components/PageHeader.jsx";

export default function Resources() {
  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Guides, articles, and announcements"
        description="Thought leadership and product updates will live here — category filtering and a newsletter signup are planned per the design documentation."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="rounded-card border border-dashed border-slate/30 p-10 text-center text-sm text-slate">
          No articles published yet.
        </div>
      </section>
    </div>
  );
}
