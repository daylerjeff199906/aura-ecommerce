"use client";
import { useAuth } from "@/providers";
import { Button } from "@nextui-org/react";

export default function AdminPage() {
  const { handleLogout } = useAuth();
  return (
    <>
      <h1>Admin</h1>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </>
  );
}
