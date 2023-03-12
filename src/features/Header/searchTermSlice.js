import { createSlice } from "@reduxjs/toolkit";

const searchTermslice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { setSearchTerm } = searchTermslice.actions;
export default searchTermslice.reducer;
