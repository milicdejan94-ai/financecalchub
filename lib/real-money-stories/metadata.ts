import type { Metadata } from 'next';
import type { RealMoneyStoryDefinition } from './types';

const storyBasePath = '/blog/real-money-stories';

export function createRealMoneyStoryMetadata(
  story: RealMoneyStoryDefinition
): Metadata {
  const path = `${storyBasePath}/${story.slug}`;

  return {
    title: story.seoTitle,
    description: story.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: story.seoTitle,
      description: story.description,
      url: path,
      type: 'article',
      siteName: 'FinanceCalcHub',
      ...(story.datePublished
        ? { publishedTime: story.datePublished }
        : {}),
      ...(story.dateModified
        ? { modifiedTime: story.dateModified }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: story.seoTitle,
      description: story.description,
    },
  };
}
