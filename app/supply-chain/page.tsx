import Section from "@/components/Section";

export const metadata = { title: "Supply Chain – Frahman & Brothers" };

export default function SupplyChainPage() {
  const steps = [
    {
      step: "1",
      title: "Direct Sourcing from Government Godowns",
      text: "We procure fertilizers directly from official government depots to eliminate counterfeit products and ensure that each batch meets national quality standards. This direct relationship with government suppliers guarantees authenticity and full traceability for every product we distribute.",
    },
    {
      step: "2",
      title: "Secure Transportation & Storage",
      text: "After procurement, products are transported in dedicated covered vehicles to prevent exposure to moisture and contaminants. Our modern, secure godowns maintain optimal storage conditions with proper ventilation and humidity control, preserving product efficacy and preventing spoilage throughout the storage period.",
    },
    {
      step: "3",
      title: "Distribution to Verified Local Retailers",
      text: "We distribute fertilizers exclusively to pre-verified retail stores within our operating area. This structured distribution approach ensures consistent supply, maintains product integrity from source to farmer, and provides reliable local access to genuine fertilizers along with expert advice for agricultural success.",
    },
  ];

  return (
    <>
      <Section title="From Source to Soil" eyebrow="Our Supply Chain">
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our end-to-end control over procurement, storage, and distribution allows us to guarantee product quality and support agriculture in our community. We are committed to being <strong>the vital link in your agricultural supply chain</strong>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="card p-6 h-full hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg" aria-hidden="true">
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
        <div className="card p-8 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Quality Commitment
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-green-700 text-lg mb-3">🔒 Product Integrity</h4>
                <p className="text-gray-600 leading-relaxed">
                  From government depot to farmer's field, we maintain strict quality controls. Our covered transport and modern storage facilities ensure products remain effective and uncontaminated.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-lg mb-3">📋 Full Traceability</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every batch is tracked from source to distribution, providing complete transparency and accountability in our supply chain operations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-lg mb-3">✓ Verified Partners</h4>
                <p className="text-gray-600 leading-relaxed">
                  We work exclusively with pre-verified retailers who share our commitment to quality and farmer support, ensuring reliable local access.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-lg mb-3">🌾 Community Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our structured approach strengthens regional agriculture by providing farmers with consistent access to genuine, effective fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
