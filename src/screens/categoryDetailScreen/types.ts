export interface IProductDetailData {
  _id: string;
  name: string;
  description: string;
  cover_photo: string;
  price: number;
  stock: number;
  discount: number;
  colors: Color[];
  photos: any[];
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  quantity: number;
}
interface Color {
  name: string;
  id: string;
}

export interface IProductId {
  id: string | undefined;
}
