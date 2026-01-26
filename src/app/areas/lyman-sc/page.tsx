import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding Lyman SC | Nelson Land & Stump',
  description: 'Professional stump grinding, brush hogging, and land clearing services in Lyman, SC. Serving Spartanburg County & surrounding areas. Free estimates. Call (864) 760-9203.',
  keywords: 'stump grinding Lyman SC, land clearing Lyman, brush hogging Lyman SC, stump removal Lyman, tree stump grinding Spartanburg County',
  alternates: { canonical: '/areas/lyman-sc' },
};

export default function LymanPage() {
  const neighborhoods = ['Downtown Lyman', 'Groce Road', 'Lyman Mill', 'Pacific Mills'];
  const services = [
    { name: 'Stump Grinding', description: 'Remove unsightly stumps from your Lyman property. We grind stumps 6-8 inches below ground level.', href: '/areas/lyman-sc/stump-grinding' },
    { name: 'Brush Hogging', description: 'Clear overgrown fields, fence lines, and trails on your Spartanburg County property.', href: '/areas/lyman-sc/brush-hogging' },
    { name: 'Land Clearing', description: 'Full lot clearing for new construction or property development in the Lyman area.', href: '/areas/lyman-sc/land-clearing' },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        <section className="bg-primary py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/#service-areas' }, { label: 'Lyman, SC' }]} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>STUMP GRINDING & LAND CLEARING IN LYMAN, SC</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">Nelson Land & Stump provides professional stump grinding, brush hogging, and land clearing services throughout Lyman and Spartanburg County.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center">Get a Free Quote</Link>
              <a href="tel:8647609203" className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-center">(864) 760-9203</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>OUR LYMAN SERVICES</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-primary text-xl mb-3">{service.name}</h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <Link href={service.href} className="text-accent hover:text-accent-dark font-medium inline-flex items-center">Learn More<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>LYMAN AREAS WE SERVE</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((area) => (<div key={area} className="flex items-center text-muted"><svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{area}</div>))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>NEED STUMP GRINDING IN LYMAN?</h2>
            <p className="text-gray-300 text-lg mb-8">Contact Nelson Land & Stump today for a free quote on stump grinding, brush hogging, or land clearing in Lyman, SC.</p>
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
