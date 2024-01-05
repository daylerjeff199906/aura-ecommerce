/* eslint-disable react-hooks/exhaustive-deps */
"use client";
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
  const { getProducts, products } = useDataProducts();
  //   const { filterFromUrl } = useFilterFromUrl();

  useEffect(() => {
    getProducts();
  }, []);

  //   useEffect(() => {
  //     if (filterFromUrl) {
  //       setProducts(filterFromUrl);
  //     }
  //   }, [filterFromUrl]);

  return (
    <ProductsContext.Provider value={{ listProducts: products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
