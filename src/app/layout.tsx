import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomNavbar, Footer } from "@/components";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aurora",
  description: "Ecommerce website built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CustomNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
