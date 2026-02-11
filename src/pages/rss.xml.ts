import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { sections } from '@lib/navigation';
import { SITE } from '@lib/constants';

export async function GET(context: APIContext) {
  const allLessons: { title: string; description: string; link: string; pubDate: Date }[] = [];

  for (const section of sections) {
    const lessons = await getCollection(section.collectionName as any, ({ data }: any) => !data.draft);
    for (const lesson of lessons) {
      allLessons.push({
        title: (lesson as any).data.title,
        description: (lesson as any).data.description,
        link: `${section.urlPrefix}/${lesson.id}/`,
        pubDate: (lesson as any).data.pubDate || new Date('2025-01-01'),
      });
    }
  }

  // Sort by pubDate descending
  allLessons.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: allLessons,
    customData: '<language>zh-cn</language>',
  });
}
