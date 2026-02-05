import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How Deep Does a Stump Grinder Go? | Columbia Stump Grinding',
  description: 'How deep does a stump grinder go? Learn about standard grinding depths (6-12 inches), when you need deeper grinding, and what happens to the roots left behind.',
  keywords: 'how deep does stump grinder go, stump grinding depth, how deep to grind stump, stump grinder depth, tree stump grinding depth',
};

export default function HowDeepStumpGrinderGoPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Deep Does a Stump Grinder Go?",
    "description": "Learn about stump grinding depths, when deeper grinding is needed, and what happens to roots left in the ground.",
    "datePublished": "2026-01-26",
    "dateModified": "2026-01-26",
    "author": {
      "@type": "Organization",
      "name": "Columbia Stump Grinding",
      "url": "https://www.columbiastumpgrinding.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Columbia Stump Grinding",
      "url": "https://www.columbiastumpgrinding.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.columbiastumpgrinding.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.columbiastumpgrinding.com/blog/how-deep-does-stump-grinder-go"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'How Deep Does a Stump Grinder Go?' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              How Deep Does a Stump Grinder Go?
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>January 26, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/gallery-1.jpg"
            alt="Professional stump grinder showing grinding depth below ground level"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted leading-relaxed mb-8">
                One of the most common questions we get from homeowners is &quot;how deep does a stump
                grinder go?&quot; The answer depends on your plans for the area and the type of equipment
                being used. Here&apos;s everything you need to know about stump grinding depth.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                STANDARD STUMP GRINDING DEPTH: 6-8 INCHES
              </h2>
              <p className="text-muted mb-6">
                Most professional stump grinding services grind stumps to a depth of <strong>6-8 inches
                below ground level</strong>. This is the industry standard and is sufficient for most
                residential applications, including:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li>Planting grass seed over the area</li>
                <li>Installing flower beds or landscaping</li>
                <li>General yard use and lawn maintenance</li>
                <li>Preventing visible regrowth</li>
              </ul>
              <p className="text-muted mb-6">
                At 6-8 inches deep, the stump is far enough below the surface that you can add topsoil,
                plant grass, and mow over the area without any issues. The remaining roots will naturally
                decompose over 5-10 years.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN DO YOU NEED DEEPER GRINDING?
              </h2>
              <p className="text-muted mb-6">
                Some situations require grinding deeper than the standard 6-8 inches:
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-3">Building or Construction (12-18 inches)</h3>
              <p className="text-muted mb-6">
                If you&apos;re planning to build a structure, pour concrete, or install a patio over the
                stump location, you&apos;ll need deeper grinding. Most contractors recommend 12-18 inches
                for construction projects to ensure a stable foundation.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-3">Replanting a Tree (10-12 inches)</h3>
              <p className="text-muted mb-6">
                If you want to plant a new tree in the same spot, deeper grinding (10-12 inches) helps
                give the new tree&apos;s roots room to establish without competing with the old root system.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-3">Underground Utilities or Irrigation</h3>
              <p className="text-muted mb-6">
                Installing sprinkler systems, drainage, or underground utilities may require deeper
                grinding to allow for proper pipe placement.
              </p>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary text-lg mb-4">Grinding Depth Guide</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 pr-4 font-bold text-primary">Use Case</th>
                      <th className="text-left py-3 px-4 font-bold text-primary">Recommended Depth</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Lawn/Grass</td>
                      <td className="py-3 px-4">6-8 inches</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Flower Beds/Landscaping</td>
                      <td className="py-3 px-4">6-8 inches</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Planting New Tree</td>
                      <td className="py-3 px-4">10-12 inches</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Patio/Walkway</td>
                      <td className="py-3 px-4">10-12 inches</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Building/Foundation</td>
                      <td className="py-3 px-4">12-18 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT ABOUT THE ROOTS?
              </h2>
              <p className="text-muted mb-6">
                A common misconception is that stump grinding removes all the roots. In reality, stump
                grinding only removes the main stump and the root flare (where the trunk meets the roots).
                The lateral roots extending outward remain in the ground.
              </p>
              <p className="text-muted mb-6">
                <strong>Is this a problem?</strong> Usually not. Here&apos;s why:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li>Roots naturally decompose over 5-10 years</li>
                <li>They won&apos;t regrow without the main stump</li>
                <li>Decomposing roots actually enrich the soil</li>
                <li>Surface roots can be ground down if visible</li>
              </ul>
              <p className="text-muted mb-6">
                The only exception is certain aggressive tree species (like willows, poplars, or some
                maples) that can send up suckers from roots. For these species, treating the stump with
                herbicide or grinding deeper may be recommended.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                HOW DEEP CAN STUMP GRINDERS GO?
              </h2>
              <p className="text-muted mb-6">
                The maximum grinding depth depends on the equipment:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Rental/homeowner grinders:</strong> 4-8 inches maximum</li>
                <li><strong>Professional mid-size grinders:</strong> 12-16 inches</li>
                <li><strong>Large commercial grinders:</strong> 18-24+ inches</li>
              </ul>
              <p className="text-muted mb-6">
                This is one reason professional stump grinding services can achieve better results than
                DIY rental equipment. Our commercial-grade grinders can reach deeper when your project
                requires it.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                DOES DEEPER GRINDING COST MORE?
              </h2>
              <p className="text-muted mb-6">
                Yes, grinding deeper than the standard 6-8 inches typically costs more because it requires
                more time and puts more wear on the equipment. Most stump grinding companies charge an
                additional fee for deep grinding. At Columbia Stump Grinding, we&apos;ll discuss your plans for
                the area during the estimate so we can recommend and price the appropriate depth.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Not Sure How Deep You Need?</h3>
                <p className="text-muted mb-4">
                  Tell us what you&apos;re planning to do with the area after the stump is removed, and we&apos;ll
                  recommend the right grinding depth. We serve Columbia, West Columbia, Lexington, Irmo, Chapin, Cayce,
                  and all of Midlands SC.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT HAPPENS AFTER GRINDING?
              </h2>
              <p className="text-muted mb-6">
                After grinding, you&apos;re left with a hole filled with wood chips mixed with soil. The
                hole is typically 6-8 inches deep (or deeper if requested) and extends slightly beyond
                the original stump diameter. You have a few options:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Leave the chips:</strong> They&apos;ll settle and decompose over time</li>
                <li><strong>Use as mulch:</strong> Spread the chips in garden beds</li>
                <li><strong>Fill with topsoil:</strong> Add soil on top of chips for grass planting</li>
                <li><strong>Haul away:</strong> We can remove the chips for an additional fee</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                GET YOUR STUMP GROUND TO THE RIGHT DEPTH
              </h2>
              <p className="text-muted mb-6">
                At Columbia Stump Grinding, we grind stumps to the appropriate depth for your specific needs.
                Whether you&apos;re planting grass, building a patio, or preparing for construction, we have
                the equipment to get the job done right. Call us at{' '}
                <a href="tel:8037945833" className="text-accent hover:underline">(803) 794-5833</a> or{' '}
                <Link href="/#contact" className="text-accent hover:underline">request a free quote</Link>{' '}
                for stump grinding services in Columbia, West Columbia, Lexington, Irmo, Chapin, Cayce, and
                throughout Midlands SC.
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 bg-muted-light">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-primary mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              RELATED ARTICLES
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/what-to-do-after-stump-grinding" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">What to Do After Stump Grinding</h3>
                <p className="text-muted text-sm">How to fill the hole and restore your lawn.</p>
              </Link>
              <Link href="/blog/stump-grinding-vs-stump-removal" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Stump Grinding vs Stump Removal</h3>
                <p className="text-muted text-sm">Learn which method is right for your situation.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
