import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nelsonstump.com';

  // Area pages with their slugs
  const areaPages = [
    'greenville-sc',
    'anderson-sc',
    'easley-sc',
    'clemson-sc',
    'seneca-sc',
    'pickens-sc',
    'simpsonville-sc',
    'greer-sc',
    'mauldin-sc',
    'travelers-rest-sc',
    'fountain-inn-sc',
    'pendleton-sc',
    'williamston-sc',
    'belton-sc',
    'honea-path-sc',
    'iva-sc',
    'liberty-sc',
    'central-sc',
    'norris-sc',
    'walhalla-sc',
    'westminster-sc',
    'salem-sc',
    'west-union-sc',
    'fair-play-sc',
  ];

  // Services for service+city combo pages
  const servicePages = ['stump-grinding', 'brush-hogging', 'land-clearing'];

  // Blog posts with their slugs and dates
  const blogPosts = [
    { slug: 'how-much-does-stump-grinding-cost-greenville-sc', date: '2025-01-15' },
    { slug: 'stump-grinding-vs-stump-removal', date: '2025-02-28' },
    { slug: '5-signs-you-need-land-clearing', date: '2025-03-12' },
    { slug: 'brush-hogging-cost-per-acre-sc', date: '2025-04-22' },
    { slug: 'do-you-need-permit-land-clearing-sc', date: '2025-06-08' },
    { slug: 'best-time-stump-grinding', date: '2025-07-30' },
    { slug: 'how-long-does-stump-grinding-take', date: '2025-09-05' },
    { slug: 'what-to-do-after-stump-grinding', date: '2025-10-21' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main service pages
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/stump-grinding`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/brush-hogging`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/land-clearing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pricing page
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Free estimate page
    {
      url: `${baseUrl}/free-estimate`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Area pages
    ...areaPages.map((slug) => ({
      url: `${baseUrl}/areas/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Service + City combo pages (72 pages)
    ...areaPages.flatMap((areaSlug) =>
      servicePages.map((serviceSlug) => ({
        url: `${baseUrl}/areas/${areaSlug}/${serviceSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    ),
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
