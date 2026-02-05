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
  metadataBase: new URL('https://www.columbiastumpgrinding.com'),
  title: {
    default: "Stump Grinding & Land Clearing Columbia SC | Columbia Stump Grinding",
    template: "%s | Columbia Stump Grinding",
  },
  description: "Professional stump grinding, brush hogging, and land clearing services in Columbia and Midlands South Carolina. Serving Richland & Lexington Counties. Free estimates, fully licensed & insured. Call (864) 760-9203.",
  keywords: "stump grinding Columbia SC, land clearing Midlands SC, brush hogging Lexington SC, stump removal near me, brush clearing West Columbia, land clearing Irmo SC, stump grinding Richland County, tree stump removal South Carolina",
  authors: [{ name: "Columbia Stump Grinding" }],
  robots: "index, follow",
  openGraph: {
    title: "Stump Grinding & Land Clearing | Columbia Stump Grinding",
    description: "Professional stump grinding, brush hogging, and land clearing in Columbia and Midlands SC. Serving Richland & Lexington Counties. Free estimates!",
    type: "website",
    locale: "en_US",
    siteName: "Columbia Stump Grinding",
    url: "https://www.columbiastumpgrinding.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Columbia Stump Grinding - Professional Stump Grinding & Land Clearing in Columbia SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stump Grinding & Land Clearing in Columbia SC",
    description: "Professional stump grinding and land clearing services in Columbia and Midlands South Carolina. Free estimates!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "US-SC",
    "geo.placename": "Columbia, South Carolina",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
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
