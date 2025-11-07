'use client';

import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-40 border-b border-green-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Frahman & Brothers" 
            width={200}
            height={59}
            priority
            className="max-h-14"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${active ? "text-green-700 font-semibold" : "text-gray-700"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-lg border border-green-300 px-4 py-2 text-green-700 hover:bg-green-50"
          onClick={() => setOpen((s) => !s)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-green-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-gray-700 hover:text-green-700 font-medium"
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
