import { createSlice } from "@reduxjs/toolkit";

const mobileWindowWidth = 680;
const initialState = window.innerWidth <= mobileWindowWidth;

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      // ecxpect the payload to be a number
      // representing the current window width
      return action.payload <= mobileWindowWidth;
    },
  },
});

export const selectIsMobile = (state) => state.isMobile;
export const { setIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
