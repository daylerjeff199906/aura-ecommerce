"use client";
import { SliderProvider } from "@/providers";

export default function LayoutSliders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SliderProvider>{children}</SliderProvider>
    </>
  );
}
