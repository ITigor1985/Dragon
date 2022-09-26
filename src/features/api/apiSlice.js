import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4" }),
  endpoints: (builder) => ({
    getDragons: builder.query({
      query: () => "/dragons",
    }),
    getDragon: builder.query({
      query: (dragonId) => `/dragons/${dragonId}`,
    }),
  }),
});

export const { useGetDragonQuery, useGetDragonsQuery } = apiSlice;
