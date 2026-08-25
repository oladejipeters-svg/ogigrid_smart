import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Built for institutions that can't afford ambiguity"
        description="Ogigrid Smart Solutions started with a simple observation: school finance teams deserve the same rigor as any other financial institution."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="max-w-2xl space-y-6 text-sm text-slate">
          <p>
            Company story, mission, and team content go here once approved by Ogigrid Smart Solutions leadership —
            this section is intentionally left as a placeholder pending that content, per the
            outstanding asset checklist in the design documentation.
          </p>
        </div>
      </section>
    </div>
  );
}
