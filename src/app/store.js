import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import searchTermReducer from "../features/Header/searchTermSlice";
import currentSubredditReducer from "../features/SubredditsList/currentSubredditSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchTerm: searchTermReducer,
    currentSubreddit: currentSubredditReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
