import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bash.company"),
  title: {
    default: "Bash Company - Software Development Consulting",
    template: "%s | Bash Company",
  },
  description:
    "With 10+ years of experience, we provide expert software development consulting to clients worldwide, specializing in migrating legacy services to modern technologies and optimizing cost efficiency. We work with Next.js, React, Golang, PHP, and Python.",
  keywords: [
    "software development consulting",
    "legacy system migration",
    "Next.js development",
    "React development",
    "Golang development",
    "PHP development",
    "Python development",
    "cost optimization",
    "performance optimization",
    "fullstack development",
    "software consulting",
    "technology modernization",
  ],
  authors: [{ name: "Bash Company" }],
  creator: "Bash Company",
  publisher: "Bash Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bash.company",
    title: "Bash Company - Software Development Consulting",
    description:
      "Expert software development consulting with 10+ years of experience. Specializing in legacy system migration, performance optimization, and modern fullstack solutions.",
    siteName: "Bash Company",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bash Company - Software Development Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bash Company - Software Development Consulting",
    description:
      "Expert software development consulting with 10+ years of experience. Specializing in legacy system migration and performance optimization.",
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bash.company" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
