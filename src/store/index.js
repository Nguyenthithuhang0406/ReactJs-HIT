import { configureStore } from "@reduxjs/toolkit";
import GPTReducer from "./quarticequationSlice";
export const store = configureStore({
  reducer: {
    GPTReducer,
  }
})