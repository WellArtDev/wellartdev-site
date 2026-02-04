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
  title: "WellArt.Dev | Digital Excellence & Web Development Agency",
  description:
    "Full-service agency untuk website, app/MVP, dan digital marketing — fokus konversi & trust dengan desain premium.",
  icons: {
    icon: "/wellartdev-logo.png",
  },
  openGraph: {
    title: "WellArt.Dev",
    description:
      "Website, app/MVP, dan digital marketing — fokus konversi & trust dengan desain premium.",
    images: [
      {
        url: "/wellartdev-logo.png",
        width: 1200,
        height: 630,
        alt: "WellArt.Dev",
      },
    ],
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
