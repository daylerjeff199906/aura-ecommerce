import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export function useProducts() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null as string | null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  const addProduct = async (product: any) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
      setMessage("Producto agregado correctamente");
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  return { addProduct, loading, message };
}
