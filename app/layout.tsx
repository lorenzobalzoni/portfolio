import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Upgraded Metadata to match your actual developer profile
export const metadata: Metadata = {
  title: "Lorenzo Balzoni | iOS & Web Developer",
  description:
    "Independent developer crafting digital experiences with precision and purpose. Focused on Apple platforms and web technologies.",
  // Added OpenGraph data so links look great when shared on iMessage or Twitter
  openGraph: {
    title: "Lorenzo Balzoni | Developer",
    description: "Building the future of digital experiences.",
    url: "https://lorenzobalzoni.com", // Update this to your actual domain
    siteName: "Lorenzo Balzoni",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      // Added smooth scrolling for anchor links
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body 
        // Added strict dark mode baseline and custom orange text selection
        className="font-sans antialiased bg-[#050505] text-neutral-100 selection:bg-[#FF5500]/30 selection:text-orange-100 min-h-screen flex flex-col"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}