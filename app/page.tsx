import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest uppercase text-green-700 font-semibold">Fertilizer Distribution</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your trusted partner in <span className="gradient-text">agricultural growth</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Supplying verified retailers with quality fertilizers for bountiful harvests. Government-verified sourcing, protected storage, and efficient distribution to verified retailers.
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link href="/products"><Button>Browse Products</Button></Link>
              <Link href="/contact" className="text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-4">Get a Quote</Link>
            </div>
          </div>

          <div className="card p-8">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">Quality & Reliability</h3>
                <p className="text-green-700">Serving farmers across Bangladesh</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              <strong>Our Process:</strong> Sourcing from government depots → Secure storage → Distribution to verified retailers
            </p>
          </div>
        </div>
      </section>

      <Section title="Featured Products" eyebrow="Quality & Reliability">
        <p className="text-gray-600 mb-8 max-w-3xl">
          We supply high-quality fertilizers sourced directly from government godowns. All products meet national quality standards and are delivered with full traceability.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Why Choose Us">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { 
              title: "Government-Verified", 
              text: "We procure fertilizers directly from official government godowns to eliminate counterfeit products and ensure each batch meets national quality standards.",
              icon: "✓"
            },
            { 
              title: "Protected Storage", 
              text: "Products are transported in dedicated covered vehicles and stored in our modern, secure godowns that maintain optimal conditions to preserve product efficacy.",
              icon: "⚡"
            },
            { 
              title: "Efficient Distribution", 
              text: "We distribute fertilizers exclusively to pre-verified retail stores, ensuring consistent supply, product integrity and reliable local access for farmers.",
              icon: "🚚"
            },
          ].map((f) => (
            <div key={f.title} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <div className="text-xl font-bold text-gray-800 mb-3">{f.title}</div>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="container py-12 md:py-16">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Few Words About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Frahman & Brothers is <strong>the vital link in your agricultural supply chain</strong>. As a trusted fertilizer distributor, we source quality products from government suppliers and deliver them efficiently to local retailers, ensuring farmers have reliable access to the inputs they need for bountiful harvests.
            </p>
            <Link href="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
