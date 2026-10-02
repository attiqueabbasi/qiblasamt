import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const iconsDir = path.join(publicDir, 'icons');
mkdirSync(iconsDir, { recursive: true });

const GREEN = '#0F5C4A';
const GOLD = '#C8A24A';

function markSvg(size, { padding = 0 } = {}) {
  const s = size;
  const inner = s - padding * 2;
  const cx = s / 2;
  const cy = s / 2;
  const r = inner * 0.34;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${s}" height="${s}" fill="${GREEN}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#FFFFFF" stroke-width="${inner * 0.045}"/>
    <line x1="${cx}" y1="${cy - inner * 0.02}" x2="${cx}" y2="${cy - r * 1.35}" stroke="#FFFFFF" stroke-width="${inner * 0.03}" stroke-linecap="round" transform="rotate(45 ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="${inner * 0.05}" fill="${GOLD}"/>
    <circle cx="${cx + r * 0.98}" cy="${cy - r * 0.02}" r="${inner * 0.075}" fill="${GOLD}" transform="rotate(45 ${cx} ${cy})"/>
  </svg>`;
}

function faviconSvg() {
  return markSvg(64);
}

async function run() {
  const targets = [
    { file: 'favicon-32.png', size: 32, padding: 0 },
    { file: 'apple-touch-icon.png', size: 180, padding: 16 },
    { file: 'icons/icon-192.png', size: 192, padding: 0 },
    { file: 'icons/icon-512.png', size: 512, padding: 0 },
    { file: 'icons/icon-maskable-192.png', size: 192, padding: 26 },
    { file: 'icons/icon-maskable-512.png', size: 512, padding: 68 },
  ];

  for (const t of targets) {
    const svg = markSvg(t.size, { padding: t.padding });
    await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, t.file));
    console.log('wrote', t.file);
  }

  // favicon.svg
  const fs = await import('node:fs/promises');
  await fs.writeFile(path.join(publicDir, 'favicon.svg'), faviconSvg());
  console.log('wrote favicon.svg');

  // OG image (1200x630) — brand mark + Latin wordmark, no Arabic shaping risk.
  const ogWidth = 1200;
  const ogHeight = 630;
  const ogSvg = `<svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${ogWidth}" height="${ogHeight}" fill="${GREEN}"/>
    <circle cx="${ogWidth / 2}" cy="255" r="110" fill="none" stroke="#FFFFFF" stroke-width="6"/>
    <circle cx="${ogWidth / 2}" cy="255" r="8" fill="${GOLD}"/>
    <line x1="${ogWidth / 2}" y1="255" x2="${ogWidth / 2 + 95}" y2="160" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <circle cx="${ogWidth / 2 + 95}" cy="160" r="12" fill="${GOLD}"/>
    <text x="${ogWidth / 2}" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="700" fill="#FFFFFF">Qibla Samt</text>
    <text x="${ogWidth / 2}" y="485" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#E3ECE8">QiblaSamt.com — Free Qibla Direction Finder</text>
  </svg>`;
  mkdirSync(path.join(publicDir, 'images'), { recursive: true });
  await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'images', 'qibla-finder-og.jpg'));
  console.log('wrote images/qibla-finder-og.jpg');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
