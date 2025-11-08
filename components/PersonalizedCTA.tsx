'use client';

import { useState } from 'react';
import Link from 'next/link';

// Component to show personalized CTA based on last viewed product
export default function PersonalizedCTA() {
  const [ctaData, setCTAData] = useState<{ product: string; show: boolean } | null>(() => {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem('lastViewedProduct');
    const date = localStorage.getItem('lastViewedDate');
    
    if (stored && date) {
      const viewedDate = new Date(date);
      const daysSince = (Date.now() - viewedDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSince < 7) {
        return { product: stored, show: true };
      }
    }
    return null;
  });

  const handleClose = () => {
    setCTAData(prev => prev ? { ...prev, show: false } : null);
  };

  if (!ctaData || !ctaData.show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white hover:text-gray-200"
        aria-label="Close"
      >
        ✕
      </button>
      <p className="font-semibold mb-2">Continue where you left off</p>
      <p className="text-sm mb-3">
        You were viewing <strong>{ctaData.product}</strong>
      </p>
      <div className="flex gap-2">
        <Link
          href="/products"
          className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
        >
          View Products
        </Link>
        <Link
          href="/contact"
          className="bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-800"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
