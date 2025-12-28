import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Stump Grinding vs Stump Removal: Which is Right for You? | Nelson Land & Stump',
  description: 'Learn the key differences between stump grinding and complete stump removal. Find out which method is best for your Upstate SC property and budget.',
  keywords: 'stump grinding vs removal, stump removal methods, tree stump options, stump grinding Greenville SC, stump removal Upstate SC',
};

export default function StumpGrindingVsRemovalPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Stump Grinding vs Stump Removal: Which is Right for You?",
    "description": "Learn the key differences between stump grinding and complete stump removal. Find out which method is best for your Upstate SC property and budget.",
    "datePublished": "2025-02-22",
    "dateModified": "2025-02-22",
    "author": {
      "@type": "Organization",
      "name": "Nelson Land & Stump",
      "url": "https://nelsonstump.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nelson Land & Stump",
      "url": "https://nelsonstump.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nelsonstump.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nelsonstump.com/blog/stump-grinding-vs-stump-removal"
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
                { label: 'Stump Grinding vs Removal' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              Stump Grinding vs Stump Removal: Which is Right for You?
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>February 22, 2025</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/blog-stump-vs-removal.jpg"
            alt="Tree stump comparison - stump grinding vs complete stump removal in Upstate SC"
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
                After having a tree cut down, you&apos;re left with an unsightly stump. You have two main
                options: grind it down or remove it entirely. Both methods have their place, and the right
                choice depends on your specific situation, budget, and future plans for that spot.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT IS STUMP GRINDING?
              </h2>
              <p className="text-muted mb-6">
                Stump grinding uses a powerful machine with a rotating cutting wheel to chip away at the
                stump. The grinder reduces the stump to small wood chips, typically grinding 6-8 inches
                below ground level. The root system is left in the ground but will naturally decay over time.
              </p>
              <p className="text-muted mb-6">
                <strong>The process:</strong> A stump grinder is positioned over the stump, and the operator
                systematically moves the cutting wheel back and forth, grinding the wood into mulch. For a
                typical 24-inch stump, this takes about 15-30 minutes.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT IS STUMP REMOVAL?
              </h2>
              <p className="text-muted mb-6">
                Complete stump removal involves extracting the entire stump and its root ball from the ground.
                This is typically done with heavy equipment like an excavator or backhoe. The stump is literally
                pulled or dug out of the ground, roots and all.
              </p>
              <p className="text-muted mb-6">
                <strong>The process:</strong> The area around the stump is excavated, major roots are cut,
                and the stump is leveraged out of the ground. This leaves a significant hole that needs to
                be filled and can disturb a large area of your yard.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                COMPARISON AT A GLANCE
              </h2>
              <div className="bg-muted-light rounded-lg p-6 mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 pr-4 font-bold text-primary">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-primary">Stump Grinding</th>
                      <th className="text-left py-3 pl-4 font-bold text-primary">Stump Removal</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Cost</td>
                      <td className="py-3 px-4">$100 - $400</td>
                      <td className="py-3 pl-4">$300 - $800+</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Time</td>
                      <td className="py-3 px-4">15-60 minutes</td>
                      <td className="py-3 pl-4">2-4 hours</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Yard Disruption</td>
                      <td className="py-3 px-4">Minimal</td>
                      <td className="py-3 pl-4">Significant</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 font-medium">Roots Remain</td>
                      <td className="py-3 px-4">Yes (decay naturally)</td>
                      <td className="py-3 pl-4">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Hole Left Behind</td>
                      <td className="py-3 px-4">Small depression</td>
                      <td className="py-3 pl-4">Large hole</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN TO CHOOSE STUMP GRINDING
              </h2>
              <p className="text-muted mb-4">
                Stump grinding is the right choice for most homeowners. Consider grinding when:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>You want a cost-effective solution:</strong> Grinding typically costs 50-75% less than removal</li>
                <li><strong>You&apos;re planting grass or landscaping:</strong> The ground-level result is perfect for lawn or garden beds</li>
                <li><strong>You want minimal yard disruption:</strong> Only the immediate stump area is affected</li>
                <li><strong>The stump is near structures:</strong> Grinding won&apos;t disturb foundations, patios, or fences</li>
                <li><strong>You need it done quickly:</strong> Most stumps can be ground in under an hour</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN TO CHOOSE STUMP REMOVAL
              </h2>
              <p className="text-muted mb-4">
                Complete removal makes sense in specific situations:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>You&apos;re building on the site:</strong> Foundations and concrete require complete root removal</li>
                <li><strong>You&apos;re planting a new tree in the same spot:</strong> The old root system would compete with new roots</li>
                <li><strong>The tree species sends up suckers:</strong> Some trees (like willows) sprout from roots even after grinding</li>
                <li><strong>You&apos;re installing underground utilities:</strong> Pipes and cables need root-free paths</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT HAPPENS TO THE ROOTS?
              </h2>
              <p className="text-muted mb-6">
                This is the most common question we get. With stump grinding, the roots stay in the ground
                but will naturally decompose over 5-10 years. They won&apos;t regrow or cause problems for most
                yards. The decomposition actually enriches the soil.
              </p>
              <p className="text-muted mb-6">
                If you&apos;re concerned about roots, keep in mind that even with complete stump removal, some
                smaller roots will remain in the soil. There&apos;s no practical way to remove every root.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT ABOUT THE WOOD CHIPS?
              </h2>
              <p className="text-muted mb-6">
                Stump grinding produces a pile of wood chips—usually 4-6 times the volume of the original
                stump. You have a few options:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Use as mulch:</strong> Spread in garden beds or around trees (let it age a few months first)</li>
                <li><strong>Fill the hole:</strong> Use chips to fill the depression, topped with soil and grass seed</li>
                <li><strong>Haul away:</strong> We can remove the chips for an additional fee</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Our Recommendation</h3>
                <p className="text-muted mb-4">
                  For 95% of homeowners in the Greenville and Upstate SC area, stump grinding is the best choice.
                  It&apos;s faster, more affordable, and leaves your yard in great shape. We only recommend complete
                  removal when there&apos;s a specific reason the roots need to go.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                READY TO REMOVE THAT STUMP?
              </h2>
              <p className="text-muted mb-6">
                Whether you need grinding or removal, Nelson Land & Stump can help. We serve Greenville,
                Anderson, Easley, Clemson, and all of Upstate South Carolina. Call us at{' '}
                <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> or{' '}
                <Link href="/#contact" className="text-accent hover:underline">request a free quote online</Link>.
                We&apos;ll assess your situation and recommend the best approach for your property.
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
              <Link href="/blog/how-much-does-stump-grinding-cost-greenville-sc" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">How Much Does Stump Grinding Cost?</h3>
                <p className="text-muted text-sm">Complete pricing guide for stump grinding in the Upstate.</p>
              </Link>
              <Link href="/services/stump-grinding" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Our Stump Grinding Services</h3>
                <p className="text-muted text-sm">Learn more about what we offer and our service areas.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
