/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  doc,
  DocumentReference,
  getDoc,
  query,
  where,
} from "firebase/firestore";
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
      category,
      isOffer,
      isActive,
      createdAt,
    } = product;

    const id = product?.id;

    return {
      id: id,
      name: name,
      price: price,
      image: image,
      isOffer: isOffer,
      isActive: isActive,
      description: description,
      category: category,
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
    isActive,
    createdAt,
  } = data;

  const id = data?.id;

  return {
    id: id,
    name: name,
    price: price,
    image: image,
    isOffer: isOffer,
    isActive: isActive,
    description: description,
    category: category,
    discount: discount,
    stock: stock,
    createdAt: createdAt,
  };
};

export function useDataProducts() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [productsActive, setProductsActive] = useState<IProducts[] | null>(
    null
  );
  const [product, setProduct] = useState<IProducts | null>(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot?.docs?.map((doc) => ({
        id: doc.id.toString(),
        ...doc.data(),
      }));
      setProducts(convertDataToIProducts(products));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsActive = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "products"), where("isActive", "==", true))
      );
      const products = querySnapshot?.docs?.map((doc) => ({
        id: doc.id.toString(),
        ...doc.data(),
      }));
      setProductsActive(convertDataToIProducts(products));
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

  return {
    loading,
    getProducts,
    getProductsActive,
    products,
    productsActive,
    getProductById,
    product,
  };
}
