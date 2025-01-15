import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
function preloaded() {
  const serializebleState = localStorage.getItem('basket');
  console.log(serializebleState);
  console.log('preloaded');
  return undefined;
}

export const store = configureStore({
  reducer: { basket: basketSlice },
  preloadedState: preloaded(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(basketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
