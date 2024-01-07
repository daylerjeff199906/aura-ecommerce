import { createContext, useContext, useEffect, useState } from "react";
import { IProducts } from "@/types";
import { localStorageService } from "@/hooks";

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
  const [cart, setCart] = useState<IProducts[] | null>(() => {
    const storedCart = localStorageService.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = localStorageService.getItem("cart");
      setCart(storedCart ? JSON.parse(storedCart) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addToCart = (product: IProducts) => {
    const isProductInCart =
      cart !== null && cart.some((p) => p.id === product.id);

    if (isProductInCart) {
      return;
    }

    const newCart = cart !== null ? [...cart, product] : [product];
    setCart(newCart);
    localStorageService.setItem("cart", JSON.stringify(newCart));
  };

  const removeToCart = (productId: string) => {
    const newCart = cart?.filter((product) => product.id !== productId) || null;
    setCart(newCart);
    localStorageService.setItem("cart", JSON.stringify(newCart));
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
