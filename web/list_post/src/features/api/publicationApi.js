import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicationApi = createApi({
  reducerPath:'publicationApi',
  baseQuery:fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1"}),
  tagTypes:["Publication"],
  endpoints: (builder)=>({
    getPublications: builder.query({
      query: () => "/publication",
      transformResponse: (response) => response.data, 
      providesTags:["Publication"]
    }),

    createPublication:builder.mutation({
      query:(newPublication) =>({
        url:"/publication",
        method: "POST",
        body:newPublication,
      }),
      invalidatesTags:["Publication"]
    }),

    deletePublication:builder.mutation({
      query:(id) =>({
        url:`/publication/${id}`,
        method:"DELETE"
      }),
      invalidatesTags:["Publication"]
    }),
  }),
})

export const { 
  useGetPublicationsQuery,
  useCreatePublicationMutation,
  useDeletePublicationMutation
} = publicationApi;