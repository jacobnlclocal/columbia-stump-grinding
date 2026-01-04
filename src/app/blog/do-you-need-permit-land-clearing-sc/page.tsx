import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Land Clearing Permits in SC | Nelson Stump',
  description: 'Learn when you need permits for land clearing, tree removal, and brush hogging in SC. Greenville, Anderson, and Upstate SC regulations explained.',
  keywords: 'land clearing permit SC, tree removal permit South Carolina, land clearing regulations Greenville, do I need permit tree removal SC',
};

export default function LandClearingPermitPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Do You Need a Permit for Land Clearing in South Carolina?",
    "description": "Learn when you need permits for land clearing, tree removal, and brush hogging in SC. Greenville, Anderson, and Upstate SC regulations explained.",
    "datePublished": "2025-05-27",
    "dateModified": "2025-05-27",
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
      "@id": "https://nelsonstump.com/blog/do-you-need-permit-land-clearing-sc"
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
                { label: 'Land Clearing Permits in SC' },
              ]}
            />
            <span className="text-accent text-sm font-bold uppercase">Regulations</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              Do You Need a Permit for Land Clearing in South Carolina?
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>May 27, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/blog-permit.jpg"
            alt="Land clearing permit documents - SC regulations guide"
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
                Planning to clear some land on your property? One of the most common questions we get is whether
                permits are required. The short answer is: it depends. Here&apos;s what you need to know about
                land clearing regulations in Greenville, Anderson, and Upstate South Carolina.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Important Disclaimer</h3>
                <p className="text-muted">
                  Regulations change and vary by municipality. This guide provides general information, but you
                  should always verify current requirements with your local planning or zoning office before
                  starting any land clearing project.
                </p>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN YOU TYPICALLY DON&apos;T NEED A PERMIT
              </h2>
              <p className="text-muted mb-4">
                In most of Upstate South Carolina, you generally don&apos;t need a permit for:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Brush hogging:</strong> Mowing overgrown grass, weeds, and small brush</li>
                <li><strong>Stump grinding:</strong> Removing stumps from previously cut trees</li>
                <li><strong>Minor clearing:</strong> Removing a few trees for landscaping purposes</li>
                <li><strong>Agricultural maintenance:</strong> Clearing fence lines and maintaining pastures</li>
                <li><strong>Dead or hazardous trees:</strong> Removing trees that pose safety risks</li>
              </ul>
              <p className="text-muted mb-6">
                These activities are considered normal property maintenance and typically don&apos;t trigger
                permit requirements in unincorporated areas of Greenville, Anderson, Pickens, or Oconee counties.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHEN YOU LIKELY NEED A PERMIT
              </h2>
              <p className="text-muted mb-4">
                Permits are typically required for:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Grading and earth moving:</strong> Any significant changes to land elevation</li>
                <li><strong>Development-related clearing:</strong> Clearing for new construction, subdivisions, or commercial projects</li>
                <li><strong>Clearing near waterways:</strong> Work within buffer zones of streams, rivers, or wetlands</li>
                <li><strong>Large-scale clearing:</strong> Removing all vegetation from significant acreage</li>
                <li><strong>Protected areas:</strong> Properties in floodplains, wetlands, or conservation easements</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                CITY VS. COUNTY REGULATIONS
              </h2>
              <p className="text-muted mb-6">
                Regulations can differ significantly depending on whether you&apos;re in a city or unincorporated county area:
              </p>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary text-lg mb-4">City of Greenville</h3>
                <p className="text-muted mb-4">
                  The City of Greenville has a tree ordinance that protects certain trees. Permits may be required
                  for removing trees over a certain size (typically 24&quot; diameter or larger). Heritage trees have
                  additional protections.
                </p>
                <p className="text-muted text-sm">
                  Contact: Greenville City Planning at (864) 467-4476
                </p>
              </div>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary text-lg mb-4">Greenville County (Unincorporated)</h3>
                <p className="text-muted mb-4">
                  Generally more permissive than city limits. No tree removal permits for most residential
                  properties, but land disturbance permits may be needed for grading over certain thresholds.
                </p>
                <p className="text-muted text-sm">
                  Contact: Greenville County Land Development at (864) 467-7270
                </p>
              </div>

              <div className="bg-muted-light rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary text-lg mb-4">Anderson, Pickens & Oconee Counties</h3>
                <p className="text-muted mb-4">
                  These counties generally have fewer restrictions on land clearing for residential properties.
                  However, stormwater and erosion control requirements may apply for larger projects.
                </p>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                ENVIRONMENTAL CONSIDERATIONS
              </h2>
              <p className="text-muted mb-4">
                Regardless of local permit requirements, some state and federal regulations may apply:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                <li><strong>Wetlands:</strong> The Army Corps of Engineers regulates filling or disturbing wetlands</li>
                <li><strong>Streams and rivers:</strong> Buffer zones often require special permits for clearing</li>
                <li><strong>Erosion control:</strong> Projects disturbing over 1 acre need an NPDES stormwater permit</li>
                <li><strong>Endangered species:</strong> Areas with protected species may have restrictions</li>
              </ul>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                HOA AND DEED RESTRICTIONS
              </h2>
              <p className="text-muted mb-6">
                Don&apos;t forget to check your HOA rules and deed restrictions. Many subdivisions in the
                Greenville and Simpsonville areas have strict rules about tree removal and land clearing,
                even when no government permits are required. You may need HOA approval before removing
                trees or clearing vegetation.
              </p>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                STEPS TO TAKE BEFORE CLEARING
              </h2>
              <ol className="list-decimal pl-6 text-muted space-y-2 mb-6">
                <li><strong>Determine your jurisdiction:</strong> Are you in city limits or unincorporated county?</li>
                <li><strong>Check with local planning:</strong> A quick call can clarify permit requirements</li>
                <li><strong>Review HOA rules:</strong> If applicable, get written approval</li>
                <li><strong>Consider your neighbors:</strong> Notify adjacent property owners as a courtesy</li>
                <li><strong>Document the area:</strong> Take photos before and after for your records</li>
              </ol>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT ABOUT BURNING?
              </h2>
              <p className="text-muted mb-6">
                If you&apos;re planning to burn brush after clearing, that&apos;s a separate issue. In South Carolina,
                you need a burn permit from the SC Forestry Commission for most outdoor burning. These are
                usually free and can be obtained online or by calling your local forestry office.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <h3 className="font-bold text-primary text-lg mb-2">Need Help With Your Land Clearing Project?</h3>
                <p className="text-muted mb-4">
                  Nelson Land & Stump handles land clearing projects throughout Upstate SC. We can advise on
                  typical permit requirements based on our experience in your area. Give us a call to discuss
                  your project.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-colors text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>

              <h2 className="text-2xl font-black text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
                BOTTOM LINE
              </h2>
              <p className="text-muted mb-6">
                For most residential brush hogging, stump grinding, and minor land clearing in Upstate SC,
                you probably don&apos;t need a permit. But for larger projects, development-related clearing,
                or properties near waterways, always check with your local planning office first. The small
                investment of time can save you from fines and headaches later.
              </p>
              <p className="text-muted">
                Have questions about a specific project? Call us at{' '}
                <a href="tel:8647609203" className="text-accent hover:underline">(864) 760-9203</a>. We&apos;re
                happy to share what we know about regulations in your area.
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
              <Link href="/blog/brush-hogging-cost-per-acre-sc" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Brush Hogging Cost Per Acre</h3>
                <p className="text-muted text-sm">Complete pricing guide for brush hogging in Upstate SC.</p>
              </Link>
              <Link href="/services/land-clearing" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">Our Land Clearing Services</h3>
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
