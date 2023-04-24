import { apiSlice } from "../api/apiSlice";
import { getTasks } from "./TaskSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => "/tasks",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
            const result=await queryFulfilled;
            dispatch(
                getTasks({
                    tasks:result.data
                })
            )
        } catch (err) {}
      },
    }),
  }),
});
export const { useGetTaskQuery } = taskApi;
