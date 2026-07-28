import type { RealMoneyStoryTimelineItem } from "../../lib/real-money-stories/types";

type StoryTimelineProps = {
  items: RealMoneyStoryTimelineItem[];
};

export default function StoryTimeline({ items }: StoryTimelineProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="story-timeline">
      <h2>Timeline</h2>

      <ol className="story-timeline-list">
        {items.map((item) => (
          <li key={`${item.title}-${item.description}`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
