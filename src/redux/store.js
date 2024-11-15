import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice";
import UserReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: UserReducer,
  },
});

// store.dispatch(getProduct())
