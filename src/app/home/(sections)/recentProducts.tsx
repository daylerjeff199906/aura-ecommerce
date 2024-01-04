import { CardProducts } from "@/components";
import img from "@/assets/images/img_test.webp";

export const RecentProducts = () => {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold pb-6">Productos recientes</h1>
      <div className="grid grid-cols-5 gap-4">
        <CardProducts
          data={{
            image: img.src,
            name: "Nombre del producto",
            category: "Categoria",
            price: 100,
            discount: 10,
          }}
        />
        <CardProducts
          data={{
            image: img.src,
            name: "Nombre del producto",
            category: "Categoria",
            price: 100,
            discount: 10,
          }}
        />
        <CardProducts
          data={{
            image: img.src,
            name: "Nombre del producto",
            category: "Categoria",
            price: 100,
            discount: 10,
          }}
        />
        <CardProducts
          data={{
            image: img.src,
            name: "Nombre del producto",
            category: "Categoria",
            price: 100,
            discount: 10,
          }}
        />
        <CardProducts
          data={{
            image: img.src,
            name: "Nombre del producto",
            category: "Categoria",
            price: 100,
            discount: 10,
          }}
        />
      </div>
    </section>
  );
};
