import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ozone (OZ)",
  description: "A next-generation streaming platform. Coming soon.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ozone (OZ)",
    description: "A next-generation streaming platform. Coming soon.",
    url: "https://ozone.ocglobaltech.com",
    siteName: "Ozone",
    images: [{ url: "/icon.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Ozone (OZ)",
    description: "A next-generation streaming platform. Coming soon.",
    images: ["/icon.png"],
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
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"
          strategy="beforeInteractive"
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
