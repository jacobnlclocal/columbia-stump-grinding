import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'What to Do After Stump Grinding: Filling the Hole & Lawn Repair | Nelson Land & Stump',
  description: 'Learn what to do after stump grinding - how to fill the hole, plant grass, and restore your lawn. Step-by-step guide for Upstate SC homeowners.',
  keywords: 'after stump grinding, fill stump hole, stump grinding cleanup, grass after stump removal, stump grinding lawn repair',
};

export default function AfterStumpGrindingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What to Do After Stump Grinding: Filling the Hole & Lawn Repair",
    "description": "Learn what to do after stump grinding - how to fill the hole, plant grass, and restore your lawn. Step-by-step guide for Upstate SC homeowners.",
    "datePublished": "2025-10-21",
    "dateModified": "2025-10-21",
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
      "@id": "https://nelsonstump.com/blog/what-to-do-after-stump-grinding"
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
                { label: 'What to Do After Stump Grinding' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">How-To</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              What to Do After Stump Grinding
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>October 21, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted leading-relaxed mb-8">
                The stump is gone—now what? After stump grinding, you&apos;re left with a pile of wood chips
                and a depression where the stump used to be. Here&apos;s how to fill the hole, restore your
                lawn, and make that spot look like there was never a tree there.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT YOU&apos;RE WORKING WITH
              </h2>
              <p className="text-muted mb-6">
                After grinding, you&apos;ll typically have:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>A hole:</strong> Usually 6-8 inches deep where the stump was</li>
                <li><strong>Wood chips:</strong> About 4-6 times the volume of the original stump</li>
                <li><strong>Disturbed soil:</strong> The area around the hole will be loosened</li>
                <li><strong>Underground roots:</strong> Still there, but will decompose over time</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                OPTION 1: THE SIMPLE APPROACH
              </h2>
              <p className="text-muted mb-4">
                For most homeowners who just want the area to blend back into their lawn, here&apos;s the
                straightforward method:
              </p>
              <ol className="list-decimal pl-6 text-muted space-y-3 mb-6">
                <li>
                  <strong>Rake chips into the hole:</strong> Use the wood chips to partially fill the depression.
                  Don&apos;t fill it completely to the top—leave room for settling.
                </li>
                <li>
                  <strong>Add topsoil:</strong> Cover the chips with 2-4 inches of quality topsoil. The chips
                  will decompose and settle over time, so piling slightly high is fine.
                </li>
                <li>
                  <strong>Compact lightly:</strong> Tamp down the soil gently to reduce settling. Don&apos;t
                  pack it too hard or water won&apos;t penetrate.
                </li>
                <li>
                  <strong>Seed or sod:</strong> Plant grass seed or lay sod over the topsoil.
                </li>
                <li>
                  <strong>Water regularly:</strong> Keep the new grass watered until established.
                </li>
              </ol>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                OPTION 2: FOR IMPATIENT GARDENERS
              </h2>
              <p className="text-muted mb-6">
                Want to plant something right away? Here&apos;s a more thorough approach:
              </p>
              <ol className="list-decimal pl-6 text-muted space-y-3 mb-6">
                <li>
                  <strong>Remove most chips:</strong> Shovel out the wood chips and use them as mulch elsewhere
                  in your yard. Fresh chips can temporarily rob nitrogen from soil as they decompose.
                </li>
                <li>
                  <strong>Fill with topsoil:</strong> Use good quality topsoil mixed with compost to fill the
                  hole completely.
                </li>
                <li>
                  <strong>Add nitrogen:</strong> Apply a nitrogen-rich fertilizer to counteract any nitrogen
                  depletion from remaining wood.
                </li>
                <li>
                  <strong>Plant immediately:</strong> This method is better if you want to plant flowers, shrubs,
                  or vegetables in the spot.
                </li>
              </ol>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                THE SETTLING ISSUE
              </h2>
              <p className="text-muted mb-6">
                Here&apos;s something important to know: the area <strong>will</strong> settle over time. As the
                wood chips and remaining roots decompose, the ground will sink. This is normal and can continue
                for 1-3 years.
              </p>
              <p className="text-muted mb-6">
                <strong>Plan for it:</strong> Mound the soil slightly above the surrounding lawn level initially.
                As it settles, it will level out. If it settles too much, just add more topsoil and reseed.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT ABOUT THE REMAINING ROOTS?
              </h2>
              <p className="text-muted mb-6">
                With stump grinding, roots are left in the ground. They will naturally decompose over 5-10 years.
                During this time, you might notice:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Mushrooms:</strong> Totally normal—they&apos;re breaking down the wood</li>
                <li><strong>Soft spots:</strong> As roots decay, the ground above them may soften</li>
                <li><strong>Slight settling:</strong> Root channels will slowly collapse</li>
              </ul>
              <p className="text-muted mb-6">
                None of this is harmful to your lawn. It&apos;s just nature doing its job.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BEST TIME TO SEED AFTER GRINDING
              </h2>
              <p className="text-muted mb-4">
                In Upstate South Carolina, timing matters for grass seed:
              </p>
              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Fall (September-October):</strong> Best time for fescue and cool-season grasses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Spring (March-April):</strong> Second best for fescue; good for Bermuda and warm-season grasses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Summer:</strong> Okay for Bermuda; difficult for fescue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted"><strong>Winter:</strong> Wait until spring for warm-season; can prep area now</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT NOT TO DO
              </h2>
              <p className="text-muted mb-4">
                A few common mistakes to avoid:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Don&apos;t leave the hole open:</strong> It&apos;s a tripping hazard and collects water</li>
                <li><strong>Don&apos;t fill with just chips:</strong> Pure wood chips can create a nitrogen deficit that stunts grass growth</li>
                <li><strong>Don&apos;t plant a new tree in the same spot right away:</strong> The old root system can harbor diseases and compete with new roots</li>
                <li><strong>Don&apos;t expect perfection immediately:</strong> It takes a season or two for the area to fully blend in</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                USING THE WOOD CHIPS
              </h2>
              <p className="text-muted mb-6">
                Got extra chips? Here are some good uses:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Mulch for trees and shrubs:</strong> Great around established plants (but let them age a few months first)</li>
                <li><strong>Garden paths:</strong> Natural, low-cost pathway material</li>
                <li><strong>Compost addition:</strong> Mix with green materials for compost</li>
                <li><strong>Erosion control:</strong> Spread on slopes to reduce runoff</li>
              </ul>
              <p className="text-muted mb-6">
                We can also haul away the chips for an additional fee if you don&apos;t want them.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Need Stump Grinding?</h3>
                <p className="text-muted mb-4">
                  Nelson Land & Stump provides professional stump grinding throughout Greenville, Anderson,
                  and Upstate SC. We include basic cleanup and can advise on restoration options for your
                  specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm text-center"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="tel:8647609203"
                    className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm text-center"
                  >
                    Call (864) 760-9203
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BOTTOM LINE
              </h2>
              <p className="text-muted">
                Restoring the area after stump grinding is straightforward: fill with a mix of chips and topsoil,
                seed with grass, and be patient as things settle. Within a season or two, you won&apos;t even
                remember there was ever a stump there. If you have questions about your specific situation,
                give us a call—we&apos;re happy to help.
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
              <Link href="/blog/how-long-does-stump-grinding-take" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">How Long Does Stump Grinding Take?</h3>
                <p className="text-muted text-sm">Time estimates for different stump sizes and conditions.</p>
              </Link>
              <Link href="/blog/stump-grinding-vs-stump-removal" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Stump Grinding vs Stump Removal</h3>
                <p className="text-muted text-sm">Learn the differences between these two methods.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
