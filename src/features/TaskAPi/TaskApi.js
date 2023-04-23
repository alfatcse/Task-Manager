import { apiSlice } from "../api/apiSlice";

export const taskApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getTask:builder.query({
            query:()=>"/tasks"
        })
    })
})
export const {useGetTaskQuery} =taskApi