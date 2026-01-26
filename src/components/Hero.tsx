import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-[#0a1628]">
      {/* Subtle geometric accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left pt-32 lg:pt-40 pb-20">
        <h1
          className="text-white mb-6"
          style={{ fontFamily: 'var(--font-oswald)' }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
            STUMP GRINDING
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
            & LAND CLEARING
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-accent">
            UPSTATE SC
          </span>
        </h1>

        <p className="text-gray-300 mb-8 max-w-lg text-xl md:text-2xl">
          Professional stump grinding, brush hogging, and land clearing services
          in Greenville, Anderson, Pickens & Oconee Counties.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/free-estimate"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md font-bold text-lg uppercase tracking-wide transition-colors shadow-lg text-center"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:8647609203"
            className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold text-lg uppercase tracking-wide transition-colors text-center"
          >
            (864) 760-9203
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
