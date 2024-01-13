export interface IProducts {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: {
    id: string;
    name: string;
  };
  isOffer: boolean;
  // quantity: number;
  discount: number;
  // discountPrice?: number;
  // total?: number;
  stock: number;
  createdAt: Date;
  // updatedAt: Date;
}
