import type { Metadata, Viewport } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nelsonstump.com'),
  title: {
    default: "Stump Grinding & Land Clearing Upstate SC | Nelson Stump",
    template: "%s | Nelson Stump",
  },
  description: "Professional stump grinding, brush hogging, and land clearing services in Upstate South Carolina. Serving Greenville, Anderson, Pickens & Oconee Counties. Free estimates, fully licensed & insured. Call (864) 760-9203.",
  keywords: "stump grinding Greenville SC, land clearing Upstate SC, brush hogging Anderson SC, stump removal near me, brush clearing Easley, land clearing Clemson SC, stump grinding Pickens County, tree stump removal South Carolina",
  authors: [{ name: "Nelson Land & Stump Services" }],
  robots: "index, follow",
  openGraph: {
    title: "Stump Grinding & Land Clearing | Nelson Land & Stump Services",
    description: "Professional stump grinding, brush hogging, and land clearing in Upstate SC. Serving Greenville, Anderson, Pickens & Oconee Counties. Free estimates!",
    type: "website",
    locale: "en_US",
    siteName: "Nelson Land & Stump Services",
    url: "https://www.nelsonstump.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nelson Land & Stump - Professional Stump Grinding & Land Clearing in Upstate SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stump Grinding & Land Clearing in Greenville SC",
    description: "Professional stump grinding and land clearing services in Upstate South Carolina. Free estimates!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "US-SC",
    "geo.placename": "Greenville, South Carolina",
  },
};

// LocalBusiness Schema Markup
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nelsonstump.com/#business",
  name: "Nelson Land & Stump Services",
  description: "Professional stump grinding, brush hogging, and land clearing services serving Upstate South Carolina. Family-owned business with 5+ years experience.",
  url: "https://www.nelsonstump.com",
  telephone: "+1-864-760-9203",
  email: "tigernelson@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "230 Lewis Road",
    addressLocality: "Williamston",
    addressRegion: "SC",
    postalCode: "29697",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.6182,
    longitude: -82.4079,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greenville County, SC" },
    { "@type": "AdministrativeArea", name: "Anderson County, SC" },
    { "@type": "AdministrativeArea", name: "Pickens County, SC" },
    { "@type": "AdministrativeArea", name: "Oconee County, SC" },
    { "@type": "City", name: "Greenville, SC" },
    { "@type": "City", name: "Anderson, SC" },
    { "@type": "City", name: "Easley, SC" },
    { "@type": "City", name: "Clemson, SC" },
    { "@type": "City", name: "Seneca, SC" },
    { "@type": "City", name: "Pickens, SC" },
    { "@type": "City", name: "Simpsonville, SC" },
    { "@type": "City", name: "Greer, SC" },
    { "@type": "City", name: "Mauldin, SC" },
    { "@type": "City", name: "Pendleton, SC" },
    { "@type": "City", name: "Liberty, SC" },
    { "@type": "City", name: "Central, SC" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Land Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stump Grinding",
          description: "Professional stump grinding services. We grind stumps 6-8 inches below ground level for complete removal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brush Hogging",
          description: "Brush hogging and brush clearing services for overgrown fields, fence lines, and trails.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Land Clearing",
          description: "Full lot clearing for new construction, driveways, or property development. Trees, brush, and debris removed.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nelson Land & Stump Services",
  url: "https://www.nelsonstump.com",
  logo: "https://www.nelsonstump.com/icon.png",
  description: "Professional stump grinding, brush hogging, and land clearing services in Upstate South Carolina.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "230 Lewis Road",
    addressLocality: "Williamston",
    addressRegion: "SC",
    postalCode: "29697",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-864-760-9203",
    contactType: "customer service",
    areaServed: "US-SC",
    availableLanguage: "English",
  },
  sameAs: ["https://facebook.com/nelsonstump"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Analytics for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${openSans.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BMZVK54H3P"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BMZVK54H3P');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
