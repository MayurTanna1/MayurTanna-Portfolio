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
  title: "Mayur Tanna - Senior iOS Developer | Swift & SwiftUI Expert",
  description: "Experienced iOS Developer with 10+ years in Swift, SwiftUI, Firebase, and AWS. Specialized in building scalable mobile applications with modern iOS technologies.",
  keywords: ["iOS Developer", "Swift", "SwiftUI", "Mobile Development", "Freelancer", "Team Lead"],
  authors: [{ name: "Mayur Tanna" }],
  creator: "Mayur Tanna",
  openGraph: {
    title: "Mayur Tanna - Senior iOS Developer",
    description: "10+ years of iOS development experience. Building amazing apps with Swift and SwiftUI.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
