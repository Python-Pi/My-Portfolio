import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve('dist/pagefind');
const publicDir = resolve('public/pagefind');

if (!existsSync(distDir)) {
  console.warn('[pagefind] dist/pagefind not found. Skipping search bundle sync.');
  process.exit(0);
}

try {
  const publicRoot = resolve('public');
  if (!existsSync(publicRoot)) {
    mkdirSync(publicRoot, { recursive: true });
  }

  if (existsSync(publicDir)) {
    rmSync(publicDir, { recursive: true, force: true });
  }

  cpSync(distDir, publicDir, { recursive: true });
  console.log('[pagefind] Synced dist/pagefind to public/pagefind.');
} catch (error) {
  console.error('[pagefind] Failed to sync search bundle:', error);
  process.exitCode = 1;
}
