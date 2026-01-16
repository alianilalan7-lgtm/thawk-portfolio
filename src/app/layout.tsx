import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thawk - Premium Graphic Studio",
  description: "A multidisciplinary visual designer specializing in graphic design, 3D, motion graphics, dedicated to helping professionals and brands transform ideas into impactful visuals.",
  keywords: ["graphic design", "motion graphics", "3D modeling", "VFX", "branding", "visual design"],
  authors: [{ name: "Taha" }],
  openGraph: {
    title: "Thawk - Premium Graphic Studio",
    description: "Where Visuals Evolve Into Experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
