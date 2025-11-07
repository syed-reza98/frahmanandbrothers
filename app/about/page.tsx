import Section from "@/components/Section";

export const metadata = { title: "About – Frahman & Brothers" };

export default function AboutPage() {
  return (
    <>
      <Section title="Who We Are" eyebrow="About Us">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Frahman & Brothers is a <strong>premier distributor of high-quality fertilizers</strong> serving verified retailers across Bangladesh. We focus on authenticity, safety, and on-time supply to strengthen regional agriculture and support farmers in achieving bountiful harvests.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As <strong>the vital link in your agricultural supply chain</strong>, we source quality fertilizers directly from government suppliers and deliver them efficiently to local retailers, ensuring farmers have reliable access to the inputs they need.
          </p>
        </div>
      </Section>

      <Section title="Our Core Pillars" eyebrow="What Drives Us">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            {
              title: "Quality Products",
              description: "We source fertilizers from reputable manufacturers and government godowns to ensure purity and authenticity. Every batch meets national quality standards with full traceability."
            },
            {
              title: "Reliable Service",
              description: "Our efficient logistics network guarantees timely delivery to verified retailers. We maintain optimal storage conditions and covered transport to preserve product efficacy."
            },
            {
              title: "Expert Support",
              description: "Our knowledgeable team offers guidance to help retailers and farmers choose the right fertilizers for their specific needs and soil conditions."
            }
          ].map((pillar) => (
            <div key={pillar.title} className="card p-6 text-center">
              <h3 className="text-xl font-bold text-green-700 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Team">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { name: "Late Abu Bakar Siddique", role: "Founder", bio: "Visionary founder who established our commitment to quality and service." },
            { name: "Mrs Nargis Parvin", role: "Co-Founder", bio: "Co-founder dedicated to building strong community relationships." },
            { name: "Afridi Siddique", role: "CEO", bio: "Leading our operations with innovation and customer focus." },
            { name: "Khalekuzzaman Tutul", role: "Manager", bio: "Managing daily operations and ensuring efficient distribution." },
          ].map((m) => (
            <div key={m.name} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">{m.name.charAt(0)}</span>
              </div>
              <div className="text-lg font-bold text-gray-800">{m.name}</div>
              <div className="text-sm text-green-700 font-semibold mb-2">{m.role}</div>
              <p className="text-sm text-gray-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Commitment" eyebrow="Excellence">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { title: "Fastest Shipping", text: "Efficient logistics ensure timely delivery to all our verified retail partners." },
            { title: "Best Quality", text: "Government-verified products sourced directly from official depots with full traceability." },
            { title: "Best Offers", text: "Competitive pricing and reliable supply chains benefit our retail partners." },
            { title: "Secure Payments", text: "Safe and transparent payment systems for all transactions." },
          ].map((highlight) => (
            <div key={highlight.title} className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-green-600 mx-auto mb-3 flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
