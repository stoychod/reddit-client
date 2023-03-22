import { createSlice } from "@reduxjs/toolkit";

const sidebarVisibleSlice = createSlice({
  name: "sidebarVisible",
  initialState: false,
  reducers: {
    setSidedbarVisible: (state, action) => action.payload,
  },
});

export const selectSdiebarVisible = (state) => state.sidebarVisible;
export const { setSidedbarVisible } = sidebarVisibleSlice.actions;
export default sidebarVisibleSlice.reducer;
