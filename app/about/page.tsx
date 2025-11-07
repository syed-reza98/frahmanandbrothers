import Section from "@/components/Section";

export const metadata = { title: "About – Frahman & Brothers" };

export default function AboutPage() {
  return (
    <>
      <Section title="Who We Are" eyebrow="About Us">
        <p className="text-gray-600 dark:text-gray-300">
          Frahman & Brothers is a distributor of quality fertilizers serving verified retailers.
          We focus on authenticity, safety, and on-time supply to strengthen regional agriculture.
        </p>
      </Section>

      <Section title="Our Team">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { name: "Late Abu Bakar Siddique", role: "Founder" },
            { name: "Mrs Nargis Parvin", role: "Co-Founder" },
            { name: "Afridi Siddique", role: "CEO" },
            { name: "Khalekuzzaman Tutul", role: "Manager" },
          ].map((m) => (
            <div key={m.name} className="card p-5">
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
