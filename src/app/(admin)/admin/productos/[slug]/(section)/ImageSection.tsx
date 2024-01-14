import { UploadImage } from "@/components";
import { IProducts } from "@/types";
import { useProducts } from "@/hooks";

export const UploadImageSection = ({ data }: { data: IProducts | null }) => {
  const { uploadImage, loading } = useProducts();

  const handleUploadImage = async (image: File) => {
    const urlImage = await uploadImage(image);
    console.log(urlImage);
  };

  return (
    <>
      <UploadImage
        onImageUpload={(image: File) => {
          handleUploadImage(image);
        }}
        dataImage={data?.image}
        loading={loading}
      />
    </>
  );
};
