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
  const { getCategory, categories, loading } = useDataCategory();

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <section className="container">
        <div className="space-y-4 pb-6">
          <h1 className="title-home">Productos por categorias</h1>
          <Divider />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            <>
              {categories && (
                <>
                  {categories.map((item, i) => (
                    <div key={i} className="hover:cursor-pointer">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-64 w-full"
                        radius="none"
                        removeWrapper
                      />
                      <h2 className="flex justify-center uppercase text-lg py-2">
                        {item.name}
                      </h2>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};
