import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding & Land Clearing in Honea Path SC | Nelson Land & Stump',
  description: 'Professional stump grinding, brush hogging, and land clearing services in Honea Path, SC. Serving Anderson County. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding Honea Path SC, land clearing Honea Path, brush hogging Anderson County, stump removal Honea Path South Carolina',
};

export default function HoneaPathPage() {
  const services = [
    { name: 'Stump Grinding', description: 'Professional stump removal for Honea Path properties.', href: '/areas/honea-path-sc/stump-grinding' },
    { name: 'Brush Hogging', description: 'Clear overgrown pastures and rural land.', href: '/areas/honea-path-sc/brush-hogging' },
    { name: 'Land Clearing', description: 'Site preparation for farms and homes.', href: '/areas/honea-path-sc/land-clearing' },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        <section className="bg-primary py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/#service-areas' }, { label: 'Honea Path, SC' }]} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              STUMP GRINDING & LAND CLEARING IN HONEA PATH, SC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Nelson Land & Stump serves Honea Path and rural Anderson County with professional stump grinding, brush hogging, and land clearing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center">Get a Free Quote</Link>
              <a href="tel:8647609203" className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center">(864) 760-9203</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>OUR HONEA PATH SERVICES</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-muted-light rounded-lg p-6">
                  <h3 className="font-bold text-primary text-xl mb-3">{service.name}</h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <Link href={service.href} className="text-accent hover:text-accent-dark font-medium">Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>NEED LAND CLEARING IN HONEA PATH?</h2>
            <p className="text-gray-300 text-lg mb-8">Contact us today for a free quote on stump grinding, brush hogging, or land clearing services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors">Request a Quote</Link>
              <a href="tel:8647609203" className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors">Call (864) 760-9203</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
