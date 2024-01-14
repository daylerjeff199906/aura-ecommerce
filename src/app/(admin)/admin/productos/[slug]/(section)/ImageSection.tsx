import { useEffect, useState } from "react";
import { UploadImage } from "@/components";
import { IProducts } from "@/types";
import { useProducts, useDataProducts } from "@/hooks";

export const UploadImageSection = ({ data }: { data: IProducts | null }) => {
  const { uploadImage, loading, editProduct } = useProducts();
  const { getProductById } = useDataProducts();
  const [product, setProduct] = useState({
    name: "",
    price: "0",
    stock: 0,
    discount: 0,
    description: "",
    image: "",
    isOffer: false,
    isActive: false,
    category: {
      id: "",
      name: "",
    },
    createdAt: new Date(),
  });

  useEffect(() => {
    if (data) {
      setProduct({
        name: data?.name,
        price: data?.price.toString(),
        stock: data?.stock,
        discount: data?.discount,
        description: data?.description,
        image: data?.image,
        isOffer: data?.isOffer,
        isActive: data?.isActive,
        category: {
          id: data?.category.id,
          name: data?.category.name,
        },
        createdAt: data?.createdAt,
      });
    }
  }, [data]);

  const handleUploadImage = async (image: File) => {
    const urlImage = await uploadImage(image);
    await setProduct({ ...product, image: urlImage });
    if (data?.id) {
      editProduct(data?.id, { ...product, image: urlImage });
      await getProductById(data?.id);
    }
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
