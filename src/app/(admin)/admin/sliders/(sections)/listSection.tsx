/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { TableAdmin } from "@/components";
import { useDataSlider } from "@/hooks";

const columns = [
  {
    key: "name",
    label: "Nombre",
  },
  {
    key: "tag",
    label: "Tag",
  },
  {
    key: "updatedAt",
    label: "F. de modificación",
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
    name: "",
    tag: "",
    updatedAt: "",
    isActive: "",
    actions: "",
  },
];

export const ListSection = () => {
  const { getSlider, sliders } = useDataSlider();
  // const { editProduct } = useProducts();

  useEffect(() => {
    getSlider();
  }, []);

  // const changeState = async (id: string, value: boolean) => {
  //   await editProduct(id, { isActive: value });
  //   getProducts();
  // };
  return (
    <>
      <TableAdmin
        url_base="slider"
        isExternalUrl={true}
        columns={columns}
        rows={
          sliders
            ? sliders?.map((slider) => {
                return {
                  key: slider?.id?.toString(),
                  name: slider?.name,
                  tag: slider?.tag,
                  updatedAt: slider?.updatedAt?.toString(),
                  isActive: slider?.isActive ? "Si" : "No",
                  actions: "Active",
                };
              })
            : rows
        }
        // handleAction={(id, state) => changeState(id, state)}
      />
    </>
  );
};
