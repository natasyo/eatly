import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './searchSlice';

export const store = configureStore({
  reducer: { search: SearchSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
