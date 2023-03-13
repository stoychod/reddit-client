import { createSlice } from "@reduxjs/toolkit";

const currentSubredditSlice = createSlice({
  name: "currentSubreddit",
  initialState: "pics",
  reducers: {
    getCurrentSubreddit: (state, action) => state,
    setCurrentSubreddit: (state, action) => action.payload,
  },
});

export const selectCurrntSubreddit = (state) => state.currentSubreddit;
export const { getCurrentSubreddit, setCurrentSubreddit } =
  currentSubredditSlice.actions;
export default currentSubredditSlice.reducer;
