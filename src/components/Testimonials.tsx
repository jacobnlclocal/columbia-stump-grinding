const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nelsonstump.com/#business",
  name: "Nelson Land & Stump Services",
  telephone: "+1-864-760-9203",
  address: {
    "@type": "PostalAddress",
    streetAddress: "230 Lewis Road",
    addressLocality: "Williamston",
    addressRegion: "SC",
    postalCode: "29697",
    addressCountry: "US",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "David M." },
      reviewBody: "Had 4 stumps in the backyard that I'd been mowing around for years. Nelson knocked them out in a couple hours. Fair price, cleaned up after themselves.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Carol T." },
      reviewBody: "We bought 5 acres that hadn't been touched in a decade. They cleared the whole thing in two days. Now we can actually walk our property.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Mike R." },
      reviewBody: "Used them for brush hogging along my fence line. Professional, showed up when they said they would. Will call again next spring.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Jennifer S." },
      reviewBody: "Great experience from start to finish. They gave me a fair quote over the phone and the final price was exactly what they quoted. Stump was gone in under an hour.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Robert H." },
      reviewBody: "Hired them to clear brush around our Lake Keowee property. They did an excellent job and were very careful around our landscaping. Highly recommend.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'David M.',
      location: 'Easley, SC',
      text: 'Had 4 stumps in the backyard that I\'d been mowing around for years. Nelson knocked them out in a couple hours. Fair price, cleaned up after themselves.',
      service: 'Stump Grinding',
    },
    {
      name: 'Carol T.',
      location: 'Anderson, SC',
      text: 'We bought 5 acres that hadn\'t been touched in a decade. They cleared the whole thing in two days. Now we can actually walk our property.',
      service: 'Land Clearing',
    },
    {
      name: 'Mike R.',
      location: 'Clemson, SC',
      text: 'Used them for brush hogging along my fence line. Professional, showed up when they said they would. Will call again next spring.',
      service: 'Brush Hogging',
    },
    {
      name: 'Jennifer S.',
      location: 'Greenville, SC',
      text: 'Great experience from start to finish. They gave me a fair quote over the phone and the final price was exactly what they quoted. Stump was gone in under an hour.',
      service: 'Stump Grinding',
    },
    {
      name: 'Robert H.',
      location: 'Seneca, SC',
      text: 'Hired them to clear brush around our Lake Keowee property. They did an excellent job and were very careful around our landscaping. Highly recommend.',
      service: 'Brush Hogging',
    },
    {
      name: 'Lisa W.',
      location: 'Simpsonville, SC',
      text: 'Had a massive oak stump that other companies said was too big. Nelson Land & Stump handled it no problem. Very impressed with their equipment.',
      service: 'Stump Grinding',
    },
    {
      name: 'Thomas K.',
      location: 'Pickens, SC',
      text: 'Cleared 3 acres for our new build site. Showed up on time, worked hard, and left the lot ready for the builder. Fair price for the amount of work.',
      service: 'Land Clearing',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <section id="about" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              UPSTATE SC&apos;S TRUSTED LAND CLEARING PROS
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Nelson Land & Stump is a family operation based in the Upstate, serving Greenville, Anderson, Pickens, and Oconee counties for over 5 years.
              </p>
              <p>
                No big crews, no salespeople — when you call, you talk to us. We show up on time, give honest quotes, and don&apos;t leave until the job&apos;s done right.
              </p>
              <p>
                Whether you need a single stump ground down in Easley or 10 acres cleared in Seneca, we&apos;ve got the equipment and experience to get it done.
              </p>
            </div>

            <div className="flex gap-12 mt-10">
              <div>
                <p className="text-5xl font-black text-accent">5+</p>
                <p className="text-gray-400 uppercase text-sm tracking-wide">Years in Upstate SC</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent">500+</p>
                <p className="text-gray-400 uppercase text-sm tracking-wide">Jobs Completed</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              WHAT OUR CUSTOMERS SAY
            </h3>
            <div className="grid gap-4">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted text-sm mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-primary text-sm">
                      {testimonial.name} <span className="font-normal text-muted">— {testimonial.location}</span>
                    </p>
                    <span className="text-xs text-accent">{testimonial.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
