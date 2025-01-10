import { Search } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState extends Search {}

const initialState: SearchState = { price: { from: 17, to: 89 } };

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchState: (state, search: PayloadAction<SearchState>) => {
      console.log(search.payload);
      state = search.payload;
      console.log(state);
    },
  },
});
export const { setSearchState } = searchSlice.actions;
export default searchSlice.reducer;
