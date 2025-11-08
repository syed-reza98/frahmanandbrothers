// JSON-LD Structured Data Utilities
// Generates schema.org markup for better SEO

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "F. Rahman & Brothers",
    "alternateName": "Frahman & Brothers",
    "url": "https://syed-reza98.github.io/frahmanandbrothers",
    "logo": "https://syed-reza98.github.io/frahmanandbrothers/logo.png",
    "description": "Premier distributor of high-quality fertilizers serving farmers across Bangladesh. Government-certified products with expert agricultural support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kawkhali, South Bazar",
      "addressLocality": "Pirojpur",
      "addressRegion": "Barisal",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1750-188004",
      "contactType": "Customer Service",
      "email": "info@frahmanandbrothers.com",
      "availableLanguage": ["en", "bn"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "foundingDate": "2010",
    "knowsAbout": [
      "Fertilizer Distribution",
      "Agricultural Products",
      "Crop Nutrition",
      "Soil Management"
    ]
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  price?: string;
  composition?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "F. Rahman & Brothers"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "F. Rahman & Brothers"
    }
  };

  if (product.image) {
    schema.image = `https://syed-reza98.github.io${product.image}`;
  }

  if (product.composition) {
    schema.additionalProperty = {
      "@type": "PropertyValue",
      "name": "Composition",
      "value": product.composition
    };
  }

  if (product.price && product.price !== "Contact for pricing") {
    schema.offers = {
      "@type": "Offer",
      "price": product.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "F. Rahman & Brothers"
      }
    };
  }

  return schema;
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "F. Rahman & Brothers",
    "image": "https://syed-reza98.github.io/frahmanandbrothers/logo.png",
    "@id": "https://syed-reza98.github.io/frahmanandbrothers",
    "url": "https://syed-reza98.github.io/frahmanandbrothers",
    "telephone": "+880-1750-188004",
    "priceRange": "৳৳",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kawkhali, South Bazar",
      "addressLocality": "Pirojpur",
      "addressRegion": "Barisal",
      "postalCode": "8500",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5791,
      "longitude": 89.9759
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": []
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://syed-reza98.github.io${item.url}`
    }))
  };
}
