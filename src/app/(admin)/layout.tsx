"use client";
import { NavbarAdmin } from "@/components";
import { AuthProvider } from "@/providers";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NavbarAdmin />
      {children}
    </AuthProvider>
  );
}
