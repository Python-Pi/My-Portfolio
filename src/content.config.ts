/**
 * Content Collections Configuration
 * 
 * Defines all content collections for the site with their schemas and validation rules.
 * Uses Astro's Content Collections API with Zod for type-safe content management.
 * @module content.config
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'ongoing', 'archived']).default('ongoing'),
  }),
});

const literatureReviewCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/literature-review' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).optional(),
    venue: z.string().optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'ongoing', 'archived']).default('ongoing'),
  }),
});

const booksCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).optional(),
    publisher: z.string().optional(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'ongoing', 'archived']).default('ongoing'),
  }),
});

const miniBlogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/mini-blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});



/** ==================================STILL IN DEVELOPMENT==================================================== */

const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    /** Date of the timeline entry */
    date: z.coerce.date(),
    
    /** Entry title */
    title: z.string(),
    
    /** Type of timeline entry */
    type: z.enum(['milestone', 'learning', 'transition']),
    
    /** Brief description */
    description: z.string(),
    
    /** Skills or technologies associated with this entry */
    skills: z.array(z.string()).optional(),
  }),
});

const speakingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/speaking' }),
  schema: z.object({
    /** Talk title */
    title: z.string(),
    
    /** Talk description */
    description: z.string(),
    
    /** Event name */
    event: z.string(),
    
    /** Event website URL (optional) */
    eventUrl: z.string().url().optional(),
    
    /** Date of the talk */
    date: z.coerce.date(),
    
    /** Location (city, country, or "Online") */
    location: z.string(),
    
    /** Type of speaking engagement */
    type: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']),
    
    /** Link to slides (optional) */
    slides: z.string().url().optional(),
    
    /** Link to video recording (optional) */
    video: z.string().url().optional(),
    
    /** Talk duration (e.g., "45 min", "1 hour") */
    duration: z.string().optional(),
    
    /** Topics covered in the talk */
    topics: z.array(z.string()).optional(),
    
    /** Whether to feature this talk */
    featured: z.boolean().default(false),
  }),
});


/**
 * Export all collections
 * 
 * This object is used by Astro to register all content collections
 * and generate TypeScript types for type-safe content queries.
 */
export const collections = {
  blogs: blogCollection,
  'literature-review': literatureReviewCollection,
  books: booksCollection,
  'mini-blogs': miniBlogCollection,
  journey: journeyCollection,
  speaking: speakingCollection,
};