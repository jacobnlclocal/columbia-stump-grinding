import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Services Columbia SC | Columbia Stump Grinding',
  description: 'Professional stump grinding services from a trusted stump grinder company in Columbia and Midlands SC. Professional stump removal services in Columbia, West Columbia, Lexington, Irmo. Tree stump removal $75-$300. Free estimates. Call (803) 470-0734.',
  keywords: 'professional stump grinding services, stump grinder company, professional stump removal, stump grinding services, stump removal contractors, tree stump removal, stump grinding Columbia SC, stump grinding near me, stump grinder services near me',
  openGraph: {
    title: 'Professional Stump Grinding Services | Columbia Stump Grinding',
    description: 'Professional stump removal services from a trusted stump grinder company. Free estimates!',
  },
  alternates: {
    canonical: '/services/stump-grinding',
  },
};


export default function StumpGrindingPage() {
  const benefits = [
    {
      title: 'Reclaim Your Yard',
      description: 'No more mowing around stumps or tripping hazards. Get your full yard back for landscaping, play areas, or new construction.',
    },
    {
      title: 'Prevent Pest Problems',
      description: 'Old stumps attract termites, carpenter ants, and other wood-boring insects that can spread to your home or healthy trees.',
    },
    {
      title: 'Improve Curb Appeal',
      description: 'Unsightly stumps bring down the look of your property. Removal instantly improves your landscape aesthetics.',
    },
    {
      title: 'Stop Regrowth',
      description: 'Some tree species send up new shoots from old stumps. Grinding below grade prevents unwanted regrowth.',
    },
  ];

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
                { label: 'Services', href: '/#services' },
                { label: 'Stump Grinding' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              PROFESSIONAL STUMP GRINDING SERVICES | STUMP GRINDER COMPANY
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Looking for professional stump removal services? Columbia Stump Grinding is a trusted stump grinder company serving
              Richland & Lexington Counties. Our professional stump grinding services include
              grinding stumps 6-8 inches below ground level. As experienced stump removal contractors, we get the job done right. Call today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8034700734"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                (803) 470-0734
              </a>
            </div>
          </div>
        </section>

        {/* What is Stump Grinding */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHAT IS PROFESSIONAL STUMP GRINDING?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted text-lg mb-4">
                  Professional stump grinding is a specialized service that uses commercial equipment to grind tree stumps below ground level.
                  As an experienced stump grinder company, we offer professional stump removal that is less invasive, faster, and more affordable
                  than full extraction. Our customers consistently report high satisfaction with our professional stump grinding services.
                </p>
                <p className="text-muted text-lg mb-4">
                  Our commercial-grade stump grinder chews through stumps of any size, grinding them 6-8 inches below the surface.
                  This allows you to plant grass, install landscaping, or even build over the area.
                </p>
                <p className="text-muted text-lg">
                  The grinding process produces wood chips mixed with soil, which you can use as mulch or we can haul away.
                  The roots left underground will naturally decay over time without causing any issues.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">Stump Grinding vs. Stump Removal</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-primary">Stump Grinding (What We Do)</p>
                    <ul className="text-muted text-sm mt-2 space-y-1">
                      <li>• Less invasive, minimal yard damage</li>
                      <li>• Faster completion time</li>
                      <li>• More affordable option</li>
                      <li>• Roots decay naturally underground</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Full Stump Removal</p>
                    <ul className="text-muted text-sm mt-2 space-y-1">
                      <li>• Requires heavy equipment</li>
                      <li>• Leaves large hole to fill</li>
                      <li>• More expensive</li>
                      <li>• Necessary only for certain projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHY REMOVE THAT OLD STUMP?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-primary text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas - Linked for SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING SERVICE AREAS
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide professional stump grinding and stump removal services throughout Columbia and Midlands South Carolina. Click your city for local pricing and details:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href="/areas/columbia-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Columbia
              </Link>
              <Link href="/areas/west-columbia-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding West Columbia
              </Link>
              <Link href="/areas/lexington-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Lexington
              </Link>
              <Link href="/areas/irmo-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Irmo
              </Link>
              <Link href="/areas/chapin-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Chapin
              </Link>
              <Link href="/areas/cayce-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Cayce
              </Link>
              <Link href="/areas/blythewood-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Blythewood
              </Link>
              <Link href="/areas/forest-acres-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Forest Acres
              </Link>
              <Link href="/areas/elgin-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Elgin
              </Link>
              <Link href="/areas/lugoff-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Lugoff
              </Link>
              <Link href="/areas/gilbert-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Gilbert
              </Link>
              <Link href="/areas/batesburg-leesville-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Batesburg-Leesville
              </Link>
            </div>
            <p className="text-muted">
              Don&apos;t see your town? We serve all of Richland & Lexington Counties.
              Call us at <a href="tel:8034700734" className="text-accent hover:underline">(803) 470-0734</a> to confirm service in your area.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-primary">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              HOW MUCH DOES STUMP GRINDING COST IN COLUMBIA SC?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Stump grinding prices in the Midlands typically range from <span className="text-accent font-bold">$75 to $300+ per stump</span>,
              depending on the size, location, and accessibility. We offer free on-site estimates so you know exactly what to expect.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-white font-bold text-xl mb-4">Factors That Affect Price:</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• <strong>Stump diameter</strong> - Larger stumps require more time</li>
                <li>• <strong>Number of stumps</strong> - Multi-stump discounts available</li>
                <li>• <strong>Accessibility</strong> - Backyard stumps may cost more than front yard</li>
                <li>• <strong>Root exposure</strong> - Surface roots add to grinding time</li>
                <li>• <strong>Location</strong> - Travel distance from our base in the Midlands</li>
              </ul>
            </div>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING RESOURCES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pricing" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Pricing Guide</h3>
                <p className="text-muted text-sm">Get an idea of stump grinding costs for your project.</p>
              </Link>
              <Link href="/blog/how-much-does-stump-grinding-cost-columbia-sc" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Cost Breakdown</h3>
                <p className="text-muted text-sm">Detailed pricing info for Columbia and Midlands SC.</p>
              </Link>
              <Link href="/blog/stump-grinding-vs-stump-removal" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Grinding vs Removal</h3>
                <p className="text-muted text-sm">Learn which option is right for your situation.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              READY TO REMOVE THAT STUMP?
            </h2>
            <p className="text-muted text-lg mb-8">
              Contact Columbia Stump Grinding today for a free, no-obligation quote on professional stump grinding and tree stump removal services
              in Columbia, West Columbia, Lexington, Irmo, Chapin, and throughout Columbia and Midlands South Carolina. Customer satisfaction guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:8034700734"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Call (803) 470-0734
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
