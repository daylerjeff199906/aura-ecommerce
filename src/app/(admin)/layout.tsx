"use client";
import { NavbarAdmin, SiderBarMenu } from "@/components";
import { AuthProvider } from "@/providers";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NavbarAdmin />
      <SiderBarMenu>{children}</SiderBarMenu>
    </AuthProvider>
  );
}
