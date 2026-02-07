/**
 * Notes index data
 *
 * JSON-style structure describing folders of saved references
 * to existing blog entries. Add new folders or entries
 * by editing this file only.
 */

export type NotesEntryCollection = 'blogs';

export interface NotesEntry {
  slug: string;
  collection: NotesEntryCollection;
  summary?: string;
}

export interface NotesFolder {
  id: string;
  title: string;
  description?: string;
  entries: NotesEntry[];
}

export const notesIndex: NotesFolder[] = [
    {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Notes on important patterns and ways to approach DSA problems.',
    entries: [
        {
        slug: 'prefix-sum',
        collection: 'blogs',
        }
    ],
  },
  {
    id: 'cpp',
    title: 'C++ Core',
    description: 'Notes on core C++ concepts and features.',
    entries: [
      {
        slug: 'smart-pointers',
        collection: 'blogs',
      },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Notes on machine learning concepts and techniques.',
    entries: [
      {
        slug: 'why-transformers-dont-use-batch-normalization',
        collection: 'blogs',
      },
      {
        slug: 'what-is-collapse-in-self-supervised-learning',
        collection: 'blogs',
      },
      {
        slug: 'discriminative-generative-models',
        collection: 'blogs',
      },
      {
        slug: 'probabilistic-linear-regression',
        collection: 'blogs',
      },
      {
        slug: 'probabilistic-ml',
        collection: 'blogs',
      },
      {
        slug: 'ml-metrics',
        collection: 'blogs',
      }
    ],
  },
  {
    id: 'math',
    title: 'Mathematics',
    description: 'Notes on various mathematical concepts.',
    entries: [
      {
        slug: 'math-distributions',
        collection: 'blogs',
      }
    ],
  }
];
