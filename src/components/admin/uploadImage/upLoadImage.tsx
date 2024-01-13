import React, { useState } from "react";
import Image from "next/image";
import { IconPhotoPlus } from "@tabler/icons-react";

interface IProps {
  onImageUpload: (image: File) => void;
}

export const UploadImage = ({ onImageUpload }: IProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      onImageUpload(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    // Aquí puedes añadir lógica adicional para manejar la eliminación de la imagen
  };

  return (
    <label className="border-3 border-dashed border-blue-400 rounded-lg p-4 max-w-sm w-full hover:bg-zinc-100">
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {!previewImage && (
        <div className="flex items-center justify-center h-full text-slate-400 cursor-pointer">
          <IconPhotoPlus size={148} stroke={1} />
        </div>
      )}
      {previewImage && (
        <div>
          <Image src={previewImage} alt="Preview" width={100} height={100} />
          <button onClick={handleRemoveImage}>Quitar Imagen</button>
        </div>
      )}
    </label>
  );
};
