import Section from "@/components/Section";

export const metadata = { title: "About – Frahman & Brothers" };

export default function AboutPage() {
  return (
    <>
      <Section title="Who We Are" eyebrow="About Us">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Frahman & Brothers is a <strong>premier distributor of premium-quality fertilizers</strong> serving verified retailers across Bangladesh with unwavering commitment to excellence. Since our establishment, we have built a reputation for authenticity, safety, and punctual supply that strengthens regional agriculture and empowers farmers to achieve exceptional, bountiful harvests year after year.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As <strong>the vital link in your agricultural supply chain</strong>, we source superior-grade fertilizers directly from government-certified suppliers and deliver them efficiently to local retailers through our advanced logistics network. Our comprehensive approach ensures farmers have reliable, timely access to the genuine inputs they need to maximize productivity and profitability.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With our state-of-the-art storage facilities, temperature-controlled transport, and expert team, we maintain the highest standards of quality control from procurement to final delivery. Our dedication to transparency, traceability, and customer satisfaction has made us the preferred choice for retailers and farmers throughout our service regions.
          </p>
        </div>
      </Section>

      <Section title="Our Core Pillars" eyebrow="What Drives Us">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            {
              title: "Premium Quality Products",
              description: "We source fertilizers exclusively from government-certified manufacturers and official godowns to guarantee absolute purity and authenticity. Every single batch undergoes rigorous quality testing, meets stringent national standards, and comes with complete traceability documentation for your peace of mind."
            },
            {
              title: "Unwavering Reliable Service",
              description: "Our sophisticated logistics network and fleet of specialized vehicles guarantee punctual delivery to verified retailers across our service area. We maintain optimal climate-controlled storage conditions with 24/7 monitoring and utilize covered transport to preserve maximum product efficacy and prevent any degradation."
            },
            {
              title: "Expert Support & Guidance",
              description: "Our highly knowledgeable team of agricultural specialists offers comprehensive, personalized guidance to help retailers and farmers select the precisely right fertilizers for their specific crop requirements, soil conditions, and environmental factors to achieve optimal results."
            }
          ].map((pillar) => (
            <div key={pillar.title} className="card p-6 text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Team">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { name: "Late Abu Bakar Siddique", role: "Founder", bio: "Visionary founder who established our unwavering commitment to quality, integrity, and exceptional customer service." },
            { name: "Mrs Nargis Parvin", role: "Co-Founder", bio: "Co-founder dedicated to building strong, lasting relationships with our community and retail partners." },
            { name: "Afridi Siddique", role: "CEO", bio: "Leading our operations with innovation, strategic vision, and relentless focus on customer satisfaction." },
            { name: "Khalekuzzaman Tutul", role: "Manager", bio: "Managing daily operations with precision, ensuring efficient distribution and maintaining quality standards." },
          ].map((m) => (
            <div key={m.name} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">{m.name.charAt(0)}</span>
              </div>
              <div className="text-lg font-bold text-gray-800">{m.name}</div>
              <div className="text-sm text-blue-700 font-semibold mb-2">{m.role}</div>
              <p className="text-sm text-gray-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Commitment" eyebrow="Excellence">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { title: "Fastest Shipping", text: "Advanced logistics infrastructure and efficient route optimization ensure fastest possible delivery to all our verified retail partners across regions." },
            { title: "Premium Quality", text: "Government-verified, certified premium products sourced exclusively from official depots with comprehensive traceability and quality documentation." },
            { title: "Best Competitive Offers", text: "Competitive pricing structures and reliable, uninterrupted supply chains deliver exceptional value to our trusted retail partners." },
            { title: "Secure Payment Systems", text: "Safe, transparent, and flexible payment systems with multiple options for all transactions, ensuring convenience and trust." },
          ].map((highlight) => (
            <div key={highlight.title} className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 mx-auto mb-3 flex items-center justify-center text-white text-2xl">
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
