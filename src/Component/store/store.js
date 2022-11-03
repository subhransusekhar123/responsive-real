import { configureStore } from "@reduxjs/toolkit";
import estateReducer from "../slice/estateSlice";

export const store = configureStore({
  reducer: estateReducer,
});
