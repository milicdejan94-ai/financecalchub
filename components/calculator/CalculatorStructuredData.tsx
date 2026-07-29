type CalculatorStructuredDataProps = {
  name: string;
  description: string;
  path: string;
  dateModified: string;
};

const SITE_URL = "https://financecalchub.com";

export default function CalculatorStructuredData({
  name,
  description,
  path,
  dateModified,
}: CalculatorStructuredDataProps) {
  const url = `${SITE_URL}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    dateModified,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "FinanceCalcHub",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
