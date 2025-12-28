import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: "Stump Grinding & Land Clearing in Greenville SC | Nelson Land & Stump",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Stump Grinding & Land Clearing in Greenville SC",
    description: "Professional stump grinding and land clearing services in Upstate South Carolina. Free estimates!",
  },
  alternates: {
    canonical: "https://nelsonstump.com",
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
  "@id": "https://nelsonstump.com/#business",
  name: "Nelson Land & Stump Services",
  description: "Professional stump grinding, brush hogging, and land clearing services serving Upstate South Carolina. Family-owned business with 5+ years experience.",
  url: "https://nelsonstump.com",
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
    { "@type": "County", name: "Greenville County, SC" },
    { "@type": "County", name: "Anderson County, SC" },
    { "@type": "County", name: "Pickens County, SC" },
    { "@type": "County", name: "Oconee County, SC" },
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

// Service Schema for individual services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Land Clearing and Stump Removal",
  provider: {
    "@type": "LocalBusiness",
    name: "Nelson Land & Stump Services",
  },
  areaServed: {
    "@type": "State",
    name: "South Carolina",
    containsPlace: [
      { "@type": "City", name: "Greenville" },
      { "@type": "City", name: "Anderson" },
      { "@type": "City", name: "Easley" },
      { "@type": "City", name: "Clemson" },
      { "@type": "City", name: "Seneca" },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Stump Grinding Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Stump Grinding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Stump Removal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Stump Grinding" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Land Clearing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brush Hogging" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lot Clearing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Line Clearing" } },
        ],
      },
    ],
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does stump grinding cost in Greenville SC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stump grinding costs in Greenville SC typically range from $75-$300 per stump depending on size, location, and accessibility. We offer free on-site estimates to give you an accurate quote for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve in Upstate South Carolina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Upstate South Carolina including Greenville, Anderson, Pickens, and Oconee Counties. This includes cities like Greenville, Anderson, Easley, Clemson, Seneca, Pickens, Simpsonville, Greer, Mauldin, Pendleton, Liberty, and Central.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between stump grinding and stump removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stump grinding uses a machine to grind the stump 6-8 inches below ground level, leaving the roots to decay naturally. Stump removal pulls the entire stump and root ball out of the ground, which is more invasive and expensive. For most homeowners, stump grinding is the preferred method.",
      },
    },
    {
      "@type": "Question",
      name: "How long does brush hogging take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brush hogging time depends on the size and condition of the property. A typical residential lot (1-2 acres) can be cleared in a few hours. Larger properties or heavily overgrown areas may take a full day or more. We provide time estimates during our free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Nelson Land & Stump Services is fully licensed and insured. We carry liability insurance to protect your property and our team while working on your land.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
