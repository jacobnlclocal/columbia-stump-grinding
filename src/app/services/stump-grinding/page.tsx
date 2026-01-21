import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Services & Cost | Tree Stump Removal Upstate SC',
  description: 'How much does stump grinding cost? Professional stump grinding services in Greenville, Easley, Anderson & Upstate SC. Tree stump removal $75-$300. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding cost, stump grinding services, tree stump removal, how much does stump grinding cost, stump grinding Greenville SC, stump removal Easley, tree stump grinding Anderson SC, stump grinding near me',
  openGraph: {
    title: 'Stump Grinding Services & Cost | Nelson Stump',
    description: 'How much does stump grinding cost? Tree stump removal services in Upstate SC. Free estimates!',
  },
  alternates: {
    canonical: '/services/stump-grinding',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stump Grinding Services",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.nelsonstump.com/#business",
    name: "Nelson Land & Stump Services",
    telephone: "+1-864-760-9203",
    address: {
      "@type": "PostalAddress",
      streetAddress: "230 Lewis Road",
      addressLocality: "Williamston",
      addressRegion: "SC",
      postalCode: "29697",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Greenville, SC" },
    { "@type": "City", name: "Anderson, SC" },
    { "@type": "City", name: "Easley, SC" },
    { "@type": "City", name: "Clemson, SC" },
    { "@type": "City", name: "Seneca, SC" },
    { "@type": "City", name: "Simpsonville, SC" },
    { "@type": "City", name: "Greer, SC" },
    { "@type": "City", name: "Mauldin, SC" },
  ],
  description: "Professional stump grinding services and tree stump removal in Upstate South Carolina. Stump grinding cost ranges from $75-$300. We grind stumps 6-8 inches below ground level. Fast, affordable, and fully insured.",
  serviceType: "Stump Grinding Services",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              STUMP GRINDING & REMOVAL SERVICES IN UPSTATE SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Professional tree service for stump grinding and removal throughout Greenville, Anderson, Pickens, and Oconee Counties.
              Our expert team grinds stumps 6-8 inches below ground level for complete root removal. Call today for your free estimate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                Get a Free Quote
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

        {/* What is Stump Grinding */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHAT IS STUMP GRINDING?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted text-lg mb-4">
                  Stump grinding is a professional tree service that uses specialized equipment to grind tree stumps below ground level.
                  Unlike full stump removal (which pulls out the entire root ball), grinding is less invasive, faster, and more affordable.
                  Our customers consistently report high satisfaction with our stump grinding and removal services.
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
              We provide professional stump grinding and stump removal services throughout Upstate South Carolina. Click your city for local pricing and details:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href="/areas/greenville-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Greenville
              </Link>
              <Link href="/areas/anderson-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Anderson
              </Link>
              <Link href="/areas/easley-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Easley
              </Link>
              <Link href="/areas/clemson-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Clemson
              </Link>
              <Link href="/areas/seneca-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Seneca
              </Link>
              <Link href="/areas/pickens-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Pickens
              </Link>
              <Link href="/areas/simpsonville-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Simpsonville
              </Link>
              <Link href="/areas/greer-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Greer
              </Link>
              <Link href="/areas/mauldin-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Mauldin
              </Link>
              <Link href="/areas/pendleton-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Pendleton
              </Link>
              <Link href="/areas/liberty-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Liberty
              </Link>
              <Link href="/areas/central-sc/stump-grinding" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Stump Grinding Central
              </Link>
            </div>
            <p className="text-muted">
              Don&apos;t see your town? We serve all of Greenville, Anderson, Pickens, and Oconee counties.
              Call us at <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> to confirm service in your area.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-primary">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              HOW MUCH DOES STUMP GRINDING COST IN GREENVILLE SC?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Stump grinding prices in the Upstate typically range from <span className="text-accent font-bold">$75 to $300+ per stump</span>,
              depending on the size, location, and accessibility. We offer free on-site estimates so you know exactly what to expect.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-white font-bold text-xl mb-4">Factors That Affect Price:</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• <strong>Stump diameter</strong> - Larger stumps require more time</li>
                <li>• <strong>Number of stumps</strong> - Multi-stump discounts available</li>
                <li>• <strong>Accessibility</strong> - Backyard stumps may cost more than front yard</li>
                <li>• <strong>Root exposure</strong> - Surface roots add to grinding time</li>
                <li>• <strong>Location</strong> - Travel distance from our base in the Upstate</li>
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
              <Link href="/blog/how-much-does-stump-grinding-cost-greenville-sc" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Cost Breakdown</h3>
                <p className="text-muted text-sm">Detailed pricing info for Greenville and Upstate SC.</p>
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
              Contact Nelson Land & Stump today for a free, no-obligation quote on professional stump grinding and tree stump removal services
              in Greenville, Easley, Anderson, Clemson, Seneca, and throughout Upstate South Carolina. Customer satisfaction guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:8647609203"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
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
