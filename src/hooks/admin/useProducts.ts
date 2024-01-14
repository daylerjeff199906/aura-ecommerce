import { useState, useEffect } from "react";
import { db, storage } from "@/firebase/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

  const editProduct = async (productId: string, updatedProduct: any) => {
    setLoading(true);
    try {
      const productDocRef = doc(db, "products", productId);
      await updateDoc(productDocRef, updatedProduct);
      setMessage("Producto editado correctamente");
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  const editProductField = async (
    productId: string,
    fieldToUpdate: string,
    value: any
  ) => {
    setLoading(true);
    try {
      const productDocRef = doc(db, "products", productId);
      await updateDoc(productDocRef, {
        [fieldToUpdate]: value,
      });
      setMessage(`Producto ${fieldToUpdate} editado correctamente a ${value}`);
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    setLoading(true);
    try {
      const storageRef = ref(storage, `aurora-ecommerce/products/${file.name}`);
      await uploadBytes(storageRef, file);

      const url = await getDownloadURL(storageRef);
      setLoading(false);
      return url;
    } catch (e) {
      console.error("Error uploading image: ", e);
      setLoading(false);
      return "";
    }
  };

  return {
    addProduct,
    editProduct,
    editProductField,
    loading,
    message,
    uploadImage,
  };
}
