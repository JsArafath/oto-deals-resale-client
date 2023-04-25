import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        productPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/addedproducts',
              method: 'POST',
              body: data
            }),
            })
    })
})
export const {useProductPostMutation} = productApi;


