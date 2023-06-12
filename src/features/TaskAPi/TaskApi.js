import { apiSlice } from "../api/apiSlice";
import { getTasks, pushTask, deleteTask } from "./TaskSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => "/tasks",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            getTasks({
              tasks: result.data,
            })
          );
        } catch (err) {}
      },
    }),
    editStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result=await queryFulfilled;
          console.log(result);
          if(result.data){
            dispatch(pushTask(result.data))
          }
        } catch (err) {}
      },
    }),
    deleteTask:builder.mutation({
      query:({id})=>({
        url:`/tasks/${id}`,
        method:'DELETE'
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result=await queryFulfilled;
          console.log('qn',arg.id);
          if(result){
            dispatch(deleteTask(arg.id))
          }
         
        } catch (err) {}
      }
    })
  }),
});
export const {
  useGetTaskQuery,
  useEditStatusMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useTaskByIdQuery,
  useEditTaskMutation,
} = taskApi;
