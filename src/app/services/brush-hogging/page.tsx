import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Brush Hogging & Brush Removal Upstate SC | Nelson Stump',
  description: 'Professional brush hogging, bush hogging, and brush removal services in Anderson, Pickens, Greenville, and Upstate SC. Clear overgrown fields, fence lines, and trails. Free estimates. Call (864) 760-9203.',
  keywords: 'brush hogging Anderson SC, bush hogging, brush clearing Pickens County, field mowing Greenville SC, brush hog service near me, overgrown land clearing Upstate SC, pasture mowing, brush removal',
  openGraph: {
    title: 'Brush Hogging Services | Nelson Land & Stump',
    description: 'Professional brush hogging in Upstate SC. Free estimates!',
  },
  alternates: {
    canonical: '/services/brush-hogging',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brush Hogging",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://nelsonstump.com/#business",
    name: "Nelson Land & Stump Services",
    telephone: "+1-864-760-9203",
    address: {
      "@type": "PostalAddress",
      streetAddress: "230 Lewis Road",
      addressLocality: "Williamston",
      addressRegion: "SC",
      postalCode: "29697",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Anderson, SC" },
    { "@type": "City", name: "Pickens, SC" },
    { "@type": "City", name: "Greenville, SC" },
    { "@type": "City", name: "Easley, SC" },
    { "@type": "City", name: "Clemson, SC" },
    { "@type": "City", name: "Seneca, SC" },
  ],
  description: "Professional brush hogging and brush clearing services in Upstate South Carolina. Clear overgrown fields, fence lines, trails, and property boundaries.",
  serviceType: "Brush Hogging",
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
                { label: 'Services', href: '/#services' },
                { label: 'Brush Hogging' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              BRUSH HOGGING & BRUSH REMOVAL IN UPSTATE SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Professional bush hogging and brush clearing services throughout Anderson, Pickens, Greenville, and Oconee Counties.
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
                href="tel:8647609203"
                className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center"
              >
                (864) 760-9203
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
                  larger properties throughout Upstate South Carolina.
                </p>
                <p className="text-muted text-lg mb-4">
                  Our equipment can handle tall grass, thick weeds, blackberry briars, kudzu, and saplings up to
                  3 inches in diameter. We work on properties of all sizes—from half-acre lots in Easley to
                  50+ acre farms in Anderson County.
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
              We provide professional brush hogging and brush clearing services throughout Upstate South Carolina. Click your city for local details:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href="/areas/anderson-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Anderson
              </Link>
              <Link href="/areas/greenville-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Greenville
              </Link>
              <Link href="/areas/pickens-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Pickens
              </Link>
              <Link href="/areas/easley-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Easley
              </Link>
              <Link href="/areas/clemson-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Clemson
              </Link>
              <Link href="/areas/seneca-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Seneca
              </Link>
              <Link href="/areas/liberty-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Liberty
              </Link>
              <Link href="/areas/pendleton-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Pendleton
              </Link>
              <Link href="/areas/greer-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Greer
              </Link>
              <Link href="/areas/simpsonville-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Simpsonville
              </Link>
              <Link href="/areas/mauldin-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Mauldin
              </Link>
              <Link href="/areas/central-sc/brush-hogging" className="flex items-center text-accent hover:text-accent-dark font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brush Hogging Central
              </Link>
            </div>
            <p className="text-muted">
              We serve all of Anderson, Pickens, Greenville, and Oconee counties.
              Call <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> to schedule a consultation.
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
                <p className="text-muted text-sm">Detailed pricing info for Upstate SC properties.</p>
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
              Contact Nelson Land & Stump today for a free quote on brush hogging services in Anderson, Pickens,
              Greenville, and throughout Upstate South Carolina.
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
