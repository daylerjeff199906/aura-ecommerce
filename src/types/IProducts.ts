export interface IProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
  discount: number;
  discountPrice: number;
  total: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
