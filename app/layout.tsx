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
  title: "API-Cert | Healthcare License Verification API",
  description: "Verify RN, LPN, NP, PA, MD, and DO licenses from state board files, with the date each file carried. Board-direct for physicians in 16 states and nurses in 15; NPI baseline listing and OIG exclusion screening nationwide.",
  keywords: "healthcare license verification, RN verification, nursing license API, medical license check, NPPES, OIG exclusion check",
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
