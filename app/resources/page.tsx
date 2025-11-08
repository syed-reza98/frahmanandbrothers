import Section from "@/components/Section";
import Link from "next/link";
import { getFAQSchema } from "@/lib/schema";

export const metadata = { title: "Resources – Frahman & Brothers" };

export default function ResourcesPage() {
  // FAQ Schema for SEO
  const faqs = [
    {
      question: "What are Safety Data Sheets (SDS)?",
      answer: "Safety Data Sheets provide comprehensive safety information including hazard identification, first aid measures, handling and storage guidelines for our fertilizer products."
    },
    {
      question: "How do I apply fertilizers correctly?",
      answer: "Our crop-specific application guides provide detailed fertilization schedules tailored for specific crops with stage-wise application recommendations. Download our rice, wheat, or seasonal fertilization guides for specific instructions."
    },
    {
      question: "Are your products certified?",
      answer: "Yes, all our products comply with Indian Standards (IS specifications) and include quality certifications. Quality reports include digital authentication codes for verification of authenticity."
    },
    {
      question: "What is the seasonal fertilization schedule for Bangladesh?",
      answer: "Bangladesh has three main agricultural seasons: Rabi (Winter, Nov-Feb), Kharif-1 (Summer, Mar-Jun), and Kharif-2 (Monsoon, Jul-Oct). Each season requires different fertilization approaches based on the crops being grown."
    }
  ];

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Section title="Agricultural Resources" eyebrow="Knowledge Center">
        <div className="max-w-4xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Access our comprehensive library of agricultural resources, including safety data sheets, application guides, quality reports, and seasonal schedules. All documents include QR codes linking back to our website for easy verification and additional information.
          </p>
        </div>

        {/* Safety Data Sheets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Safety Data Sheets (SDS)
          </h3>
          <p className="text-gray-600 mb-6">
            Comprehensive safety information including hazard identification, first aid measures, handling and storage guidelines.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/frahmanandbrothers/sds/urea-sds.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Urea Safety Data Sheet</h4>
              <p className="text-sm text-gray-600 mb-3">Complete safety information for Urea (Carbamide) - CAS 57-13-6</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download SDS
              </span>
            </Link>
            
            <Link href="/frahmanandbrothers/sds/tsp-sds.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">TSP Safety Data Sheet</h4>
              <p className="text-sm text-gray-600 mb-3">Complete safety information for Triple Super Phosphate - CAS 7758-23-8</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download SDS
              </span>
            </Link>
          </div>
        </div>

        {/* Crop Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Crop-Specific Application Guides
          </h3>
          <p className="text-gray-600 mb-6">
            Detailed fertilization schedules tailored for specific crops with stage-wise application recommendations.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/frahmanandbrothers/guides/rice-fertilization-guide.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Rice Fertilization Guide</h4>
              <p className="text-sm text-gray-600 mb-3">Stage-wise fertilizer application for maximum rice yields</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Guide
              </span>
            </Link>
            
            <Link href="/frahmanandbrothers/guides/wheat-fertilization-guide.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Wheat Fertilization Guide</h4>
              <p className="text-sm text-gray-600 mb-3">Optimize wheat production with proper nutrient management</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Guide
              </span>
            </Link>
            
            <Link href="/frahmanandbrothers/guides/seasonal-fertilization-schedule.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Seasonal Calendar</h4>
              <p className="text-sm text-gray-600 mb-3">Bangladesh agricultural calendar with seasonal schedules</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Calendar
              </span>
            </Link>
          </div>
        </div>

        {/* Quality Reports */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quality Reports & Certifications
          </h3>
          <p className="text-gray-600 mb-6">
            Laboratory test reports and batch certifications demonstrating our commitment to quality.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/frahmanandbrothers/reports/batch-quality-report.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Batch Quality Report</h4>
              <p className="text-sm text-gray-600 mb-3">Sample laboratory test report with digital authentication</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Report
              </span>
            </Link>
            
            <Link href="/frahmanandbrothers/reports/customer-testimonials.pdf" target="_blank" className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Customer Testimonials</h4>
              <p className="text-sm text-gray-600 mb-3">Success stories from farmers across Bangladesh</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Testimonials
              </span>
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Resource Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">QR Codes Included</h4>
                <p className="text-sm text-gray-600">Each PDF includes a QR code linking back to our website for verification and additional resources.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Digital Authentication</h4>
                <p className="text-sm text-gray-600">Quality reports include digital authentication codes for verification of authenticity.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">IS Standards Compliant</h4>
                <p className="text-sm text-gray-600">All documents reference appropriate Indian Standards (IS) specifications.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Always Updated</h4>
                <p className="text-sm text-gray-600">Documents are regenerated with current dates on every deployment to ensure freshness.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
