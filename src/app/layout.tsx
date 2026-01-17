import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

