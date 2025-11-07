import Section from "@/components/Section";

export const metadata = { title: "Supply Chain – Frahman & Brothers" };

export default function SupplyChainPage() {
  const steps = [
    {
      step: "1",
      title: "Direct Sourcing from Government Godowns",
      text: "We begin at the source. Our team procures all our fertilizers directly from official government depots and godowns. This eliminates any risk of counterfeit products and guarantees that every batch meets strict national quality standards. By dealing directly with the source, we ensure authenticity and traceability from the very first step, providing our partners with complete peace of mind.",
    },
    {
      step: "2",
      title: "Secure Transportation & Storage",
      text: "Once procured, the fertilizers are carefully transported in our dedicated, covered vehicles to protect them from the elements during transit. They are then stored in our own modern, secure godowns. Our storage facilities are designed to maintain optimal conditions, preventing moisture damage and preserving the efficacy and quality of the products until they are ready for distribution. This controlled logistics chain is the backbone of our promise of quality.",
    },
    {
      step: "3",
      title: "Distribution to Verified Local Retailers",
      text: "The final step is getting the fertilizers to the farmers who need them. We distribute our products exclusively to a network of pre-verified, authorized retail stores within our specific operational area. This structured approach ensures that supply is consistent, quality is maintained, and farmers have reliable, local access to genuine fertilizers and expert advice from trusted retailers.",
    },
  ];

  return (
    <>
      <Section title="From Source to Soil" eyebrow="Our Supply Chain">
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            This end-to-end control over our supply chain allows us to guarantee the quality of our products and uphold our commitment to supporting agriculture in our community. We are deeply committed to being <strong>the vital link in your agricultural supply chain</strong>, connecting government-certified sources with farmers who depend on genuine, effective fertilizers for their livelihoods.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="card p-6 h-full hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg" aria-hidden="true">
                  {s.step}
                </div>
                <div className="text-xl font-bold text-gray-800 mb-3 mt-2">{s.title}</div>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="container py-12">
        <div className="card p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Quality Commitment
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">🔒 Product Integrity</h4>
                <p className="text-gray-600 leading-relaxed">
                  From government depot to farmer&apos;s field, we maintain the strictest quality controls at every stage. Our covered transport and modern storage facilities with 24/7 monitoring ensure products remain effective, uncontaminated, and safe throughout the supply chain.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">📋 Full Traceability</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every batch is tracked with comprehensive documentation from source to final distribution, providing complete transparency and accountability in our supply chain operations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">✓ Verified Partners</h4>
                <p className="text-gray-600 leading-relaxed">
                  We work exclusively with carefully pre-verified, trusted retailers who share our commitment to quality, authenticity, and farmer support.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">🌾 Community Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our structured approach strengthens regional agriculture and rural communities by providing farmers with consistent access to genuine, effective fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
