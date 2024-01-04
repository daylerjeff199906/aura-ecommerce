"use client";
import { CardProducts } from "@/components";
import img from "@/assets/images/img_test.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Divider } from "@nextui-org/react";

const data = [
  {
    id: 1,
    image: img.src,
    name: "Nombre del producto",
    category: "Categoria",
    price: 100,
    discount: 10,
  },
  {
    id: 2,
    image: img.src,
    name: "Nombre del producto",
    category: "Categoria",
    price: 100,
    discount: 10,
  },
  {
    id: 3,
    image: img.src,
    name: "Nombre del producto",
    category: "Categoria",
    price: 100,
    discount: 10,
  },
  {
    id: 4,
    image: img.src,
    name: "Nombre del producto",
    category: "Categoria",
    price: 100,
    discount: 10,
  },
  {
    id: 5,
    image: img.src,
    name: "Nombre del producto",
    category: "Categoria",
    price: 100,
    discount: 10,
  },
];

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
  return (
    <section className="container">
      <div className="space-y-4 pb-6">
        <h1 className="title-home">Productos recientes</h1>
        <Divider />
        <Button size="sm" variant="bordered">
          Ver todos los productos
        </Button>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        partialVisible
      >
        {data.map((item, index) => (
          <div key={index} className="mr-4">
            <CardProducts data={item} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
