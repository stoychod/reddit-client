import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import searchTermReducer from "./searchTermSlice";
import currentSubredditReducer from "./currentSubredditSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchTerm: searchTermReducer,
    currentSubreddit: currentSubredditReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
