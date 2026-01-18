import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { randomBytes, pbkdf2Sync, createCipheriv } from "node:crypto";
import path from "node:path";

const loadEnv = () => {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    if (!key || process.env[key] !== undefined) continue;
    const value = trimmed.slice(idx + 1).trim();
    process.env[key] = value;
  }
};

loadEnv();

const args = new Map();
for (let i = 2; i < process.argv.length; i++) {
  const [k, v] = process.argv[i].split("=");
  if (v === undefined) {
    if (k.startsWith("--")) args.set(k.slice(2), process.argv[i + 1]);
    i++;
  } else {
    args.set(k.replace(/^--/, ""), v);
  }
}

const inPath = args.get("in") || args.get("input") || "private-notes.mdx";
const outPath = args.get("out") || args.get("output") || path.join("public", "private-notes.json");
const iterations = Number(args.get("iterations") || 200000);
const password = process.env.PRIVATE_NOTES_PASSWORD || args.get("password");

if (!password) {
  console.error("Missing password. Provide via env PRIVATE_NOTES_PASSWORD or --password.");
  process.exit(1);
}

const plaintext = readFileSync(inPath);
const salt = randomBytes(16);
const key = pbkdf2Sync(Buffer.from(password), salt, iterations, 32, "sha256");
const iv = randomBytes(12);
const cipher = createCipheriv("aes-256-gcm", key, iv);
const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
const tag = cipher.getAuthTag();

const meta = {
  version: 1,
  algo: "AES-GCM",
  kdf: "PBKDF2",
  iterations,
  salt: salt.toString("base64"),
  iv: iv.toString("base64"),
  ciphertext: ciphertext.toString("base64"),
  tag: tag.toString("base64"),
  mime: "text/plain",
};

writeFileSync(outPath, JSON.stringify(meta, null, 2));
console.log(`Wrote encrypted notes to ${outPath}`);
