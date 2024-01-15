import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosClient from '../../service/api';

interface ICategory {
  name: string;
  _id: string;
}

interface ICategoryState {
  data: ICategory[] | null;
  loading: boolean;
  error: string;
}

const initialState: ICategoryState = {
  data: null,
  loading: true,
  error: '',
};

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
  const response = await axiosClient.get('categories');
  return response.data.data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategory.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      fetchCategory.fulfilled,
      (state, action: PayloadAction<ICategory[]>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchCategory.rejected, state => {
      state.loading = false;
      state.error = 'Error From Api';
    });
  },
});

export default categorySlice.reducer;
