import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dragonsApi = createApi({
  reducerPath: "dragonsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Dragons"],
  endpoints: (build) => ({
    getFavoritesDragons: build.query({
      query: () => "/dragons/favorites",
      providesTags: (result) => {
        return result
          ? [
              ...result.data.map(({ id }) => ({ type: "Dragons", id })),
              { type: "Dragons", id: "LIST" },
            ]
          : [{ type: "Dragons", id: "LIST" }];
      },
    }),
    addDragon: build.mutation({
      query(body) {
        console.log(body);
        return {
          url: `/dragons/add`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Dragons", id: "LIST" }],
    }),
    deleteDragon: build.mutation({
      query(id) {
        return {
          url: `/dragons/remove/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Dragons", id }],
    }),
  }),
});

export const {
  useGetFavoritesDragonsQuery,
  useAddDragonMutation,
  useDeleteDragonMutation,
} = dragonsApi;
