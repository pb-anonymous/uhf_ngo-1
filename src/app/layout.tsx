import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "UNITED H.O.P.E FOUNDATION",
  description: "Humanity. Opportunity. People. Education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#FF9A3C]/30 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
