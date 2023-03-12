import { createSlice } from "@reduxjs/toolkit";

const searchTermslice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, payload) => payload.action,
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { setSearchTerm } = searchTermslice.actions;
export default searchTermslice.reducer;
