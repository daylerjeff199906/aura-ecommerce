"use client";
import { ShopCartProvider } from "@/providers";
import { CustomNavbar, Footer } from "@/components";
export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShopCartProvider>
      <CustomNavbar />
      {children}
      <Footer />
    </ShopCartProvider>
  );
}
