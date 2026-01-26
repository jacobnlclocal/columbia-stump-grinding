import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stump Grinding & Land Clearing Blog | Nelson Stump',
  description: 'Expert tips and guides on stump grinding, brush hogging, and land clearing in Upstate South Carolina. Learn about costs, methods, and when to hire a professional.',
  keywords: 'stump grinding tips, land clearing guide, brush hogging information, tree stump removal advice, Upstate SC landscaping',
};

const posts = [
  {
    slug: 'fastest-way-remove-tree-stump',
    title: 'What Is the Fastest Way to Remove a Tree Stump?',
    excerpt: 'Compare fast tree stump removal methods including professional grinding, DIY options, and chemical removal. Find the quickest solution.',
    date: 'January 26, 2026',
    category: 'Guides',
    readTime: '6 min read',
  },
  {
    slug: 'how-deep-does-stump-grinder-go',
    title: 'How Deep Does a Stump Grinder Go?',
    excerpt: 'Learn about standard grinding depths (6-12 inches), when you need deeper grinding, and what happens to roots left behind.',
    date: 'January 26, 2026',
    category: 'FAQ',
    readTime: '5 min read',
  },
  {
    slug: 'diy-vs-professional-stump-grinding',
    title: 'DIY vs Professional Stump Grinding: Which Should You Choose?',
    excerpt: 'Should you rent a stump grinder or hire a pro? Compare costs, safety, and results to make the right choice.',
    date: 'January 26, 2026',
    category: 'Guides',
    readTime: '7 min read',
  },
  {
    slug: 'what-to-do-after-stump-grinding',
    title: 'What to Do After Stump Grinding: Filling the Hole & Lawn Repair',
    excerpt: 'Learn how to fill the hole, plant grass, and restore your lawn after stump grinding. Step-by-step guide.',
    date: 'October 21, 2025',
    category: 'How-To',
    readTime: '5 min read',
  },
  {
    slug: 'how-long-does-stump-grinding-take',
    title: 'How Long Does Stump Grinding Take?',
    excerpt: 'Time estimates for stump grinding based on stump size, number of stumps, and conditions.',
    date: 'September 5, 2025',
    category: 'FAQ',
    readTime: '4 min read',
  },
  {
    slug: 'best-time-stump-grinding',
    title: 'Best Time of Year for Stump Grinding in South Carolina',
    excerpt: 'When is the best time to grind stumps? Learn about seasonal considerations for Greenville and Upstate SC.',
    date: 'July 30, 2025',
    category: 'Tips',
    readTime: '4 min read',
  },
  {
    slug: 'do-you-need-permit-land-clearing-sc',
    title: 'Do You Need a Permit for Land Clearing in South Carolina?',
    excerpt: 'Learn when you need permits for land clearing, tree removal, and brush hogging in SC. Regulations explained.',
    date: 'June 8, 2025',
    category: 'Regulations',
    readTime: '5 min read',
  },
  {
    slug: 'brush-hogging-cost-per-acre-sc',
    title: 'Brush Hogging Cost Per Acre in South Carolina',
    excerpt: 'How much does brush hogging cost per acre? Complete 2025 pricing guide for Greenville, Anderson, and Upstate SC.',
    date: 'April 22, 2025',
    category: 'Pricing',
    readTime: '5 min read',
  },
  {
    slug: '5-signs-you-need-land-clearing',
    title: '5 Signs You Need Professional Land Clearing',
    excerpt: 'Not sure if you need land clearing services? Here are five clear signs that it\'s time to call in the professionals.',
    date: 'March 12, 2025',
    category: 'Tips',
    readTime: '4 min read',
  },
  {
    slug: 'stump-grinding-vs-stump-removal',
    title: 'Stump Grinding vs Stump Removal: Which is Right for You?',
    excerpt: 'Learn the key differences between stump grinding and complete stump removal, and find out which method is best for your situation.',
    date: 'February 28, 2025',
    category: 'Guides',
    readTime: '4 min read',
  },
  {
    slug: 'how-much-does-stump-grinding-cost-greenville-sc',
    title: 'How Much Does Stump Grinding Cost in Greenville SC?',
    excerpt: 'A complete breakdown of stump grinding prices in the Upstate, what affects the cost, and how to get the best value for your money.',
    date: 'January 15, 2025',
    category: 'Pricing',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[104px]">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              LAND CLEARING TIPS & GUIDES
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-4">
              Expert advice on stump grinding, brush hogging, and land clearing from the pros at Nelson Land & Stump.
            </p>
            <p className="text-gray-400 max-w-3xl">
              Our blog provides helpful information for property owners throughout Upstate South Carolina. Whether you are wondering about stump grinding costs, trying to decide between stump grinding and complete stump removal, or need to know if you require a permit for land clearing in South Carolina, we have articles that cover the topics that matter most to our customers. We share our expertise from over five years of experience in the land clearing industry to help you make informed decisions about your property.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-muted-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-primary/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-accent uppercase">{post.category}</span>
                      <span className="text-xs text-muted">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-accent hover:text-accent-dark font-medium text-sm inline-flex items-center"
                        aria-label={`Read article: ${post.title}`}
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted-light">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
              HAVE QUESTIONS ABOUT YOUR PROJECT?
            </h2>
            <p className="text-muted text-lg mb-4">
              We&apos;re happy to answer any questions about stump grinding, brush hogging, or land clearing.
              Contact us for a free consultation.
            </p>
            <p className="text-muted text-base mb-8 max-w-2xl mx-auto">
              Nelson Land and Stump Services provides free on-site estimates throughout Greenville, Spartanburg, Anderson, Pickens, and Oconee Counties. Our team will assess your property, discuss your goals, and provide an accurate quote with no obligation. We can typically schedule estimates within one to two business days and are available Monday through Saturday from 7 AM to 6 PM. Call us today or fill out our online form to get started on your project.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
