import Link from "next/link";

import { homepageStories } from "../../lib/content/catalog";

export default function FeaturedStories() {
  const [featuredStory, ...otherStories] = homepageStories;

  if (!featuredStory) {
    return null;
  }

  return (
    <section className="portal-section portal-stories-section">
      <div className="container">
        <div className="portal-section-header portal-section-header-row">
          <div>
            <p className="portal-eyebrow">Real Money Stories</p>
            <h2>Real financial situations, carefully examined.</h2>
            <p>
              Publicly shared experiences become practical educational stories
              explaining what happened, what questions matter and where readers
              can find reliable information.
            </p>
          </div>

          <Link className="portal-section-link" href="/blog/real-money-stories">
            View all stories →
          </Link>
        </div>

        <div className="portal-story-layout">
          <Link className="portal-main-story" href={featuredStory.href}>
            <div className="portal-story-visual">
              <span>{featuredStory.category}</span>
              <strong>Real Money Story</strong>
            </div>

            <div className="portal-main-story-content">
              <span className="portal-content-category">
                {featuredStory.category}
              </span>

              <h3>{featuredStory.title}</h3>
              <p>{featuredStory.description}</p>
              <strong className="portal-read-link">
                Read the story · {featuredStory.readTime} →
              </strong>
            </div>
          </Link>

          <div className="portal-story-list">
            {otherStories.map((story, index) => (
              <Link
                className="portal-story-row"
                href={story.href}
                key={story.href}
              >
                <span className="portal-story-index">
                  {String(index + 2).padStart(2, "0")}
                </span>

                <span className="portal-story-row-content">
                  <small>
                    {story.category} · {story.readTime}
                  </small>
                  <strong>{story.title}</strong>
                  <span>{story.description}</span>
                </span>

                <b aria-hidden="true">→</b>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
