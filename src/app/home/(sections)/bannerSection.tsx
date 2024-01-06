/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { Image } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useDataSlider } from "@/hooks";

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

export const Banner = () => {
  const { loading, getSlider, sliders } = useDataSlider();

  useEffect(() => {
    getSlider();
  }, []);

  // console.log(sliders);

  return (
    <div className="sm:h-screen max-h-[40rem]  w-full">
      {sliders ? (
        <Carousel
          responsive={responsive}
          className="w-full h-full max-h-[40rem] z-10"
          infinite={true}
          autoPlay={true}
        >
          {sliders.map((item, index) => (
            <Image
              key={index}
              src={item?.image}
              alt={item?.name}
              removeWrapper={true}
              radius="none"
              className="h-full object-cover w-full "
            />
          ))}
        </Carousel>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl font-bold">Espere un momento ...</p>
        </div>
      )}
    </div>
  );
};
