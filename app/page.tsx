import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest uppercase text-emerald-500">Fertilizer Distribution</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
              Your trusted partner in <span className="gradient-text">agricultural growth</span>
            </h1>
            <p className="mt-5 text-gray-600 dark:text-gray-300">
              Government-verified sourcing, protected storage, and efficient distribution to verified retailers.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Link href="/products"><Button>Browse Products</Button></Link>
              <Link href="/contact" className="text-sm underline underline-offset-4">Get a Quote</Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="aspect-video rounded-lg bg-gradient-to-tr from-emerald-400/30 to-teal-500/30" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Sourcing from government depots → Secure storage → Distribution to verified retailers.
            </p>
          </div>
        </div>
      </section>

      <Section title="Featured Products" eyebrow="Quality & Reliability">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Why Choose Us">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Government-Verified", text: "Procured directly from official depots with full traceability." },
            { title: "Protected Storage", text: "Covered transport and moisture-controlled godowns." },
            { title: "Efficient Distribution", text: "Reliable supply to pre-verified retail partners." },
          ].map((f) => (
            <div key={f.title} className="card p-5">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
