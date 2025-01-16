import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('basket');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const store = configureStore({
  reducer: { basket: basketSlice },
  // preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
