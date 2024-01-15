import {configureStore} from '@reduxjs/toolkit';
import categorySlice from '../features/categories/categorySlice';
import discountProductSlice from '../features/discountProducts/discountProductSlice';
// ...

export const store = configureStore({
  reducer: {
    category: categorySlice,
    discountProd: discountProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
