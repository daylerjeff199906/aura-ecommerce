"use client";
import { ProductsProvider } from "@/providers/clients/productsProvider";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
