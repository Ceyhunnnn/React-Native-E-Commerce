import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IBasketData} from '../../types/basket';
import axiosClient from '../../service/axios';

interface IBasketProps {
  data: IBasketData[];
  loading: boolean;
  error: string;
  id: string;
}
interface data {
  data: IBasketData[];
  id: string;
}

const initialState: IBasketProps = {
  data: [],
  loading: true,
  error: '',
  id: '',
};

export const fetchBasket = createAsyncThunk(
  'fetchBasket',
  async (userId: string | undefined) => {
    const response = await axiosClient.get(`getUserBasket/${userId}`);
    return {
      data: response.data.data[0].basketList,
      id: response?.data.data[0]._id,
    };
  },
);

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBasket.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      fetchBasket.fulfilled,
      (state, action: PayloadAction<data>) => {
        state.data = action.payload.data;
        state.id = action.payload.id;
        state.loading = false;
      },
    );
    builder.addCase(fetchBasket.rejected, state => {
      state.loading = false;
      state.error = 'Unable to load basket data';
    });
  },
});

export default basketSlice.reducer;
