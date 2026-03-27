import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Ofira - Local micro-gigs",
  description: "Your city. Your people. Your help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background pb-16 md:pb-0 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
