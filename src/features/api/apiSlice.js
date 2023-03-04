import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.reddit.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (subReddit) => `/r/${subReddit}.json`,
      transformResponse: (response) => response.data.children,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
