import Breadcrumbs from '../Breadcrumbs';
import RelatedCalculators from '../RelatedCalculators';
import BlogPostingSchema from '../BlogPostingSchema';
import StoryQuickFacts from './StoryQuickFacts';
import StoryTimeline from './StoryTimeline';
import StoryOfficialSources from './StoryOfficialSources';
import type {
  RealMoneyStoryTemplateProps,
} from '../../lib/real-money-stories/types';

const storyBasePath = '/blog/real-money-stories';

export default function RealMoneyStoryTemplate({
  story,
  children,
}: RealMoneyStoryTemplateProps) {
  const path = `${storyBasePath}/${story.slug}`;

  return (
    <section className="section">
      <div className="container">
        <BlogPostingSchema
          headline={story.title}
          description={story.description}
          path={path}
          articleSection="Real Money Stories"
          datePublished={story.datePublished}
          dateModified={story.dateModified}
        />

        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            {
              label: 'Real Money Stories',
              href: storyBasePath,
            },
            { label: story.breadcrumbLabel },
          ]}
        />

        <article className="content-box">
          <header className="story-header">
            <p className="eyebrow">
              Real Money Stories ·{' '}
              {story.categoryLabel ||
                `${story.category} Story`}
            </p>

            <h1>{story.title}</h1>

            <p className="story-summary">
              {story.description}
            </p>
          </header>

          {story.quickFacts?.length ? (
            <StoryQuickFacts facts={story.quickFacts} />
          ) : null}

          {story.timeline?.length ? (
            <StoryTimeline items={story.timeline} />
          ) : null}

          <div className="story-content">
            {children}
          </div>

          {story.officialSources?.length ? (
            <StoryOfficialSources
              sources={story.officialSources}
            />
          ) : null}
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
