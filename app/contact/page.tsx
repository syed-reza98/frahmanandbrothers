import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact – Frahman & Brothers" };

export default function ContactPage() {
  return (
    <>
      <Section title="Your Partner in Growth" eyebrow="Contact">
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Reach out to our team for expert advice and reliable supply. Whether you&apos;re a retailer looking for quality fertilizers or have questions about our products and services, we&apos;re here to help.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="font-bold text-xl text-gray-800 mb-4">Reach us directly</div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-green-700 mb-1">📞 Phone</div>
                <a href="tel:+8801750188004" className="text-gray-700 hover:text-green-700 font-medium">
                  +880 1750 188 004
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-green-700 mb-1">✉️ Email</div>
                <a href="mailto:info@frahmanandbrothers.com" className="text-gray-700 hover:text-green-700 font-medium">
                  info@frahmanandbrothers.com
                </a>
                <br />
                <a href="mailto:contact@frahmanandbrothers.com" className="text-gray-700 hover:text-green-700 font-medium">
                  contact@frahmanandbrothers.com
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-green-700 mb-1">📍 Address</div>
                <p className="text-gray-700">
                  Kawkhali, South Bazar<br />
                  Pirojpur, Bangladesh
                </p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                title="Map"
                className="w-full h-64 rounded-lg border-2 border-green-200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Pirojpur%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-gray-800 mb-4">Send us a message</div>
            <ContactForm />
          </div>
        </div>
      </Section>

      <section className="container py-12">
        <div className="card p-8 bg-green-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Business Hours</h3>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="font-semibold">Saturday - Thursday:</div>
              <div>9:00 AM - 6:00 PM</div>
              <div className="font-semibold">Friday:</div>
              <div>Closed</div>
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              For urgent inquiries outside business hours, please send us an email and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
