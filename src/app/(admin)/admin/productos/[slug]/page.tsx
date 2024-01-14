/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { FrmProduct } from "./(section)/frmProduct";
import { useFilterFromUrl, useDataProducts } from "@/hooks";
import { UploadImageSection } from "./(section)/ImageSection";

interface props {
  params: {
    slug: string;
  };
}

export default function PageProduct({ params: { slug } }: props) {
  const { getParams } = useFilterFromUrl();
  const { getProductById, product } = useDataProducts();

  const id = getParams("id", "");

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

  return (
    <>
      <h1 className="text-xl font-medium">Productos {slug}</h1>
      <div className="sm:p-4 block sm:flex gap-4">
        <FrmProduct dataProduct={product} />
        {id && <UploadImageSection data={product} />}
      </div>
    </>
  );
}
