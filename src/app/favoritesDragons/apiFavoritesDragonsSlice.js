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
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: "Dragons", id: "LIST" }],
    }),
    // getPost: build.query({
    //   query: (id) => `post/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Posts", id }],
    // }),
    // updatePost: build.mutation({
    //   query(data) {
    //     const { id, ...body } = data;
    //     return {
    //       url: `post/${id}`,
    //       method: "PUT",
    //       body,
    //     };
    //   },
    // Invalidates all queries that subscribe to this Post `id` only.
    // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
    //   invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
    // }),
    // deletePost: build.mutation({
    //   query(id) {
    //     return {
    //       url: `post/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   // Invalidates all queries that subscribe to this Post `id` only.
    //   invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    // }),
  }),
});

export const {
  useGetFavoritesDragonsQuery,
  useAddDragonMutation,
  //useGetPostQuery,
  //useUpdatePostMutation,
  //useDeletePostMutation,
} = dragonsApi;
