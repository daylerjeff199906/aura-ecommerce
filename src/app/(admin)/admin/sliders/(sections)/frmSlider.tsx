"use client";
import { useState, useEffect } from "react";
import { UploadImage } from "@/components";
import { Input } from "@nextui-org/react";
import { useFilterFromUrl } from "@/hooks";

export const FrmSlider = () => {
  const { getParams } = useFilterFromUrl();
  const [slider, setSlider] = useState({
    name: "",
    tag: "",
    image: "",
    updatedAt: "",
  });

  const id = getParams("edit", "");

  return (
    <div className="space-y-4">
      <h1 className="text-sm font-medium text-zinc-500">Agregar slider</h1>
      <div className="space-y-3">
        <Input placeholder="Nombre" />
        <Input placeholder="Tag" />
      </div>
      {id && (
        <div>
          <h1 className="text-sm font-medium text-zinc-500">Agregar imagen</h1>
          <div className="flex justify-center">
            <UploadImage
              onImageUpload={(image) => {
                console.log(image);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
