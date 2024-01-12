/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { TableAdmin } from "@/components";
import { useDataProducts } from "@/hooks";

const columns = [
  {
    key: "product",
    label: "Producto",
  },
  {
    key: "category",
    label: "Categoria",
  },
  {
    key: "price",
    label: "Precio",
  },
  {
    key: "stock",
    label: "Stock",
  },
  {
    key: "actions",
    label: "Acciones",
  },
];

const rows = [
  {
    key: "1",
    product: "Tony Reichert",
    category: "CEO",
    price: "Active",
    stock: "Active",
    actions: "Active",
  },
];

export const ListSection = () => {
  const { getProducts, products } = useDataProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <TableAdmin
        columns={columns}
        rows={
          products
            ? products?.map((product) => {
                return {
                  key: product.id,
                  product: product.name,
                  category: product.category,
                  price: product.price,
                  stock: product.stock,
                  actions: "Active",
                };
              })
            : rows
        }
      />
    </>
  );
};
