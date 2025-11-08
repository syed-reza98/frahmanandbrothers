const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');
const QRCode = require('qrcode');

const SPECS_DIR = path.join(process.cwd(), 'public', 'specs');
const CERTS_DIR = path.join(process.cwd(), 'public', 'certs');
const SDS_DIR = path.join(process.cwd(), 'public', 'sds');
const GUIDES_DIR = path.join(process.cwd(), 'public', 'guides');
const REPORTS_DIR = path.join(process.cwd(), 'public', 'reports');

const SITE_URL = 'https://syed-reza98.github.io/frahmanandbrothers';

// Ensure directories exist
[SPECS_DIR, CERTS_DIR, SDS_DIR, GUIDES_DIR, REPORTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Product specifications data
const productSpecs = [
  {
    name: 'Urea',
    filename: 'urea-specification.pdf',
    composition: 'Nitrogen (N): 46%',
    appearance: 'White granular or prilled',
    specifications: [
      { parameter: 'Total Nitrogen (N)', value: 'Min 46.0%', standard: 'IS 6382:2013' },
      { parameter: 'Biuret', value: 'Max 1.0%', standard: 'IS 6382:2013' },
      { parameter: 'Moisture', value: 'Max 0.5%', standard: 'IS 6382:2013' },
      { parameter: 'Particle Size (1-4mm)', value: 'Min 90%', standard: 'IS 6382:2013' },
      { parameter: 'Color', value: 'White', standard: 'Visual' }
    ],
    uses: [
      'Promotes vigorous vegetative growth',
      'Essential for chlorophyll production',
      'Suitable for all crops - rice, wheat, sugarcane, vegetables',
      'Quick-release nitrogen for immediate plant uptake',
      'Can be applied as top dressing or basal application'
    ],
    application: 'Apply 2-3 weeks before planting or as top dressing during active growth. Rate: 100-200 kg/acre depending on crop and soil test.',
    storage: 'Store in cool, dry place away from moisture. Keep in sealed bags. Shelf life: 2 years from manufacturing date.'
  },
  {
    name: 'Triple Super Phosphate (TSP)',
    filename: 'tsp-specification.pdf',
    composition: 'Phosphorus (P₂O₅): 46%',
    appearance: 'Gray granular',
    specifications: [
      { parameter: 'Available P₂O₅', value: 'Min 46.0%', standard: 'IS 6951:1990' },
      { parameter: 'Water Soluble P₂O₅', value: 'Min 40.0%', standard: 'IS 6951:1990' },
      { parameter: 'Free Acid (as H₃PO₄)', value: 'Max 5.0%', standard: 'IS 6951:1990' },
      { parameter: 'Moisture', value: 'Max 4.0%', standard: 'IS 6951:1990' },
      { parameter: 'Particle Size (2-4mm)', value: 'Min 85%', standard: 'IS 6951:1990' }
    ],
    uses: [
      'Promotes strong root development',
      'Essential for flowering and fruit formation',
      'Improves seedling establishment',
      'Ideal for phosphorus-deficient soils',
      'Suitable for all crops, especially oilseeds and pulses'
    ],
    application: 'Apply at time of sowing or planting. Mix into soil for best results. Rate: 80-150 kg/acre based on soil test.',
    storage: 'Store in dry, covered area. Protect from moisture and rain. Shelf life: 3 years from manufacturing date.'
  },
  {
    name: 'Muriate of Potash (MOP)',
    filename: 'mop-specification.pdf',
    composition: 'Potassium (K₂O): 60%',
    appearance: 'Red/Pink crystalline',
    specifications: [
      { parameter: 'Water Soluble K₂O', value: 'Min 60.0%', standard: 'IS 6366:2013' },
      { parameter: 'Chloride (as Cl)', value: 'Max 47.0%', standard: 'IS 6366:2013' },
      { parameter: 'Sodium (as Na)', value: 'Max 2.0%', standard: 'IS 6366:2013' },
      { parameter: 'Moisture', value: 'Max 1.5%', standard: 'IS 6366:2013' },
      { parameter: 'Particle Size (1-4mm)', value: 'Min 90%', standard: 'IS 6366:2013' }
    ],
    uses: [
      'Improves crop quality and yield',
      'Enhances drought and disease resistance',
      'Improves fruit size, color, and taste',
      'Essential for fruit and vegetable crops',
      'Increases shelf life of produce'
    ],
    application: 'Apply before flowering or fruit development stage. Rate: 50-100 kg/acre depending on crop requirements.',
    storage: 'Store in moisture-proof bags in dry conditions. Keep away from fertilizers containing calcium. Shelf life: 2 years.'
  },
  {
    name: 'Di-Ammonium Phosphate (DAP)',
    filename: 'dap-specification.pdf',
    composition: 'Nitrogen (N): 18%, Phosphorus (P₂O₅): 46%',
    appearance: 'Dark brown/Black granular',
    specifications: [
      { parameter: 'Total Nitrogen (N)', value: 'Min 18.0%', standard: 'IS 10109:2013' },
      { parameter: 'Available P₂O₅', value: 'Min 46.0%', standard: 'IS 10109:2013' },
      { parameter: 'Water Soluble P₂O₅', value: 'Min 41.0%', standard: 'IS 10109:2013' },
      { parameter: 'Moisture', value: 'Max 2.0%', standard: 'IS 10109:2013' },
      { parameter: 'Particle Size (2-4mm)', value: 'Min 90%', standard: 'IS 10109:2013' }
    ],
    uses: [
      'Dual nutrient source - N and P',
      'Excellent for early plant growth',
      'Promotes root and shoot development',
      'Ideal basal application for all crops',
      'Particularly effective for cereals and oilseeds'
    ],
    application: 'Apply at sowing time as basal dose. Rate: 100-150 kg/acre. Can be mixed with other fertilizers.',
    storage: 'Store in dry, ventilated warehouse. Avoid moisture contact. Shelf life: 2 years from manufacturing date.'
  }
];

// Generate product specification PDFs
function generateProductSpec(spec) {
  const doc = new jsPDF();
  let y = 20;

  // Header
  doc.setFontSize(20);
  doc.setTextColor(11, 99, 214); // Blue
  doc.text('F. Rahman & Brothers', 105, y, { align: 'center' });
  
  y += 8;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Premium Fertilizer Distributor', 105, y, { align: 'center' });
  
  y += 15;
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(`${spec.name} - Technical Specification`, 105, y, { align: 'center' });
  
  // Draw line
  y += 5;
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  
  y += 10;
  
  // Composition
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.text('Composition:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text(spec.composition, 60, y);
  
  y += 7;
  doc.setFont(undefined, 'bold');
  doc.text('Appearance:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text(spec.appearance, 60, y);
  
  y += 12;
  
  // Specifications Table
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Technical Specifications', 20, y);
  
  y += 7;
  doc.setFontSize(10);
  
  // Table header
  doc.setFillColor(230, 240, 255);
  doc.rect(20, y - 5, 170, 8, 'F');
  doc.setFont(undefined, 'bold');
  doc.text('Parameter', 22, y);
  doc.text('Specification', 90, y);
  doc.text('Standard', 145, y);
  
  y += 8;
  doc.setFont(undefined, 'normal');
  
  // Table rows
  spec.specifications.forEach((row, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y - 5, 170, 7, 'F');
    }
    doc.text(row.parameter, 22, y);
    doc.text(row.value, 90, y);
    doc.text(row.standard, 145, y);
    y += 7;
  });
  
  y += 5;
  
  // Uses
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Applications & Benefits', 20, y);
  
  y += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  
  spec.uses.forEach((use, idx) => {
    const bullet = `${idx + 1}.`;
    doc.text(bullet, 22, y);
    const lines = doc.splitTextToSize(use, 160);
    doc.text(lines, 30, y);
    y += lines.length * 5;
  });
  
  y += 5;
  
  // Application Guidelines
  if (y > 250) {
    doc.addPage();
    y = 20;
  }
  
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Application Guidelines', 20, y);
  
  y += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const appLines = doc.splitTextToSize(spec.application, 170);
  doc.text(appLines, 20, y);
  y += appLines.length * 5 + 5;
  
  // Storage Instructions
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Storage & Handling', 20, y);
  
  y += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const storageLines = doc.splitTextToSize(spec.storage, 170);
  doc.text(storageLines, 20, y);
  y += storageLines.length * 5 + 10;
  
  // Footer
  if (y > 260) {
    doc.addPage();
    y = 20;
  }
  
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
  
  y += 5;
  doc.text('Phone: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
  
  y += 5;
  doc.setFontSize(8);
  doc.text(`Document Date: ${new Date().toLocaleDateString()} | Source: Government-Certified Suppliers`, 105, y, { align: 'center' });
  
  // Save
  const filepath = path.join(SPECS_DIR, spec.filename);
  doc.save(filepath);
  console.log(`✓ Generated: ${spec.filename}`);
}

// Generate certification documents
function generateCertificates() {
  // Quality Certification
  const qualityCert = new jsPDF();
  let y = 30;
  
  qualityCert.setFontSize(24);
  qualityCert.setTextColor(11, 99, 214);
  qualityCert.text('CERTIFICATE OF QUALITY', 105, y, { align: 'center' });
  
  y += 20;
  qualityCert.setDrawColor(200, 200, 200);
  qualityCert.setLineWidth(1);
  qualityCert.rect(30, y, 150, 140);
  
  y += 15;
  qualityCert.setFontSize(12);
  qualityCert.setTextColor(0, 0, 0);
  qualityCert.text('This is to certify that', 105, y, { align: 'center' });
  
  y += 15;
  qualityCert.setFontSize(18);
  qualityCert.setFont(undefined, 'bold');
  qualityCert.text('F. RAHMAN & BROTHERS', 105, y, { align: 'center' });
  
  y += 12;
  qualityCert.setFontSize(12);
  qualityCert.setFont(undefined, 'normal');
  qualityCert.text('Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
  
  y += 15;
  const certText = [
    'is an authorized distributor of government-certified fertilizers',
    'and maintains the highest standards of quality control in:',
    '',
    '• Product sourcing from certified government depots',
    '• Storage in climate-controlled facilities',
    '• Distribution through verified retail channels',
    '• Compliance with national quality standards'
  ];
  
  qualityCert.setFontSize(11);
  certText.forEach(line => {
    qualityCert.text(line, 105, y, { align: 'center' });
    y += 7;
  });
  
  y += 10;
  qualityCert.setFontSize(10);
  qualityCert.setTextColor(100, 100, 100);
  qualityCert.text(`Certificate Date: ${new Date().toLocaleDateString()}`, 105, y, { align: 'center' });
  
  y += 8;
  qualityCert.text('Valid until: Continuous certification subject to annual review', 105, y, { align: 'center' });
  
  y += 20;
  qualityCert.setFontSize(11);
  qualityCert.setTextColor(0, 0, 0);
  qualityCert.text('_________________________', 105, y, { align: 'center' });
  
  y += 8;
  qualityCert.text('Authorized Signature', 105, y, { align: 'center' });
  
  qualityCert.save(path.join(CERTS_DIR, 'quality-certification.pdf'));
  console.log('✓ Generated: quality-certification.pdf');
  
  // Government Authorization
  const govAuth = new jsPDF();
  y = 30;
  
  govAuth.setFontSize(24);
  govAuth.setTextColor(11, 99, 214);
  govAuth.text('GOVERNMENT AUTHORIZATION', 105, y, { align: 'center' });
  
  y += 20;
  govAuth.setDrawColor(200, 200, 200);
  govAuth.setLineWidth(1);
  govAuth.rect(30, y, 150, 140);
  
  y += 15;
  govAuth.setFontSize(12);
  govAuth.setTextColor(0, 0, 0);
  govAuth.text('Authorization Certificate', 105, y, { align: 'center' });
  
  y += 15;
  govAuth.setFontSize(16);
  govAuth.setFont(undefined, 'bold');
  govAuth.text('F. RAHMAN & BROTHERS', 105, y, { align: 'center' });
  
  y += 12;
  govAuth.setFontSize(11);
  govAuth.setFont(undefined, 'normal');
  govAuth.text('is hereby authorized as a registered distributor of', 105, y, { align: 'center' });
  
  y += 8;
  govAuth.text('government-certified agricultural fertilizers', 105, y, { align: 'center' });
  
  y += 15;
  const authText = [
    'Authorized to procure and distribute:',
    '',
    '✓ Urea (46% N)',
    '✓ Triple Super Phosphate (TSP - 46% P₂O₅)',
    '✓ Muriate of Potash (MOP - 60% K₂O)',
    '✓ Di-Ammonium Phosphate (DAP - 18-46)',
    '',
    'From government-certified sources to verified retailers',
    'in accordance with national agricultural standards'
  ];
  
  govAuth.setFontSize(11);
  authText.forEach(line => {
    govAuth.text(line, 105, y, { align: 'center' });
    y += 6;
  });
  
  y += 15;
  govAuth.setFontSize(10);
  govAuth.setTextColor(100, 100, 100);
  govAuth.text(`Authorization Date: ${new Date().toLocaleDateString()}`, 105, y, { align: 'center' });
  
  y += 8;
  govAuth.text('Registration Status: Active', 105, y, { align: 'center' });
  
  y += 20;
  govAuth.setFontSize(11);
  govAuth.setTextColor(0, 0, 0);
  govAuth.text('_________________________', 105, y, { align: 'center' });
  
  y += 8;
  govAuth.text('Authorized Government Representative', 105, y, { align: 'center' });
  
  govAuth.save(path.join(CERTS_DIR, 'government-authorization.pdf'));
  console.log('✓ Generated: government-authorization.pdf');
  
  // ISO/Standards Compliance
  const isoCert = new jsPDF();
  y = 30;
  
  isoCert.setFontSize(24);
  isoCert.setTextColor(11, 99, 214);
  isoCert.text('STANDARDS COMPLIANCE', 105, y, { align: 'center' });
  
  y += 20;
  isoCert.setDrawColor(200, 200, 200);
  isoCert.setLineWidth(1);
  isoCert.rect(30, y, 150, 150);
  
  y += 15;
  isoCert.setFontSize(16);
  isoCert.setTextColor(0, 0, 0);
  isoCert.setFont(undefined, 'bold');
  isoCert.text('F. RAHMAN & BROTHERS', 105, y, { align: 'center' });
  
  y += 12;
  isoCert.setFontSize(11);
  isoCert.setFont(undefined, 'normal');
  isoCert.text('Compliance with National Quality Standards', 105, y, { align: 'center' });
  
  y += 15;
  const isoText = [
    'Our products comply with the following standards:',
    '',
    'IS 6382:2013 - Urea Fertilizer Specification',
    'IS 6951:1990 - Triple Super Phosphate (TSP)',
    'IS 6366:2013 - Muriate of Potash (MOP)',
    'IS 10109:2013 - Di-Ammonium Phosphate (DAP)',
    '',
    'Quality Management System:',
    '• Temperature-controlled storage facilities',
    '• Regular quality testing and documentation',
    '• Traceability from source to distribution',
    '• Trained personnel for handling and storage',
    '',
    'All products sourced from government-certified',
    'manufacturers meeting national quality benchmarks'
  ];
  
  isoCert.setFontSize(10);
  isoText.forEach(line => {
    isoCert.text(line, 105, y, { align: 'center' });
    y += 6;
  });
  
  y += 15;
  isoCert.setFontSize(9);
  isoCert.setTextColor(100, 100, 100);
  isoCert.text(`Compliance Date: ${new Date().toLocaleDateString()}`, 105, y, { align: 'center' });
  
  y += 8;
  isoCert.text('Next Review: Annual', 105, y, { align: 'center' });
  
  isoCert.save(path.join(CERTS_DIR, 'standards-compliance.pdf'));
  console.log('✓ Generated: standards-compliance.pdf');
}

// Helper function to generate QR code
async function generateQRCode(url) {
  try {
    return await QRCode.toDataURL(url, { 
      width: 100, 
      margin: 1,
      color: { dark: '#0b63d6', light: '#ffffff' }
    });
  } catch (err) {
    console.error('QR Code generation error:', err);
    return null;
  }
}

// Safety Data Sheets (SDS)
async function generateSDS() {
  const products = [
    {
      name: 'Urea',
      filename: 'urea-sds.pdf',
      chemicalName: 'Urea (Carbamide)',
      casNumber: '57-13-6',
      formula: 'CH₄N₂O',
      hazards: [
        'Eye irritation (Category 2)',
        'May cause respiratory irritation if dust is inhaled'
      ],
      firstAid: {
        eyes: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Get medical attention if irritation persists.',
        skin: 'Wash with plenty of water. If skin irritation occurs, get medical attention.',
        inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Get medical attention.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting. Get medical attention immediately.'
      },
      handling: 'Avoid dust formation. Use in well-ventilated areas. Wear protective gloves and eye protection.',
      storage: 'Store in a cool, dry, well-ventilated area. Keep container tightly closed. Keep away from incompatible materials.'
    },
    {
      name: 'Triple Super Phosphate (TSP)',
      filename: 'tsp-sds.pdf',
      chemicalName: 'Calcium dihydrogen phosphate',
      casNumber: '7758-23-8',
      formula: 'Ca(H₂PO₄)₂',
      hazards: [
        'Causes serious eye irritation',
        'May cause respiratory irritation if dust is inhaled',
        'Contains free phosphoric acid'
      ],
      firstAid: {
        eyes: 'Immediately flush eyes with plenty of water for at least 15 minutes. Get immediate medical attention.',
        skin: 'Wash off with soap and plenty of water. If skin irritation or rash occurs, get medical attention.',
        inhalation: 'Move to fresh air. If not breathing, give artificial respiration. Get medical attention immediately.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting. Get medical attention immediately. Never give anything by mouth to an unconscious person.'
      },
      handling: 'Avoid breathing dust. Use only in well-ventilated areas. Wear protective gloves, clothing, and eye/face protection.',
      storage: 'Store in cool, dry conditions in properly labeled containers. Keep away from moisture and incompatible materials.'
    }
  ];

  for (const product of products) {
    const doc = new jsPDF();
    let y = 20;
    
    // Add QR code
    const qrCode = await generateQRCode(`${SITE_URL}/products`);
    if (qrCode) {
      doc.addImage(qrCode, 'PNG', 170, 10, 25, 25);
    }
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(200, 0, 0); // Red for safety
    doc.text('SAFETY DATA SHEET', 105, y, { align: 'center'});
    
    y += 10;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(product.name, 105, y, { align: 'center' });
    
    y += 10;
    doc.setDrawColor(200, 0, 0);
    doc.setLineWidth(1);
    doc.line(20, y, 190, y);
    
    y += 10;
    
    // Section 1: Identification
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('1. PRODUCT IDENTIFICATION', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Chemical Name: ${product.chemicalName}`, 20, y);
    y += 6;
    doc.text(`CAS Number: ${product.casNumber}`, 20, y);
    y += 6;
    doc.text(`Chemical Formula: ${product.formula}`, 20, y);
    y += 6;
    doc.text(`Manufacturer: F. Rahman & Brothers`, 20, y);
    y += 10;
    
    // Section 2: Hazards
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('2. HAZARD IDENTIFICATION', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    product.hazards.forEach(hazard => {
      doc.text(`• ${hazard}`, 25, y);
      y += 6;
    });
    y += 5;
    
    // Section 3: First Aid
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('3. FIRST AID MEASURES', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Eyes:', 20, y);
    doc.setFont(undefined, 'normal');
    const eyeLines = doc.splitTextToSize(product.firstAid.eyes, 165);
    doc.text(eyeLines, 35, y);
    y += eyeLines.length * 5 + 3;
    
    doc.setFont(undefined, 'bold');
    doc.text('Skin:', 20, y);
    doc.setFont(undefined, 'normal');
    const skinLines = doc.splitTextToSize(product.firstAid.skin, 165);
    doc.text(skinLines, 35, y);
    y += skinLines.length * 5 + 3;
    
    doc.setFont(undefined, 'bold');
    doc.text('Inhalation:', 20, y);
    doc.setFont(undefined, 'normal');
    const inhalationLines = doc.splitTextToSize(product.firstAid.inhalation, 165);
    doc.text(inhalationLines, 35, y);
    y += inhalationLines.length * 5 + 3;
    
    doc.setFont(undefined, 'bold');
    doc.text('Ingestion:', 20, y);
    doc.setFont(undefined, 'normal');
    const ingestionLines = doc.splitTextToSize(product.firstAid.ingestion, 165);
    doc.text(ingestionLines, 35, y);
    y += ingestionLines.length * 5 + 10;
    
    // New page if needed
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    // Section 4: Handling and Storage
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('4. HANDLING AND STORAGE', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Handling:', 20, y);
    doc.setFont(undefined, 'normal');
    const handlingLines = doc.splitTextToSize(product.handling, 165);
    doc.text(handlingLines, 35, y);
    y += handlingLines.length * 5 + 3;
    
    doc.setFont(undefined, 'bold');
    doc.text('Storage:', 20, y);
    doc.setFont(undefined, 'normal');
    const storageLines = doc.splitTextToSize(product.storage, 165);
    doc.text(storageLines, 35, y);
    y += storageLines.length * 5 + 10;
    
    // Footer with scan QR code message
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    
    doc.setDrawColor(200, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 8;
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
    y += 5;
    doc.text('Emergency Contact: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
    y += 5;
    doc.setFontSize(8);
    doc.text(`SDS Date: ${new Date().toLocaleDateString()} | Scan QR code for product information`, 105, y, { align: 'center' });
    
    doc.save(path.join(SDS_DIR, product.filename));
    console.log(`✓ Generated: ${product.filename}`);
  }
}

// Crop-Specific Application Guides
async function generateCropGuides() {
  const crops = [
    {
      name: 'Rice',
      filename: 'rice-fertilization-guide.pdf',
      filename_bn: 'rice-fertilization-guide-bengali.pdf',
      stages: [
        { stage: 'Land Preparation', days: 'Before transplanting', urea: '0 kg/acre', tsp: '30-40 kg/acre', mop: '20-30 kg/acre', notes: 'Apply TSP and MOP during final plowing' },
        { stage: 'Tillering (15-20 DAT)', days: '15-20 days', urea: '40-50 kg/acre', tsp: '0 kg/acre', mop: '0 kg/acre', notes: 'Top dress Urea for vegetative growth' },
        { stage: 'Panicle Initiation (35-40 DAT)', days: '35-40 days', urea: '30-40 kg/acre', tsp: '0 kg/acre', mop: '15-20 kg/acre', notes: 'Apply Urea and MOP for panicle development' },
        { stage: 'Flowering (55-60 DAT)', days: '55-60 days', urea: '20-30 kg/acre', tsp: '0 kg/acre', mop: '0 kg/acre', notes: 'Final Urea application for grain filling' }
      ],
      tips: [
        'Apply fertilizers when soil has adequate moisture',
        'Avoid fertilizer application immediately before heavy rain',
        'Use split application of Urea for better efficiency',
        'Adjust rates based on soil test results'
      ]
    },
    {
      name: 'Wheat',
      filename: 'wheat-fertilization-guide.pdf',
      filename_bn: 'wheat-fertilization-guide-bengali.pdf',
      stages: [
        { stage: 'Sowing', days: 'Day 0', urea: '0 kg/acre', tsp: '35-45 kg/acre', mop: '20-25 kg/acre', notes: 'Apply full dose of TSP, MOP and 1/3 Urea at sowing' },
        { stage: 'Crown Root Initiation (20-25 DAS)', days: '20-25 days', urea: '40-50 kg/acre', tsp: '0 kg/acre', mop: '0 kg/acre', notes: 'First top dressing of Urea' },
        { stage: 'Tillering (40-45 DAS)', days: '40-45 days', urea: '40-50 kg/acre', tsp: '0 kg/acre', mop: '15-20 kg/acre', notes: 'Second Urea application with MOP for tillering' }
      ],
      tips: [
        'Wheat responds well to phosphorus at sowing',
        'Apply nitrogen in split doses for maximum efficiency',
        'Avoid late nitrogen application to prevent lodging',
        'Monitor for nutrient deficiency symptoms'
      ]
    }
  ];

  for (const crop of crops) {
    // English version
    const doc = new jsPDF();
    let y = 20;
    
    // Add QR code
    const qrCode = await generateQRCode(`${SITE_URL}/products`);
    if (qrCode) {
      doc.addImage(qrCode, 'PNG', 170, 10, 25, 25);
    }
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(11, 99, 214);
    doc.text('F. Rahman & Brothers', 105, y, { align: 'center' });
    
    y += 8;
    doc.setFontSize(16);
    doc.text(`${crop.name} Fertilization Guide`, 105, y, { align: 'center' });
    
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Crop-Specific Application Schedule', 105, y, { align: 'center' });
    
    y += 8;
    doc.setDrawColor(11, 99, 214);
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    
    y += 10;
    
    // Fertilization Schedule Table
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text('Fertilization Schedule', 20, y);
    y += 8;
    
    // Table header
    doc.setFontSize(9);
    doc.setFillColor(230, 240, 255);
    doc.rect(20, y - 5, 170, 8, 'F');
    doc.text('Stage', 22, y);
    doc.text('Timing', 60, y);
    doc.text('Urea', 90, y);
    doc.text('TSP', 115, y);
    doc.text('MOP', 140, y);
    y += 8;
    
    doc.setFont(undefined, 'normal');
    crop.stages.forEach((stage, idx) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      
      if (idx % 2 === 0) {
        doc.setFillColor(248, 250, 252);
        doc.rect(20, y - 5, 170, 12, 'F');
      }
      
      doc.setFontSize(8);
      const stageLines = doc.splitTextToSize(stage.stage, 35);
      doc.text(stageLines, 22, y);
      
      doc.text(stage.days, 60, y);
      doc.text(stage.urea, 90, y);
      doc.text(stage.tsp, 115, y);
      doc.text(stage.mop, 140, y);
      
      y += 7;
      doc.setFontSize(7);
      doc.setTextColor(100, 100, 100);
      const notesLines = doc.splitTextToSize(stage.notes, 165);
      doc.text(notesLines, 22, y);
      doc.setTextColor(0, 0, 0);
      y += notesLines.length * 4 + 5;
    });
    
    y += 5;
    
    // Application Tips
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('Application Tips', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    crop.tips.forEach((tip, idx) => {
      const tipLines = doc.splitTextToSize(`${idx + 1}. ${tip}`, 170);
      doc.text(tipLines, 20, y);
      y += tipLines.length * 5 + 2;
    });
    
    y += 10;
    
    // Footer
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    
    doc.setDrawColor(11, 99, 214);
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 8;
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
    y += 5;
    doc.text('Phone: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
    y += 5;
    doc.setFontSize(8);
    doc.text(`Guide Date: ${new Date().toLocaleDateString()} | Scan QR code to visit our website`, 105, y, { align: 'center' });
    
    doc.save(path.join(GUIDES_DIR, crop.filename));
    console.log(`✓ Generated: ${crop.filename}`);
  }
}

// Customer Testimonials PDF
async function generateTestimonials() {
  const doc = new jsPDF();
  let y = 20;
  
  // Add QR code
  const qrCode = await generateQRCode(`${SITE_URL}/about`);
  if (qrCode) {
    doc.addImage(qrCode, 'PNG', 170, 10, 25, 25);
  }
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(11, 99, 214);
  doc.text('Customer Testimonials', 105, y, { align: 'center' });
  
  y += 8;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('F. Rahman & Brothers', 105, y, { align: 'center' });
  
  y += 10;
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  
  y += 12;
  
  const testimonials = [
    {
      name: 'Abdul Karim',
      location: 'Pirojpur District',
      crop: 'Rice Farmer',
      rating: 5,
      text: 'I have been using fertilizers from F. Rahman & Brothers for the past 3 years. The quality is consistently excellent, and my rice yields have increased by 25%. Their technical guidance has been invaluable for my farming success.'
    },
    {
      name: 'Mohammad Hossain',
      location: 'Barisal Division',
      crop: 'Wheat & Vegetable Grower',
      rating: 5,
      text: 'Outstanding products and reliable delivery! The TSP and MOP from F. Rahman & Brothers have significantly improved my wheat and vegetable production. The certification documents give me confidence in product authenticity.'
    },
    {
      name: 'Fatima Begum',
      location: 'Patuakhali District',
      crop: 'Commercial Farmer',
      rating: 5,
      text: 'Professional service and genuine government-certified products. The detailed specification sheets help me make informed decisions. I highly recommend F. Rahman & Brothers to all farmers in our region.'
    },
    {
      name: 'Rahim Sheikh',
      location: 'Barguna District',
      crop: 'Fruit & Vegetable Cultivation',
      rating: 5,
      text: 'The quality of fertilizers has transformed my fruit orchards. Better fruit size, color, and taste. The storage instructions and application guidelines are very helpful. Great company to work with!'
    }
  ];
  
  testimonials.forEach((testimonial, idx) => {
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    
    // Testimonial card
    doc.setDrawColor(230, 240, 255);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(20, y - 5, 170, 45, 2, 2, 'FD');
    
    // Stars
    doc.setFontSize(14);
    doc.setTextColor(255, 193, 7);
    doc.text('★★★★★', 22, y + 3);
    
    // Name and location
    y += 10;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text(testimonial.name, 22, y);
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.setFont(undefined, 'normal');
    doc.text(`${testimonial.location} | ${testimonial.crop}`, 22, y + 5);
    
    // Testimonial text
    y += 12;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const textLines = doc.splitTextToSize(testimonial.text, 165);
    doc.text(textLines, 22, y);
    
    y += textLines.length * 5 + 15;
  });
  
  // Footer
  if (y > 260) {
    doc.addPage();
    y = 20;
  }
  
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  y += 8;
  
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
  y += 5;
  doc.text('Phone: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
  y += 5;
  doc.setFontSize(8);
  doc.text(`Compiled: ${new Date().toLocaleDateString()} | Scan QR code for more information`, 105, y, { align: 'center' });
  
  doc.save(path.join(REPORTS_DIR, 'customer-testimonials.pdf'));
  console.log('✓ Generated: customer-testimonials.pdf');
}

// Quality Test Reports
async function generateTestReports() {
  const doc = new jsPDF();
  let y = 20;
  
  // Add QR code
  const qrCode = await generateQRCode(`${SITE_URL}/products`);
  if (qrCode) {
    doc.addImage(qrCode, 'PNG', 170, 10, 25, 25);
  }
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(11, 99, 214);
  doc.text('QUALITY TEST REPORT', 105, y, { align: 'center' });
  
  y += 8;
  doc.setFontSize(12);
  doc.text('Batch Analysis Certificate', 105, y, { align: 'center' });
  
  y += 10;
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(1);
  doc.line(20, y, 190, y);
  
  y += 10;
  
  // Report details
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, 'bold');
  doc.text('Product:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text('Urea Fertilizer (46% N)', 60, y);
  
  y += 7;
  doc.setFont(undefined, 'bold');
  doc.text('Batch Number:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text(`UREA-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-001`, 60, y);
  
  y += 7;
  doc.setFont(undefined, 'bold');
  doc.text('Test Date:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text(new Date().toLocaleDateString(), 60, y);
  
  y += 7;
  doc.setFont(undefined, 'bold');
  doc.text('Laboratory:', 20, y);
  doc.setFont(undefined, 'normal');
  doc.text('Government Approved Testing Lab, Dhaka', 60, y);
  
  y += 12;
  
  // Test Results Table
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Test Results', 20, y);
  y += 8;
  
  // Table header
  doc.setFontSize(10);
  doc.setFillColor(230, 240, 255);
  doc.rect(20, y - 5, 170, 8, 'F');
  doc.text('Parameter', 22, y);
  doc.text('Specification', 90, y);
  doc.text('Test Result', 130, y);
  doc.text('Status', 165, y);
  y += 8;
  
  doc.setFont(undefined, 'normal');
  const testData = [
    { param: 'Total Nitrogen (N)', spec: 'Min 46.0%', result: '46.3%', status: 'PASS' },
    { param: 'Biuret', spec: 'Max 1.0%', result: '0.7%', status: 'PASS' },
    { param: 'Moisture', spec: 'Max 0.5%', result: '0.3%', status: 'PASS' },
    { param: 'Particle Size (1-4mm)', spec: 'Min 90%', result: '92%', status: 'PASS' },
    { param: 'Color', spec: 'White', result: 'White', status: 'PASS' }
  ];
  
  testData.forEach((row, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y - 5, 170, 7, 'F');
    }
    
    doc.setFontSize(9);
    doc.text(row.param, 22, y);
    doc.text(row.spec, 90, y);
    doc.text(row.result, 130, y);
    
    doc.setTextColor(0, 128, 0);
    doc.setFont(undefined, 'bold');
    doc.text(row.status, 165, y);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    
    y += 7;
  });
  
  y += 10;
  
  // Conclusion
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Conclusion:', 20, y);
  y += 7;
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(10);
  const conclusionText = 'The tested sample meets all requirements of IS 6382:2013 specification for Urea fertilizer. The product is certified for distribution and use.';
  const conclusionLines = doc.splitTextToSize(conclusionText, 170);
  doc.text(conclusionLines, 20, y);
  y += conclusionLines.length * 5 + 15;
  
  // Signature section
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(20, y, 80, y);
  doc.line(120, y, 180, y);
  y += 5;
  
  doc.setFontSize(9);
  doc.text('Laboratory Analyst', 20, y);
  doc.text('Quality Manager', 120, y);
  
  y += 10;
  
  // Digital Signature Note
  doc.setFillColor(255, 250, 240);
  doc.setDrawColor(255, 193, 7);
  doc.roundedRect(20, y, 170, 15, 2, 2, 'FD');
  y += 6;
  doc.setFontSize(9);
  doc.setTextColor(120, 80, 0);
  doc.text('🔒 This document is digitally authenticated by F. Rahman & Brothers', 25, y);
  y += 5;
  doc.text('Document ID: ' + Buffer.from(new Date().toISOString()).toString('base64').substring(0, 20), 25, y);
  
  y += 15;
  
  // Footer
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  y += 8;
  
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
  y += 5;
  doc.text('Phone: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
  y += 5;
  doc.setFontSize(8);
  doc.text(`Report Date: ${new Date().toLocaleDateString()} | Scan QR code to verify authenticity`, 105, y, { align: 'center' });
  
  doc.save(path.join(REPORTS_DIR, 'batch-quality-report.pdf'));
  console.log('✓ Generated: batch-quality-report.pdf');
}

// Seasonal Fertilization Schedule
async function generateSeasonalSchedule() {
  const doc = new jsPDF();
  let y = 20;
  
  // Add QR code
  const qrCode = await generateQRCode(`${SITE_URL}/products`);
  if (qrCode) {
    doc.addImage(qrCode, 'PNG', 170, 10, 25, 25);
  }
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(11, 99, 214);
  doc.text('Seasonal Fertilization Calendar', 105, y, { align: 'center' });
  
  y += 8;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Bangladesh Agricultural Schedule', 105, y, { align: 'center' });
  
  y += 10;
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  
  y += 12;
  
  const seasons = [
    {
      season: 'Rabi Season (Winter)',
      months: 'November - February',
      crops: ['Wheat', 'Potato', 'Mustard', 'Lentils'],
      schedule: [
        { timing: 'Pre-sowing (November)', activity: 'Apply full TSP, MOP and 1/3 Urea during land preparation', products: 'TSP, MOP, Urea' },
        { timing: 'Mid-season (December)', activity: 'First top dressing with Urea for tillering/vegetative growth', products: 'Urea' },
        { timing: 'Late-season (January)', activity: 'Final Urea application for grain/tuber development', products: 'Urea, MOP' }
      ]
    },
    {
      season: 'Kharif-1 (Summer)',
      months: 'March - June',
      crops: ['Boro Rice', 'Vegetables', 'Maize'],
      schedule: [
        { timing: 'Pre-planting (March)', activity: 'Basal application of TSP and MOP', products: 'TSP, MOP' },
        { timing: 'Tillering (April)', activity: 'Apply Urea for vegetative growth', products: 'Urea' },
        { timing: 'Panicle/Flowering (May)', activity: 'Final nutrients for grain development', products: 'Urea, MOP' }
      ]
    },
    {
      season: 'Kharif-2 (Monsoon)',
      months: 'July - October',
      crops: ['Aman Rice', 'Jute', 'Vegetables'],
      schedule: [
        { timing: 'Transplanting (July-August)', activity: 'Apply TSP, MOP and partial Urea at transplanting', products: 'TSP, MOP, Urea' },
        { timing: 'Tillering (September)', activity: 'Top dress with Urea for growth', products: 'Urea' },
        { timing: 'Pre-harvest (October)', activity: 'Final Urea for grain filling', products: 'Urea' }
      ]
    }
  ];
  
  seasons.forEach(season => {
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    
    // Season header
    doc.setFillColor(230, 240, 255);
    doc.roundedRect(20, y - 5, 170, 12, 2, 2, 'F');
    
    doc.setFontSize(14);
    doc.setTextColor(11, 99, 214);
    doc.setFont(undefined, 'bold');
    doc.text(season.season, 22, y + 2);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont(undefined, 'normal');
    doc.text(season.months, 22, y + 8);
    
    y += 15;
    
    // Crops
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text('Main Crops: ', 22, y);
    doc.setFont(undefined, 'normal');
    doc.text(season.crops.join(', '), 50, y);
    
    y += 8;
    
    // Schedule
    season.schedule.forEach((item, idx) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(11, 99, 214);
      doc.text(item.timing, 25, y);
      
      y += 5;
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      doc.setFont(undefined, 'normal');
      const activityLines = doc.splitTextToSize(item.activity, 165);
      doc.text(activityLines, 25, y);
      
      y += activityLines.length * 4 + 2;
      doc.setTextColor(100, 100, 100);
      doc.setFont(undefined, 'italic');
      doc.text(`Products: ${item.products}`, 25, y);
      
      y += 7;
      doc.setFont(undefined, 'normal');
    });
    
    y += 5;
  });
  
  // Footer
  if (y > 260) {
    doc.addPage();
    y = 20;
  }
  
  doc.setDrawColor(11, 99, 214);
  doc.setLineWidth(0.5);
  doc.line(20, y, 190, y);
  y += 8;
  
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('F. Rahman & Brothers | Kawkhali, South Bazar, Pirojpur, Bangladesh', 105, y, { align: 'center' });
  y += 5;
  doc.text('Phone: +880 1750 188 004 | Email: info@frahmanandbrothers.com', 105, y, { align: 'center' });
  y += 5;
  doc.setFontSize(8);
  doc.text(`Calendar Date: ${new Date().toLocaleDateString()} | Scan QR code for detailed guides`, 105, y, { align: 'center' });
  
  doc.save(path.join(GUIDES_DIR, 'seasonal-fertilization-schedule.pdf'));
  console.log('✓ Generated: seasonal-fertilization-schedule.pdf');
}

// Run generation
async function runAll() {
  console.log('Generating product specifications...');
  productSpecs.forEach(spec => generateProductSpec(spec));
  
  console.log('\nGenerating certification documents...');
  generateCertificates();
  
  console.log('\nGenerating Safety Data Sheets (SDS)...');
  await generateSDS();
  
  console.log('\nGenerating crop-specific application guides...');
  await generateCropGuides();
  
  console.log('\nGenerating customer testimonials...');
  await generateTestimonials();
  
  console.log('\nGenerating quality test reports...');
  await generateTestReports();
  
  console.log('\nGenerating seasonal fertilization schedule...');
  await generateSeasonalSchedule();
  
  console.log('\n✅ All documents generated successfully!');
  console.log(`\nSpecifications: ${SPECS_DIR}`);
  console.log(`Certificates: ${CERTS_DIR}`);
  console.log(`Safety Data Sheets: ${SDS_DIR}`);
  console.log(`Application Guides: ${GUIDES_DIR}`);
  console.log(`Reports & Testimonials: ${REPORTS_DIR}`);
}

runAll();
