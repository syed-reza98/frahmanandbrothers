import Link from "next/link";
import Image from "next/image";
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
            <p className="text-sm tracking-widest uppercase text-blue-700 font-semibold">Premium Fertilizer Distribution</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your trusted partner in <span className="gradient-text">agricultural growth</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Delivering excellence in fertilizer distribution across Bangladesh. We supply verified retailers with premium-quality fertilizers sourced from government-certified depots, ensuring authenticity, safety, and reliable supply for bountiful harvests.
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link href="/products"><Button>Browse Products</Button></Link>
              <Link href="/contact" className="text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4">Get a Quote</Link>
            </div>
          </div>

          <div className="card p-8">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Quality & Reliability</h3>
                <p className="text-blue-700">Serving farmers across Bangladesh with pride</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              <strong>Our Process:</strong> Government-certified sourcing → Temperature-controlled storage → Verified retail distribution → Farm-level success
            </p>
          </div>
        </div>
      </section>

      <Section title="Featured Products" eyebrow="Quality & Reliability">
        <p className="text-gray-600 mb-8 max-w-3xl">
          We supply premium-grade fertilizers sourced exclusively from government-certified godowns. Every product meets stringent national quality standards with complete traceability from depot to delivery, ensuring maximum crop productivity and farmer satisfaction.
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
              text: "We procure fertilizers directly from official government godowns, eliminating counterfeit products and ensuring every batch meets rigorous national quality standards with full documentation and certification.",
              icon: "✓"
            },
            { 
              title: "Protected Storage", 
              text: "Our state-of-the-art godowns feature climate control, moisture protection, and 24/7 security. Products are transported in specialized covered vehicles to maintain integrity from depot to destination.",
              icon: "⚡"
            },
            { 
              title: "Efficient Distribution", 
              text: "We partner exclusively with pre-verified retail stores across our service regions, ensuring consistent supply, product authenticity, and reliable access for farmers when they need it most.",
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

      <Section title="Recent Projects" eyebrow="Our Work">
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore our portfolio of successful fertilizer distribution projects across Bangladesh. We take pride in delivering quality products that help farmers achieve exceptional harvests and sustainable agricultural growth.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/projects-01.jpg", alt: "Fertilizer distribution project supporting local farmers" },
            { src: "/projects-02.jpg", alt: "Quality fertilizer products stored in secure facility" },
            { src: "/projects-03.jpg", alt: "Agricultural field fertilization project" },
            { src: "/projects-04.jpg", alt: "Successful crop harvest after fertilizer application" },
            { src: "/projects-05.jpg", alt: "Fertilizer delivery to verified retail partners" },
          ].map((project, idx) => (
            <div key={idx} className="card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="container py-12 md:py-16">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Few Words About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Frahman & Brothers is <strong>the vital link in your agricultural supply chain</strong>. As a premier fertilizer distributor with decades of trusted service, we source premium-quality products from government-certified suppliers and deliver them efficiently to verified local retailers. Our commitment ensures farmers have reliable access to the genuine inputs they need for exceptional harvests and sustainable agricultural growth.
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
