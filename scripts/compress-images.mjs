// One-off image optimizer. Re-encodes source images in place (same filename)
// so the existing asset glob keeps working. Run with: node scripts/compress-images.mjs
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const DIRS = ["src/assets/autolec", "src/assets/gallery"];
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

let savedBytes = 0;
let count = 0;

for (const dir of DIRS) {
  const files = await readdir(dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const path = join(dir, file);
    const before = (await stat(path)).size;
    const tmp = join(dir, `__tmp__${file}`);

    let pipeline = sharp(path).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
    pipeline = ext === ".png"
      ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    await pipeline.toFile(tmp);
    const after = (await stat(tmp)).size;

    if (after < before) {
      await unlink(path);
      await rename(tmp, path);
      savedBytes += before - after;
      count++;
      console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
    } else {
      await unlink(tmp);
    }
  }
}

console.log(`\nOptimized ${count} images, saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB.`);
