import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Pickens SC | Nelson Land & Stump',
  description: 'Professional stump grinding, brush hogging, and land clearing services in Pickens, SC. Serving Pickens County including Liberty, Norris & Six Mile. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding Pickens SC, land clearing Pickens County, brush hogging Pickens, stump removal Liberty SC, land clearing near Pickens',
};

export default function PickensPage() {
  const neighborhoods = [
    'Downtown Pickens', 'Cedar Rock', 'Glassy Mountain', 'Doodle Trail Area', 'Table Rock', 'Pumpkintown', 'Rocky Bottom', 'Hagood',
  ];

  const services = [
    {
      name: 'Stump Grinding',
      description: 'Professional stump removal for Pickens homeowners. Quick, efficient service for properties of all sizes.',
      href: '/areas/pickens-sc/stump-grinding',
    },
    {
      name: 'Brush Hogging',
      description: 'Clear overgrown fields, fence lines, and wooded areas throughout Pickens and the surrounding foothills.',
      href: '/areas/pickens-sc/brush-hogging',
    },
    {
      name: 'Land Clearing',
      description: 'Complete site preparation for new construction, gardens, and property improvements in Pickens County.',
      href: '/areas/pickens-sc/land-clearing',
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
                { label: 'Pickens, SC' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING & LAND CLEARING IN PICKENS, SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Nelson Land & Stump serves the town of Pickens and surrounding Pickens County with professional
              stump grinding, brush hogging, and land clearing services. From the foothills to the farmland,
              we handle jobs of all sizes.
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

        {/* About Pickens Service */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  SERVING THE PICKENS FOOTHILLS
                </h2>
                <p className="text-muted text-lg mb-4">
                  Pickens sits at the gateway to the Blue Ridge Mountains, where the foothills meet
                  the farmland of Upstate South Carolina. The terrain here can be challenging—sloped
                  lots, rocky soil, and dense woodland are common.
                </p>
                <p className="text-muted text-lg mb-4">
                  Our team has extensive experience working in the Pickens area, from the rural
                  properties out toward Table Rock to the established neighborhoods closer to town.
                  We know how to handle the unique challenges this terrain presents.
                </p>
                <p className="text-muted text-lg">
                  Whether you&apos;re clearing land for a mountain home, maintaining a family farm,
                  or just need a few stumps removed from your backyard, we bring the same level
                  of professionalism to every job.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">Pickens Area Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Mountain Properties:</strong> Experienced with sloped and rocky terrain</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Farm Land:</strong> Pasture clearing and fence line maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Residential:</strong> Quick service for Pickens neighborhoods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>New Construction:</strong> Lot clearing for mountain homes</span>
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
              OUR PICKENS SERVICES
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
              PICKENS COUNTY AREAS WE SERVE
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide stump grinding, brush hogging, and land clearing services throughout Pickens County:
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
            <p className="text-muted text-lg mb-8">
              In addition to Pickens, we provide services throughout Upstate South Carolina:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/areas/easley-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Easley</span>
              </Link>
              <Link href="/areas/clemson-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Clemson</span>
              </Link>
              <Link href="/areas/seneca-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Seneca</span>
              </Link>
              <Link href="/areas/greenville-sc" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="font-bold text-primary">Greenville</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              NEED STUMP GRINDING IN PICKENS?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Nelson Land & Stump today for a free quote on stump grinding,
              brush hogging, or land clearing services in Pickens, SC and surrounding areas.
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
