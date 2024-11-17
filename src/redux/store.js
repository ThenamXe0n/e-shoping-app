import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice";
import AuthReducer from "./auth/authSlice";
import ConfigReducer from "./configs/configSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    auth: AuthReducer,
    configs: ConfigReducer,
  },
});
