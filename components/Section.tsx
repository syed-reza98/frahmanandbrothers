import { ReactNode } from "react";

export default function Section({
  title,
  eyebrow,
  children,
}: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="container py-12 md:py-16">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-emerald-500">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
