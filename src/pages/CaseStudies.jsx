import PageHeader from "../components/PageHeader.jsx";

export default function CaseStudies() {
  return (
    <div>
      <PageHeader
        eyebrow="Case Studies"
        title="Results, once we can name them"
        description="This page is structured and ready — real institution results will populate here as reference customers are confirmed."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="rounded-card border border-dashed border-slate/30 p-10 text-center text-sm text-slate">
          No case studies published yet. Check back soon, or request a demo to see a live walkthrough.
        </div>
      </section>
    </div>
  );
}
