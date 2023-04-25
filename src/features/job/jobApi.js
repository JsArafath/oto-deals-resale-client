import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        jobPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/job',
              method: 'POST',
              body: data
            }),
            })
    })
})
export const {useJobPostMutation} = jobApi;


