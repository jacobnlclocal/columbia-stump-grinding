import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Land Clearing Services in Upstate SC | Nelson Land & Stump',
  description: 'Professional stump grinding, brush hogging, and land clearing services in Greenville, Anderson, and Upstate South Carolina. Free estimates. Call (864) 760-9203.',
  keywords: 'land clearing services SC, stump grinding Greenville, brush hogging Anderson, land clearing Upstate SC, tree stump removal',
};

const services = [
  {
    slug: 'stump-grinding',
    title: 'Stump Grinding',
    description: 'Professional stump removal that grinds stumps 6-8 inches below ground level. Quick, clean, and affordable—most residential stumps are done in under an hour.',
    features: [
      'Grinds stumps below ground level',
      'Minimal yard disruption',
      'Same-week scheduling available',
      'Multi-stump discounts',
      'Debris cleanup included',
    ],
    cta: 'Get Stump Grinding Quote',
  },
  {
    slug: 'brush-hogging',
    title: 'Brush Hogging',
    description: 'Reclaim overgrown fields, pastures, and wooded lots with our professional brush hogging service. We handle everything from light grass to heavy brush and small saplings.',
    features: [
      'Fields and pasture maintenance',
      'Fence line clearing',
      'Lot preparation for building',
      'Access road clearing',
      'Annual maintenance plans',
    ],
    cta: 'Get Brush Hogging Quote',
  },
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    description: 'Complete site preparation for new construction, landscaping projects, or reclaiming unused land. We clear trees, brush, stumps, and debris to give you a clean slate.',
    features: [
      'Full site preparation',
      'Tree and vegetation removal',
      'Stump grinding included',
      'Debris hauling available',
      'Grading coordination',
    ],
    cta: 'Get Land Clearing Quote',
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nelson Land & Stump Services",
    "description": "Professional land clearing services in Upstate South Carolina",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://nelsonstump.com/services/${service.slug}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Nelson Land & Stump"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              OUR SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Nelson Land & Stump provides professional stump grinding, brush hogging, and land clearing
              services throughout Greenville, Anderson, and Upstate South Carolina. From a single backyard
              stump to multi-acre clearing projects, we have the equipment and experience to handle it.
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

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                      {service.title.toUpperCase()}
                    </h2>
                    <p className="text-muted text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-center text-sm"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/#contact"
                        className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-center text-sm"
                      >
                        {service.cta}
                      </Link>
                    </div>
                  </div>
                  <div className={`bg-muted-light rounded-lg p-8 h-64 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <svg className="w-24 h-24 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.slug === 'stump-grinding' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      )}
                      {service.slug === 'brush-hogging' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                      {service.slug === 'land-clearing' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHY CHOOSE NELSON LAND & STUMP?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Fast Service</h3>
                <p className="text-muted text-sm">Most jobs scheduled within a week. Same-day service often available.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Fully Insured</h3>
                <p className="text-muted text-sm">Licensed and insured for your protection and peace of mind.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Fair Pricing</h3>
                <p className="text-muted text-sm">Honest, upfront quotes with no hidden fees. Multi-stump discounts.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Local & Friendly</h3>
                <p className="text-muted text-sm">Family-owned and operated. Proud to serve our Upstate SC community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              SERVICE AREAS
            </h2>
            <p className="text-muted text-lg text-center mb-10 max-w-2xl mx-auto">
              We provide stump grinding, brush hogging, and land clearing services throughout Upstate South Carolina.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <Link href="/areas/greenville-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Greenville</span>
              </Link>
              <Link href="/areas/anderson-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Anderson</span>
              </Link>
              <Link href="/areas/easley-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Easley</span>
              </Link>
              <Link href="/areas/clemson-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Clemson</span>
              </Link>
              <Link href="/areas/simpsonville-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Simpsonville</span>
              </Link>
              <Link href="/areas/greer-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Greer</span>
              </Link>
              <Link href="/areas/seneca-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Seneca</span>
              </Link>
              <Link href="/areas/pickens-sc" className="text-center p-4 bg-muted-light rounded-lg hover:bg-accent/10 transition-colors">
                <span className="font-bold text-primary">Pickens</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              READY TO GET STARTED?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a free, no-obligation quote. We&apos;ll assess your property and
              give you an honest price for the work you need done.
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
