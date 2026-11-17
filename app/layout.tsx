import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  declarations: [{prop: "font-streach", value: "62% 125%"}],
  variable: "--font-archivo",
});

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paradise Fabrication & Fencing",
    default: "Paradise Fabrication & Fencing",
  },
  description:
      "Custom gates, slat fencing, privacy screens and awnings, pool fencing and balustrades on the Gold Coast, Queensland.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
