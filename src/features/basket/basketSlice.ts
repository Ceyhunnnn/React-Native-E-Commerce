import {createSlice} from '@reduxjs/toolkit';
import {IBasketData} from '../../types/basket';

const initialState: IBasketData = {
  success: false,
  data: [],
  message: 'success',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
