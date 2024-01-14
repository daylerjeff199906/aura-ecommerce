import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import auth from "@/firebase/auth";

export const SliderContext = createContext<{
  message: string;
}>({
  message: "",
});

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();

  return (
    <SliderContext.Provider
      value={{
        message: "",
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useFunctionsSliders = () => useContext(SliderContext);
