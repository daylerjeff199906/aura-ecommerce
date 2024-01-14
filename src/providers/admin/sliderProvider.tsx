/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext, createContext } from "react";
import { ISliders } from "@/types";
import { useDataSlider, useSliders } from "@/hooks";

export const SliderContext = createContext<{
  sliders: ISliders[];
  message: string | null;
  loading: boolean;
  addSlider: (data: any) => void;
  updateSlider: (data: any, id: string) => void;
  editSliderField: (id: string, field: string, value: any) => void;
  uploadImage: (file: File) => any;
  deleteImage: (url: string) => void;
}>({
  sliders: [],
  message: "",
  loading: false,
  addSlider: () => {},
  updateSlider: () => {},
  editSliderField: () => {},
  uploadImage: () => {},
  deleteImage: () => {},
});

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const { getSlider, sliders } = useDataSlider();
  const {
    addSlider,
    updateSlider,
    uploadImage,
    deleteImage,
    editSliderField,
    loading,
    message,
  } = useSliders();

  const [listSliders, setListSliders] = useState<ISliders[]>([]);

  useEffect(() => {
    getSlider();
  }, [message]);

  useEffect(() => {
    if (sliders) {
      setListSliders(sliders);
    }
  }, [sliders]);

  return (
    <SliderContext.Provider
      value={{
        sliders: listSliders,
        message,
        loading,
        addSlider,
        updateSlider,
        editSliderField,
        uploadImage,
        deleteImage,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useFunctionsSliders = () => useContext(SliderContext);
