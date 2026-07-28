import Link from "next/link";

const stories = [
  {
    category: "Tax filing",
    title:
      "He Hadn't Filed Taxes in Nearly Eight Years — and Was Afraid to Find Out What He Owed",
    description:
      "Years of avoidance created growing fear before one taxpayer decided to confront his unfiled returns.",
    href: "/blog/real-money-stories/not-filed-taxes-nearly-eight-years",
    featured: true,
  },
  {
    category: "Incorrect W-2",
    title:
      "Her W-2 Was Wrong — Her Employer Still Hadn't Fixed It as Tax Day Got Closer",
    description:
      "An employee repeatedly requested a correction while the filing deadline continued approaching.",
    href: "/blog/real-money-stories/wrong-w2-employer-not-correcting",
  },
  {
    category: "Payroll and state tax",
    title:
      "She Was Taxed in the Wrong State — Then Payroll Said It Couldn't Fix the Problem",
    description:
      "A payroll-location problem created questions about withholding, state returns and W-2 information.",
    href: "/blog/real-money-stories/taxed-in-wrong-state-payroll-problem",
  },
  {
    category: "Amended tax return",
    title: "His Tax Return Was Accepted — Then He Realized He Left Out a W-2",
    description:
      "After discovering another W-2, a taxpayer needed to understand how an accepted return could be corrected.",
    href: "/blog/real-money-stories/return-accepted-forgot-w2",
  },
  {
    category: "Income reporting",
    title: "His Former Employer Reported $30,000 More Income Than He Expected",
    description:
      "The income connected with an IRS notice appeared much higher than the W-2 in his records.",
    href: "/blog/real-money-stories/employer-reported-30000-more-income",
  },
];

export default function FeaturedStories() {
  const [featuredStory, ...otherStories] = stories;

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
              <strong className="portal-read-link">Read the story →</strong>
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
                  <small>{story.category}</small>
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
