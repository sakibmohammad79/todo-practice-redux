import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import { baseApi } from "./api/api";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoSlice,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(baseApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
