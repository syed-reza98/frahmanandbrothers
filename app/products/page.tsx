import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata = { title: "Products – Frahman & Brothers" };

export default function ProductsPage() {
  return (
    <Section title="Our Products" eyebrow="Catalog">
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        All products are sourced through official channels. Prices are indicative—request a quote for current rates.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.name} {...p} />)}
      </div>
    </Section>
  );
}
