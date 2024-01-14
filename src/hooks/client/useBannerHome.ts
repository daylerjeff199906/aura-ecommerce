import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { ISliders } from "@/types";

const convertDataToISliders = (data: DocumentData[]) => {
  return data?.map((slider) => {
    const { image, name, tag, isActive, createdAt } = slider;
    const id = slider?.id;
    
    const fModificacion = slider?.updatedAt?.toDate().toString().slice(0, 15);
    // acortar la fecha de modificacion


    return {
      id: id,
      image,
      name,
      tag,
      isActive,
      createdAt,
      updatedAt: fModificacion,
    };
  });
};

export function useDataSlider() {
  const [loading, setLoading] = useState<boolean>(true);
  const [sliders, setSliders] = useState<ISliders[] | null>(null);

  const getSlider = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "slider"));
      const sliders = querySnapshot.docs.map((doc) => ({
        id: doc.id.toString(),
        ...doc.data(),
      }));
      setSliders(convertDataToISliders(sliders));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, sliders, getSlider };
}
