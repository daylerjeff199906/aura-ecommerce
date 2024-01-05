"use client";
import { ProductsProvider } from "@/providers";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
