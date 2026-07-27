type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const baseUrl = 'https://www.financecalchub.com';

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const listItem: {
        '@type': 'ListItem';
        position: number;
        name: string;
        item?: string;
      } = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };

      if (item.href) {
        listItem.item = `${baseUrl}${item.href}`;
      }

      return listItem;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;

          return (
            <span key={`${item.href ?? 'current'}-${item.label}`}>
              {item.href && !isCurrentPage ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span aria-current={isCurrentPage ? 'page' : undefined}>
                  {item.label}
                </span>
              )}

              {!isCurrentPage && (
                <span
                  className="breadcrumb-separator"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
