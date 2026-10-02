import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');
const htaccessSrc = path.join(root, 'public', '.htaccess');
const htaccessDest = path.join(outDir, '.htaccess');

if (!existsSync(outDir)) {
  console.error('postbuild: /out directory not found — did `next build` run first?');
  process.exit(1);
}

if (existsSync(htaccessSrc)) {
  copyFileSync(htaccessSrc, htaccessDest);
  console.log('postbuild: copied .htaccess into /out');
} else {
  console.warn('postbuild: public/.htaccess not found, skipping copy');
}

const zipPath = path.join(root, 'qiblasamt-deploy.zip');
try {
  execFileSync('powershell', [
    '-NoProfile',
    '-Command',
    `Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force`,
  ]);
  console.log(`postbuild: created ${path.relative(root, zipPath)}`);
} catch (err) {
  console.warn('postbuild: could not create zip automatically —', err.message);
  console.warn(`postbuild: zip the contents of ${outDir} manually for upload.`);
}
