/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  doc,
  DocumentReference,
  getDoc,
} from "firebase/firestore";
import { useDataCategory } from "./useCategories";
import { IProducts } from "@/types";

const convertDataToIProducts = (data: DocumentData[]) => {
  return data?.map((product) => {
    const {
      name,
      price,
      image,
      description,
      discount,
      stock,
      isOffer,
      createdAt,
    } = product;

    const id = product?.id;

    return {
      id: id,
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

const convertDataToIProduct = (data: DocumentData) => {
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
  } = data;

  const id = data?.id;

  return {
    id: id,
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
};

export function useDataProducts() {
  const { categories, getCategory } = useDataCategory();
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [product, setProduct] = useState<IProducts | null>(null);

  useEffect(() => {
    getCategory();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(convertDataToIProducts(products));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id: string) => {
    try {
      const productRef: DocumentReference<DocumentData> = doc(
        db,
        "products",
        id
      );
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        const product = {
          id: productDoc.id,
          ...productDoc.data(),
        };
        setProduct(convertDataToIProduct(product));
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, products, getProducts, getProductById, product };
}
