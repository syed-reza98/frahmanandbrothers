import { ReactNode } from "react";

export default function Section({
  title,
  eyebrow,
  children,
}: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="container py-12 md:py-16">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-blue-700 font-semibold">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
