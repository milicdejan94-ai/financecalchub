import Link from "next/link";

const explainers = [
  {
    category: "Taxes",
    title: "How Much Is $70,000 After Taxes?",
    description:
      "See how federal taxes and payroll deductions may affect annual and paycheck-level take-home pay.",
    href: "/blog/how-much-is-70000-after-taxes",
  },
  {
    category: "Income",
    title: "$25 an Hour Is How Much a Year?",
    description:
      "Convert an hourly wage into annual, monthly, biweekly and weekly gross income.",
    href: "/blog/25-an-hour-is-how-much-a-year",
  },
  {
    category: "Housing",
    title: "What Is the Payment on a $300,000 Mortgage?",
    description:
      "Understand how interest, property taxes and insurance may affect the full monthly payment.",
    href: "/blog/300000-mortgage-payment",
  },
];

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
          {explainers.map((article) => (
            <Link
              className="portal-explainer-card"
              href={article.href}
              key={article.href}
            >
              <span>{article.category}</span>
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
