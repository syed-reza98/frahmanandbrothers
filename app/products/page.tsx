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
            All products are sourced through official government channels to guarantee authenticity and meet national quality standards. Our fertilizers are transported in covered vehicles and stored in modern, secure godowns to preserve their efficacy.
          </p>
          <p className="text-gray-600">
            <strong>Note:</strong> Prices are indicative and subject to change. Please <Link href="/contact" className="text-green-700 font-semibold hover:underline">contact us</Link> for current rates and availability.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </Section>

      <section className="container py-12">
        <div className="card p-8 bg-green-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Fertilizers?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-green-700 mb-2">✓ Government-Verified Quality</h4>
              <p className="text-gray-600">Sourced directly from official government godowns with full traceability and quality assurance.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-2">✓ Proper Storage & Handling</h4>
              <p className="text-gray-600">Maintained in optimal conditions to preserve product efficacy and prevent moisture damage.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-2">✓ Verified Distribution</h4>
              <p className="text-gray-600">Distributed exclusively to pre-verified retail stores for reliable local access.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-2">✓ Expert Guidance</h4>
              <p className="text-gray-600">Our team provides knowledgeable advice to help you choose the right products for your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
