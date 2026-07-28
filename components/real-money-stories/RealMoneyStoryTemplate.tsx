import Breadcrumbs from "../Breadcrumbs";
import RelatedCalculators from "../RelatedCalculators";
import BlogPostingSchema from "../BlogPostingSchema";
import { AboutArticle, ArticleHero } from "../article";
import StoryQuickFacts from "./StoryQuickFacts";
import StoryTimeline from "./StoryTimeline";
import StoryOfficialSources from "./StoryOfficialSources";
import type { RealMoneyStoryTemplateProps } from "../../lib/real-money-stories/types";
import { editorialReviewDesk, editorialTeam } from "../../lib/content/authors";
import type { ArticleMetadata } from "../../lib/content/article-metadata";

const storyBasePath = "/blog/real-money-stories";

export default function RealMoneyStoryTemplate({
  story,
  children,
}: RealMoneyStoryTemplateProps) {
  const path = `${storyBasePath}/${story.slug}`;

  const articleMetadata: ArticleMetadata = {
    title: story.title,
    description: story.description,
    category: `Real Money Stories · ${
      story.categoryLabel || `${story.category} Story`
    }`,
    readingTime: story.readingTime || "7 min read",
    difficulty: story.difficulty || "Beginner",
    datePublished: story.datePublished || "2026-01-01",
    dateModified: story.dateModified || story.datePublished || "2026-01-01",
    author: editorialTeam,
    reviewer: editorialReviewDesk,
    sourceOrganizations: Array.from(
      new Set(
        story.officialSources
          ?.map((source) => source.organization)
          .filter((organization): organization is string =>
            Boolean(organization),
          ) || [],
      ),
    ),
  };

  return (
    <section className="section">
      <div className="container">
        <BlogPostingSchema
          headline={story.title}
          description={story.description}
          path={path}
          articleSection="Real Money Stories"
          datePublished={articleMetadata.datePublished}
          dateModified={articleMetadata.dateModified}
          authorName={articleMetadata.author.name}
          authorUrl={articleMetadata.author.href}
          reviewerName={articleMetadata.reviewer?.name}
          reviewerUrl={articleMetadata.reviewer?.href}
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: "Real Money Stories",
              href: storyBasePath,
            },
            { label: story.breadcrumbLabel },
          ]}
        />

        <article className="content-box">
          <ArticleHero metadata={articleMetadata} />

          {story.quickFacts?.length ? (
            <StoryQuickFacts facts={story.quickFacts} />
          ) : null}

          {story.timeline?.length ? (
            <StoryTimeline items={story.timeline} />
          ) : null}

          <div className="story-content">{children}</div>

          {story.officialSources?.length ? (
            <StoryOfficialSources sources={story.officialSources} />
          ) : null}

          <AboutArticle metadata={articleMetadata} />
        </article>

        {story.relatedTools?.length ? (
          <RelatedCalculators
            title="Helpful calculators and guides"
            tools={story.relatedTools}
          />
        ) : null}
      </div>
    </section>
  );
}
