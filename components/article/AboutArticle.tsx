import Link from "next/link";
import {
  formatArticleDate,
  type ArticleMetadata,
} from "../../lib/content/article-metadata";

type AboutArticleProps = {
  metadata: ArticleMetadata;
};

export default function AboutArticle({ metadata }: AboutArticleProps) {
  return (
    <aside className="about-article" aria-labelledby="about-this-article">
      <p className="eyebrow">Editorial information</p>
      <h2 id="about-this-article">About this article</h2>

      <div className="about-article-grid">
        <section>
          <h3>Written by</h3>
          <p>
            <Link href={metadata.author.href}>{metadata.author.name}</Link>
          </p>
          <p>{metadata.author.description}</p>
        </section>

        {metadata.reviewer ? (
          <section>
            <h3>Editorial review</h3>
            <p>
              <Link href={metadata.reviewer.href}>
                {metadata.reviewer.name}
              </Link>
            </p>
            <p>{metadata.reviewer.description}</p>
          </section>
        ) : null}
      </div>

      <dl className="about-article-details">
        <div>
          <dt>Last updated</dt>
          <dd>
            <time dateTime={metadata.dateModified}>
              {formatArticleDate(metadata.dateModified)}
            </time>
          </dd>
        </div>

        <div>
          <dt>Purpose</dt>
          <dd>Educational information</dd>
        </div>

        <div>
          <dt>Category</dt>
          <dd>{metadata.category}</dd>
        </div>

        {metadata.sourceOrganizations?.length ? (
          <div>
            <dt>Sources reviewed</dt>
            <dd>{metadata.sourceOrganizations.join(", ")}</dd>
          </div>
        ) : null}
      </dl>

      {metadata.relatedCalculator ? (
        <p className="about-article-tool">
          Related tool:{" "}
          <Link href={metadata.relatedCalculator.href}>
            {metadata.relatedCalculator.title}
          </Link>
        </p>
      ) : null}

      <p className="about-article-disclaimer">
        This content is provided for general educational purposes and does not
        constitute individualized tax, legal, investment or financial advice.
      </p>
    </aside>
  );
}
