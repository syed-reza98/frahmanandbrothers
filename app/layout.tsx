import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frahman & Brothers – Fertilizer Distributor",
  description:
    "Government-verified sourcing, protected storage, and efficient distribution to verified retailers.",
  metadataBase: new URL("https://syed-reza98.github.io"),
  openGraph: {
    title: "Frahman & Brothers",
    description:
      "Trusted partner in agricultural growth across Bangladesh.",
    type: "website",
  },
  alternates: { canonical: "/frahmanandbrothers" },
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
