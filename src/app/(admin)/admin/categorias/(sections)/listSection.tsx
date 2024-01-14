/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { TableAdmin } from "@/components";
import { useDataCategory } from "@/hooks";

const columns = [
  {
    key: "category",
    label: "Categoria",
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
    category: "",
    isActive: "",
    actions: "",
  },
];

export const ListSection = () => {
  const { getCategory, categories } = useDataCategory();

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <TableAdmin
        url_base="categorias"
        columns={columns}
        rows={
          categories
            ? categories?.map((category) => {
                return {
                  key: category.id,
                  category: category.name,
                  isActive: category.isActive ? "Si" : "No",
                  actions: "",
                };
              })
            : rows
        }
      />
      ;
    </>
  );
};
