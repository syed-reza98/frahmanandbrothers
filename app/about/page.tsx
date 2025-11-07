import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "About – Frahman & Brothers" };

export default function AboutPage() {
  return (
    <>
      <Section title="Who We Are" eyebrow="About Us">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Frahman & Brothers is a <strong>premier distributor of high-quality fertilizers</strong> for farms of all sizes. Our foundation is built on three core pillars:
          </p>
          <ul className="text-lg text-gray-700 leading-relaxed mb-6 list-disc list-inside space-y-2">
            <li><strong>Quality Products:</strong> We source our fertilizers from reputable manufacturers, ensuring purity and effectiveness.</li>
            <li><strong>Reliable Service:</strong> Our efficient logistics network guarantees timely delivery, right when you need it.</li>
            <li><strong>Expert Support:</strong> Our team offers knowledgeable advice to help you select the right products for your specific soil and crop needs.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team is here with the right knowledge and reliable service to help your farm succeed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With state-of-the-art storage facilities, temperature-controlled transport, and an expert team, we maintain the highest standards of quality control from procurement to final delivery.
          </p>
        </div>
      </Section>

      <Section title="Our Team">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { name: "Late Abu Bakar Siddique", role: "Founder", bio: "Visionary founder who established our unwavering commitment to quality, integrity, and exceptional customer service.", image: "/frahmanandbrothers/team-abu-bakar.png" },
            { name: "Mrs Nargis Parvin", role: "Co-Founder", bio: "Co-founder dedicated to building strong, lasting relationships with our community and retail partners.", image: "/frahmanandbrothers/team-nargis-parvin.png" },
            { name: "Afridi Siddique", role: "CEO", bio: "Leading our operations with innovation, strategic vision, and relentless focus on customer satisfaction.", image: "/frahmanandbrothers/team-afridi-siddique.png" },
            { name: "Khalekuzzaman Tutul", role: "Manager", bio: "Managing daily operations with precision, ensuring efficient distribution and maintaining quality standards.", image: "/frahmanandbrothers/team-khalekuzzaman-tutul.png" },
          ].map((m) => (
            <div key={m.name} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
                <Image
                  src={m.image}
                  alt={m.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
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
            { title: "Fastest Shipping", text: "We ensure timely and reliable delivery of our quality fertilizers to farms and partners across the area.", icon: "/frahmanandbrothers/icon-shipping.png" },
            { title: "Best Quality", text: "We source only the purest, most effective fertilizers to ensure the health of your soil and the success of your harvest.", icon: "/frahmanandbrothers/icon-quality.png" },
            { title: "Best Offers", text: "Get exceptional value with our competitive pricing and special deals designed to support farmers of all sizes.", icon: "/frahmanandbrothers/icon-offers.png" },
            { title: "Secure Payments", text: "Enjoy a hassle-free checkout with our safe payment system, guaranteeing your transaction's security.", icon: "/frahmanandbrothers/icon-payments.png" },
          ].map((highlight) => (
            <div key={highlight.title} className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
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
