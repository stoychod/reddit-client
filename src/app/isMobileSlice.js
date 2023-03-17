import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: false,
  reducers: {
    toggleIsMobile: (state, action) => !state,
  },
});

export const selectIsMobile = (state) => state.isMobile;
export const { toggleIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
