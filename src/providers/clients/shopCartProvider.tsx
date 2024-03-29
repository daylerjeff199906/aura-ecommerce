"use cliente";
import { createContext, useContext, useEffect, useState } from "react";
import { IProducts } from "@/types";

export const ShopCartContext = createContext<{
  listProducts: IProducts[] | null;
  addToCart: (product: IProducts) => void;
  removeToCart: (product: string) => void;
}>({
  listProducts: [],
  addToCart: () => {},
  removeToCart: () => {},
});

export const ShopCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<IProducts[] | null>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      const data = storedCart ? JSON.parse(storedCart) : null;
      setCart(data);
    }
  }, []);

  const addToCart = (product: IProducts) => {
    const isProductInCart =
      cart !== null && cart.some((p) => p.id === product.id);

    if (isProductInCart) {
      return;
    }

    const newCart = cart !== null ? [...cart, product] : [product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeToCart = (productId: string) => {
    const newCart = cart?.filter((product) => product.id !== productId) || null;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <ShopCartContext.Provider
      value={{
        listProducts: cart,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export const useLogicShopCart = () => useContext(ShopCartContext);
