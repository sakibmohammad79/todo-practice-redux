import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      // query: (priority) => ({
      //   url: `/tasks?priority=${priority}`,
      //   method: "GET",
      //   // params: {priority}          another approach
      // }),
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    getSingleTodo: builder.query({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "GET",
        };
      },
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("insider base api => ", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (taskData) => {
        return {
          url: `/task/${taskData.id}`,
          method: "PUT",
          body: taskData.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateSingleTodo: builder.mutation({
      query: (taskData) => {
        return {
          url: `/task/${taskData.id}`,
          method: "PUT",
          body: taskData.datas,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
  useGetSingleTodoQuery,
  useUpdateSingleTodoMutation,
} = baseApi;
