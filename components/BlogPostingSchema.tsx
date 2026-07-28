type BlogPostingSchemaProps = {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
};

const baseUrl = 'https://www.financecalchub.com';

export default function BlogPostingSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  articleSection,
}: BlogPostingSchemaProps) {
  const url = `${baseUrl}${path}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: 'FinanceCalcHub',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FinanceCalcHub',
      url: baseUrl,
    },
    ...(image
      ? {
          image: image.startsWith('http')
            ? image
            : `${baseUrl}${image}`,
        }
      : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(articleSection ? { articleSection } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
