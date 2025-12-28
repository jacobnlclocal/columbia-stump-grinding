import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Brush Hogging Cost Per Acre in SC (2025 Pricing Guide) | Nelson Land & Stump',
  description: 'How much does brush hogging cost per acre in South Carolina? Complete 2025 pricing guide for Greenville, Anderson, and Upstate SC. Get free estimates.',
  keywords: 'brush hogging cost per acre, brush hogging prices SC, bush hog rates, land mowing cost, brush clearing cost Greenville SC',
};

export default function BrushHoggingCostPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Brush Hogging Cost Per Acre in SC (2025 Pricing Guide)",
    "description": "How much does brush hogging cost per acre in South Carolina? Complete 2025 pricing guide for Greenville, Anderson, and Upstate SC.",
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "Nelson Land & Stump",
      "url": "https://nelsonstump.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nelson Land & Stump",
      "url": "https://nelsonstump.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nelsonstump.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nelsonstump.com/blog/brush-hogging-cost-per-acre-sc"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Brush Hogging Cost Per Acre' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Pricing Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              Brush Hogging Cost Per Acre in South Carolina
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>January 1, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted leading-relaxed mb-8">
                Got an overgrown field, pasture, or wooded lot that needs clearing? Brush hogging is one of
                the most cost-effective ways to reclaim overgrown land. Here&apos;s what you can expect to pay
                in Greenville, Anderson, and the Upstate SC area in 2025.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                AVERAGE BRUSH HOGGING RATES IN UPSTATE SC
              </h2>
              <p className="text-muted mb-6">
                For most brush hogging jobs in the Greenville and Upstate South Carolina area, pricing falls into these ranges:
              </p>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Light brush (grass, weeds, small saplings)</span>
                    <span className="font-bold text-primary">$75 - $125/acre</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Medium brush (thick weeds, saplings up to 2&quot;)</span>
                    <span className="font-bold text-primary">$125 - $200/acre</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Heavy brush (dense growth, saplings up to 4&quot;)</span>
                    <span className="font-bold text-primary">$200 - $350/acre</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted">Minimum charge (less than 1 acre)</span>
                    <span className="font-bold text-primary">$150 - $250</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted mb-6">
                Most companies, including ours, have a minimum charge because of travel time and equipment
                setup. For small lots under an acre, expect a flat rate rather than per-acre pricing.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT AFFECTS BRUSH HOGGING PRICES?
              </h2>
              <p className="text-muted mb-4">
                Several factors can push your price toward the higher or lower end of these ranges:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Vegetation density:</strong> Thick, heavy brush takes longer to cut through</li>
                <li><strong>Terrain:</strong> Hilly, rocky, or wet ground slows work and increases wear on equipment</li>
                <li><strong>Obstacles:</strong> Stumps, rocks, fence posts, and debris require careful navigation</li>
                <li><strong>Accessibility:</strong> Hard-to-reach areas or properties with poor access cost more</li>
                <li><strong>Acreage:</strong> Larger properties typically get better per-acre rates</li>
                <li><strong>Frequency:</strong> Regular maintenance customers often get discounted rates</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                PER ACRE VS. HOURLY RATES
              </h2>
              <p className="text-muted mb-6">
                Some operators charge by the hour instead of by the acre. In Upstate SC, hourly rates typically range from $75 to $150 per hour, depending on equipment size and operator experience.
              </p>
              <p className="text-muted mb-6">
                <strong>Which is better?</strong> For open, easy-to-mow land, per-acre pricing usually favors
                the customer. For rough terrain or land with lots of obstacles, hourly might be fairer for the
                operator. We prefer per-acre quotes because it gives you a firm price upfront.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BRUSH HOGGING VS. OTHER CLEARING METHODS
              </h2>
              <p className="text-muted mb-4">
                How does brush hogging compare to other land clearing options?
              </p>
              <div className="bg-muted-light rounded-lg p-6 mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 pr-4 font-bold text-primary">Method</th>
                      <th className="text-left py-3 px-4 font-bold text-primary">Cost Per Acre</th>
                      <th className="text-left py-3 pl-4 font-bold text-primary">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Brush Hogging</td>
                      <td className="py-3 px-4">$75 - $350</td>
                      <td className="py-3 pl-4">Overgrown fields, pastures, fence lines</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Forestry Mulching</td>
                      <td className="py-3 px-4">$500 - $2,000</td>
                      <td className="py-3 pl-4">Small trees, heavy undergrowth</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Full Land Clearing</td>
                      <td className="py-3 px-4">$1,500 - $5,000+</td>
                      <td className="py-3 pl-4">Building sites, removing all trees</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Hand Clearing</td>
                      <td className="py-3 px-4">$500 - $1,000</td>
                      <td className="py-3 pl-4">Small areas, selective clearing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN IS THE BEST TIME FOR BRUSH HOGGING?
              </h2>
              <p className="text-muted mb-6">
                In South Carolina, you can brush hog year-round, but certain times are better:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Late fall/early winter:</strong> After the first frost kills vegetation, it&apos;s easier to cut and you can see obstacles better</li>
                <li><strong>Late summer:</strong> Good for once-a-year maintenance before seeds drop</li>
                <li><strong>Avoid:</strong> Wet periods when heavy equipment can damage soft ground</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                HOW TO GET THE BEST PRICE
              </h2>
              <ol className="list-decimal pl-6 text-muted space-y-2 mb-6">
                <li><strong>Get multiple quotes:</strong> Compare 2-3 estimates from local operators</li>
                <li><strong>Clear a path:</strong> If possible, remove debris and mark hazards before the crew arrives</li>
                <li><strong>Bundle with neighbors:</strong> If neighbors also need work, you might get a group discount</li>
                <li><strong>Schedule off-peak:</strong> Late winter and early spring may offer better rates</li>
                <li><strong>Set up regular maintenance:</strong> Annual or bi-annual customers often get preferred pricing</li>
              </ol>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Get a Free Brush Hogging Quote</h3>
                <p className="text-muted mb-4">
                  Nelson Land & Stump provides free, no-obligation estimates for brush hogging throughout
                  Greenville, Anderson, Pickens, and Oconee counties. We&apos;ll assess your property and give
                  you an honest, all-inclusive price.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm"
                >
                  Request Your Free Quote
                </Link>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BOTTOM LINE
              </h2>
              <p className="text-muted mb-6">
                For most properties in Upstate SC, expect to pay $100-$200 per acre for brush hogging, with a
                minimum charge of $150-$250 for small lots. The actual price depends on vegetation density,
                terrain, and accessibility. Getting a site visit and quote is the best way to know what your
                specific property will cost.
              </p>
              <p className="text-muted">
                Ready to reclaim your overgrown land? Call us at{' '}
                <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> or{' '}
                <Link href="/#contact" className="text-accent hover:underline">request a quote online</Link>.
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 bg-muted-light">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              RELATED ARTICLES
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/5-signs-you-need-land-clearing" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">5 Signs You Need Land Clearing</h3>
                <p className="text-muted text-sm">Know when it&apos;s time to call a professional.</p>
              </Link>
              <Link href="/services/brush-hogging" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Our Brush Hogging Services</h3>
                <p className="text-muted text-sm">Learn more about what we offer and our service areas.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
