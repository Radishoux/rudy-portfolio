import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudy Quinternet — Software Engineer",
  description:
    "Portfolio of Rudy Quinternet, Senior Software Engineer based in the Netherlands. 6 years of experience in React, Node.js, Angular, Flutter, AWS and more.",
  keywords: [
    "Rudy Quinternet",
    "Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Netherlands",
    "Full Stack",
  ],
  authors: [{ name: "Rudy Quinternet" }],
  openGraph: {
    title: "Rudy Quinternet — Software Engineer",
    description: "Senior Software Engineer · 6 years exp · Paris",
    type: "website",
    url: "https://rudyquinternet.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
