import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogApi;
