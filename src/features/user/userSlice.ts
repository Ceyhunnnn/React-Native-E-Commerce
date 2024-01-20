import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosClient from '../../service/axios';

interface IUser {
  name: string;
  lastName: string;
  email: string;
  _id: string;
}

interface IUserState {
  data: IUser | null;
  loading: boolean;
  error: string;
}

const initialState: IUserState = {
  data: null,
  loading: true,
  error: '',
};

export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
  const response = await axiosClient.get('me');
  return response.data.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserData.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      fetchUserData.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchUserData.rejected, state => {
      state.loading = false;
      state.error = 'Unable to load userData';
    });
  },
});

export default userSlice.reducer;
