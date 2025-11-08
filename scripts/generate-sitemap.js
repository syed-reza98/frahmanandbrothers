const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITE_BASE_URL || 'https://syed-reza98.github.io/frahmanandbrothers';
const OUT_DIR = path.join(process.cwd(), 'out');

const routes = [
  '/',
  '/about',
  '/contact',
  '/products',
  '/supply-chain'
];

function isoNow() {
  return new Date().toISOString();
}

function generate() {
  const urls = routes
    .map((r) => `  <url>
    <loc>${BASE_URL}${r === '/' ? '' : r}</loc>
    <lastmod>${isoNow()}</lastmod>
    <changefreq>${r === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`)
    .join('\n');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }
  
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap generated successfully at out/sitemap.xml');
}

generate();
