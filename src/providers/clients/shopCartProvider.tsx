import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
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
  const [cart, setCart] = useState<IProducts[] | null>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = localStorage.getItem("cart");
      setCart(storedCart ? JSON.parse(storedCart) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addToCart = useCallback((product: IProducts) => {
    setCart((prevCart) => {
      const newCart = prevCart !== null ? [...prevCart, product] : [product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const removeToCart = useCallback((productId: string) => {
    setCart((prevCart) => {
      const newCart =
        prevCart?.filter((product) => product.id !== productId) || null;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);

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
