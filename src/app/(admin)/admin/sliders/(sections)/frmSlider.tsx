"use client";
import { UploadImage } from "@/components";
import { Input } from "@nextui-org/react";

export const FrmSlider = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-sm font-medium text-zinc-500">Agregar slider</h1>
      <div className="space-y-3">
        <Input placeholder="Nombre" />
        <Input placeholder="Tag" />
      </div>
      <h1 className="text-sm font-medium text-zinc-500">Agregar imagen</h1>
      <div className="flex justify-center">
        <UploadImage
          onImageUpload={(image) => {
            console.log(image);
          }}
        />
      </div>
    </div>
  );
};
