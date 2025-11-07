import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata = { title: "Products – Frahman & Brothers" };

export default function ProductsPage() {
  return (
    <>
      <Section title="Our Products" eyebrow="Catalog">
        <div className="max-w-3xl mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            All products are sourced exclusively through official government-certified channels to guarantee absolute authenticity and meet stringent national quality standards. Our premium fertilizers are transported in specialized climate-controlled, covered vehicles and stored in modern, secure godowns with 24/7 monitoring to preserve their maximum efficacy and ensure optimal crop performance.
          </p>
          <p className="text-gray-600">
            <strong>Note:</strong> Prices are indicative and subject to market variations. Please <Link href="/contact" className="text-blue-700 font-semibold hover:underline">contact us</Link> for current competitive rates, bulk pricing, seasonal offers, and product availability in your region.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </Section>

      <section className="container py-12">
        <div className="card p-8 bg-blue-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Fertilizers?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-700 mb-2">✓ Government-Certified Quality</h4>
              <p className="text-gray-600">Sourced exclusively from official government-certified godowns with comprehensive traceability, quality documentation, and rigorous testing to ensure maximum purity and crop productivity.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-2">✓ Optimal Storage & Handling</h4>
              <p className="text-gray-600">Maintained in state-of-the-art climate-controlled facilities with humidity regulation, temperature monitoring, and proper ventilation to preserve product efficacy and prevent moisture-related degradation.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-2">✓ Verified Retail Distribution</h4>
              <p className="text-gray-600">Distributed exclusively to carefully pre-verified retail stores throughout our service regions for guaranteed reliable local access, consistent availability, and authentic product delivery to farmers.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-2">✓ Expert Agricultural Guidance</h4>
              <p className="text-gray-600">Our experienced team of agricultural specialists provides comprehensive, personalized advice and technical support to help you select precisely the right fertilizer products for your specific crop needs and soil conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
