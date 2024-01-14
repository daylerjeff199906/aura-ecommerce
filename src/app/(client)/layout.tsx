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
      <div className="pt-24 sm:pt-2">{children}</div>
      <Footer />
    </ShopCartProvider>
  );
}
