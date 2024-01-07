"use client";
import { ShopCartProvider } from "@/providers";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ShopCartProvider>{children}</ShopCartProvider>;
}
