"use client";

import { NextUIProvider } from "@nextui-org/react";

//for moment
import { ShopCartProvider } from "@/providers";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ShopCartProvider>
        <div>{children}</div>
      </ShopCartProvider>
    </NextUIProvider>
  );
}
