import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding West Union SC',
  description: 'Professional stump grinding, brush hogging, and land clearing services in West Union, SC. Serving Oconee County. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding West Union SC, land clearing West Union, brush hogging Oconee County, stump removal West Union South Carolina',
  alternates: {
    canonical: '/areas/west-union-sc',
  },
};


export default function WestUnionPage() {
  const neighborhoods = [
    'Downtown West Union', 'Main Street', 'Oconee County Airport Area', 'Richland Road',
  ];

  const services = [
    {
      name: 'Stump Grinding',
      description: 'Remove unsightly stumps from your West Union property. We grind stumps 6-8 inches below ground level.',
      href: '/areas/west-union-sc/stump-grinding',
    },
    {
      name: 'Brush Hogging',
      description: 'Clear overgrown rural properties, pastures, and fence lines throughout Oconee County.',
      href: '/areas/west-union-sc/brush-hogging',
    },
    {
      name: 'Land Clearing',
      description: 'Full lot clearing for new construction or property development in the West Union area.',
      href: '/areas/west-union-sc/land-clearing',
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
                { label: 'Service Areas', href: '/#service-areas' },
                { label: 'West Union, SC' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING & LAND CLEARING IN WEST UNION, SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Nelson Land & Stump provides professional stump grinding, brush hogging, and land clearing services
              throughout West Union and Oconee County. From residential lots to rural acreage near the
              Oconee County Airport, we&apos;ve got the equipment and experience to handle your project.
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

        {/* About West Union Service */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  YOUR LOCAL WEST UNION LAND CLEARING EXPERTS
                </h2>
                <p className="text-muted text-lg mb-4">
                  West Union is a small, close-knit community in Oconee County with a mix of rural farmland
                  and residential properties. Whether you&apos;re clearing pasture land, removing stumps from
                  your backyard, or preparing a lot for new construction, Nelson Land & Stump is here to help.
                </p>
                <p className="text-muted text-lg mb-4">
                  Located centrally in Oconee County near the regional airport, West Union provides easy access
                  to surrounding communities. We understand the agricultural heritage of the area and work
                  carefully to meet the needs of both homeowners and landowners.
                </p>
                <p className="text-muted text-lg">
                  As a local, family-owned business based in Williamston, we take pride in serving Oconee County
                  neighbors with honest pricing, reliable service, and results that speak for themselves.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">Why West Union Chooses Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Rural Experience:</strong> We understand the needs of agricultural and rural properties</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Fast Response:</strong> Usually on-site within 1-2 days for estimates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Competitive Pricing:</strong> Fair rates for West Union area projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Fully Insured:</strong> Your property is protected</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              OUR WEST UNION SERVICES
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-primary text-xl mb-3">{service.name}</h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <Link href={service.href} className="text-accent hover:text-accent-dark font-medium inline-flex items-center">
                    View {service.name} Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              WEST UNION AREAS WE SERVE
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide stump grinding, brush hogging, and land clearing services throughout West Union and the surrounding areas, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {neighborhoods.map((area) => (
                <div key={area} className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              ALSO SERVING NEARBY AREAS
            </h2>
            <p className="text-muted text-lg mb-8">
              In addition to West Union, we provide services throughout Oconee County and Upstate South Carolina:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/areas/walhalla-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Walhalla</span>
              </Link>
              <Link href="/areas/seneca-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Seneca</span>
              </Link>
              <Link href="/areas/westminster-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Westminster</span>
              </Link>
              <Link href="/areas/salem-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Salem</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING & LAND CLEARING RESOURCES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/how-much-does-stump-grinding-cost-greenville-sc" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Stump Grinding Costs in Upstate SC</h3>
                <p className="text-muted text-sm">Complete pricing guide for stump grinding in the Upstate area.</p>
              </Link>
              <Link href="/blog/how-long-does-stump-grinding-take" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">How Long Does It Take?</h3>
                <p className="text-muted text-sm">Time estimates for different stump sizes and conditions.</p>
              </Link>
              <Link href="/blog/what-to-do-after-stump-grinding" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">After Stump Grinding</h3>
                <p className="text-muted text-sm">How to fill the hole and restore your lawn.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              NEED STUMP GRINDING IN WEST UNION?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Nelson Land & Stump today for a free, no-obligation quote on stump grinding,
              brush hogging, or land clearing services in West Union, SC and surrounding areas.
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
