"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/why-veritas", label: "Why Veritas" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="Veritas Global AI home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/veritas-logo.png" alt="Veritas Global AI logo" className="w-9 h-9 object-contain" />
          <span className="font-serif font-semibold text-lg md:text-xl text-ink tracking-tight">
            Veritas Global AI
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-ink transition-colors ${isActive(link.href) ? "text-ink" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 btn-primary text-sm font-medium"
          >
            Private Consultation
          </Link>
          <button
            id="menuBtn"
            className="lg:hidden text-ink p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-ink transition-colors ${isActive(link.href) ? "text-ink" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-center px-5 py-2.5 font-medium mt-2"
              onClick={() => setOpen(false)}
            >
              Private Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
