const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'optimized');
const SIZES = [320, 640, 1024, 1600];
const EXT_WHITELIST = ['.jpg', '.jpeg', '.png'];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function processFile(file) {
  const rel = path.relative(PUBLIC_DIR, file);
  const parsed = path.parse(rel);
  
  if (!EXT_WHITELIST.includes(parsed.ext.toLowerCase())) {
    return;
  }
  
  const basename = parsed.name;
  const outDir = path.join(OUTPUT_DIR, parsed.dir || '');
  ensureDir(outDir);
  
  for (const size of SIZES) {
    const webpOut = path.join(outDir, `${basename}-${size}.webp`);
    const avifOut = path.join(outDir, `${basename}-${size}.avif`);
    
    try {
      await sharp(file)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(webpOut);
      
      await sharp(file)
        .resize({ width: size })
        .avif({ quality: 50 })
        .toFile(avifOut);
    } catch (err) {
      console.error('Error processing', file, err);
    }
  }
  
  console.log(`Optimized: ${rel}`);
}

async function run() {
  ensureDir(OUTPUT_DIR);
  
  const pattern = path.join(PUBLIC_DIR, '**/*.*');
  const files = glob.sync(pattern, {
    nodir: true,
    ignore: ['**/optimized/**', '**/specs/**', '**/certs/**']
  });
  
  for (const f of files) {
    await processFile(f);
  }
  
  console.log('\nImage optimization complete!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
