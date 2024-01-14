/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";
import { ISliders } from "@/types";
import { useDataSlider, useSliders } from "@/hooks";

export const SliderContext = createContext<{
  sliders: ISliders[];
  message: string;
  loading: boolean;
}>({
  sliders: [],
  message: "",
  loading: false,
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

  //   const router = useRouter();

  // const { editProduct } = useProducts();

  // const changeState = async (id: string, value: boolean) => {
  //   await editProduct(id, { isActive: value });
  //   getProducts();
  // };

  return (
    <SliderContext.Provider
      value={{
        sliders: listSliders,
        message: "",
        loading,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useFunctionsSliders = () => useContext(SliderContext);
