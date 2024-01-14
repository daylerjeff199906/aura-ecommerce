import { useState } from "react";
import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  doc,
  DocumentReference,
  getDoc,
} from "firebase/firestore";
import { ICategory } from "@/types";

const convertDataToICategory = (data: DocumentData[]) => {
  return data?.map((category) => {
    const { name, image, isActive } = category;
    const id = category?.id;
    return {
      id: id,
      value: id,
      isActive,
      name,
      image,
    };
  });
};

const convertDataToICategoryById = (data: DocumentData) => {
  const { name, image, isActive } = data;
  const id = data?.id;
  return {
    id: id,
    value: id,
    isActive,
    name,
    image,
  };
};

export function useDataCategory() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [category, setCategory] = useState<ICategory | null>(null);

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

  const getCategoryById = async (id: string) => {
    setLoading(true);
    try {
      const categoryRef: DocumentReference<DocumentData> = doc(
        db,
        "categories",
        id
      );
      const categoryDoc = await getDoc(categoryRef);

      if (!categoryDoc.exists()) {
        console.log("No such document!");
      } else {
        const category = categoryDoc.data();
        setLoading(false);
        setCategory(convertDataToICategoryById(category));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, categories, getCategory, category, getCategoryById };
}
