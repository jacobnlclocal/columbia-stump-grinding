export default function ServiceArea() {
  const serviceAreas = [
    'Anderson County',
    'Knox County',
    'Blount County',
    'Loudon County',
    'Roane County',
    'Union County',
    'Grainger County',
    'Jefferson County',
  ];

  return (
    <section id="service-area" className="py-20 bg-muted-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Service Area
            </h2>
            <p className="text-lg text-muted mb-8">
              We proudly serve the greater region and surrounding communities. Our team is equipped to handle projects of any size throughout East Tennessee.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-primary mb-2">Don&apos;t see your area?</h3>
              <p className="text-muted mb-4">
                We may still be able to help! Contact us for projects outside our standard service area.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center text-accent hover:text-accent-dark font-medium"
              >
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden shadow-xl aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted">
                    Embed your Google Maps or custom map here to show your service area
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                50+ Mile Radius
              </div>
            </div>

            {/* Quick Stats */}
            <div className="absolute -bottom-6 left-4 right-4">
              <div className="bg-white rounded-xl shadow-xl p-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-accent">8</p>
                  <p className="text-sm text-muted">Counties</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted">Mile Radius</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">Fast</p>
                  <p className="text-sm text-muted">Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
