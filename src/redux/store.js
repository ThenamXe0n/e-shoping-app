import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice";
import AuthReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    auth: AuthReducer,
  },
});
