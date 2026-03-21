import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Ecosoft Team'),
    category: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    client: z.string(),
    industry: z.string(),
    solution: z.string(),
    size: z.string(),
    location: z.string().default('Thailand'),
    outcome: z.string(),
    featured: z.boolean().default(false),
    quote: z.string(),
    quoteAuthor: z.string(),
    quoteTitle: z.string(),
  }),
});

export const collections = { blog, 'case-studies': caseStudies };
