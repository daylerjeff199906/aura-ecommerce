import { CardGallery, CardList } from "./(variants)";

interface CardProductsProps {
  variant?: "gallery" | "list";
}

export const CardProducts = ({ variant }: CardProductsProps) => {
  return <>{variant !== "list" ? <CardGallery /> : <CardList />}</>;
};
