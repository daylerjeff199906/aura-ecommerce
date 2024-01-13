/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Button, Image } from "@nextui-org/react";
import { IconPhotoPlus, IconX } from "@tabler/icons-react";

interface IProps {
  onImageUpload: (image: File) => void;
  dataImage?: string;
}

export const UploadImage = ({ onImageUpload, dataImage }: IProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const dropAreaRef = useRef<HTMLLabelElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <div className="max-w-sm w-full">
      <div className="w-full h-full max-h-80  border-blue-400 border-3 border-dashed rounded-lg p-4">
        <label
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          ref={dropAreaRef}
        >
          <div className="hover:bg-zinc-100 h-full rounded-lg">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {!previewImage && !isUploading && (
              <div className="p-6 flex items-center justify-center h-full text-slate-400 cursor-pointer">
                <div className="text-center">
                  <div className="flex justify-center p-4 bg-zinc-200 rounded-full">
                    <IconPhotoPlus size={84} stroke={1} />
                  </div>
                  <h1 className="text-lg font-bold">
                    Agregar foto <br />
                    <span className="text-sm font-normal">
                      o arrastrar y soltar
                    </span>
                  </h1>
                </div>
              </div>
            )}
            {isUploading && (
              <div className="flex items-center justify-center h-full text-slate-400">
                Subiendo...
              </div>
            )}
            {previewImage && !isUploading && (
              <div className="relative flex items-center justify-center w-full h-full">
                <Image src={previewImage} alt="Preview" className="h-60" />
                <div className="absolute top-0 right-0 z-20">
                  <Button
                    onClick={(e) => handleRemoveImage(e)}
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
          </div>
        </label>
      </div>
      <div className="pt-4">
        <Button
          radius="sm"
          color="primary"
          fullWidth
          isDisabled={!previewImage}
        >
          Subir imagen
        </Button>
      </div>
    </div>
  );
};
