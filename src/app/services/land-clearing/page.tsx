import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Land Clearing Services Columbia SC | Columbia Stump Grinding',
  description: 'Professional land clearing services and tree removal services in Columbia and Midlands SC. Land clearing cost per acre $1,500-$5,000+. Lot clearing services for construction. Free estimates. Call (803) 470-0734.',
  keywords: 'land clearing services, tree removal services, lot clearing services, land clearing cost per acre, land clearing Columbia SC, lot clearing Lexington, land clearing Richland County, forestry mulching',
  openGraph: {
    title: 'Land Clearing Services & Cost | Columbia Stump Grinding',
    description: 'Land clearing cost per acre in Midlands SC. Tree removal services. Free estimates!',
  },
  alternates: {
    canonical: '/services/land-clearing',
  },
};


export default function LandClearingPage() {
  const services = [
    {
      title: 'New Construction Site Prep',
      description: 'Clear land for home building, additions, or outbuildings. We remove trees, brush, and debris to prepare your site for construction.',
    },
    {
      title: 'Driveway & Access Road Clearing',
      description: 'Create or extend driveways and access roads on your property. We clear the path and remove obstacles for smooth installation.',
    },
    {
      title: 'Lot Clearing for Sale',
      description: 'Make your land more attractive to buyers by clearing overgrown vegetation and improving accessibility.',
    },
    {
      title: 'Pasture & Field Reclamation',
      description: 'Restore overgrown farmland to usable pasture or fields. Ideal for starting or expanding agricultural operations.',
    },
    {
      title: 'Hunting Land Preparation',
      description: 'Create food plots, shooting lanes, and access trails for hunting properties throughout Midlands SC.',
    },
    {
      title: 'Storm Damage Cleanup',
      description: 'Fast response to clear fallen trees, debris, and damaged vegetation after severe weather events.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Free On-Site Estimate',
      description: 'We visit your property, assess the work needed, and provide a detailed quote with no obligation.',
    },
    {
      step: '2',
      title: 'Site Preparation',
      description: 'We identify any utilities, boundaries, and obstacles before work begins to ensure a safe, efficient project.',
    },
    {
      step: '3',
      title: 'Clearing & Removal',
      description: 'Our equipment clears trees, brush, and vegetation. Material is either chipped on-site, hauled away, or left for your use.',
    },
    {
      step: '4',
      title: 'Final Cleanup',
      description: 'We leave your property clean and ready for the next phase—whether that&apos;s construction, landscaping, or simply enjoying your land.',
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
                { label: 'Services', href: '/#services' },
                { label: 'Land Clearing' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              LAND CLEARING SERVICES & TREE REMOVAL IN MIDLANDS SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Professional tree removal and lot clearing services throughout Columbia, Lexington, Richland & Lexington Counties.
              Our tree service handles land clearing for construction, driveways, and property development. Call today for your free estimate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8034700734"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                (803) 470-0734
              </a>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              COMPREHENSIVE LAND CLEARING IN THE MIDLANDS
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted text-lg mb-4">
                  Land clearing is more than just tree cutting and tree removal. Using forestry mulching and brush removal techniques,
                  we transform raw, overgrown property into usable space for whatever you have planned—building a home, installing a driveway,
                  starting a garden, or simply reclaiming land that&apos;s been neglected. Improve your curb appeal and property value!
                </p>
                <p className="text-muted text-lg mb-4">
                  At Columbia Stump Grinding, we handle the full scope of land clearing projects in Columbia and Midlands South Carolina.
                  From small residential lots in Columbia to multi-acre properties in Richland County, we have the
                  equipment and experience to get your land ready.
                </p>
                <p className="text-muted text-lg">
                  We work closely with homeowners, builders, and developers to understand exactly what you need.
                  Whether you want everything cleared down to bare dirt or prefer to keep certain trees, our professional tree service
                  customizes the approach to match your vision. Customer satisfaction is our top priority.
                </p>
              </div>
              <div className="bg-accent text-white rounded-lg p-8">
                <h3 className="font-bold text-2xl mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Local Experience:</strong> 5+ years clearing land specifically in Midlands SC terrain</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Fully Insured:</strong> Liability coverage protects your property</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Fair Pricing:</strong> Honest quotes with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Clean Results:</strong> We don&apos;t leave until the job&apos;s done right</span>
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
              LAND CLEARING SERVICES WE OFFER
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-primary text-lg mb-3">{service.title}</h3>
                  <p className="text-muted text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              OUR LAND CLEARING PROCESS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas - Linked for SEO */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              LAND CLEARING SERVICE AREAS
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide professional land clearing and lot clearing services throughout Columbia and Midlands South Carolina. Click your city for local details:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href="/areas/columbia-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Columbia
              </Link>
              <Link href="/areas/west-columbia-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing West Columbia
              </Link>
              <Link href="/areas/lexington-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Lexington
              </Link>
              <Link href="/areas/irmo-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Irmo
              </Link>
              <Link href="/areas/chapin-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Chapin
              </Link>
              <Link href="/areas/cayce-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Cayce
              </Link>
              <Link href="/areas/blythewood-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Blythewood
              </Link>
              <Link href="/areas/forest-acres-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Forest Acres
              </Link>
              <Link href="/areas/elgin-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Elgin
              </Link>
              <Link href="/areas/lugoff-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Lugoff
              </Link>
              <Link href="/areas/gilbert-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Gilbert
              </Link>
              <Link href="/areas/batesburg-leesville-sc/land-clearing" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land Clearing Batesburg-Leesville
              </Link>
            </div>
            <p className="text-muted">
              Serving Richland & Lexington Counties.
              Call <a href="tel:8034700734" className="text-accent hover:underline">(803) 470-0734</a> for a free consultation.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              LAND CLEARING RESOURCES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pricing" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Pricing Guide</h3>
                <p className="text-muted text-sm">Get an idea of land clearing costs for your project.</p>
              </Link>
              <Link href="/blog/do-you-need-permit-land-clearing-sc" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Permit Requirements</h3>
                <p className="text-muted text-sm">Learn about land clearing regulations in SC.</p>
              </Link>
              <Link href="/blog/5-signs-you-need-land-clearing" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">5 Signs You Need Clearing</h3>
                <p className="text-muted text-sm">Know when it&apos;s time to call a professional.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              READY TO TRANSFORM YOUR PROPERTY?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Columbia Stump Grinding today for a free quote on land clearing services in Columbia, Lexington,
              West Columbia, and throughout Columbia and Midlands South Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:8034700734"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
              >
                Call (803) 470-0734
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
