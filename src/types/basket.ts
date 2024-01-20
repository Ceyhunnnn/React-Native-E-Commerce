export interface IBasketData {
  success: boolean;
  data: {
    _id: string;
    userId: string;
    basketList: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
  message: string;
}
