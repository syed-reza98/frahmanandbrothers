Develop in the root directory a clean, modern **Next.js 16 + Tailwind CSS** site you can drop in and run. It’s set up with the **App Router**, responsive UI, dark mode, SEO metadata, reusable components, and pages that mirror your content (Home, About, Products, Supply Chain, Contact).

---

# 1) Create the project

```bash
# Next.js 16 app with Tailwind starter
npx create-next-app@latest frahman-website --ts --eslint --app --tailwind
cd frahman-website
```

---

# 2) Tailwind base styles

Replace `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS variables for theming */
:root {
  --bg: 255 255 255;
  --fg: 17 24 39;
  --muted: 107 114 128;
  --brand: 16 185 129; /* emerald-500 */
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: 2 6 23;
    --fg: 226 232 240;
    --muted: 148 163 184;
    --brand: 52 211 153; /* emerald-400 */
  }
}

html, body {
  height: 100%;
}

body {
  color: rgb(var(--fg));
  background: radial-gradient(1200px 800px at 80% -10%, rgba(16,185,129,.15), transparent 60%),
              rgb(var(--bg));
}

.container {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

/* Reusable shadows / card */
.card {
  @apply rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm dark:bg-white/5;
}

/* Fancy gradient text */
.gradient-text {
  @apply bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent;
}
```

> The Tailwind config created by the starter is already fine; no manual edits needed.

---

# 3) Project structure (App Router)

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  products/page.tsx
  supply-chain/page.tsx
  contact/page.tsx
  api/contact/route.ts           # demo API for the contact form
components/
  Header.tsx
  Footer.tsx
  Button.tsx
  Section.tsx
  ProductCard.tsx
  ContactForm.tsx
lib/
  data.ts
