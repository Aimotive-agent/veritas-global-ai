import Link from "next/link";

const footerLinks = {
  Solutions: [
    { href: "/solutions", label: "AI Strategy" },
    { href: "/solutions", label: "Machine Learning" },
    { href: "/solutions", label: "Generative AI" },
    { href: "/solutions", label: "Data Engineering" },
  ],
  Industries: [
    { href: "/industries", label: "Financial Services" },
    { href: "/industries", label: "Healthcare" },
    { href: "/industries", label: "Manufacturing" },
    { href: "/industries", label: "Government" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/why-veritas", label: "Why Veritas" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">V</span>
              Veritas Global AI
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enterprise AI that delivers truth, clarity, and measurable results.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Veritas Global AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
