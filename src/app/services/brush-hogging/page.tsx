import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Brush Hogging Services Columbia SC | Columbia Stump Grinding',
  description: 'Brush hogging services and bush hogging services in Columbia and Midlands SC. Brush hogging cost per acre $150-$300. Brush clearing services for fields and fence lines. Free estimates. Call (803) 470-0734.',
  keywords: 'brush hogging services, brush hogging cost per acre, bush hogging services, brush clearing services, brush hogging Columbia SC, bush hogging Lexington SC, field mowing Midlands SC',
  openGraph: {
    title: 'Brush Hogging Services & Cost Per Acre | Columbia Stump Grinding',
    description: 'Brush hogging cost per acre in Midlands SC. Bush hogging services. Free estimates!',
  },
  alternates: {
    canonical: '/services/brush-hogging',
  },
};


export default function BrushHoggingPage() {
  const applications = [
    {
      title: 'Overgrown Fields & Pastures',
      description: 'Reclaim fields that have been neglected for years. We cut through tall grass, weeds, and brush to restore your land to usable condition.',
    },
    {
      title: 'Fence Line Clearing',
      description: 'Keep fence lines accessible for maintenance and repairs. Prevent brush from damaging or overtaking your fencing.',
    },
    {
      title: 'Trail & Path Maintenance',
      description: 'Clear walking trails, ATV paths, and access roads on your property. Perfect for hunting land or recreational properties.',
    },
    {
      title: 'Pre-Construction Clearing',
      description: 'Prepare sites for building, driveways, or landscaping projects. Get the initial clearing done fast before heavy equipment arrives.',
    },
    {
      title: 'Fire Prevention',
      description: 'Reduce fire hazards by clearing dry brush and overgrown vegetation around your property and structures.',
    },
    {
      title: 'Property Line Clearing',
      description: 'Establish or maintain clear property boundaries. Essential for surveys, sales, or simply knowing where your land ends.',
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
                { label: 'Brush Hogging' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              BRUSH HOGGING SERVICES & BRUSH CLEARING IN MIDLANDS SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Professional bush hogging and brush clearing services throughout Richland & Lexington Counties.
              Our tree service handles overgrown fields, fence lines, and everything in between. Call today for a free estimate!
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

        {/* What is Brush Hogging */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHAT IS BRUSH HOGGING?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted text-lg mb-4">
                  Brush hogging (also called bush hogging) is a professional brush removal method using a heavy-duty rotary cutter
                  attached to a tractor. It&apos;s the fastest and most efficient way to clear overgrown vegetation on
                  larger properties throughout Columbia and Midlands South Carolina.
                </p>
                <p className="text-muted text-lg mb-4">
                  Our equipment can handle tall grass, thick weeds, blackberry briars, kudzu, and saplings up to
                  3 inches in diameter. We work on properties of all sizes—from half-acre lots in Lexington to
                  50+ acre farms in Richland County.
                </p>
                <p className="text-muted text-lg">
                  Unlike mowing, bush hogging is designed for rough terrain and heavy vegetation that a
                  standard lawn mower can&apos;t handle. It&apos;s the go-to solution for reclaiming land that&apos;s been
                  neglected for months or even years. Our professional tree service ensures customer satisfaction on every job.
                </p>
              </div>
              <div className="bg-muted-light rounded-lg p-8">
                <h3 className="font-bold text-primary text-xl mb-4">What We Can Cut</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Tall grass and weeds (any height)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Thick brush and brambles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Blackberry briars and kudzu</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Saplings up to 3&quot; diameter</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Overgrown fence lines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted">Rough, uneven terrain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              COMMON BRUSH HOGGING APPLICATIONS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-primary text-lg mb-3">{app.title}</h3>
                  <p className="text-muted text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas - Linked for SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              BRUSH HOGGING SERVICE AREAS
            </h2>
            <p className="text-muted text-lg mb-8">
              We provide professional brush hogging and brush clearing services throughout Columbia and Midlands South Carolina. Click your city for local details:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href="/areas/columbia-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Columbia
              </Link>
              <Link href="/areas/west-columbia-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging West Columbia
              </Link>
              <Link href="/areas/lexington-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Lexington
              </Link>
              <Link href="/areas/irmo-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Irmo
              </Link>
              <Link href="/areas/chapin-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Chapin
              </Link>
              <Link href="/areas/cayce-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Cayce
              </Link>
              <Link href="/areas/blythewood-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Blythewood
              </Link>
              <Link href="/areas/forest-acres-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Forest Acres
              </Link>
              <Link href="/areas/elgin-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Elgin
              </Link>
              <Link href="/areas/gilbert-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Gilbert
              </Link>
              <Link href="/areas/lugoff-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Lugoff
              </Link>
              <Link href="/areas/batesburg-leesville-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Batesburg-Leesville
              </Link>
            </div>
            <p className="text-muted">
              We serve all of Richland & Lexington Counties.
              Call <a href="tel:8034700734" className="text-accent hover:underline">(803) 470-0734</a> to schedule a consultation.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              BRUSH HOGGING RESOURCES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pricing" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Pricing Guide</h3>
                <p className="text-muted text-sm">Get an idea of brush hogging costs for your project.</p>
              </Link>
              <Link href="/blog/brush-hogging-cost-per-acre-sc" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">Cost Per Acre</h3>
                <p className="text-muted text-sm">Detailed pricing info for Midlands SC properties.</p>
              </Link>
              <Link href="/blog/5-signs-you-need-land-clearing" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
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
              READY TO CLEAR THAT OVERGROWN PROPERTY?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact Columbia Stump Grinding today for a free quote on brush hogging services in Columbia, Lexington,
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
