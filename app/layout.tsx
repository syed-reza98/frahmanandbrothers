import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frahman & Brothers – Fertilizer Distributor",
  description:
    "Your trusted partner in agricultural growth. Government-verified sourcing, protected storage, and efficient distribution to verified retailers across Bangladesh.",
  metadataBase: new URL("https://syed-reza98.github.io"),
  openGraph: {
    title: "Frahman & Brothers",
    description:
      "Trusted partner in agricultural growth across Bangladesh. Quality fertilizers from government sources.",
    type: "website",
  },
  alternates: { canonical: "/frahmanandbrothers" },
  manifest: "/frahmanandbrothers/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/frahmanandbrothers/manifest.json" />
        <meta name="theme-color" content="#0b63d6" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
