import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { ICategory } from "@/types";

const convertDataToICategory = (data: DocumentData[]) => {
  return data?.map((category) => {
    const { name, image } = category;
    const id = category?.id;
    return {
      id: id,
      value: id,
      name,
      image,
    };
  });
};

export function useDataCategory() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  const getCategory = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categories = querySnapshot?.docs?.map((doc) => ({
        id: doc.id.toString(),
        ...doc.data(),
      }));
      setCategories(convertDataToICategory(categories));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, categories, getCategory };
}
