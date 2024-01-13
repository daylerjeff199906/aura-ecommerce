import React, { useEffect, useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { IconPhotoPlus, IconX } from "@tabler/icons-react";

interface IProps {
  onImageUpload: (image: File) => void;
  dataImage?: string;
}

export const UploadImage = ({ onImageUpload, dataImage }: IProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (dataImage) {
      setPreviewImage(dataImage);
    }
  }, [dataImage]);

  const handleImageChange = (file: File) => {
    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);

    onImageUpload(file);
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPreviewImage(null);
    // Puedes agregar lógica adicional para manejar la eliminación de la imagen
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];

    if (file) {
      handleImageChange(file);
    }
  };

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
      {!previewImage && !isUploading && (
        <div className="flex items-center justify-center h-full text-slate-400 cursor-pointer">
          <IconPhotoPlus size={148} stroke={1} />
        </div>
      )}
      {isUploading && (
        <div className="flex items-center justify-center h-full text-slate-400">
          Subiendo...
        </div>
      )}
      {previewImage && !isUploading && (
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
