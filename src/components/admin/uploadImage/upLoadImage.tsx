import React, { useState } from "react";
// import Image from "next/image";
import { Button, Image } from "@nextui-org/react";
import { IconPhotoPlus, IconX } from "@tabler/icons-react";

interface IProps {
  onImageUpload: (image: File) => void;
}

export const UploadImage = ({ onImageUpload }: IProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    onImageUpload(file);
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Detener la propagación del evento
    setPreviewImage(null);
    // Aquí puedes añadir lógica adicional para manejar la eliminación de la imagen
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];

    if (file) {
      handleImageChange(file);
    }
  };

  console.log(previewImage);
  return (
    <label
      className="border-3 border-dashed border-blue-400 rounded-lg p-4 max-w-sm w-full hover:bg-zinc-100"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => e.target.files && handleImageChange(e.target.files[0])}
      />
      {!previewImage && (
        <div className="flex items-center justify-center h-full text-slate-400 cursor-pointer">
          <IconPhotoPlus size={148} stroke={1} />
        </div>
      )}
      {previewImage && (
        <div className="relative flex items-center justify-center w-full h-full">
          <Image src={previewImage} alt="Preview" className="h-72" />
          <div className="absolute top-0 right-0 z-20">
            <Button
              onClick={handleRemoveImage}
              variant="bordered"
              isIconOnly
              radius="full"
              className="bg-white"
            >
              <IconX />
            </Button>
          </div>
        </div>
      )}
    </label>
  );
};
