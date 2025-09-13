import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "KaloWrite - Humanize Your Content",
  description: "KaloWrite humanizes your content and outsmarts even the most robust AI detection tools. Try for free, no credit card required.",
  icons: {
    icon: '/assets/images/kalowrite logo.png',
    shortcut: '/assets/images/kalowrite logo.png',
    apple: '/assets/images/kalowrite logo.png',
  },
  openGraph: {
    title: "KaloWrite - Humanize Your Content",
    description: "KaloWrite humanizes your content and outsmarts even the most robust AI detection tools. Try for free, no credit card required.",
    images: ['/assets/images/kalowrite logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
