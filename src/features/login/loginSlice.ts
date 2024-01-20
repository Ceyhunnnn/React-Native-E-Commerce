import {createSlice} from '@reduxjs/toolkit';

interface ILoginState {
  value: boolean;
}

const initialState: ILoginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setLoginState} = loginSlice.actions;

export default loginSlice.reducer;
