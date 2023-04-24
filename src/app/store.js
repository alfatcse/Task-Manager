import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import ProjectSlice from '../features/ProjectApi/ProjectSlice';
import TaskSlice from '../features/TaskAPi/TaskSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    tasks:TaskSlice,
    project:ProjectSlice
  },
  middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
});
