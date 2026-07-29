import type { Metadata } from "next";

import {
  ContentDiscovery,
  EditorialTrust,
  EducationalExplainers,
  FeaturedStories,
  HousingSpotlight,
  MoneyTopics,
  PortalHero,
  SupportingCalculators,
} from "../components/home";

export const metadata: Metadata = {
  title:
    "FinanceCalcHub | Real Money Stories, Financial Guides and Calculators",
  description:
    "Explore real financial stories, practical US money guides and free calculators covering taxes, income, housing, debt, investing and retirement.",
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is FinanceCalcHub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FinanceCalcHub is an educational financial portal featuring real money stories, practical guides and free financial calculators for US users.",
        },
      },
      {
        "@type": "Question",
        name: "Are Real Money Stories independently verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Personal experiences are presented as claims and are not represented as independently verified facts. Broader educational explanations reference official sources where appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "Are FinanceCalcHub calculators free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FinanceCalcHub calculators are free to use for educational estimates.",
        },
      },
      {
        "@type": "Question",
        name: "Does FinanceCalcHub provide financial advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. FinanceCalcHub provides educational content and simplified estimates, not financial, tax, legal, mortgage or investment advice.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PortalHero />
      <FeaturedStories />
      <EducationalExplainers />
      <ContentDiscovery />
      <MoneyTopics />
      <HousingSpotlight />
      <SupportingCalculators />
      <EditorialTrust />
    </>
  );
}
