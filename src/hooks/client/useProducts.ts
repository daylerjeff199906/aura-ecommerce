import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { IProducts } from "@/types";

const convertDataToIProducts = (data: DocumentData[]) => {
  return data?.map((product) => {
    const {
      name,
      price,
      image,
      description,
      category,
      discount,
      stock,
      isOffer,
      createdAt,
    } = product;
    return {
      name: name,
      price: price,
      image: image,
      isOffer: isOffer,
      description: description,
      category: "",
      discount: discount,
      stock: stock,
      createdAt: createdAt,
    };
  });
};

export function useDataProducts() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProducts[] | null>(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot?.docs?.map((doc) => doc.data());
      setProducts(convertDataToIProducts(products));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, products, getProducts };
}
