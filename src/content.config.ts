import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  section: z.enum([
    'beginner',
    'intermediate',
    'advanced',
    'practical',
    'platforms',
    'best-practices',
    'comparisons',
  ]),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  readingTime: z.number().optional(),
  draft: z.boolean().default(false),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),
});

const beginner = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/beginner' }),
  schema: lessonSchema,
});

const intermediate = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/intermediate' }),
  schema: lessonSchema,
});

const advanced = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/advanced' }),
  schema: lessonSchema,
});

const practical = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/practical' }),
  schema: lessonSchema,
});

const platforms = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/platforms' }),
  schema: lessonSchema,
});

const bestPractices = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/best-practices' }),
  schema: lessonSchema,
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/comparisons' }),
  schema: lessonSchema,
});

export const collections = {
  beginner,
  intermediate,
  advanced,
  practical,
  platforms,
  'best-practices': bestPractices,
  comparisons,
};
