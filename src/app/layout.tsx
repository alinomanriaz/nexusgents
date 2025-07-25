import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/redux/providers";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
import ThemeInitializer from "@/helper/themeInitializer";
import Topheader from "@/components/Topheader";

// import Footer from "@/components/Footer";

// Define your local fonts
const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
    // Add other variations if needed
  ],
  variable: "--font-geist-sans",
  display: "swap", // Add this for better performance
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
    // Add other variations if needed
  ],
  variable: "--font-geist-mono",
  display: "swap",
});
export const metadata: Metadata = {
  title: "NexusGen",
  description: "No. 1 Services",
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
        <Providers>
        <ThemeInitializer>
          <NextTopLoader color="blue" showSpinner={false} />
          <Topheader />
          <Header />
          {children}
        </ThemeInitializer>
        </Providers>
      </body>
    </html>
  );
}
