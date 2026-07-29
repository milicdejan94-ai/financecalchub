import Link from "next/link";

const resources = [
  {
    title: "Editorial Team",
    description:
      "Learn who creates FinanceCalcHub content and how editorial responsibilities are organized.",
    href: "/editorial-team",
  },
  {
    title: "Editorial Policy",
    description:
      "Review the standards used for educational content, independence, corrections and transparency.",
    href: "/editorial-policy",
  },
  {
    title: "Fact-Checking Process",
    description:
      "See how important calculations, procedural claims and financial explanations are reviewed.",
    href: "/fact-checking",
  },
  {
    title: "Sources Policy",
    description:
      "Understand which sources FinanceCalcHub prioritizes and how external information is evaluated.",
    href: "/sources-policy",
  },
  {
    title: "Methodology",
    description:
      "Learn how calculators, assumptions, examples and simplified estimates are created.",
    href: "/methodology",
  },
  {
    title: "Corrections and Feedback",
    description:
      "Report a possible error, outdated source, broken link or confusing calculation.",
    href: "/contact",
  },
];

export default function EditorialResources() {
  return (
    <section
      className="editorial-resources"
      aria-labelledby="editorial-resources-title"
    >
      <div className="editorial-resources-header">
        <p className="eyebrow">Transparency and trust</p>
        <h2 id="editorial-resources-title">Editorial resources</h2>
        <p>
          Explore how FinanceCalcHub creates, reviews, sources and updates its
          financial education content.
        </p>
      </div>

      <div className="editorial-resources-grid">
        {resources.map((resource) => (
          <article key={resource.href} className="editorial-resource-card">
            <h3>
              <Link href={resource.href}>{resource.title}</Link>
            </h3>
            <p>{resource.description}</p>
            <Link className="editorial-resource-link" href={resource.href}>
              Read more <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
