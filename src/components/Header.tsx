'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#work', label: 'Our Work' },
    { href: '/#about', label: 'About' },
    { href: '/#service-areas', label: 'Service Areas' },
    { href: '/blog', label: 'Blog' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
    }`}>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-primary-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving Upstate South Carolina
              </span>
              <span className="text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: 7AM - 6PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:tigernelson@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                tigernelson@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="leading-tight">
              <span className="text-white font-black text-2xl lg:text-3xl block tracking-tight" style={{ fontFamily: 'var(--font-oswald)' }}>
                NELSON
              </span>
              <span className="text-accent text-xs lg:text-sm font-bold tracking-widest">
                LAND & STUMP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-accent transition-colors text-sm font-semibold px-4 py-2 rounded-md hover:bg-white/5"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8647609203"
              className="flex items-center gap-2 px-4 py-2.5 text-white hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-accent flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="font-bold text-sm" style={{ fontFamily: 'var(--font-oswald)' }}>(864) 760-9203</span>
            </a>
            <Link
              href="/free-estimate"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-bold text-sm transition-all hover:shadow-lg hover:scale-105"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              FREE QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:8647609203"
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}>
          <nav className="border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-2 text-white hover:text-accent hover:bg-white/5 rounded-md transition-colors font-semibold"
                style={{ fontFamily: 'var(--font-oswald)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 px-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving Upstate South Carolina
              </div>
              <div className="flex items-center gap-3 px-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: 7AM - 6PM
              </div>
              <Link
                href="/free-estimate"
                className="block text-center bg-accent hover:bg-accent-dark text-white px-5 py-4 rounded-md font-bold transition-colors"
                style={{ fontFamily: 'var(--font-oswald)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
