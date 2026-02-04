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
  metadataBase: new URL("https://wellartdev-site.vercel.app"),

  title: {
    default: "Jasa Pembuatan Website, App & Digital Marketing | WellArt.Dev",
    template: "%s | WellArt.Dev",
  },
  description:
    "WellArt.Dev adalah agency full-service untuk UMKM, personal brand, startup & company: jasa pembuatan website (SEO & cepat), aplikasi/MVP, dan digital marketing. Fokus konversi, sales, dan desain premium.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/wellartdev-logo.svg",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Jasa Pembuatan Website, App & Digital Marketing | WellArt.Dev",
    description:
      "Agency full-service untuk UMKM, personal brand, startup & company. Website SEO & cepat, aplikasi/MVP, dan digital marketing—fokus konversi, sales, dan desain premium.",
    siteName: "WellArt.Dev",
    images: [
      {
        url: "/wellartdev-logo.png",
        width: 1200,
        height: 630,
        alt: "WellArt.Dev — Web & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website, App & Digital Marketing | WellArt.Dev",
    description:
      "Website SEO & cepat, aplikasi/MVP, dan digital marketing—fokus konversi, sales, dan desain premium.",
    images: ["/wellartdev-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
