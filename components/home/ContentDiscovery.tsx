"use client";

import Link from "next/link";
import { useState } from "react";

import {
  homepageEditorsPicks,
  homepageLatestArticles,
  homepageRecentlyUpdated,
  type ContentItem,
} from "../../lib/content/catalog";

type ContentTabKey = "updated" | "latest" | "picks";

type ContentTab = {
  key: ContentTabKey;
  label: string;
  heading: string;
  description: string;
  items: ContentItem[];
};

const tabs: ContentTab[] = [
  {
    key: "updated",
    label: "Recently Updated",
    heading: "Recently reviewed and updated",
    description:
      "Articles that have recently received editorial, source or calculation updates.",
    items: homepageRecentlyUpdated,
  },
  {
    key: "latest",
    label: "Latest Articles",
    heading: "The newest FinanceCalcHub articles",
    description:
      "Browse our most recently published financial guides and Real Money Stories.",
    items: homepageLatestArticles,
  },
  {
    key: "picks",
    label: "Editor’s Picks",
    heading: "Recommended places to start",
    description:
      "A selected mix of practical guides and real financial situations from across the site.",
    items: homepageEditorsPicks,
  },
];

function formatContentDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getDateLabel(tab: ContentTabKey, item: ContentItem): string {
  if (tab === "latest") {
    return `Published ${formatContentDate(item.datePublished)}`;
  }

  return `Updated ${formatContentDate(item.dateModified)}`;
}

export default function ContentDiscovery() {
  const [activeTab, setActiveTab] = useState<ContentTabKey>("updated");

  const activeContent = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <section className="portal-section portal-discovery-section">
      <div className="container">
        <div className="portal-section-header portal-section-header-row">
          <div>
            <p className="portal-eyebrow">Discover more</p>
            <h2>Fresh financial education from across FinanceCalcHub.</h2>
            <p>
              Find recently updated explanations, newly published articles and
              selected guides recommended by our editorial team.
            </p>
          </div>

          <Link className="portal-section-link" href="/blog">
            Browse the full blog →
          </Link>
        </div>

        <div
          className="portal-discovery-tabs"
          aria-label="Financial content collections"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              aria-controls={`content-panel-${tab.key}`}
              aria-selected={activeTab === tab.key}
              className="portal-discovery-tab"
              id={`content-tab-${tab.key}`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`content-tab-${activeContent.key}`}
          className="portal-discovery-panel"
          id={`content-panel-${activeContent.key}`}
          role="tabpanel"
        >
          <div className="portal-discovery-intro">
            <h3>{activeContent.heading}</h3>
            <p>{activeContent.description}</p>
          </div>

          <div className="portal-discovery-grid">
            {activeContent.items.map((item) => (
              <Link
                className="portal-discovery-card"
                href={item.href}
                key={item.href}
              >
                <div className="portal-discovery-meta">
                  <span className="portal-content-type-badge">
                    {item.contentType === "story"
                      ? "Real Money Story"
                      : "Financial Guide"}
                  </span>

                  <span>{getDateLabel(activeContent.key, item)}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="portal-discovery-footer">
                  <span>
                    {item.category} · {item.readTime}
                  </span>
                  <strong aria-hidden="true">→</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
