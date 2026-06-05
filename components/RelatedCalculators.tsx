type RelatedTool = {
  title: string;
  href: string;
};

type RelatedCalculatorsProps = {
  title?: string;
  tools: RelatedTool[];
};

export default function RelatedCalculators({
  title = 'Related calculators',
  tools,
}: RelatedCalculatorsProps) {
  return (
    <div className="related-box">
      <h2>{title}</h2>

      <div className="related-grid">
        {tools.map((tool) => (
          <a href={tool.href} key={tool.href} className="related-link">
            {tool.title} →
          </a>
        ))}
      </div>
    </div>
  );
}