/**
 * Page metadata interface
 */
interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Welcome to my personal blog where I share thoughts on software development, machine learning and other stuff.',
  },

  /**
   * Blogs listing page (/blogs)
   */
  blogs: {
    title: 'Blogs',
    description: 'Latest blog posts covering software development, machine learning, and practical lessons from the field.',
    heading: 'Blogs',
    intro: 'An ongoing log of what I’m learning, building, and thinking',
  },

  /**
   * Research papers listing page (/research-papers)
   */
  researchPapers: {
    title: 'Research Papers',
    description: 'Summaries and notes from academic papers I\'m studying, with key takeaways for practitioners.',
    heading: 'Research Papers',
    intro: 'Paper breakdowns and insights from the research I read.',
  },

  /**
   * Books listing page (/books)
   */
  books: {
    title: 'Books',
    description: 'Highlights, summaries, and reflections from the books I\'ve read and am currently exploring.',
    heading: 'Books',
    intro: 'Reading notes and lessons from the titles shaping my thinking.',
  },

  /**
   * Mini blogs listing page (/mini-blogs)
   */
  miniBlogs: {
    title: 'Mini Blogs',
    description: 'Short-form notes and quick takeaways that capture learnings before they become full blogs.',
    heading: 'Mini Blogs',
    intro: 'Bite-sized updates that don\'t need a full article.',
  },

  /** ===========================STILL IN DEVELOPMENT============================================= */
  
  journey: {
    title: 'Journey - Career Growth & Learning Timeline',
    description: 'A chronological timeline of my professional journey, highlighting key milestones, learning moments, and career transitions that shaped my growth as an engineer.',
    heading: 'Journey',
    intro: 'A timeline of my professional growth and learning progression. This isn\'t a resume—it\'s a story of how I\'ve evolved as an engineer, the pivotal moments that shaped my thinking, and the skills I\'ve developed along the way.',
  },
  
  /**
   * Speaking engagements page (/speaking)
   */
  speaking: {
    title: 'Speaking - Talks & Presentations',
    description: 'Conference talks, meetup presentations, podcast appearances, and workshops on software engineering, architecture, and technical leadership.',
    heading: 'Speaking',
    intro: 'I regularly speak at conferences, meetups, and on podcasts about software architecture, engineering practices, and technical leadership. Here\'s a collection of my talks and presentations.',
  },

  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Let\'s Talk',
  },
  
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
