import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const SITE_URL = "http://tousif.in/"

export default defineConfig({
  /**
   * Output mode: Static Site Generation (SSG)
   * 
   * Generates static HTML files at build time for optimal performance
   * and hosting flexibility. All pages are pre-rendered.
   */
  output: 'static',
  
  /**
   * Astro integrations
   * 
   * - MDX: Enables MDX support for rich content authoring with JSX components
   * - Sitemap: Automatically generates sitemap.xml for search engines
   * - Icon: Provides easy access to a wide range of icons
   */
  integrations: [
    mdx({
      extendMarkdownConfig: true,
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    icon(),
  ],
  
  /**
   * Site URL
   * 
   * Base URL for the site, loaded from SITE_URL environment variable.
   * Required for:
   * - Sitemap generation
   * - Canonical URLs
   * - Open Graph tags
   * - RSS feeds
   * 
   */
  site: SITE_URL || 'https://example.com',  
  
  /**
   * Image optimization configuration
   * 
   * Uses Astro's built-in Sharp-based image service for automatic optimization.
   * 
   * Features:
   * - Automatic format conversion (AVIF, WebP, PNG, JPEG)
   * - Responsive image generation with srcset
   * - Build-time optimization for static images
   * - Memory-safe processing with pixel limits
   * 
   * The limitInputPixels setting prevents memory issues when processing
   * very large images (~16K x 16K pixels maximum).
   */
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image processing to avoid memory issues
        limitInputPixels: 268402689, // ~16K x 16K pixels
      }
    },
    // Remote image patterns (currently empty - add patterns as needed)
    remotePatterns: [],
  },
  
  /**
   * Markdown configuration
   */
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
