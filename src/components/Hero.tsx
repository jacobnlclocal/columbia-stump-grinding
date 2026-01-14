import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Next.js Image for better performance */}
      <Image
        src="/hero.jpg"
        alt="Professional stump grinding equipment in Upstate South Carolina - Nelson Land & Stump Services"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={75}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left">
        <h1
          className="text-white mb-8"
          style={{
            fontFamily: 'var(--font-oswald)',
            textShadow: '2px 4px 6px rgba(0,0,0,0.3)'
          }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
            STUMP GRINDING
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
            & LAND CLEARING
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
            UPSTATE SC
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-4 tracking-widest uppercase font-medium">
          Stump Grinding, Brush Hogging & Land Clearing in Upstate South Carolina
        </p>
        <p className="text-gray-400 mb-10 max-w-xl">
          Professional tree service for stump grinding and removal, land clearing, and brush hogging.
          Improve your curb appeal and property value. Call today for a free estimate!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-md font-bold text-lg uppercase tracking-wide transition-colors shadow-lg text-center"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:8647609203"
            className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-4 rounded-md font-bold text-lg uppercase tracking-wide transition-colors text-center"
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
