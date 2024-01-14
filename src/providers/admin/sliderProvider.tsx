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
  uploadImage: (file: File) => any;
}>({
  sliders: [],
  message: "",
  loading: false,
  addSlider: () => {},
  updateSlider: () => {},
  uploadImage: () => {},
});

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const { getSlider, sliders } = useDataSlider();
  const { addSlider, updateSlider, uploadImage, loading, message } =
    useSliders();

  const [listSliders, setListSliders] = useState<ISliders[]>([]);

  useEffect(() => {
    getSlider();
  }, []);

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
        uploadImage,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useFunctionsSliders = () => useContext(SliderContext);
