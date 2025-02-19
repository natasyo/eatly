import { Search } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  data: Search;
}

const initialState: SearchState = { data: {} };

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchState: (state, search: PayloadAction<SearchState>) => {
      state.data = search.payload.data;
    },
  },
});
export const { setSearchState } = searchSlice.actions;
export default searchSlice.reducer;
