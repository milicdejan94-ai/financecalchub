import type { RealMoneyStoryQuickFact } from "../../lib/real-money-stories/types";

type StoryQuickFactsProps = {
  facts: RealMoneyStoryQuickFact[];
};

export default function StoryQuickFacts({ facts }: StoryQuickFactsProps) {
  if (!facts.length) {
    return null;
  }

  return (
    <div className="story-quick-facts">
      <h2>Quick facts</h2>

      <dl className="story-quick-facts-grid">
        {facts.map((fact) => (
          <div className="story-quick-fact" key={`${fact.label}-${fact.value}`}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
