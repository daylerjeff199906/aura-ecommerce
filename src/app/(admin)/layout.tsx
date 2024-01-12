"use client";
import { AuthProvider } from "@/providers";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
