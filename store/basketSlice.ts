import { Basket, ProductCount } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Basket = { items: [], id: 'kjfksjhd' };

const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addInBasket: (state, product: PayloadAction<ProductCount>) => {
      const index = state.items!.findIndex((item) => item.dishe.id === product.payload.dishe.id);
      if (index >= 0) {
        console.log(!state.items[index].count);
        if (state.items[index].count === undefined) state.items[index].count = 0;
        state.items[index].count += product.payload.count ? product.payload.count : 1;
        if (state.items[index].count <= 0) {
          state.items.splice(index, 1);
        }
      } else state.items?.push({ ...product.payload, count: 1 });
    },
  },
});
export const { addInBasket } = basketSlice.actions;
export default basketSlice.reducer;
