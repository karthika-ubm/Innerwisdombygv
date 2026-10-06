import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// @ts-expect-error CSS imports are handled by Next.js for global styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Inner Wisdom by Gargi Verma | Live Session",
  description: "Join the exclusive live session with Gargi Verma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}