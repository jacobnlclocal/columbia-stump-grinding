import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Stump Grinding Estimate | Get a Quote in Upstate SC',
  description: 'Get a free stump grinding, brush hogging, or land clearing estimate in Greenville, Spartanburg, Anderson, Pickens & Oconee Counties. No obligation quotes. Call (864) 760-9203 or fill out our form.',
  keywords: 'free stump grinding estimate, stump grinding quote, land clearing estimate, brush hogging quote, free estimate Greenville SC, stump removal quote near me, land clearing quote Anderson SC',
  openGraph: {
    title: 'Free Stump Grinding Estimate | Nelson Stump',
    description: 'Get a free, no-obligation estimate for stump grinding, brush hogging, or land clearing in Upstate SC.',
    url: 'https://www.nelsonstump.com/free-estimate',
  },
  alternates: {
    canonical: '/free-estimate',
  },
};


export default function FreeEstimatePage() {
  const benefits = [
    {
      title: 'No Obligation',
      description: 'Our estimates are completely free with no pressure to commit.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Fast Response',
      description: 'We respond within 24 hours and schedule estimates within 1-2 days.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Accurate Pricing',
      description: 'On-site estimates ensure you get an accurate quote with no surprises.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Local & Insured',
      description: 'Family-owned, fully insured, and serving Upstate SC for 5+ years.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
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
                { label: 'Free Estimate' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              GET YOUR FREE STUMP GRINDING ESTIMATE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-4">
              Request a free, no-obligation quote for stump grinding, brush hogging, or land clearing
              services anywhere in Upstate South Carolina.
            </p>
            <p className="text-lg text-accent font-semibold mb-4">
              Most estimates scheduled within 1-2 business days
            </p>
            <p className="text-gray-400 max-w-3xl">
              Nelson Land and Stump Services has been providing professional land clearing services in Upstate South Carolina for over five years. Our team visits your property to assess the scope of work, discuss your specific needs, and provide an accurate quote. We handle projects of all sizes, from single stump removal to multi-acre land clearing. Every estimate includes a detailed breakdown so you know exactly what to expect with no hidden fees or surprises.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHY GET AN ESTIMATE FROM US?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Services We Quote */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              SERVICES WE PROVIDE ESTIMATES FOR
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/services/stump-grinding" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-xl mb-3">Stump Grinding</h3>
                <p className="text-muted mb-4">Remove unsightly stumps from your yard. We grind 6-8 inches below ground level.</p>
                <p className="text-accent font-semibold">Typical range: $75-$400</p>
              </Link>
              <Link href="/services/brush-hogging" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-xl mb-3">Brush Hogging</h3>
                <p className="text-muted mb-4">Clear overgrown fields, fence lines, and trails with our heavy-duty equipment.</p>
                <p className="text-accent font-semibold">Typical range: $75-$150/acre</p>
              </Link>
              <Link href="/services/land-clearing" className="bg-muted-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-xl mb-3">Land Clearing</h3>
                <p className="text-muted mb-4">Complete lot clearing for construction, driveways, or development projects.</p>
                <p className="text-accent font-semibold">Typical range: $1,500-$5,000/acre</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              FREE ESTIMATES THROUGHOUT UPSTATE SC
            </h2>
            <p className="text-muted text-lg text-center mb-10 max-w-2xl mx-auto">
              We provide free on-site estimates in Greenville, Spartanburg, Anderson, Pickens, and Oconee Counties, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Greenville', 'Spartanburg', 'Anderson', 'Easley', 'Clemson', 'Seneca',
                'Pickens', 'Simpsonville', 'Greer', 'Mauldin', 'Pendleton', 'Liberty',
              ].map((city) => (
                <div key={city} className="bg-white rounded-lg p-3 text-center">
                  <span className="font-medium text-primary">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted mt-6">
              Don&apos;t see your city? We likely serve your area too! <a href="tel:8647609203" className="text-accent hover:underline">Call to confirm</a>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              PREFER TO CALL?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Speak directly with us to discuss your project and schedule your free estimate.
            </p>
            <a
              href="tel:8647609203"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-md font-bold text-xl uppercase tracking-wide transition-colors"
            >
              Call (864) 760-9203
            </a>
            <p className="text-gray-400 mt-4">Monday – Saturday, 7AM – 6PM</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
