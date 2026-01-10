import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding & Land Clearing Pricing',
  description: 'Transparent pricing for stump grinding, brush hogging, and land clearing in Greenville, Anderson, Easley & Upstate SC. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding prices, land clearing cost, brush hogging rates, stump removal pricing Greenville SC, land clearing prices Upstate SC',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Pricing' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              PRICING & ESTIMATES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Honest, transparent pricing for stump grinding, brush hogging, and land clearing
              services in Greenville, Anderson, Easley, Clemson, and throughout Upstate South Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:8647609203"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                (864) 760-9203
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                FAIR, UPFRONT PRICING
              </h2>
              <p className="text-muted text-lg mb-4">
                At Nelson Land & Stump, we believe in straightforward pricing with no hidden fees or
                surprises. Every quote includes everything you need—labor, equipment, and cleanup.
                The price we quote is the price you pay.
              </p>
              <p className="text-muted text-lg">
                Below you&apos;ll find general pricing ranges for our services. For an exact quote tailored
                to your specific project, contact us for a free on-site estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Stump Grinding Pricing */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  STUMP GRINDING PRICES
                </h2>
                <p className="text-muted mb-6">
                  Stump grinding is priced primarily by stump diameter. We measure at the widest point
                  of the stump at ground level. Most residential jobs fall in the $100-$300 range.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-primary mb-4">Price by Stump Size</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Small Stump</span>
                        <span className="text-muted text-sm block">Under 12&quot; diameter</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$75 - $150</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Medium Stump</span>
                        <span className="text-muted text-sm block">12-24&quot; diameter</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$150 - $250</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Large Stump</span>
                        <span className="text-muted text-sm block">24-36&quot; diameter</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$250 - $400</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <span className="text-primary font-medium">Extra Large Stump</span>
                        <span className="text-muted text-sm block">36&quot;+ diameter</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$400+</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4">What Affects the Price?</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Number of stumps:</strong> Multiple stumps get volume discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Accessibility:</strong> Backyard stumps cost more than front yard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Root system:</strong> Extensive surface roots add time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Wood type:</strong> Hardwoods take longer than softwoods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Grinding depth:</strong> Standard is 6-8&quot; below grade</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Chip removal:</strong> Hauling away costs extra</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong className="text-primary">Multi-Stump Discount:</strong> Have 3+ stumps? Ask about
                    our volume discount—it&apos;s more efficient for us to grind multiple stumps in one visit,
                    and we pass those savings on to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brush Hogging Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  BRUSH HOGGING RATES
                </h2>
                <p className="text-muted mb-6">
                  Brush hogging is typically priced per acre, with a minimum charge for smaller jobs.
                  The price depends on how overgrown the land is and what type of vegetation we&apos;re clearing.
                </p>
                <div className="bg-muted-light rounded-lg p-6">
                  <h3 className="font-bold text-primary mb-4">Price by Property Size</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Minimum Charge</span>
                        <span className="text-muted text-sm block">Up to 1/2 acre</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$200 - $300</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Standard Rate</span>
                        <span className="text-muted text-sm block">Per acre (light to moderate brush)</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$150 - $300/acre</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <span className="text-primary font-medium">Heavy Clearing</span>
                        <span className="text-muted text-sm block">Per acre (thick brush, saplings)</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$300 - $500/acre</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4">What Affects the Price?</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Vegetation density:</strong> Light grass vs. thick brush</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Terrain:</strong> Flat land vs. slopes and hills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Obstacles:</strong> Trees, rocks, stumps to work around</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Access:</strong> Easy equipment access vs. tight gates</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong className="text-primary">Recurring Service:</strong> Need regular brush hogging?
                    We offer discounted rates for scheduled maintenance customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Land Clearing Pricing */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  LAND CLEARING COSTS
                </h2>
                <p className="text-muted mb-6">
                  Land clearing is our most variable service since every property is different.
                  We quote these jobs after an on-site assessment. Here are typical ranges:
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-primary mb-4">Typical Price Ranges</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Light Clearing</span>
                        <span className="text-muted text-sm block">Brush, small trees, minimal stumps</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$1,500 - $3,000/acre</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-primary font-medium">Medium Clearing</span>
                        <span className="text-muted text-sm block">Mixed brush and trees, stumps included</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$3,000 - $5,000/acre</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <span className="text-primary font-medium">Heavy Clearing</span>
                        <span className="text-muted text-sm block">Dense woods, large trees, full prep</span>
                      </div>
                      <span className="font-bold text-accent text-lg">$5,000 - $8,000+/acre</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4">What&apos;s Included?</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Removal of trees and vegetation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Stump grinding (as needed)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Debris removal or on-site burning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Basic grading (varies by project)</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted">
                    <strong className="text-primary">Free Assessment:</strong> Land clearing requires an
                    on-site visit to provide an accurate quote. We&apos;ll walk your property and give you
                    a detailed, no-obligation estimate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHY OUR CUSTOMERS CHOOSE US
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">No Hidden Fees</h3>
                <p className="text-muted text-sm">
                  Our quotes include everything. The price we give you is the price you pay—no surprises.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Free Estimates</h3>
                <p className="text-muted text-sm">
                  We provide free, no-obligation quotes. See exactly what your project will cost before committing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Fully Insured</h3>
                <p className="text-muted text-sm">
                  We carry full liability insurance for your protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              GET YOUR FREE QUOTE TODAY
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to find out exactly what your project will cost? Contact us for a free,
              no-obligation estimate. We serve Greenville, Anderson, Easley, Clemson, and all
              of Upstate South Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Request a Quote Online
              </Link>
              <a
                href="tel:8647609203"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Call (864) 760-9203
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
