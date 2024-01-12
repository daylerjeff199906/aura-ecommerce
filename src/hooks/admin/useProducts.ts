import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export function useProducts() {
  const addProduct = async (product: any) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { addProduct };
}
