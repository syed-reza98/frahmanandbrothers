import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact – Frahman & Brothers" };

export default function ContactPage() {
  return (
    <>
      <Section title="Your Partner in Growth" eyebrow="Contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="font-medium">Reach us directly</div>
            <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Phone: +8801750188004</li>
              <li>Email: info@frahmanandbrothers.com</li>
              <li>Address: Kawkhali, South Bazar, Pirojpur</li>
            </ul>
            <div className="mt-4">
              <iframe
                title="Map"
                className="w-full h-56 rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Pirojpur%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
