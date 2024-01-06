import { CardProducts } from "@/components";
import { useLogicProducts } from "@/providers";
import { useFilterFromUrl } from "@/hooks";

export const ListSection = () => {
  const { getParams } = useFilterFromUrl();
  const { listProducts } = useLogicProducts();
  const textSearch = getParams("search", "");

  return (
    <div className="w-full pt-24 pb-14">
      {textSearch !== "" && (
        <div className="pb-6">
          <h2 className="">
            Resultados encontrados de:{" "}
            <span className="font-bold">{textSearch}</span>
          </h2>
        </div>
      )}
      {listProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listProducts.map((product, i) => (
            <CardProducts key={i} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};
