export default function ServiceAreas() {
  const counties = [
    {
      name: 'Greenville County',
      cities: ['Greenville', 'Simpsonville', 'Greer', 'Mauldin', 'Travelers Rest', 'Fountain Inn'],
    },
    {
      name: 'Anderson County',
      cities: ['Anderson', 'Pendleton', 'Williamston', 'Belton', 'Honea Path', 'Iva'],
    },
    {
      name: 'Pickens County',
      cities: ['Easley', 'Clemson', 'Pickens', 'Liberty', 'Central', 'Norris'],
    },
    {
      name: 'Oconee County',
      cities: ['Seneca', 'Walhalla', 'Westminster', 'Salem', 'West Union', 'Fair Play'],
    },
  ];

  return (
    <section id="service-areas" className="py-20 bg-muted-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            SERVICE AREAS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Professional stump grinding, brush hogging, and land clearing services throughout Upstate South Carolina
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    {city}
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
            We serve all of Upstate South Carolina. If you&apos;re within 45 minutes of Greenville, Easley, or Anderson, we can help. Give us a call to confirm service in your area.
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
