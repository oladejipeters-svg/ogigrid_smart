import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { legalPages } from "../data/legal.js";

const NAV = [
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "terms", label: "Terms of Service" },
  { slug: "data-security", label: "Data Processing & Security" },
];

export default function LegalPage({ slug }) {
  const page = legalPages[slug];

  if (!page) return null;

  return (
    <div>
      <PageHeader eyebrow="Legal" title={page.title} description={`Last updated: ${page.lastUpdated}`} />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[200px_1fr]">
          <nav className="hidden lg:block">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/legal/${item.slug}`}
                    className={`block rounded-card px-3 py-2 text-sm transition-colors ${
                      item.slug === slug
                        ? "bg-grid/10 font-medium text-grid"
                        : "text-slate hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-2xl space-y-8">
            {page.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-display text-base font-semibold text-ink">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-2 text-sm leading-relaxed text-slate">{section.body}</p>
                )}
                {section.list && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
