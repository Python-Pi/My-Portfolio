/**
 * Site Configuration
 * 
 * Centralized configuration for the entire site
 * @module config
 */

export const siteConfig = {
  /**
   * Site URL (required for sitemap, canonical URLs, OG tags)
   * Example: 'https://example.com'
   */
  url: 'https://www.tousif.in',
  
  /**
   * Site language 
   */
  language: 'en',
  
  /**
   * Site title
   */
  title: 'My Personal Blog',
  
  /**
   * Site description
   * 
   * Default meta description for SEO and social sharing.
   */
  description: 'Thoughts, projects, and notes on software development and machine learning',
  
  /**
   * Author information
   */
  author: {
    /** Full name */
    name: 'Tousif',
    
    /** Professional title or role */
    title: 'Software Developer',
    
    /** Short biography or professional summary */
    bio: 'Passionate about building impactful software solutions and exploring machine learning.',
    
    /** Contact email address */
    email: 'tousfchinnu@gmail.com',
    
    /** Location (optional, empty string to hide) */
    location: 'Greater Bengaluru, India',
  },
  
  /**
   * Social media links
   */
  social: {
    /** GitHub profile URL */
    github: 'https://github.com/Python-Pi',

    /** LinkedIn profile URL */
    linkedin: 'https://www.linkedin.com/in/tousif-ahamad-81b379121/',

    /** Mail */
    email: 'mailto:tousfchinnu@gmail.com',
  },
  
  /**
   * Add or remove items to customize navigation.
   */
  nav: [
    { label: 'Blogs', href: '/blogs' },
    // { label: 'Knowledge Base', href: '/base' },
    { label: 'Journey', href: '/journey' },
    // { label: 'Writing', href: '/writing' },
    // { label: 'Speaking', href: '/speaking' },
    // { label: 'Uses', href: '/uses' },
    // { label: 'Contact', href: '/contact' },
  ],
} as const;

/**
 * Type export for the entire site configuration
 * 
 * Use this type when you need to reference the full config structure.
 */
export type SiteConfig = typeof siteConfig;

/**
 * Type export for social links object
 * 
 * Use this type when working specifically with social media links.
 */
export type SocialLinks = typeof siteConfig.social;

/**
 * Type export for a single navigation item
 * 
 * Use this type when working with individual nav items.
 */
export type NavItem = typeof siteConfig.nav[number];
