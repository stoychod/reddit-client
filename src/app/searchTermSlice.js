import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
