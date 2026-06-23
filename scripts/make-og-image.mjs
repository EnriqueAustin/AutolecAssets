// Generates a 1200x630 social share image. Run: node scripts/make-og-image.mjs
import sharp from "sharp";

const W = 1200;
const H = 630;

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#151816" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="#151816" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#151816" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="64" y="92" width="150" height="40" rx="6" fill="#3b7253"/>
  <text x="80" y="120" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#ffffff" letter-spacing="1">AUTOLEC ASSETS</text>
  <text x="64" y="250" font-family="Arial Black, Arial, sans-serif" font-size="68" font-weight="900" fill="#ffffff">Agricultural machinery</text>
  <text x="64" y="328" font-family="Arial Black, Arial, sans-serif" font-size="68" font-weight="900" fill="#ffffff">built, repaired &amp;</text>
  <text x="64" y="406" font-family="Arial Black, Arial, sans-serif" font-size="68" font-weight="900" fill="#ffffff">maintained.</text>
  <text x="64" y="500" font-family="Arial, sans-serif" font-size="28" fill="#cdd3cb">Baggers &amp; de-baggers · Middelburg, South Africa</text>
  <rect x="64" y="534" width="64" height="6" rx="3" fill="#3b7253"/>
</svg>`);

await sharp("src/assets/gallery/goosen-sky.jpg")
  .resize(W, H, { fit: "cover", position: "right" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile("public/og-image.jpg");

console.log("Wrote public/og-image.jpg");
