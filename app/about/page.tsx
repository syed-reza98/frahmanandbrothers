import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

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

      <Section title="Certifications & Quality Assurance" eyebrow="Trust & Compliance">
        <div className="max-w-4xl mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As an authorized distributor of government-certified fertilizers, we maintain the highest standards of quality, safety, and compliance. Our certifications demonstrate our commitment to excellence and regulatory adherence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Certification</h3>
            <p className="text-sm text-gray-600 mb-4">
              Certified for maintaining highest quality standards in storage, handling, and distribution.
            </p>
            <Link 
              href="/frahmanandbrothers/certs/quality-certification.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Certificate
            </Link>
          </div>
          
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Government Authorization</h3>
            <p className="text-sm text-gray-600 mb-4">
              Authorized distributor of government-certified agricultural fertilizers.
            </p>
            <Link 
              href="/frahmanandbrothers/certs/government-authorization.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Authorization
            </Link>
          </div>
          
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
              <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Standards Compliance</h3>
            <p className="text-sm text-gray-600 mb-4">
              Full compliance with national quality standards (IS specifications).
            </p>
            <Link 
              href="/frahmanandbrothers/certs/standards-compliance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Compliance
            </Link>
          </div>
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
