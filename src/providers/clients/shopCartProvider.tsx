import { createContext, useContext, useEffect, useState } from "react";
// import { useDataProducts } from "@/hooks";
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
  const [cart, setCart] = useState<IProducts[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProducts) => {
    // Añadir el producto al carrito solo si no está ya presente
    if (!cart.some((p) => p.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeToCart = (productId: string) => {
    // Quitar el producto del carrito
    setCart(cart.filter((product) => product.id !== productId));
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
