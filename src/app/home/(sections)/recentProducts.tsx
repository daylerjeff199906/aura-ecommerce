import { CardProducts } from "@/components";
import img from "@/assets/images/img_test.webp";

export const RecentProducts = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold">Productos recientes</h1>
      <div>
        <CardProducts />
      </div>
    </section>
  );
};
