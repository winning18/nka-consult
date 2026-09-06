import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    location: z.string().default('Accra, Ghana'),
    type: z.string().default('Full-time'),
    datePosted: z.coerce.date(),
    closingDate: z.coerce.date().optional(),
  }),
});

export const collections = { news, jobs };
