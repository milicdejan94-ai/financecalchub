export type EditorialProfile = {
  id: string;
  name: string;
  role: string;
  description: string;
  href: string;
};

export const editorialTeam: EditorialProfile = {
  id: "financecalchub-editorial-team",
  name: "FinanceCalcHub Editorial Team",
  role: "Financial education content team",
  description:
    "The FinanceCalcHub Editorial Team creates educational guides, calculator explanations and practical money content for U.S. readers.",
  href: "/about",
};

export const editorialReviewDesk: EditorialProfile = {
  id: "financecalchub-editorial-review",
  name: "FinanceCalcHub Editorial Review",
  role: "Editorial accuracy and clarity review",
  description:
    "FinanceCalcHub content is reviewed for clarity, internal consistency, source attribution and alignment with the site's editorial standards.",
  href: "/editorial-policy",
};

export const editorialProfiles = {
  editorialTeam,
  editorialReviewDesk,
} as const;
