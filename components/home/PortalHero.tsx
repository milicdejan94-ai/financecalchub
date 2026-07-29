import Link from "next/link";

import { homepageHeroStory } from "../../lib/content/catalog";

export default function PortalHero() {
  const featuredStory = homepageHeroStory;

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

          {featuredStory ? (
            <>
              <h2>{featuredStory.title}</h2>

              <p>{featuredStory.description}</p>

              <Link href={featuredStory.href}>
                Read the full story · {featuredStory.readTime} →
              </Link>
            </>
          ) : (
            <>
              <h2>Explore real financial situations and practical answers.</h2>

              <p>
                Read educational stories about taxes, payroll, income reporting
                and other everyday money problems.
              </p>

              <Link href="/blog/real-money-stories">
                Browse Real Money Stories →
              </Link>
            </>
          )}

          <div className="portal-feature-disclaimer">
            Personal experiences are presented as claims. Broader explanations
            are supported with official sources where appropriate.
          </div>
        </aside>
      </div>
    </section>
  );
}
