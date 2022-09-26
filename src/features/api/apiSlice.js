import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4" }),
  endpoints: (builder) => ({
    getDragon: builder.query({
      query: () => "/dragons/5e9d058759b1ff74a7ad5f8f",
    }),
  }),
});

export const { useGetDragonQuery } = apiSlice;
