'use client';

import { useState } from "react";
import { jsPDF } from 'jspdf';
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function validate() {
    return formData.name && formData.email && (formData.product || formData.message);
  }

  function makePdfFilename() {
    const cleaned = (formData.company || formData.name).replace(/\s+/g, '-').toLowerCase();
    const ts = new Date().toISOString().slice(0, 10);
    return `quote-request-${cleaned}-${ts}.pdf`;
  }

  function generatePdf() {
    const pdf = new jsPDF();
    
    pdf.setFontSize(16);
    pdf.text('Quote Request - F. Rahman & Brothers', 14, 20);
    
    pdf.setFontSize(11);
    const lines = [
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'N/A'}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `Product: ${formData.product || 'General Inquiry'}`,
      `Quantity: ${formData.quantity || 'N/A'}`,
      '',
      'Message:',
      formData.message || 'N/A',
    ];
    
    let y = 32;
    lines.forEach((l) => {
      const split = pdf.splitTextToSize(l, 180);
      pdf.text(split, 14, y);
      y += split.length * 7;
      if (y > 270) {
        pdf.addPage();
        y = 20;
      }
    });
    
    const filename = makePdfFilename();
    pdf.save(filename);
    return filename;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!validate()) {
      setStatus('Please fill name, email and either product or message.');
      return;
    }
    
    setStatus('Preparing your quote PDF...');
    
    const filename = generatePdf();
    
    const subject = encodeURIComponent(
      `Quote Request: ${formData.product || 'General'} - ${formData.company || formData.name}`
    );
    
    const bodyLines = [
      `Hello,`,
      '',
      `I have prepared a quote request and downloaded the attached PDF (${filename}).`,
      `Please attach the PDF to this email and send.`,
      '',
      `Details:`,
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'N/A'}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `Product: ${formData.product || 'General Inquiry'}`,
      `Quantity: ${formData.quantity || 'N/A'}`,
      '',
      `Message:`,
      `${formData.message || 'N/A'}`,
      '',
      `Please reply with a proforma/quotation.`,
      '',
      `Thanks,`,
      `${formData.name}`,
    ];
    
    const body = encodeURIComponent(bodyLines.join('\n'));
    const salesEmail = 'info@frahmanandbrothers.com';
    const mailto = `mailto:${salesEmail}?subject=${subject}&body=${body}`;
    
    window.location.href = mailto;
    
    setStatus('PDF downloaded. Your email client should open; please attach the PDF and send.');
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 grid gap-4">
      <input
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name *"
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name (Optional)"
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <input
        name="email"
        required
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address *"
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number (Optional)"
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <select
        name="product"
        value={formData.product}
        onChange={handleChange}
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        <option value="">Select Product (Optional)</option>
        <option value="Urea">Urea</option>
        <option value="Triple Super Phosphate (TSP)">Triple Super Phosphate (TSP)</option>
        <option value="Muriate of Potash (MOP)">Muriate of Potash (MOP)</option>
        <option value="Di-Ammonium Phosphate (DAP)">Di-Ammonium Phosphate (DAP)</option>
        <option value="General Inquiry">General Inquiry</option>
      </select>
      
      <input
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity (e.g., 100 bags) (Optional)"
        className="rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Additional Message or Requirements (Optional)"
        className="min-h-32 rounded-md border-2 border-blue-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      
      <div className="flex flex-col gap-2">
        <Button type="submit">Generate Quote PDF & Send</Button>
        {status && (
          <p className={`text-sm ${status.includes('error') || status.includes('Please') ? 'text-red-600' : 'text-green-700'}`}>
            {status}
          </p>
        )}
        <span className="text-xs text-gray-500">
          * A PDF will be generated and your email client will open with the details
        </span>
      </div>
    </form>
  );
}
