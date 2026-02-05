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
                <span className="text-white font-black">C</span>
              </div>
              <div>
                <span className="font-black text-lg block leading-tight">COLUMBIA</span>
                <span className="text-accent text-xs font-bold tracking-wider">STUMP GRINDING</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mb-3">
              Columbia Stump Grinding is a family-owned land clearing company serving Columbia and Midlands South Carolina. We specialize in professional stump grinding, brush hogging, and complete lot clearing for residential and commercial properties throughout Richland and Lexington Counties.
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
              <li><a href="mailto:contact@columbiastumpgrinding.com" className="hover:text-white transition-colors">contact@columbiastumpgrinding.com</a></li>
              <li>230 Lewis Road</li>
              <li>Williamston, SC 29697</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Columbia Stump Grinding. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Fully Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
