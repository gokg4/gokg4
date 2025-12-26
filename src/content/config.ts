import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date().or(z.string()).optional(),
        image: image().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    posts,
};
