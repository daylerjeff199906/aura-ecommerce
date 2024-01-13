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
    key: "isActive",
    label: "Activo?",
  },
  {
    key: "actions",
    label: "Acciones",
  },
];

const rows = [
  {
    key: "",
    product: "",
    category: "",
    price: "",
    stock: "",
    isActive: "",
    actions: "",
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
        url_base="productos"
        columns={columns}
        rows={
          products
            ? products?.map((product) => {
                return {
                  key: product.id,
                  product: product.name,
                  category: product.category.name,
                  price: product.price,
                  stock: product.stock,
                  isActive: product.isActive ? "Si" : "No",
                  actions: "Active",
                };
              })
            : rows
        }
      />
    </>
  );
};
