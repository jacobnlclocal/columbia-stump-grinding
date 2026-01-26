import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Spartanburg SC | Nelson Land & Stump',
  description: 'Professional stump grinding, brush hogging, and land clearing services in Spartanburg, SC. Serving downtown Spartanburg, Westgate, Hillbrook Forest & surrounding areas. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding Spartanburg SC, stump grinding Spartanburg, land clearing Spartanburg, brush hogging Spartanburg SC, stump removal Spartanburg, tree stump grinding Spartanburg',
  alternates: {
    canonical: '/areas/spartanburg-sc',
  },
};


export default function SpartanburgPage() {
  const neighborhoods = [
    'Downtown Spartanburg', 'Westgate', 'Hillbrook Forest', 'Pine Street', 'Converse Heights', 'Hampton Heights', 'Forest Park', 'Woodland Heights', 'Duncan Park', 'Country Club', 'Beaumont', 'Saxon',
  ];

  const services = [
    {
      name: 'Stump Grinding',
      description: 'Remove unsightly stumps from your Spartanburg property. We grind stumps 6-8 inches below ground level.',
      href: '/areas/spartanburg-sc/stump-grinding',
    },
    {
      name: 'Brush Hogging',
      description: 'Clear overgrown fields, fence lines, and trails on your Spartanburg County property.',
      href: '/areas/spartanburg-sc/brush-hogging',
    },
    {
      name: 'Land Clearing',
      description: 'Full lot clearing for new construction or property development in the Spartanburg area.',
      href: '/areas/spartanburg-sc/land-clearing',
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
                { label: 'Spartanburg, SC' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING & LAND CLEARING IN SPARTANBURG, SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Nelson Land & Stump provides professional stump grinding, brush hogging, and land clearing services
              throughout Spartanburg and Spartanburg County. From downtown properties to rural acreage,
              we&apos;ve got the equipment and experience to handle your project.
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

        {/* About Spartanburg Service */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  YOUR LOCAL SPARTANBURG STUMP GRINDING EXPERTS
                </h2>
                <p className="text-muted text-lg mb-4">
                  Spartanburg is growing, and with new development comes the need for professional stump grinding
                  and land clearing services. Whether you&apos;re preparing a lot for new construction, removing
                  old stumps from your backyard, or clearing overgrown property, Nelson Land & Stump is here to help.
                </p>
                <p className="text-muted text-lg mb-4">
                  We understand the unique challenges of working in Spartanburg County—from navigating tight
                  suburban lots to clearing larger rural properties. Our equipment is sized right for any job,
                  and we always leave your property clean and ready for the next step.
                </p>
                <p className="text-muted text-lg">
                  As a local, family-owned business based in Williamston, we take pride in serving our Spartanburg
                  neighbors with honest pricing, reliable service, and results that speak for themselves.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">Why Spartanburg Chooses Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Local Knowledge:</strong> We know Spartanburg County&apos;s terrain and soil conditions</span>
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
                    <span className="text-muted"><strong>Competitive Pricing:</strong> Fair rates for Spartanburg area projects</span>
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
              OUR SPARTANBURG SERVICES
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
              SPARTANBURG AREAS WE SERVE
            </h2>
            <p className="text-muted text-lg mb-4">
              We provide stump grinding, brush hogging, and land clearing services throughout Spartanburg County, including:
            </p>
            <p className="text-muted text-base mb-8">
              Our Spartanburg service area covers all neighborhoods from downtown to the outskirts, including both residential and commercial properties. Whether you have a small backyard stump in Converse Heights or need extensive land clearing for new development, our team has the equipment and expertise to handle your project efficiently and professionally.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
            <p className="text-muted text-lg mb-4">
              In addition to Spartanburg, we provide services throughout Upstate South Carolina:
            </p>
            <p className="text-muted text-base mb-8">
              Our service area extends approximately 45 minutes from our base in Williamston, covering Spartanburg County, Greenville County, and the surrounding Upstate region. If you are located outside of Spartanburg proper but still within the Upstate area, we can likely serve you as well. Contact us to confirm service availability for your specific location and to schedule a free on-site estimate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/areas/greenville-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Greenville</span>
              </Link>
              <Link href="/areas/greer-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Greer</span>
              </Link>
              <Link href="/areas/simpsonville-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Simpsonville</span>
              </Link>
              <Link href="/areas/mauldin-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Mauldin</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              SPARTANBURG STUMP GRINDING RESOURCES
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
              NEED STUMP GRINDING IN SPARTANBURG?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Nelson Land & Stump today for a free, no-obligation quote on stump grinding,
              brush hogging, or land clearing services in Spartanburg, SC and surrounding areas.
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
