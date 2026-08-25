import PageHeader from "../components/PageHeader.jsx";

export default function LegalPage({ title }) {
  return (
    <div>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="mx-auto max-w-content px-6 py-16">
        <p className="max-w-2xl text-sm text-slate">
          Legal content pending review and approval from Ogigrid Smart Solutions leadership before publishing, per the
          outstanding asset checklist in the design documentation.
        </p>
      </section>
    </div>
  );
}
