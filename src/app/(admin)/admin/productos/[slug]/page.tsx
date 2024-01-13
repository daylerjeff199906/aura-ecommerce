"use client";
import { FrmProduct } from "./(section)/frmProduct";
import { useFilterFromUrl } from "@/hooks";

interface props {
  params: {
    slug: string;
  };
}

export default function PageProduct({ params: { slug } }: props) {
  const { getParams } = useFilterFromUrl();
  const id = getParams("id", "");


  return (
    <>
      <h1 className="text-xl font-medium">Productos {slug}</h1>
      <div className="p-4">
        <FrmProduct id={id} />
      </div>
    </>
  );
}
