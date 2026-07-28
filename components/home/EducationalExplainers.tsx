import Link from "next/link";

import { homepageGuides } from "../../lib/content/catalog";

export default function EducationalExplainers() {
  return (
    <section className="portal-section portal-explainers-section">
      <div className="container">
        <div className="portal-section-header">
          <p className="portal-eyebrow">Understand what happens next</p>
          <h2>Clear explanations for common financial questions.</h2>
          <p>
            Move from a real financial problem to a broader explanation of the
            rules, calculations and practical choices behind it.
          </p>
        </div>

        <div className="portal-explainer-grid">
          {homepageGuides.map((article) => (
            <Link
              className="portal-explainer-card"
              href={article.href}
              key={article.href}
            >
              <span>
                {article.category} · {article.readTime}
              </span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <strong>Read the guide →</strong>
            </Link>
          ))}
        </div>

        <div className="portal-section-action">
          <Link className="portal-button portal-button-secondary" href="/blog">
            Browse all financial guides
          </Link>
        </div>
      </div>
    </section>
  );
}
