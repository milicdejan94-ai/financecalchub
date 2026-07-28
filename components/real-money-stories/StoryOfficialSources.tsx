import type {
  RealMoneyStorySource,
} from '../../lib/real-money-stories/types';

type StoryOfficialSourcesProps = {
  sources: RealMoneyStorySource[];
};

export default function StoryOfficialSources({
  sources,
}: StoryOfficialSourcesProps) {
  if (!sources.length) {
    return null;
  }

  return (
    <section className="story-official-sources">
      <h2>Official resources</h2>

      <ul>
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {source.title}
            </a>

            {source.organization
              ? ` — ${source.organization}`
              : ''}
          </li>
        ))}
      </ul>
    </section>
  );
}
