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
