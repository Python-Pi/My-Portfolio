/**
 * Notes index data
 *
 * JSON-style structure describing folders of saved references
 * to existing blog and mini-blog entries. Add new folders or entries
 * by editing this file only.
 */

export type NotesEntryCollection = 'blogs' | 'mini-blogs';

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
    id: 'cpp',
    title: 'C++ Core',
    description: 'Notes on core C++ concepts and features.',
    entries: [
      {
        slug: 'smart-pointers',
        collection: 'blogs',
      },
    ],
  }
];
