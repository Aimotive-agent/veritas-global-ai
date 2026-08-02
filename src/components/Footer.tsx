import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-14 px-6 lg:px-10 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/veritas-logo.png" alt="Veritas Global AI logo" className="w-8 h-8 object-contain" />
              <span className="font-serif font-semibold text-base text-white">Veritas Global AI</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Intelligence, engineered for the enterprise. Full-spectrum AI, secured to the standards of global institutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/solutions" className="hover:text-white transition-colors">Enterprise SaaS</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Neural Chatbots</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Intelligent Websites</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">RAG Systems</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">AI Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/why-veritas" className="hover:text-white transition-colors">Why Veritas</Link></li>
              <li><Link href="/demos" className="hover:text-white transition-colors">Demos</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white mb-4">Compliance</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                SOC 2 Type II
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ISO 27001
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                GDPR &amp; HIPAA
              </li>
              <li className="flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                FedRAMP-Ready
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Veritas Global AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">Security Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
