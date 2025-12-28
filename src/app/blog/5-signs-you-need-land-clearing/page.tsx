import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '5 Signs You Need Professional Land Clearing | Nelson Land & Stump',
  description: 'Not sure if you need land clearing services? Here are 5 clear signs it\'s time to call a professional in Greenville, Anderson, Easley, or Upstate SC.',
  keywords: 'land clearing signs, when to clear land, overgrown property, land clearing Greenville SC, brush clearing Upstate SC',
};

export default function LandClearingSignsPost() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: '5 Signs You Need Land Clearing' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Tips</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              5 Signs You Need Professional Land Clearing
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>December 25, 2024</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted leading-relaxed mb-8">
                Overgrown land can sneak up on you. What starts as a few weeds becomes waist-high brush,
                then small trees, and before you know it, you&apos;ve lost access to parts of your property.
                Here are five signs that it&apos;s time to call in professional land clearing services.
              </p>

              <div className="bg-primary/5 rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                  1. YOU CAN&apos;T WALK THROUGH YOUR PROPERTY
                </h2>
                <p className="text-muted mb-4">
                  The most obvious sign is when you simply can&apos;t access parts of your land anymore. Dense
                  brush, thorny vines, and saplings create an impenetrable barrier that makes it impossible
                  to walk, mow, or maintain the area.
                </p>
                <p className="text-muted">
                  <strong>Why it matters:</strong> Inaccessible land can&apos;t be inspected for problems like
                  erosion, pest infestations, or fallen trees. It also reduces your usable property and can
                  affect your home&apos;s value.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                  2. YOU&apos;RE SEEING PESTS AND WILDLIFE PROBLEMS
                </h2>
                <p className="text-muted mb-4">
                  Overgrown areas become havens for unwanted wildlife. Snakes, rodents, ticks, and mosquitoes
                  thrive in dense vegetation. If you&apos;re noticing more pests near your home, the overgrown
                  areas on your property might be the source.
                </p>
                <p className="text-muted">
                  <strong>Common issues in Upstate SC:</strong> Copperheads and other snakes love overgrown
                  brush piles. Ticks and chiggers breed in tall grass and weeds. Clearing creates a buffer
                  zone that keeps these pests away from your living areas.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                  3. YOUR FENCES AND STRUCTURES ARE BEING OVERTAKEN
                </h2>
                <p className="text-muted mb-4">
                  Trees and brush growing along fence lines will eventually damage or destroy your fencing.
                  Vines climbing buildings can cause structural damage over time. If vegetation is pressing
                  against structures, it&apos;s time to clear it back.
                </p>
                <p className="text-muted">
                  <strong>What to watch for:</strong> Fence posts being pushed over by roots, vines pulling
                  at gutters or siding, trees rubbing against roofs during wind, and vegetation blocking
                  access to outbuildings.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                  4. YOU&apos;RE PLANNING TO BUILD OR IMPROVE
                </h2>
                <p className="text-muted mb-4">
                  Whether you&apos;re building a new home, adding an outbuilding, putting in a garden, or
                  creating a recreation area, you&apos;ll need to clear the land first. Professional clearing
                  prepares your site for whatever comes next.
                </p>
                <p className="text-muted">
                  <strong>Common projects requiring land clearing:</strong>
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mt-2">
                  <li>New home construction or additions</li>
                  <li>Driveways and parking areas</li>
                  <li>Septic system installation</li>
                  <li>Gardens and orchards</li>
                  <li>Ponds and water features</li>
                  <li>Fire pits and outdoor living spaces</li>
                  <li>Sports courts or play areas</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                  5. YOUR PROPERTY VALUE IS SUFFERING
                </h2>
                <p className="text-muted mb-4">
                  Overgrown land looks neglected and can significantly impact your property&apos;s curb appeal
                  and value. If you&apos;re thinking about selling—or just want to take pride in your property—
                  clearing the brush makes a dramatic difference.
                </p>
                <p className="text-muted">
                  <strong>The difference clearing makes:</strong> Properties with maintained, usable land
                  command higher prices. Buyers want to see what they&apos;re getting, and cleared land shows
                  the full potential of your property.
                </p>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHY HIRE A PROFESSIONAL?
              </h2>
              <p className="text-muted mb-4">
                You might be tempted to tackle land clearing yourself, but there are good reasons to hire
                professionals:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Safety:</strong> Hidden hazards like holes, snakes, and unstable trees are dangerous</li>
                <li><strong>Equipment:</strong> Professional brush hogs and forestry equipment work 10x faster than hand tools</li>
                <li><strong>Efficiency:</strong> What might take you weeks of weekends takes us a day or two</li>
                <li><strong>Disposal:</strong> We handle all the debris, leaving you with usable land</li>
                <li><strong>Knowledge:</strong> We know which plants to remove and which to keep</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                OUR LAND CLEARING SERVICES
              </h2>
              <p className="text-muted mb-4">
                At Nelson Land & Stump, we offer several services to reclaim your property:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Brush Hogging:</strong> For overgrown fields, pastures, and large areas</li>
                <li><strong>Land Clearing:</strong> Complete site preparation including tree and stump removal</li>
                <li><strong>Stump Grinding:</strong> Remove stumps to restore smooth, usable ground</li>
              </ul>
              <p className="text-muted mb-6">
                We serve Greenville, Anderson, Easley, Clemson, and all of Upstate South Carolina. From
                small residential lots to multi-acre properties, we have the equipment to handle it.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Ready to Reclaim Your Land?</h3>
                <p className="text-muted mb-4">
                  If any of these signs sound familiar, give us a call. We&apos;ll come out, assess your property,
                  and give you a free, no-obligation quote. Most projects can be scheduled within a week or two.
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
              <Link href="/services/land-clearing" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Our Land Clearing Services</h3>
                <p className="text-muted text-sm">Learn more about our brush hogging and land clearing options.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
