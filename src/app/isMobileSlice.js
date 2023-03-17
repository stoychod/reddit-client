import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: false,
  reducers: {
    setIsMobile: (state, action) => action.payload,
  },
});

export const selectIsMobile = (state) => state.isMobile;
export const { setIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
