/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { CardProducts } from "@/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Divider } from "@nextui-org/react";
import { useDataProducts } from "@/hooks";
import Link from "next/link";

const responsive = {
  mediumDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 640, min: 320 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  smallMobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const RecentProducts = () => {
  const { getProductsActive, productsActive, loading } = useDataProducts();

  useEffect(() => {
    getProductsActive();
  }, []);

  return (
    <section className="container">
      <div className="space-y-4 pb-6">
        <h1 className="title-home">Productos recientes</h1>
        <Divider />
        <Button size="sm" variant="bordered" as={Link} href="/productos">
          Ver todos los productos
        </Button>
      </div>
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl font-bold">Espere un momento ...</p>
        </div>
      )}
      {productsActive && (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          partialVisible
          className="z-10"
        >
          {productsActive?.slice(0, 10).map((item, index) => (
            <div key={index} className="mr-4">
              <CardProducts data={item} />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};
