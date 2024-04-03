import { createSlice } from "@reduxjs/toolkit";

const sidebarVisibleSlice = createSlice({
  name: "sidebarVisible",
  initialState: false,
  reducers: {
    setSidebarVisible: (state, action) => action.payload,
  },
});

export const selectSidebarVisible = (state) => state.sidebarVisible;
export const { setSidebarVisible } = sidebarVisibleSlice.actions;
export default sidebarVisibleSlice.reducer;
