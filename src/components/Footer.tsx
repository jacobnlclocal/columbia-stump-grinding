import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-black">N</span>
              </div>
              <div>
                <span className="font-black text-lg block leading-tight">NELSON</span>
                <span className="text-accent text-xs font-bold tracking-wider">LAND & STUMP</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mb-3">
              Nelson Land and Stump Services is a family-owned land clearing company serving Upstate South Carolina. We specialize in professional stump grinding, brush hogging, and complete lot clearing for residential and commercial properties throughout Greenville, Anderson, Pickens, and Oconee Counties.
            </p>
            <p className="text-gray-400 text-sm max-w-md">
              With over five years of experience and hundreds of satisfied customers, we deliver quality workmanship at competitive prices. Our team uses professional-grade equipment to handle jobs of any size, from single stump removal to multi-acre land clearing projects. We are fully licensed and insured for your protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/stump-grinding" className="text-gray-400 hover:text-white transition-colors">Stump Grinding</Link></li>
              <li><Link href="/services/brush-hogging" className="text-gray-400 hover:text-white transition-colors">Brush Hogging</Link></li>
              <li><Link href="/services/land-clearing" className="text-gray-400 hover:text-white transition-colors">Land Clearing</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="tel:8647609203" className="hover:text-white transition-colors">(864) 760-9203</a></li>
              <li><a href="mailto:tigernelson@gmail.com" className="hover:text-white transition-colors">tigernelson@gmail.com</a></li>
              <li>230 Lewis Road</li>
              <li>Williamston, SC 29697</li>
            </ul>
            <div className="mt-4">
              <a
                href="https://facebook.com/nelsonstump"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nelson Land & Stump Services. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Fully Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
