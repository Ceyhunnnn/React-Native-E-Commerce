import {configureStore} from '@reduxjs/toolkit';
import categorySlice from '../features/categories/categorySlice';
import discountProductSlice from '../features/discountProducts/discountProductSlice';
import userSlice from '../features/user/userSlice';
import basketSlice from '../features/basket/basketSlice';
import loginSlice from '../features/login/loginSlice';
// ...

export const store = configureStore({
  reducer: {
    category: categorySlice,
    discountProd: discountProductSlice,
    user: userSlice,
    basket: basketSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
