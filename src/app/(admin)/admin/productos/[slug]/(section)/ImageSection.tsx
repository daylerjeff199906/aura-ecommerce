import { UploadImage } from "@/components";

export const UploadImageSection = () => {
  return (
    <>
      <UploadImage
        onImageUpload={(image: File) => {
          console.log(image);
        }}
      />
    </>
  );
};
