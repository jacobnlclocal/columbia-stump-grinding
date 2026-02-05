import Link from 'next/link';

export default function ServiceAreas() {
  // Cities with dedicated area pages
  const areaPages: Record<string, string> = {
    // Richland County
    'Columbia': '/areas/columbia-sc',
    'Blythewood': '/areas/blythewood-sc',
    'Forest Acres': '/areas/forest-acres-sc',
    'Hopkins': '/areas/hopkins-sc',
    // Lexington County
    'West Columbia': '/areas/west-columbia-sc',
    'Cayce': '/areas/cayce-sc',
    'Lexington': '/areas/lexington-sc',
    'Irmo': '/areas/irmo-sc',
    'Chapin': '/areas/chapin-sc',
    'Springdale': '/areas/springdale-sc',
    'South Congaree': '/areas/south-congaree-sc',
    'Gaston': '/areas/gaston-sc',
    'Swansea': '/areas/swansea-sc',
    'Batesburg-Leesville': '/areas/batesburg-leesville-sc',
    'Gilbert': '/areas/gilbert-sc',
  };

  const counties = [
    {
      name: 'Richland County',
      cities: ['Columbia', 'Blythewood', 'Forest Acres', 'Hopkins'],
    },
    {
      name: 'Lexington County',
      cities: ['West Columbia', 'Cayce', 'Lexington', 'Irmo', 'Chapin', 'Springdale', 'South Congaree', 'Gaston', 'Swansea', 'Batesburg-Leesville', 'Gilbert'],
    },
  ];

  return (
    <section id="service-areas" className="py-20 bg-muted-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            SERVICE AREAS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
            Professional stump grinding, brush hogging, and land clearing services throughout Columbia and Midlands South Carolina
          </p>
          <p className="text-muted text-base max-w-3xl mx-auto">
            We travel throughout the Midlands region to serve our customers. Our service area covers Richland and Lexington Counties, including all major cities and rural communities. We offer free on-site estimates for all projects in our service area, and we can typically schedule estimates within one to two business days.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {counties.map((county) => (
            <div key={county.name} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-primary text-lg mb-4 border-b border-accent pb-2">
                {county.name}
              </h3>
              <ul className="space-y-2">
                {county.cities.map((city) => (
                  <li key={city} className="text-muted flex items-center">
                    <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {areaPages[city] ? (
                      <Link href={areaPages[city]} className="hover:text-accent transition-colors">
                        {city}
                      </Link>
                    ) : (
                      city
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Don&apos;t See Your Town Listed?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            We serve all of Richland and Lexington Counties. If you&apos;re in the Columbia or Midlands SC area, we can help. Give us a call to confirm service in your area.
          </p>
          <a
            href="tel:8647609203"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-bold uppercase tracking-wide transition-colors"
          >
            Call (864) 760-9203
          </a>
        </div>
      </div>
    </section>
  );
}
