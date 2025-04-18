import { configureStore } from "@reduxjs/toolkit";
import  { publicationApi } from "../features/api/publicationApi";

export const store =  configureStore({
  reducer:{
    [publicationApi.reducerPath]: publicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicationApi.middleware),
});