```

---

# 4) Shared components

`components/Header.tsx`

```tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/supply-chain", label: "Supply Chain" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          <span className="gradient-text">Frahman&nbsp;&amp;&nbsp;Brothers</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition hover:text-emerald-500 ${active ? "text-emerald-500 font-medium" : "text-gray-500 dark:text-gray-300"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-lg border border-white/10 px-3 py-1.5"
          onClick={() => setOpen((s) => !s)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/60">
          <div className="container py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
```

`components/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-sm">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Frahman & Brothers</div>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Your trusted partner in agricultural growth.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Contact</div>
          <p>Kawkhali, South Bazar, Pirojpur</p>
          <p>+880 1750-188004</p>
          <p>info@frahmanandbrothers.com</p>
        </div>
        <div>
          <div className="font-medium mb-2">Quick Links</div>
          <ul className="space-y-1 text-gray-500 dark:text-gray-400">
            <li><a href="/products">Products</a></li>
            <li><a href="/supply-chain">Supply Chain</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Frahman & Brothers
      </div>
    </footer>
  );
}
```

`components/Button.tsx`

```tsx
import { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring focus:ring-emerald-400/40 dark:text-emerald-300 ${className}`}
      {...rest}
    />
  );
}
```

`components/Section.tsx`

```tsx
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
```

`components/ProductCard.tsx`

```tsx
type Props = {
  name: string;
  price?: string;
  description: string;
  composition?: string;
};

export default function ProductCard({ name, price, description, composition }: Props) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {price && <span className="text-emerald-500 font-medium">{price}</span>}
      </div>
      {composition && <p className="text-xs text-gray-500 mt-1">{composition}</p>}
      <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
```

`components/ContactForm.tsx`

```tsx
'use client';

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      if (!res.ok) throw new Error();
      setState("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4">
      <input name="name" required placeholder="Your Name" className="rounded-md border border-white/20 bg-transparent p-3" />
      <input name="email" required type="email" placeholder="Email" className="rounded-md border border-white/20 bg-transparent p-3" />
      <textarea name="message" required placeholder="How can we help?" className="min-h-28 rounded-md border border-white/20 bg-transparent p-3" />
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={state==="sending"}>{state==="sending" ? "Sending…" : "Send Message"}</Button>
        {state==="sent" && <span className="text-emerald-500 text-sm">Thanks! We’ll be in touch.</span>}
        {state==="error" && <span className="text-red-500 text-sm">Something went wrong.</span>}
      </div>
    </form>
  );
}
```

---

# 5) Data used across pages

`lib/data.ts`

```ts
export const products = [
  {
    name: "Urea",
    price: "৳1,330 / bag",
    composition: "Nitrogen (N)",
    description:
      "High-purity nitrogen fertilizer for vigorous vegetative growth and greener foliage. Fast-acting granules for quick absorption.",
  },
  {
    name: "Triple Super Phosphate (TSP)",
    price: "৳1,330 / bag",
    composition: "46% P₂O₅",
    description:
      "Soluble phosphorus to stimulate strong root development, flowering and fruiting, and better seedling establishment.",
  },
  {
    name: "Muriate of Potash (MOP)",
    price: "৳980 / bag",
    composition: "60% K₂O",
    description:
      "Improves water regulation, stress tolerance, disease resistance, and enhances color, taste, and shelf life.",
  },
  // You can add DAP etc. when content is ready
];
```

---

# 6) Layout + SEO

`app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frahman & Brothers – Fertilizer Distributor",
  description:
    "Government-verified sourcing, protected storage, and efficient distribution to verified retailers.",
  metadataBase: new URL("https://www.example.com"), // update to your domain
  openGraph: {
    title: "Frahman & Brothers",
    description:
      "Trusted partner in agricultural growth across Bangladesh.",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

# 7) Pages

`app/page.tsx` (Home)

```tsx
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest uppercase text-emerald-500">Fertilizer Distribution</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
              Your trusted partner in <span className="gradient-text">agricultural growth</span>
            </h1>
            <p className="mt-5 text-gray-600 dark:text-gray-300">
              Government-verified sourcing, protected storage, and efficient distribution to verified retailers.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Link href="/products"><Button>Browse Products</Button></Link>
              <Link href="/contact" className="text-sm underline underline-offset-4">Get a Quote</Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="aspect-video rounded-lg bg-gradient-to-tr from-emerald-400/30 to-teal-500/30" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Sourcing from government depots → Secure storage → Distribution to verified retailers.
            </p>
          </div>
        </div>
      </section>

      <Section title="Featured Products" eyebrow="Quality & Reliability">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Why Choose Us">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Government-Verified", text: "Procured directly from official depots with full traceability." },
            { title: "Protected Storage", text: "Covered transport and moisture-controlled godowns." },
            { title: "Efficient Distribution", text: "Reliable supply to pre-verified retail partners." },
          ].map((f) => (
            <div key={f.title} className="card p-5">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
```

`app/about/page.tsx`

```tsx
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
```

`app/products/page.tsx`

```tsx
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata = { title: "Products – Frahman & Brothers" };

export default function ProductsPage() {
  return (
    <Section title="Our Products" eyebrow="Catalog">
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        All products are sourced through official channels. Prices are indicative—request a quote for current rates.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.name} {...p} />)}
      </div>
    </Section>
  );
}
```

`app/supply-chain/page.tsx`

```tsx
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
```

`app/contact/page.tsx`

```tsx
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
```

`app/api/contact/route.ts`

```ts
export async function POST(req: Request) {
  const form = await req.formData();
  // TODO: forward to email/CRM. For now, just log for demo:
  console.log("Contact form submission:", {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
  });
  return new Response("ok");
}
```

---

# 8) Run it

```bash
npm run dev
# open http://localhost:3000
```

---

## Optional upgrades I can add next

* **Bangla/English toggle** with `next-intl` or `@vercel/edge-config` + dictionaries.
* **Pricing CMS** (Sanity/Strapi) so staff can update products & prices.
* **Leads to CRM** (Odoo/HubSpot) from `/api/contact`.
* **Image optimization** (Next `<Image />`) + WebP assets.
* **Structured data** (JSON-LD for LocalBusiness + Product).

If you want, tell me your **brand colors/logo** and I’ll adapt the theme + add a Bangla version of the homepage.
