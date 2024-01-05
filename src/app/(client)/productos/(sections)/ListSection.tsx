import { CardProducts } from "@/components";
import { useLogicProducts } from "@/providers";

export const ListSection = () => {
  const { listProducts } = useLogicProducts();
  return (
    <>
      {listProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listProducts.map((product, i) => (
            <CardProducts key={i} data={product} />
          ))}
        </div>
      )}
    </>
  );
};
