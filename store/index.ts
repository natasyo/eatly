import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
import { loadState, saveState } from './localStorage';
const preloadedState = loadState();

export const store = configureStore({
  reducer: combineReducers({ basket: basketSlice }),
  preloadedState,
});
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    saveState(store.getState().basket);
  });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
