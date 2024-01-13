import { UploadImage } from "@/components";
import { IProducts } from "@/types";

export const UploadImageSection = ({ data }: { data: IProducts | null }) => {
  return (
    <>
      <UploadImage
        onImageUpload={(image: File) => {
          console.log(image);
        }}
        dataImage={data?.image}
      />
    </>
  );
};
