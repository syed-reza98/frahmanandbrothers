const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

const SPECS_DIR = path.join(process.cwd(), 'public', 'specs');
const CERTS_DIR = path.join(process.cwd(), 'public', 'certs');

// Ensure directories exist
if (!fs.existsSync(SPECS_DIR)) fs.mkdirSync(SPECS_DIR, { recursive: true });
if (!fs.existsSync(CERTS_DIR)) fs.mkdirSync(CERTS_DIR, { recursive: true });

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

// Run generation
console.log('Generating product specifications...');
productSpecs.forEach(spec => generateProductSpec(spec));

console.log('\nGenerating certification documents...');
generateCertificates();

console.log('\n✅ All documents generated successfully!');
console.log(`\nSpecifications: ${SPECS_DIR}`);
console.log(`Certificates: ${CERTS_DIR}`);
