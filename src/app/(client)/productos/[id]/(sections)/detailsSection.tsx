/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { SentDetailSection } from "./sentDetailSection";
import { useDataProducts } from "@/hooks";

export const DetailsSection = ({ id }: { id: string }) => {
  const [isLoadImage, setIsLoadImage] = useState(false);
  const { getProductById, product } = useDataProducts();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <section className="container max-w-7xl">
      <div className="block sm:flex gap-6 lg:gap-10">
        <div className="py-12">
          <Image
            src={product?.image}
            alt="img_data"
            removeWrapper={true}
            className="object-cover sm:h-[32rem] lg:h-[48rem]"
            radius="none"
            loading="lazy"
            onLoad={() => setIsLoadImage(true)}
          />
        </div>
        <div className="sm:py-12 space-y-6">
          <div className="space-y-2">
            <p>Tag</p>
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <h3 className="font-bold text-lg">s/ {product?.price}</h3>
            <p className="text-zinc-600">{product?.description}</p>
          </div>
          <div className="w-full space-y-3">
            <Button color="default" radius="none" fullWidth variant="bordered">
              Agregar al carrito
            </Button>
            <Button color="danger" radius="none" fullWidth>
              Comprar producto
            </Button>
          </div>
          <div>
            <SentDetailSection />
          </div>
        </div>
      </div>
    </section>
  );
};
