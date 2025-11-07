import Section from "@/components/Section";

export const metadata = { title: "Supply Chain – Frahman & Brothers" };

export default function SupplyChainPage() {
  const steps = [
    {
      step: "1",
      title: "Direct Sourcing from Government Godowns",
      text: "We procure premium fertilizers directly from official government-certified depots, eliminating counterfeit products and ensuring every batch meets rigorous national quality standards. This direct partnership with government suppliers guarantees absolute authenticity, comprehensive documentation, and complete traceability for every product we distribute.",
    },
    {
      step: "2",
      title: "Secure Transportation & Storage",
      text: "After procurement, products are transported in our fleet of specialized climate-controlled covered vehicles to prevent exposure to moisture, contaminants, and temperature fluctuations. Our modern, state-of-the-art secure godowns maintain optimal storage conditions with advanced ventilation systems, precise humidity control, 24/7 security monitoring, and regular quality checks, preserving product efficacy and preventing spoilage throughout the entire storage period.",
    },
    {
      step: "3",
      title: "Distribution to Verified Local Retailers",
      text: "We distribute fertilizers exclusively to carefully pre-verified retail stores within our service regions who share our commitment to quality and farmer success. This structured, professional distribution approach ensures consistent supply, maintains product integrity from source to farmer, and provides reliable local access to genuine fertilizers along with expert agricultural advice for optimal crop productivity and sustainable agricultural success.",
    },
  ];

  return (
    <>
      <Section title="From Source to Soil" eyebrow="Our Supply Chain">
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our comprehensive end-to-end control over procurement, transportation, storage, and distribution allows us to guarantee superior product quality, maintain strict safety standards, and provide unwavering support to agriculture in our community. We are deeply committed to being <strong>the vital link in your agricultural supply chain</strong>, connecting government-certified sources with farmers who depend on genuine, effective fertilizers for their livelihoods.
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
                  From government depot to farmer&apos;s field, we maintain the strictest quality controls at every stage. Our climate-controlled covered transport and modern storage facilities with 24/7 monitoring ensure products remain maximally effective, completely uncontaminated, and safe throughout the supply chain.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">📋 Full Traceability</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every single batch is meticulously tracked with comprehensive documentation from source to final distribution, providing complete transparency, accountability, and peace of mind in our supply chain operations. We maintain detailed records for regulatory compliance and quality assurance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">✓ Verified Partners</h4>
                <p className="text-gray-600 leading-relaxed">
                  We work exclusively with carefully pre-verified, trusted retailers who share our unwavering commitment to quality, authenticity, and farmer support, ensuring reliable local access to genuine products with expert guidance for optimal agricultural results.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 text-lg mb-3">🌾 Community Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our professional, structured approach strengthens regional agriculture and rural communities by providing farmers with consistent, reliable access to certified genuine, highly effective fertilizers that maximize crop yields and support sustainable farming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
