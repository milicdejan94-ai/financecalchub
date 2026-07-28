import type { EditorialProfile } from "./authors";

export type ArticleDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ArticleMetadata = {
  title: string;
  description: string;
  category: string;
  readingTime: string;
  difficulty: ArticleDifficulty;
  datePublished: string;
  dateModified: string;
  author: EditorialProfile;
  reviewer?: EditorialProfile;
  relatedCalculator?: {
    title: string;
    href: string;
  };
  sourceOrganizations?: string[];
};

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
