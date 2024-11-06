import { defineCollection, z } from 'astro:content';

const contentCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  sermons: contentCollection,
  articles: contentCollection,
  devotions: contentCollection,
};