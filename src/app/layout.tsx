import type { Metadata, Viewport } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import Script from "next/script";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nelsonstump.com'),
  title: {
    default: "Stump Grinding & Land Clearing Greenville SC | Nelson Stump",
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
    url: "https://nelsonstump.com",
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
    {
      "@type": "Question",
      name: "Who provides stump grinding near me in Upstate SC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nelson Land & Stump Services provides professional stump grinding throughout Upstate South Carolina. We serve Greenville, Anderson, Pickens, and Oconee counties. Call (864) 760-9203 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove the roots when stump grinding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With stump grinding, we grind the stump 6-8 inches below ground level, but the roots remain in the soil. The roots will naturally decay over 5-10 years and won't cause any problems. This is less invasive and more affordable than complete root removal.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can you come out for an estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We typically schedule free estimates within 1-2 business days. For urgent requests, we often can accommodate same-day or next-day estimates. Call us at (864) 760-9203 to schedule.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to the wood chips after stump grinding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After grinding, the wood chips can be left on-site for you to use as mulch, or we can rake them into the hole to help fill it. For an additional fee, we can also haul the chips away if you prefer a completely clean site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you grind stumps in tight spaces or backyards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we have equipment that can access most backyard stumps. We can fit through standard fence gates (36 inches or wider). For very tight spaces, we assess accessibility during our free estimate and discuss options.",
      },
    },
    {
      "@type": "Question",
      name: "How much does land clearing cost per acre in SC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Land clearing costs in South Carolina typically range from $1,500 to $3,000+ per acre for light clearing, and $3,000 to $6,000+ per acre for heavy clearing with large trees. The exact cost depends on terrain, tree density, and debris removal needs. We provide free on-site estimates.",
      },
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nelson Land & Stump Services",
  url: "https://nelsonstump.com",
  logo: "https://nelsonstump.com/icon.png",
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
