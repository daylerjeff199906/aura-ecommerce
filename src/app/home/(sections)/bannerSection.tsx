"use client";
import { Image } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img_2 from "@/assets/images/banner_1.webp";
import img_3 from "@/assets/images/banner_2.webp";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const dataCarousel = [
  {
    id: 2,
    title: "Nuevos productos",
    image: img_2.src,
    alt: "manos_pulseras",
  },
  {
    id: 3,
    title: "Nuevos productos",
    image: img_3.src,
    alt: "pulsera_modelo",
  },
];

export const Banner = () => {
  return (
    <div className="sm:h-screen max-h-[40rem]  w-full">
      <Carousel
        responsive={responsive}
        className="w-full h-full max-h-[40rem]"
        infinite={true}
        autoPlay={true}
      >
        {dataCarousel.map((item, index) => (
          <Image
            key={index}
            src={item?.image}
            alt={item?.alt}
            removeWrapper={true}
            radius="none"
            className="h-full object-cover w-full"
          />
        ))}
      </Carousel>
    </div>
  );
};
