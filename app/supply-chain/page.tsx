import Section from "@/components/Section";

export const metadata = { title: "Supply Chain – Frahman & Brothers" };

export default function SupplyChainPage() {
  const steps = [
    {
      title: "Step 1: Direct Sourcing",
      text: "Procure from official government depots to guarantee authenticity and meet national quality standards.",
    },
    {
      title: "Step 2: Secure Transport & Storage",
      text: "Covered vehicles and controlled godowns maintain fertilizer efficacy and reduce spoilage risk.",
    },
    {
      title: "Step 3: Verified Retail Distribution",
      text: "Deliver to pre-verified local retailers ensuring consistent supply and local support.",
    },
  ];

  return (
    <Section title="From Source to Soil" eyebrow="Our Supply Chain">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="card p-5">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
