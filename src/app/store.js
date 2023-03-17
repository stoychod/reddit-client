import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import searchTermReducer from "./searchTermSlice";
import currentSubredditReducer from "./currentSubredditSlice";
import isMobileReducer from "./isMobileSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchTerm: searchTermReducer,
    currentSubreddit: currentSubredditReducer,
    isMobile: isMobileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
