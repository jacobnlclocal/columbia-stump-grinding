import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How Long Does Stump Grinding Take? Time Estimates | Nelson Land & Stump',
  description: 'Find out how long stump grinding takes based on stump size, number of stumps, and conditions. Time estimates for Greenville and Upstate SC projects.',
  keywords: 'how long stump grinding take, stump grinding time, stump removal duration, stump grinding estimate, fast stump grinding SC',
};

export default function HowLongStumpGrindingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Long Does Stump Grinding Take?",
    "description": "Find out how long stump grinding takes based on stump size, number of stumps, and conditions. Time estimates for Greenville and Upstate SC projects.",
    "datePublished": "2025-09-05",
    "dateModified": "2025-09-05",
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
      "@id": "https://nelsonstump.com/blog/how-long-does-stump-grinding-take"
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
                { label: 'How Long Does Stump Grinding Take' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">FAQ</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              How Long Does Stump Grinding Take?
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>September 5, 2025</span>
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
                Planning to have stumps ground and wondering how long it will take? Most residential stump
                grinding jobs are surprisingly quick. Here&apos;s a breakdown of what to expect based on your
                specific situation.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                QUICK ANSWER: MOST STUMPS TAKE 15-60 MINUTES
              </h2>
              <p className="text-muted mb-6">
                For a typical residential stump (12-24 inches in diameter), expect about 15-30 minutes of
                grinding time. The entire visit, including setup and cleanup, usually takes 30-60 minutes
                for a single stump.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                TIME ESTIMATES BY STUMP SIZE
              </h2>
              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Small stump (under 12&quot; diameter)</span>
                    <span className="font-bold text-primary">10-20 minutes</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Medium stump (12-24&quot; diameter)</span>
                    <span className="font-bold text-primary">15-30 minutes</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">Large stump (24-36&quot; diameter)</span>
                    <span className="font-bold text-primary">30-60 minutes</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted">Extra large stump (36&quot;+ diameter)</span>
                    <span className="font-bold text-primary">1-2+ hours</span>
                  </li>
                </ul>
              </div>
              <p className="text-muted mb-6">
                These times are for grinding only and assume good access. Add 10-15 minutes for equipment
                setup and basic cleanup.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT AFFECTS GRINDING TIME?
              </h2>
              <p className="text-muted mb-4">
                Several factors can make a job faster or slower:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Stump diameter:</strong> Bigger stumps obviously take longer</li>
                <li><strong>Wood hardness:</strong> Oak and other hardwoods take longer than pine or poplar</li>
                <li><strong>Root system:</strong> Extensive surface roots add grinding time</li>
                <li><strong>Depth required:</strong> Grinding deeper than standard 6-8&quot; takes more passes</li>
                <li><strong>Access:</strong> Tight spaces slow down maneuvering</li>
                <li><strong>Rocks and debris:</strong> Hidden rocks can slow work and require extra care</li>
                <li><strong>Equipment size:</strong> Larger professional grinders work faster than smaller units</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                MULTIPLE STUMPS: ECONOMY OF SCALE
              </h2>
              <p className="text-muted mb-6">
                If you have multiple stumps, the average time per stump goes down. Setup and travel only
                happen once, so you get more grinding for your time. Here are some examples:
              </p>
              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">3 medium stumps</span>
                    <span className="font-bold text-primary">45-75 minutes total</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-muted">5 medium stumps</span>
                    <span className="font-bold text-primary">1-1.5 hours total</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted">10+ stumps</span>
                    <span className="font-bold text-primary">Half day or more</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                DIY VS. PROFESSIONAL TIME
              </h2>
              <p className="text-muted mb-6">
                Thinking about renting a grinder and doing it yourself? Here&apos;s how the time compares:
              </p>
              <div className="bg-muted-light rounded-lg p-6 mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 pr-4 font-bold text-primary">Task</th>
                      <th className="text-left py-3 px-4 font-bold text-primary">Professional</th>
                      <th className="text-left py-3 pl-4 font-bold text-primary">DIY</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Picking up equipment</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 pl-4">30-60 min</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Learning to operate</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 pl-4">15-30 min</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Grinding (24&quot; stump)</td>
                      <td className="py-3 px-4">20-30 min</td>
                      <td className="py-3 pl-4">1-2 hours</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Cleanup</td>
                      <td className="py-3 px-4">10-15 min</td>
                      <td className="py-3 pl-4">30-60 min</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Returning equipment</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 pl-4">30-60 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-6">
                Rental grinders are smaller and slower than professional equipment. What takes us 30 minutes
                might take a DIYer 2-3 hours, plus the rental and return time.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT ABOUT CLEANUP?
              </h2>
              <p className="text-muted mb-6">
                Basic cleanup (raking the chips into the hole and tidying the area) is usually included and
                adds 10-15 minutes. If you want all chips hauled away, that adds more time and typically costs
                extra.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT CAN YOU DO WHILE WE WORK?
              </h2>
              <p className="text-muted mb-6">
                For most jobs, you don&apos;t even need to be home. As long as we have access to the stump and
                know what you need, we can handle everything. You might come home from lunch to find a stump
                that&apos;s been there for years is completely gone.
              </p>
              <p className="text-muted mb-6">
                If you&apos;re planning to be around, the work is fairly loud, so you might want to stay inside
                or take a walk during the grinding.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Get a Time Estimate for Your Project</h3>
                <p className="text-muted mb-4">
                  Every stump is different. Give us a call or send a photo, and we can give you a realistic
                  time estimate for your specific situation. Most residential jobs in Greenville and Upstate
                  SC are done within an hour.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm"
                >
                  Request a Free Quote
                </Link>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BOTTOM LINE
              </h2>
              <p className="text-muted">
                Most homeowners are surprised how quickly stump grinding goes. That eyesore you&apos;ve been
                looking at for months or years can be gone in under an hour. Call us at{' '}
                <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a> to
                schedule your stump grinding and reclaim your yard.
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
