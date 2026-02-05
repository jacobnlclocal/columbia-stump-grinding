import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'STUMP GRINDING',
      subtitle: 'Columbia, West Columbia & Beyond',
      description: 'Professional stump grinding and removal services. We grind stumps 6-8 inches below ground for complete root removal. Improve your curb appeal and reclaim your yard.',
      href: '/services/stump-grinding',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'BRUSH HOGGING',
      subtitle: 'Lexington & Richland Counties',
      description: 'Bush hogging and brush clearing for overgrown fields, fence lines, and trails. Our professional tree service handles tall grass, thick brush, and saplings up to 3 inches.',
      href: '/services/brush-hogging',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      title: 'LAND CLEARING',
      subtitle: 'Irmo, Chapin & Lake Murray',
      description: 'Complete land clearing and tree removal services for new construction, driveways, or property development. Professional tree cutting and debris removal throughout the Midlands.',
      href: '/services/land-clearing',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            STUMP GRINDING & LAND CLEARING SERVICES IN COLUMBIA SC
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
            Professional equipment. Fair pricing. Clean results. Serving Richland & Lexington Counties.
          </p>
          <p className="text-muted text-base max-w-3xl mx-auto">
            Whether you need a single stump removed from your backyard or have acres of overgrown land that needs clearing, Columbia Stump Grinding has the equipment and expertise to handle your project. We work with residential homeowners, commercial property managers, real estate agents, and contractors throughout the Columbia and Midlands area. Our services include complete stump removal with root grinding, brush hogging for overgrown fields and fence lines, and full lot clearing for new construction or property development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted-light rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{service.title}</h3>
              <p className="text-accent text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-muted mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-accent hover:text-accent-dark font-medium text-sm inline-flex items-center"
              >
                Learn more about {service.title.toLowerCase()}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/free-estimate"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
