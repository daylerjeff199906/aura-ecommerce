import { Image } from "@nextui-org/react";

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
  return (
    <>
      <section className="container">
        <h1 className="title-home">Nuestras categorias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {dataCategories.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img}
                alt={item.name}
                className="h-56 w-full"
                removeWrapper
              />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
