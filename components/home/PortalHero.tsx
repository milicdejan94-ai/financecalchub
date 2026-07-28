import Link from "next/link";

export default function PortalHero() {
  return (
    <section className="portal-hero">
      <div className="container portal-hero-grid">
        <div className="portal-hero-content">
          <p className="portal-eyebrow">
            Real stories. Practical financial answers.
          </p>

          <h1>
            Understand real money problems before they become your problems.
          </h1>

          <p className="portal-hero-lead">
            Explore real financial experiences, clear educational guides and
            useful tools covering taxes, income, housing, debt, investing and
            everyday money decisions.
          </p>

          <div className="portal-hero-actions">
            <Link
              className="portal-button portal-button-primary"
              href="/blog/real-money-stories"
            >
              Read Real Money Stories
            </Link>

            <Link
              className="portal-button portal-button-secondary"
              href="/blog"
            >
              Explore money guides
            </Link>
          </div>

          <div className="portal-hero-supporting-link">
            <span>Need to check the numbers?</span>
            <Link href="/calculators">Use our free calculators →</Link>
          </div>
        </div>

        <aside className="portal-hero-feature">
          <p className="portal-feature-label">Featured story</p>

          <h2>
            She Made About $55,000 as a 1099 Contractor — Then She Saw an $8,000
            Tax Bill
          </h2>

          <p>
            A contractor expected a much smaller tax bill. Her experience raises
            important questions about self-employment tax, estimated payments
            and planning for 1099 income.
          </p>

          <Link href="/blog/real-money-stories/55000-1099-8000-tax-bill">
            Read the full story →
          </Link>

          <div className="portal-feature-disclaimer">
            Personal experiences are presented as claims. Broader explanations
            are supported with official sources where appropriate.
          </div>
        </aside>
      </div>
    </section>
  );
}
