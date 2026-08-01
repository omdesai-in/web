import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const assetsRoot = join(projectRoot, "public", "assets");

const REQUIRED_ASSETS = [
  "hero/om-desai-hero.webp",
  "video-posters/lexi-introduction-poster.webp",
  "video-posters/lexi-pitch-poster.webp",
  "video-posters/ancient-intelligence-lab-poster.webp",
  "video-posters/cyfj-walkthrough-poster.webp",
  "video-posters/iste-placement-leadership-poster.webp",
  "lexi/lexi-product-pitch.webp",
  "lexi/lexi-customer-communication.webp",
  "lexi/lexi-founder-update.webp",
  "ancient-intelligence-lab/ancient-intelligence-lab-session.webp",
  "ancient-intelligence-lab/ancient-intelligence-lab-convocation.webp",
  "ancient-intelligence-lab/ancient-intelligence-lab-parent-certificate.webp",
  "cyfj/cyfj-opportunity-tracker.webp",
  "cyfj/cyfj-analytics-overview.webp",
  "cyfj/cyfj-boarding-pass.webp",
  "iste-placement-leadership/iste-facilitation-sop.webp",
  "iste-placement-leadership/iste-placement-60-person-event.webp",
  "iste-placement-leadership/iste-operations-google-sheet.webp",
  "vectors/taking-initiative.svg",
  "vectors/ownership.svg",
  "vectors/curiosity.svg",
  "documents/om-desai-lexi-resume.pdf",
  "brand/om-desai-favicon.svg",
];

const errors = [];

function findActualCasedPath(relativePath) {
  const segments = relativePath.split("/");
  let currentDir = assetsRoot;
  const resolvedSegments = [];

  for (const segment of segments) {
    if (!existsSync(currentDir)) {
      return null;
    }

    const entries = readdirSync(currentDir);
    const match = entries.find((entry) => entry === segment);

    if (match) {
      resolvedSegments.push(match);
      currentDir = join(currentDir, match);
      continue;
    }

    const caseInsensitiveMatch = entries.find(
      (entry) => entry.toLowerCase() === segment.toLowerCase(),
    );

    if (caseInsensitiveMatch) {
      return { exists: true, exactCase: false, actual: caseInsensitiveMatch, segments: resolvedSegments };
    }

    return null;
  }

  return { exists: true, exactCase: true, segments: resolvedSegments };
}

console.log("Validating required assets against Section 6 of the master build guideline...\n");

if (!existsSync(assetsRoot)) {
  console.error(`FAIL: public/assets does not exist at ${assetsRoot}`);
  process.exit(1);
}

for (const relativePath of REQUIRED_ASSETS) {
  const fullPath = join(assetsRoot, ...relativePath.split("/"));

  if (!existsSync(fullPath)) {
    const found = findActualCasedPath(relativePath);
    if (found && !found.exactCase) {
      errors.push(
        `MISSING (case mismatch): expected "assets/${relativePath}" but found "assets/${found.segments.join("/")}${found.segments.length ? "/" : ""}${found.actual}"`,
      );
    } else {
      errors.push(`MISSING: assets/${relativePath}`);
    }
    continue;
  }

  const stats = statSync(fullPath);
  if (stats.size === 0) {
    errors.push(`EMPTY FILE: assets/${relativePath} is zero bytes`);
  }
}

function scanForInvalidNaming(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = join(dir, entry.name);
    const relPath = relative(assetsRoot, entryPath).replace(/\\/g, "/");

    if (/\s/.test(entry.name)) {
      errors.push(`INVALID NAME (space): assets/${relPath}`);
    }

    if (/[A-Z]/.test(entry.name)) {
      errors.push(`INVALID NAME (uppercase): assets/${relPath}`);
    }

    if (entry.isDirectory()) {
      scanForInvalidNaming(entryPath);
    }
  }
}

scanForInvalidNaming(assetsRoot);

if (errors.length > 0) {
  console.error("Asset validation FAILED:\n");
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  console.error(`\n${errors.length} problem(s) found. Fix the files above and re-run npm run validate:assets.`);
  process.exit(1);
}

console.log(`All ${REQUIRED_ASSETS.length} required assets are present, correctly cased, and non-empty.`);
console.log("No stray spaces or uppercase characters found under public/assets.");
