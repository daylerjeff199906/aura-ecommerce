import { useState, useEffect } from "react";
import { db, storage } from "@/firebase/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function useSliders() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null as string | null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  const addSlider = async (slider: any) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "slider"), slider);
      console.log("Document written with ID: ", docRef.id);
      setMessage("Slider agregado correctamente");
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  const updateSlider = async (updateSlider: any, id: string) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "slider", id), updateSlider);
      setMessage("Slider actualizado correctamente");
      setLoading(false);
    } catch (e) {
      console.error("Error updating document: ", e);
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    setLoading(true);
    try {
      const storageRef = ref(storage, `aurora-ecommerce/slider/${file.name}`);
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

  return { loading, message, addSlider, updateSlider, uploadImage };
}
