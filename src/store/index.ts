import { configureStore } from '@reduxjs/toolkit';
import countSlice from './featur/count'; // countSlice'ın default export edilmesi gerekiyor

export const store = configureStore({
  reducer: {
    counter: countSlice, // countSlice'ı bu şekilde kullanabilirsiniz
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;