/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useFilterFromUrl, useDataProducts } from "@/hooks";
import { IProducts } from "@/types";

export const ProductsContext = createContext<{
  listProducts: IProducts[] | null;
}>({
  listProducts: [],
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getProductsActive, productsActive } = useDataProducts();
  //   const { filterFromUrl } = useFilterFromUrl();

  useEffect(() => {
    getProductsActive();
  }, []);

  //   useEffect(() => {
  //     if (filterFromUrl) {
  //       setProducts(filterFromUrl);
  //     }
  //   }, [filterFromUrl]);

  return (
    <ProductsContext.Provider value={{ listProducts: productsActive }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useLogicProducts = () => useContext(ProductsContext);
