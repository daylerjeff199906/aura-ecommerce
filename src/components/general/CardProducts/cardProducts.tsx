import { CardGallery, CardList } from "./(variants)";
import { IProducts } from "@/types";

interface CardProductsProps {
  variant?: "gallery" | "list" | null;
  data?: IProducts;
}

export const CardProducts = ({ variant, data }: CardProductsProps) => {
  return <>{variant !== "list" ? <CardGallery data={data} /> : <CardList />}</>;
};
