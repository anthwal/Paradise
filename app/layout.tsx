import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  defaultShareImages,
  sharedOpenGraph,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import StickyMobileCta from "@/components/sticky-mobile-cta";
import JsonLd from "@/components/json-ld";
import { businessJsonLd } from "@/lib/structured-data/structured-data";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  variable: "--font-archivo",
});

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description: siteDescription,
  // Turns relative URLs (canonical links, share images) into absolute ones
  metadataBase: new URL(siteUrl),
  // Social sharing defaults; titles and descriptions come from each page's own
  openGraph: {
    ...sharedOpenGraph,
    images: defaultShareImages,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <JsonLd data={businessJsonLd} />
      </body>
    </html>
  );
}
