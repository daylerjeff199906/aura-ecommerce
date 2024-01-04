import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";

export function GetDataSlider() {
  const [loading, setLoading] = useState<boolean>(true);
  const [sliders, setSliders] = useState<DocumentData[] | null>(null);

  const getSlider = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sliders"));
      const sliders = querySnapshot.docs.map((doc) => doc.data());
      setSliders(sliders);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, sliders, getSlider };
}
