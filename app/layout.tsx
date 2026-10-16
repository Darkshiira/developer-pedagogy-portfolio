import type { Metadata } from "next";
import { Suspense } from "react";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Hanna Arefi | Fullstack Developer",
  description:
    "Fullstack developer with a background in teaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-body`}
      >
        {children}

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}