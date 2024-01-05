/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { Image, Divider } from "@nextui-org/react";
import { useDataCategory } from "@/hooks";

const dataCategories = [
  {
    id: 1,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
  {
    id: 2,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
  {
    id: 3,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
  {
    id: 4,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
  {
    id: 5,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
  {
    id: 6,
    name: "Categorias",
    img: "https://i.ibb.co/9sG6Q7t/1.png",
    url: "/categories",
  },
];

export const CategoriesSection = () => {
  const { getCategory, categories } = useDataCategory();

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categories);

  return (
    <>
      <section className="container">
        <div className="space-y-4 pb-6">
          <h1 className="title-home">Productos por categorias</h1>
          <Divider />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {categories && (
            <>
              {categories.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full"
                    removeWrapper
                  />
                  <h2>{item.name}</h2>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};
