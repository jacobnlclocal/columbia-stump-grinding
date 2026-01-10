'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CityData, ServiceData, services } from '@/lib/data';

interface ServiceCityPageProps {
  city: CityData;
  service: ServiceData;
}

export default function ServiceCityPage({ city, service }: ServiceCityPageProps) {
  const otherServices = services.filter(s => s.slug !== service.slug);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Nelson Land & Stump Services - ${service.name} ${city.name}`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, SC and surrounding areas.`,
    url: `https://nelsonstump.com/areas/${city.slug}/${service.slug}`,
    telephone: "+1-864-760-9203",
    address: {
      "@type": "PostalAddress",
      streetAddress: "230 Lewis Road",
      addressLocality: "Williamston",
      addressRegion: "SC",
      postalCode: "29697",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "South Carolina",
      },
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}, SC`,
    provider: localBusinessSchema,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: service.description,
    serviceType: service.name,
    offers: {
      "@type": "Offer",
      priceRange: service.priceRange,
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
                { label: 'Service Areas', href: '/#service-areas' },
                { label: `${city.name}, SC`, href: `/areas/${city.slug}` },
                { label: service.name },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              {service.name.toUpperCase()} IN {city.name.toUpperCase()}, SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              {service.description} Serving {city.name} and all of {city.county}.
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

        {/* Service Description */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                  PROFESSIONAL {service.name.toUpperCase()} IN {city.name.toUpperCase()}
                </h2>
                <p className="text-muted text-lg mb-4">
                  Looking for reliable {service.name.toLowerCase()} services in {city.name}, SC? Nelson Land & Stump
                  provides professional {service.name.toLowerCase()} (also known as {service.synonyms.slice(0, 2).join(' and ')}) throughout {city.county} and the surrounding Upstate area.
                </p>
                <p className="text-muted text-lg mb-4">
                  As a local, family-owned business based in Williamston, we understand the unique needs of {city.name}
                  property owners. Whether you have a residential lot or commercial property, we have the equipment
                  and expertise to get the job done right.
                </p>
                <p className="text-muted text-lg">
                  We offer free on-site estimates for all {service.name.toLowerCase()} projects in {city.name}.
                  Call us today at <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> to schedule yours.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">Why {city.name} Chooses Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Local Knowledge:</strong> We know {city.county}&apos;s terrain and soil conditions</span>
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
                    <span className="text-muted"><strong>Competitive Pricing:</strong> Fair rates for {city.name} area projects</span>
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

        {/* Benefits */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              BENEFITS OF {service.name.toUpperCase()} IN {city.name.toUpperCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-primary text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential & Commercial Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              RESIDENTIAL & COMMERCIAL {service.name.toUpperCase()} IN {city.name.toUpperCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.customerTypes.map((ct) => (
                <div key={ct.type} className="bg-muted-light rounded-lg p-6">
                  <h3 className="font-bold text-primary text-xl mb-3">{ct.type} {service.name}</h3>
                  <p className="text-muted">{ct.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Size Variations & Pricing */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              {service.name.toUpperCase()} PRICING IN {city.name.toUpperCase()}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.sizeVariations.map((sv) => (
                <div key={sv.size} className="bg-white rounded-lg p-6 text-center">
                  <h3 className="font-bold text-primary text-xl mb-2">{sv.size}</h3>
                  <p className="text-accent font-bold text-lg mb-3">{sv.priceNote}</p>
                  <p className="text-muted text-sm">{sv.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted mt-8 text-sm">
              * Prices are estimates. Actual pricing depends on accessibility, terrain, and specific site conditions.
              <Link href="/#contact" className="text-accent hover:underline ml-1">Get a free quote</Link> for accurate pricing.
            </p>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              {service.name.toUpperCase()} AREAS IN {city.name.toUpperCase()}
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide {service.name.toLowerCase()} ({service.synonyms[0]}) services throughout {city.name} and the surrounding areas, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {city.neighborhoods.map((area) => (
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

        {/* Pricing */}
        <section className="py-16 bg-primary">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              {service.name.toUpperCase()} COST IN {city.name.toUpperCase()}, SC
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              {service.name} prices in {city.name} typically range from <span className="text-accent font-bold">{service.priceRange}</span>,
              depending on the size, location, and accessibility. We offer free on-site estimates so you know exactly what to expect.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              OTHER SERVICES IN {city.name.toUpperCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherServices.map((otherService) => (
                <Link
                  key={otherService.slug}
                  href={`/areas/${city.slug}/${otherService.slug}`}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-primary text-xl mb-2">{otherService.name} in {city.name}</h3>
                  <p className="text-muted text-sm">{otherService.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              {service.name.toUpperCase()} IN NEARBY AREAS
            </h2>
            <p className="text-muted text-lg mb-8">
              We also provide {service.name.toLowerCase()} services in these nearby locations:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {city.nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/${service.slug}`}
                  className="bg-muted-light p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <span className="font-bold text-primary">{service.name} {area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              NEED {service.name.toUpperCase()} IN {city.name.toUpperCase()}?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Nelson Land & Stump today for a free, no-obligation quote on {service.name.toLowerCase()}
              services in {city.name}, SC and surrounding areas.
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
