import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Cost Greenville SC (2025) | Nelson Stump',
  description: 'Complete guide to stump grinding costs in Greenville and Upstate SC. Learn what affects pricing, average costs per stump, and how to get the best value. Free estimates available.',
  keywords: 'stump grinding cost Greenville SC, stump removal price, how much stump grinding, stump grinding rates Upstate SC, tree stump removal cost',
};

export default function StumpGrindingCostPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does Stump Grinding Cost in Greenville SC? (2025 Prices)",
    "description": "Complete guide to stump grinding costs in Greenville and Upstate SC. Learn what affects pricing, average costs per stump, and how to get the best value.",
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
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
      "@id": "https://nelsonstump.com/blog/how-much-does-stump-grinding-cost-greenville-sc"
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
                { label: 'Stump Grinding Cost' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Pricing Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              How Much Does Stump Grinding Cost in Greenville SC?
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/blog-stump-cost.jpg"
            alt="Tree stump ready for grinding - stump grinding cost guide for Greenville SC"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted leading-relaxed mb-8">
                If you&apos;ve recently had a tree removed or you&apos;re dealing with old stumps on your property,
                you&apos;re probably wondering how much it will cost to have them ground down. Here&apos;s a
                straightforward breakdown of stump grinding prices in Greenville, Anderson, and the
                Upstate South Carolina area.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                AVERAGE STUMP GRINDING COSTS IN UPSTATE SC
              </h2>
              <p className="text-muted mb-6">
                For most residential stump grinding jobs in the Greenville area, you can expect to pay:
              </p>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Small stump (under 12&quot; diameter)</span>
                    <span className="font-bold text-primary">$75 - $150</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Medium stump (12-24&quot; diameter)</span>
                    <span className="font-bold text-primary">$150 - $250</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Large stump (24-36&quot; diameter)</span>
                    <span className="font-bold text-primary">$250 - $400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted">Extra large stump (36&quot;+ diameter)</span>
                    <span className="font-bold text-primary">$400+</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted mb-6">
                Many companies, including ours, offer discounts when you have multiple stumps ground at once.
                It&apos;s more efficient for us to grind 5 stumps in one visit than to make 5 separate trips,
                and we pass those savings on to you.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT AFFECTS THE PRICE?
              </h2>
              <p className="text-muted mb-4">
                Several factors influence how much your specific job will cost:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Stump diameter:</strong> Bigger stumps take longer to grind and require more machine time</li>
                <li><strong>Number of stumps:</strong> Multiple stumps usually qualify for volume discounts</li>
                <li><strong>Accessibility:</strong> Backyard stumps or those near obstacles take more effort to access</li>
                <li><strong>Root system:</strong> Extensive surface roots add to the grinding time</li>
                <li><strong>Wood hardness:</strong> Hardwoods like oak take longer than softer woods like pine</li>
                <li><strong>Depth required:</strong> Standard is 6-8&quot; below grade; deeper grinding costs more</li>
                <li><strong>Cleanup preferences:</strong> Hauling away chips vs. leaving them on-site</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHY PRICES VARY BETWEEN COMPANIES
              </h2>
              <p className="text-muted mb-6">
                You might get quotes ranging from $50 to $500 for the same stump. Here&apos;s why:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Equipment quality:</strong> Professional-grade grinders work faster and more efficiently</li>
                <li><strong>Insurance and licensing:</strong> Properly insured companies have higher overhead</li>
                <li><strong>Experience:</strong> Experienced operators work faster and avoid property damage</li>
                <li><strong>What&apos;s included:</strong> Some quotes include cleanup, others charge extra</li>
              </ul>
              <p className="text-muted mb-6">
                Be wary of extremely low quotes—they often mean uninsured operators or hidden fees.
                Always ask what&apos;s included and verify the company carries liability insurance.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                STUMP GRINDING VS. DIY
              </h2>
              <p className="text-muted mb-6">
                You can rent a stump grinder from a home improvement store for around $200-$400 per day.
                However, there are reasons most people hire a professional:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li>Rental grinders are smaller and slower than professional equipment</li>
                <li>Operating a stump grinder requires experience to do safely</li>
                <li>You&apos;ll need to transport the heavy machine</li>
                <li>A job that takes us 30 minutes might take you 3+ hours</li>
                <li>If you damage the rental or your property, you&apos;re responsible</li>
              </ul>
              <p className="text-muted mb-6">
                For a single large stump, DIY might make sense if you&apos;re handy. For most homeowners,
                hiring a pro is faster, easier, and often more cost-effective when you factor in your time.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                HOW TO GET THE BEST VALUE
              </h2>
              <ol className="list-decimal pl-6 text-muted space-y-2 mb-6">
                <li><strong>Get multiple quotes:</strong> Compare 2-3 estimates from reputable companies</li>
                <li><strong>Bundle stumps:</strong> Have all your stumps done at once for volume discounts</li>
                <li><strong>Coordinate with tree removal:</strong> If you&apos;re having trees cut down, ask about stump grinding at the same time</li>
                <li><strong>Ask about the quote:</strong> Make sure you understand what&apos;s included</li>
                <li><strong>Verify insurance:</strong> Don&apos;t risk hiring an uninsured operator</li>
              </ol>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Get a Free Quote from Nelson Land & Stump</h3>
                <p className="text-muted mb-4">
                  We provide free, no-obligation estimates for stump grinding throughout Greenville,
                  Anderson, Pickens, and Oconee counties. Our quotes include everything—no hidden fees.
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
                For most homeowners in Greenville and Upstate SC, expect to pay $100-$300 per stump for
                professional grinding, with discounts available for multiple stumps. While cost matters,
                also consider the company&apos;s reputation, insurance coverage, and what&apos;s included in the quote.
              </p>
              <p className="text-muted">
                Have a stump that needs grinding? Give us a call at{' '}
                <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> or{' '}
                <Link href="/#contact" className="text-accent hover:underline">request a quote online</Link>.
                We&apos;ll give you an honest price and get that stump out of your yard.
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
              <Link href="/blog/stump-grinding-vs-stump-removal" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Stump Grinding vs Stump Removal</h3>
                <p className="text-muted text-sm">Learn the differences and which is right for your project.</p>
              </Link>
              <Link href="/services/stump-grinding" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Our Stump Grinding Services</h3>
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
