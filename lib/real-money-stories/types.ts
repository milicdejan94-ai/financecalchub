import type { ReactNode } from "react";

export type RealMoneyStoryCategory =
  | "IRS"
  | "Payroll"
  | "Mortgage"
  | "Credit"
  | "Investing"
  | "Retirement"
  | "Refunds"
  | "Identity Theft"
  | "Student Loans"
  | "Tax";

export type RealMoneyStorySource = {
  title: string;
  href: string;
  organization?: string;
};

export type RealMoneyStoryTool = {
  title: string;
  href: string;
};

export type RealMoneyStoryQuickFact = {
  label: string;
  value: string;
};

export type RealMoneyStoryTimelineItem = {
  title: string;
  description: string;
};

export type RealMoneyStoryDefinition = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  breadcrumbLabel: string;
  category: RealMoneyStoryCategory;
  categoryLabel?: string;
  datePublished?: string;
  dateModified?: string;
  quickFacts?: RealMoneyStoryQuickFact[];
  timeline?: RealMoneyStoryTimelineItem[];
  officialSources?: RealMoneyStorySource[];
  relatedTools?: RealMoneyStoryTool[];
};

export type RealMoneyStoryTemplateProps = {
  story: RealMoneyStoryDefinition;
  children: ReactNode;
};
