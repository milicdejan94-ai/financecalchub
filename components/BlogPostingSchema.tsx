type BlogPostingSchemaProps = {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
  authorName?: string;
  authorUrl?: string;
  reviewerName?: string;
  reviewerUrl?: string;
};

const baseUrl = "https://www.financecalchub.com";

function absoluteUrl(path?: string) {
  if (!path) return baseUrl;
  return path.startsWith("http") ? path : `${baseUrl}${path}`;
}

export default function BlogPostingSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  articleSection,
  authorName = "FinanceCalcHub Editorial Team",
  authorUrl = "/about",
  reviewerName,
  reviewerUrl,
}: BlogPostingSchemaProps) {
  const url = `${baseUrl}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: authorName,
      url: absoluteUrl(authorUrl),
    },
    ...(reviewerName
      ? {
          reviewedBy: {
            "@type": "Organization",
            name: reviewerName,
            url: absoluteUrl(reviewerUrl),
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "FinanceCalcHub",
      url: baseUrl,
    },
    image: image ? absoluteUrl(image) : `${url}/opengraph-image`,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(articleSection ? { articleSection } : {}),
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
