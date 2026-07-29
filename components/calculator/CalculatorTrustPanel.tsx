import Link from "next/link";

import type { CalculatorSource } from "../../lib/calculator-trust";
import { formatArticleDate } from "../../lib/content/article-metadata";

type CalculatorTrustPanelProps = {
  lastReviewed: string;
  assumptions: string[];
  sources: CalculatorSource[];
  calculationNote: string;
};

export default function CalculatorTrustPanel({
  lastReviewed,
  assumptions,
  sources,
  calculationNote,
}: CalculatorTrustPanelProps) {
  return (
    <aside
      aria-labelledby="calculator-trust-heading"
      className="calculator-trust-panel"
    >
      <div className="calculator-trust-header">
        <div>
          <p className="eyebrow">Calculator transparency</p>
          <h2 id="calculator-trust-heading">How this estimate is maintained</h2>
        </div>

        <p className="calculator-review-date">
          Last reviewed{" "}
          <time dateTime={lastReviewed}>{formatArticleDate(lastReviewed)}</time>
        </p>
      </div>

      <div className="calculator-trust-grid">
        <section>
          <h3>Calculation approach</h3>
          <p>{calculationNote}</p>
        </section>

        <section>
          <h3>Important assumptions</h3>
          <ul>
            {assumptions.map((assumption) => (
              <li key={assumption}>{assumption}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Primary sources</h3>
          <ul className="calculator-source-list">
            {sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noreferrer" target="_blank">
                  {source.title}
                </a>
                <span>{source.organization}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="calculator-trust-links">
        <Link href="/methodology">Methodology</Link>
        <Link href="/editorial-policy">Editorial Policy</Link>
        <Link href="/sources-policy">Sources Policy</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </div>
    </aside>
  );
}
