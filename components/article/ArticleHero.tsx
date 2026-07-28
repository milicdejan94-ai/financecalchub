import Link from "next/link";
import {
  formatArticleDate,
  type ArticleMetadata,
} from "../../lib/content/article-metadata";

type ArticleHeroProps = {
  metadata: ArticleMetadata;
  eyebrow?: string;
};

export default function ArticleHero({ metadata, eyebrow }: ArticleHeroProps) {
  const wasUpdated = metadata.dateModified !== metadata.datePublished;

  return (
    <header className="article-hero">
      <p className="eyebrow">{eyebrow || metadata.category}</p>

      <h1>{metadata.title}</h1>

      <p className="article-hero-summary">{metadata.description}</p>

      <div className="article-byline">
        <div>
          <span>Written by</span>
          <Link href={metadata.author.href}>{metadata.author.name}</Link>
        </div>

        {metadata.reviewer ? (
          <div>
            <span>Editorial review</span>
            <Link href={metadata.reviewer.href}>{metadata.reviewer.name}</Link>
          </div>
        ) : null}
      </div>

      <dl className="article-meta-list">
        <div>
          <dt>Published</dt>
          <dd>
            <time dateTime={metadata.datePublished}>
              {formatArticleDate(metadata.datePublished)}
            </time>
          </dd>
        </div>

        {wasUpdated ? (
          <div>
            <dt>Updated</dt>
            <dd>
              <time dateTime={metadata.dateModified}>
                {formatArticleDate(metadata.dateModified)}
              </time>
            </dd>
          </div>
        ) : null}

        <div>
          <dt>Reading time</dt>
          <dd>{metadata.readingTime}</dd>
        </div>

        <div>
          <dt>Level</dt>
          <dd>{metadata.difficulty}</dd>
        </div>
      </dl>
    </header>
  );
}
