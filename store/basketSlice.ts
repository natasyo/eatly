import { Basket } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dishe } from '../types/index';

const initialState: Basket = {};

const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addInBasket: (state, product: PayloadAction<Dishe>) => {
      const index = state.items?.findIndex((value) => value.product.id === product.payload.id);
      if (state.items && index && index >= 0) {
        state.items[index].count++;
      } else {
        state.items?.push({ product: product.payload, count: 1 });
      }
    },
  },
});
export const { addInBasket } = basketSlice.actions;
export default basketSlice.reducer;
