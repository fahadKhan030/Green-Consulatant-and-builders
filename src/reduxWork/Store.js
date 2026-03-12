import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reduxWork/feature/counterSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});