const baseUrl = "https://www.financecalchub.com";

export default function EditorialOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "FinanceCalcHub Editorial Team",
    url: `${baseUrl}/editorial-team`,
    description:
      "Information about the FinanceCalcHub Editorial Team, its responsibilities and its approach to financial education content.",
    mainEntity: {
      "@type": "Organization",
      name: "FinanceCalcHub Editorial Team",
      url: `${baseUrl}/editorial-team`,
      description:
        "The editorial team responsible for FinanceCalcHub educational guides, calculator explanations and Real Money Stories.",
      parentOrganization: {
        "@type": "Organization",
        name: "FinanceCalcHub",
        url: baseUrl,
      },
      email: "contact@financecalchub.com",
      knowsAbout: [
        "Personal finance education",
        "Paycheck calculations",
        "Salary calculations",
        "Mortgage calculations",
        "Debt payoff calculations",
        "Savings and retirement calculations",
        "Beginner investing education",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
