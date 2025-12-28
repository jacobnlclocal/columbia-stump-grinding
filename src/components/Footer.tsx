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
            <p className="text-gray-400 text-sm max-w-xs">
              Professional land clearing and stump grinding services in Upstate South Carolina.
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
