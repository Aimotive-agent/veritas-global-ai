"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, type Locale } from "../context/LocaleContext";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "th", label: "TH", flag: "🇹🇭" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();

  const links = [
    { href: "/solutions", label: t("navbar.solutions") },
    { href: "/demos", label: t("navbar.demos") },
    { href: "/why-veritas", label: t("navbar.whyVeritas") },
    { href: "/industries", label: t("navbar.industries") },
    { href: "/insights", label: t("navbar.insights") },
    { href: "/about", label: t("navbar.about") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
          <div className="hidden md:flex items-center gap-3 mr-1">
            <a
              href="https://www.youtube.com/@VeritasaiGlobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Veritas Global AI on YouTube"
              className="text-slate hover:text-ink transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61595818258637"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Veritas Global AI on Facebook"
              className="text-slate hover:text-ink transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
          <div className="relative" ref={langRef}>
            <button
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate hover:text-ink transition-colors border border-line rounded-sm"
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
            >
              <span className="text-base leading-none">{languages.find((l) => l.code === locale)?.flag}</span>
              {locale.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white border border-line rounded-sm shadow-sm z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-paper transition-colors flex items-center gap-2 ${locale === lang.code ? "font-semibold text-ink" : "text-slate"}`}
                    onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 btn-primary text-sm font-medium"
            >
              {t("navbar.contact")}
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
            <div className="flex items-center gap-4 pt-2 border-t border-line">
              <a href="https://www.youtube.com/@VeritasaiGlobal" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-slate hover:text-ink transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                </svg>
                YouTube
              </a>
              <a href="https://www.facebook.com/profile.php?id=61595818258637" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-slate hover:text-ink transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
                Facebook
              </a>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-center px-5 py-2.5 font-medium mt-2"
              onClick={() => setOpen(false)}
            >
              {t("navbar.contact")}
            </Link>
            <div className="flex items-center gap-2 pt-2 border-t border-line mt-2">
              <span className="text-xs text-muted">Language:</span>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-2 py-1 text-xs rounded-sm flex items-center gap-1 ${locale === lang.code ? "bg-navy text-paper" : "text-slate hover:text-ink"}`}
                  onClick={() => setLocale(lang.code)}
                >
                  <span className="text-xs leading-none">{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
