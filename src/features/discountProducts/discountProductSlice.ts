import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosClient from '../../service/axios';

interface ICategoryState {
  data: IDiscountProduct[] | null;
  loading: boolean;
  error: string;
}

const initialState: ICategoryState = {
  data: null,
  loading: true,
  error: '',
};

export const fetchDiscountProduct = createAsyncThunk(
  'fetchDiscountProduct',
  async () => {
    const response = await axiosClient.get('getDiscountProducts');
    return response.data.data;
  },
);

const discountProductSlice = createSlice({
  name: 'discountProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDiscountProduct.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      fetchDiscountProduct.fulfilled,
      (state, action: PayloadAction<IDiscountProduct[]>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchDiscountProduct.rejected, state => {
      state.loading = false;
      state.error = 'Error From Api';
    });
  },
});

interface IDiscountProduct {
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

export default discountProductSlice.reducer;
